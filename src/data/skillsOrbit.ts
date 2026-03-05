export type OrbitSkill = {
  name: string
  level: number
  category: string
  orbitRadius: number
  orbitSpeed: number
  angleOffset: number
  color: string
  size: number
}

const FRONTEND = {
  radius: 2.8,
  speed: 0.15,
  color: '#22d3ee',
}
const BACKEND = {
  radius: 3.8,
  speed: -0.12,
  color: '#6366f1',
}
const DEVOPS = {
  radius: 4.8,
  speed: 0.1,
  color: '#34d399',
}
const LEARNING = {
  radius: 5.6,
  speed: -0.08,
  color: '#c084fc',
}

function sizeFromLevel(level: number): number {
  return 0.12 + (level / 100) * 0.2
}

export const skillsOrbitData: OrbitSkill[] = [
  // Frontend
  { name: 'React', level: 90, category: 'Frontend', orbitRadius: FRONTEND.radius, orbitSpeed: FRONTEND.speed, angleOffset: 0, color: FRONTEND.color, size: sizeFromLevel(90) },
  { name: 'JavaScript', level: 88, category: 'Frontend', orbitRadius: FRONTEND.radius, orbitSpeed: FRONTEND.speed, angleOffset: Math.PI * 0.4, color: FRONTEND.color, size: sizeFromLevel(88) },
  { name: 'TypeScript', level: 82, category: 'Frontend', orbitRadius: FRONTEND.radius, orbitSpeed: FRONTEND.speed, angleOffset: Math.PI * 0.8, color: FRONTEND.color, size: sizeFromLevel(82) },
  { name: 'Tailwind CSS', level: 86, category: 'Frontend', orbitRadius: FRONTEND.radius, orbitSpeed: FRONTEND.speed, angleOffset: Math.PI * 1.2, color: FRONTEND.color, size: sizeFromLevel(86) },
  { name: 'HTML', level: 92, category: 'Frontend', orbitRadius: FRONTEND.radius, orbitSpeed: FRONTEND.speed, angleOffset: Math.PI * 1.6, color: FRONTEND.color, size: sizeFromLevel(92) },
  { name: 'CSS', level: 88, category: 'Frontend', orbitRadius: FRONTEND.radius, orbitSpeed: FRONTEND.speed, angleOffset: Math.PI * 2, color: FRONTEND.color, size: sizeFromLevel(88) },
  // Backend
  { name: 'Node.js', level: 88, category: 'Backend', orbitRadius: BACKEND.radius, orbitSpeed: BACKEND.speed, angleOffset: 0, color: BACKEND.color, size: sizeFromLevel(88) },
  { name: 'Express.js', level: 86, category: 'Backend', orbitRadius: BACKEND.radius, orbitSpeed: BACKEND.speed, angleOffset: Math.PI * 0.5, color: BACKEND.color, size: sizeFromLevel(86) },
  { name: 'MongoDB', level: 84, category: 'Backend', orbitRadius: BACKEND.radius, orbitSpeed: BACKEND.speed, angleOffset: Math.PI, color: BACKEND.color, size: sizeFromLevel(84) },
  { name: 'Mongoose', level: 80, category: 'Backend', orbitRadius: BACKEND.radius, orbitSpeed: BACKEND.speed, angleOffset: Math.PI * 1.5, color: BACKEND.color, size: sizeFromLevel(80) },
  { name: 'REST APIs', level: 90, category: 'Backend', orbitRadius: BACKEND.radius, orbitSpeed: BACKEND.speed, angleOffset: Math.PI * 2, color: BACKEND.color, size: sizeFromLevel(90) },
  // DevOps
  { name: 'Docker', level: 82, category: 'DevOps & Tools', orbitRadius: DEVOPS.radius, orbitSpeed: DEVOPS.speed, angleOffset: 0, color: DEVOPS.color, size: sizeFromLevel(82) },
  { name: 'Git & GitHub', level: 90, category: 'DevOps & Tools', orbitRadius: DEVOPS.radius, orbitSpeed: DEVOPS.speed, angleOffset: Math.PI * 0.6, color: DEVOPS.color, size: sizeFromLevel(90) },
  { name: 'CI/CD', level: 80, category: 'DevOps & Tools', orbitRadius: DEVOPS.radius, orbitSpeed: DEVOPS.speed, angleOffset: Math.PI * 1.2, color: DEVOPS.color, size: sizeFromLevel(80) },
  { name: 'Linux', level: 78, category: 'DevOps & Tools', orbitRadius: DEVOPS.radius, orbitSpeed: DEVOPS.speed, angleOffset: Math.PI * 1.8, color: DEVOPS.color, size: sizeFromLevel(78) },
  { name: 'Shell scripting', level: 76, category: 'DevOps & Tools', orbitRadius: DEVOPS.radius, orbitSpeed: DEVOPS.speed, angleOffset: Math.PI * 2.4, color: DEVOPS.color, size: sizeFromLevel(76) },
  // Learning
  { name: 'AI', level: 65, category: 'Learning', orbitRadius: LEARNING.radius, orbitSpeed: LEARNING.speed, angleOffset: 0, color: LEARNING.color, size: sizeFromLevel(65) },
  { name: 'Machine Learning', level: 60, category: 'Learning', orbitRadius: LEARNING.radius, orbitSpeed: LEARNING.speed, angleOffset: Math.PI * 0.66, color: LEARNING.color, size: sizeFromLevel(60) },
  { name: 'Cloud Computing', level: 58, category: 'Learning', orbitRadius: LEARNING.radius, orbitSpeed: LEARNING.speed, angleOffset: Math.PI * 1.33, color: LEARNING.color, size: sizeFromLevel(58) },
]
