import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const sizes = {
  width: 320,
  height: 320,
}

export const HeroCanvas = () => {
  const mountRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#020617')

    const camera = new THREE.PerspectiveCamera(38, sizes.width / sizes.height, 0.1, 100)
    camera.position.set(0, 0, 9)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mountRef.current.appendChild(renderer.domElement)

    const ambient = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambient)

    const dirLight = new THREE.DirectionalLight(0x93c5fd, 1.1)
    dirLight.position.set(4, 6, 4)
    scene.add(dirLight)

    const backLight = new THREE.PointLight(0x6366f1, 1.4, 25)
    backLight.position.set(-4, -6, -3)
    scene.add(backLight)

    const primaryMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#6366f1'),
      emissive: new THREE.Color('#4f46e5'),
      emissiveIntensity: 0.8,
      metalness: 0.4,
      roughness: 0.25,
    })
    const accentMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#22d3ee'),
      emissive: new THREE.Color('#22d3ee'),
      emissiveIntensity: 0.7,
      metalness: 0.35,
      roughness: 0.18,
    })
    const dockerMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#38bdf8'),
      emissive: new THREE.Color('#0ea5e9'),
      emissiveIntensity: 0.6,
      metalness: 0.4,
      roughness: 0.15,
    })
    const aiMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#a855f7'),
      emissive: new THREE.Color('#c084fc'),
      emissiveIntensity: 0.7,
      metalness: 0.45,
      roughness: 0.22,
    })

    const core = new THREE.Mesh(new THREE.TorusKnotGeometry(1.4, 0.4, 160, 32), primaryMaterial)
    scene.add(core)

    const reactOrb = new THREE.Mesh(new THREE.IcosahedronGeometry(0.55, 1), accentMaterial)
    const nodeOrb = new THREE.Mesh(new THREE.DodecahedronGeometry(0.55, 0), primaryMaterial)
    const dockerOrb = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 32), dockerMaterial)
    const aiOrb = new THREE.Mesh(new THREE.OctahedronGeometry(0.5, 0), aiMaterial)

    const orbGroup = new THREE.Group()
    orbGroup.add(reactOrb, nodeOrb, dockerOrb, aiOrb)
    scene.add(orbGroup)

    const ringGeometry = new THREE.RingGeometry(2.4, 2.8, 64)
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x4f46e5,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.22,
    })
    const ring = new THREE.Mesh(ringGeometry, ringMaterial)
    ring.rotation.x = Math.PI / 2.2
    scene.add(ring)

    let frameId = 0
    const clock = new THREE.Clock()

    const animate = () => {
      const elapsed = clock.getElapsedTime()

      core.rotation.x = elapsed * 0.28
      core.rotation.y = elapsed * 0.35

      const radius = 3.6
      reactOrb.position.set(
        Math.cos(elapsed * 0.6) * radius,
        Math.sin(elapsed * 0.6) * 0.7,
        Math.sin(elapsed * 0.6) * 0.8,
      )
      nodeOrb.position.set(
        Math.cos(elapsed * 0.55 + Math.PI / 2) * (radius - 0.2),
        Math.sin(elapsed * 0.7 + Math.PI / 4) * 0.9,
        Math.cos(elapsed * 0.55) * 0.8,
      )
      dockerOrb.position.set(
        Math.cos(elapsed * 0.5 + Math.PI) * (radius + 0.15),
        Math.sin(elapsed * 0.65 + Math.PI / 3) * 0.8,
        Math.sin(elapsed * 0.5 + Math.PI) * 0.9,
      )
      aiOrb.position.set(
        Math.cos(elapsed * 0.7 + Math.PI * 1.5) * (radius - 0.4),
        Math.sin(elapsed * 0.8 + Math.PI / 5) * 0.9,
        Math.cos(elapsed * 0.7 + Math.PI / 2) * 0.7,
      )

      orbGroup.rotation.y = elapsed * 0.12
      orbGroup.rotation.x = Math.sin(elapsed * 0.2) * 0.25

      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      if (!mountRef.current) return
      const rect = mountRef.current.getBoundingClientRect()
      const width = rect.width || sizes.width
      const height = rect.height || sizes.height
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', handleResize)
      mountRef.current?.removeChild(renderer.domElement)
      renderer.dispose()
      core.geometry.dispose()
      reactOrb.geometry.dispose()
      nodeOrb.geometry.dispose()
      dockerOrb.geometry.dispose()
      aiOrb.geometry.dispose()
      primaryMaterial.dispose()
      accentMaterial.dispose()
      dockerMaterial.dispose()
      aiMaterial.dispose()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="relative h-64 w-64 overflow-hidden rounded-[2.5rem] border border-slate-700/70 bg-slate-950/80 shadow-2xl shadow-indigo-500/30 backdrop-blur-2xl sm:h-72 sm:w-72 lg:h-80 lg:w-80"
    >
      <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-indigo-500/40 via-sky-500/30 to-fuchsia-500/40 opacity-60 blur-2xl" />
    </div>
  )
}

