import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { skillsOrbitData, type OrbitSkill } from '../../data/skillsOrbit'

type SkillsOrbitProps = {
  onHover?: (skill: OrbitSkill | null) => void
  className?: string
}

export const SkillsOrbit: React.FC<SkillsOrbitProps> = ({ onHover, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState<OrbitSkill | null>(null)
  const hoveredRef = useRef<OrbitSkill | null>(null)
  const onHoverRef = useRef(onHover)
  onHoverRef.current = onHover

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const width = container.clientWidth
    const height = Math.min(container.clientHeight, 520)
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#030712')
    scene.fog = new THREE.FogExp2(0x030712, 0.04)

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100)
    camera.position.set(0, 2, 12)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 0.9
    renderer.outputColorSpace = THREE.SRGBColorSpace
    container.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.minDistance = 8
    controls.maxDistance = 22
    controls.maxPolarAngle = Math.PI * 0.85
    controls.target.set(0, 0, 0)

    const ambient = new THREE.AmbientLight(0xffffff, 0.4)
    scene.add(ambient)
    const dirLight = new THREE.DirectionalLight(0x93c5fd, 0.8)
    dirLight.position.set(5, 8, 5)
    scene.add(dirLight)
    const pointLight = new THREE.PointLight(0x6366f1, 2, 30)
    pointLight.position.set(0, 0, 0)
    scene.add(pointLight)

    // Central sun / galaxy core
    const sunGeometry = new THREE.SphereGeometry(0.85, 64, 64)
    const sunMaterial = new THREE.MeshStandardMaterial({
      color: 0xfbbf24,
      emissive: 0xfbbf24,
      emissiveIntensity: 1.2,
      metalness: 0.1,
      roughness: 0.2,
    })
    const sun = new THREE.Mesh(sunGeometry, sunMaterial)
    scene.add(sun)

    const coreGlow = new THREE.Mesh(
      new THREE.SphereGeometry(1.2, 32, 32),
      new THREE.MeshBasicMaterial({
        color: 0xf59e0b,
        transparent: true,
        opacity: 0.25,
      }),
    )
    scene.add(coreGlow)

    const orbitRadii = [2.8, 3.8, 4.8, 5.6]
    const orbitColors = [0x22d3ee, 0x6366f1, 0x34d399, 0xc084fc]
    orbitRadii.forEach((radius, i) => {
      const curve = new THREE.EllipseCurve(0, 0, radius, radius, 0, Math.PI * 2, false, 0)
      const points = curve.getPoints(80)
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      const material = new THREE.LineBasicMaterial({
        color: orbitColors[i],
        transparent: true,
        opacity: 0.2,
      })
      const orbitLine = new THREE.Line(geometry, material)
      orbitLine.rotation.x = Math.PI / 2
      scene.add(orbitLine)
    })

    const planetMeshes: THREE.Mesh[] = []
    skillsOrbitData.forEach((skill) => {
      const geometry = new THREE.SphereGeometry(skill.size, 24, 24)
      const material = new THREE.MeshStandardMaterial({
        color: new THREE.Color(skill.color),
        emissive: new THREE.Color(skill.color),
        emissiveIntensity: 0.4,
        metalness: 0.3,
        roughness: 0.4,
      })
      const mesh = new THREE.Mesh(geometry, material)
      ;(mesh as THREE.Mesh & { userData: { skill: OrbitSkill } }).userData = { skill }
      planetMeshes.push(mesh)
      scene.add(mesh)
    })

    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    const onPointerMove = (e: MouseEvent) => {
      if (!container) return
      const rect = container.getBoundingClientRect()
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
    }

    container.addEventListener('pointermove', onPointerMove)

    const clock = new THREE.Clock()
    let frameId = 0

    const animate = () => {
      const elapsed = clock.getElapsedTime()
      controls.update()

      sun.rotation.y += 0.004
      coreGlow.rotation.y += 0.002

      skillsOrbitData.forEach((skill, i) => {
        const mesh = planetMeshes[i]
        const angle = skill.angleOffset + elapsed * skill.orbitSpeed
        mesh.position.x = Math.cos(angle) * skill.orbitRadius
        mesh.position.z = Math.sin(angle) * skill.orbitRadius
        mesh.position.y = Math.sin(elapsed * 0.3 + i * 0.5) * 0.15
        mesh.rotation.y += 0.01
      })

      raycaster.setFromCamera(mouse, camera)
      const intersects = raycaster.intersectObjects(planetMeshes)
      if (intersects.length > 0) {
        const obj = intersects[0].object as THREE.Mesh & { userData: { skill: OrbitSkill } }
        const skill = obj.userData?.skill
        if (skill && skill !== hoveredRef.current) {
          hoveredRef.current = skill
          setHovered(skill)
          onHoverRef.current?.(skill)
        }
      } else if (hoveredRef.current) {
        hoveredRef.current = null
        setHovered(null)
        onHoverRef.current?.(null)
      }

      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => {
      if (!container) return
      const w = container.clientWidth
      const h = Math.min(container.clientHeight, 520)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', handleResize)
    const ro = new ResizeObserver(handleResize)
    ro.observe(container)

    return () => {
      cancelAnimationFrame(frameId)
      container.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('resize', handleResize)
      ro.disconnect()
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
      renderer.dispose()
      sunGeometry.dispose()
      sunMaterial.dispose()
      planetMeshes.forEach((m) => {
        m.geometry.dispose()
        ;(m.material as THREE.Material).dispose()
      })
    }
  }, [])

  return (
    <div className={`relative w-full overflow-hidden rounded-2xl ${className}`} style={{ minHeight: 420 }}>
      <div ref={containerRef} className="absolute inset-0" aria-hidden="true" />
      {hovered && (
        <div
          className="pointer-events-none absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-xl border border-slate-700/80 bg-slate-950/95 px-4 py-2 text-center shadow-xl backdrop-blur-xl"
          style={{ whiteSpace: 'nowrap' }}
        >
          <p className="text-sm font-semibold text-slate-100">{hovered.name}</p>
          <p className="text-xs text-slate-400">{hovered.category} · {hovered.level}%</p>
        </div>
      )}
      <p className="absolute right-3 top-3 z-10 text-[10px] text-slate-500">Drag to rotate · Scroll to zoom</p>
    </div>
  )
}
