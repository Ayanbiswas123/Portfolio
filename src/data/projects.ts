export type Project = {
  id: string
  title: string
  description: string
  image: string
  techStack: string[]
  github: string
  demo: string
  category: 'Full Stack' | 'DevOps' | 'Tools'
}

export const projects: Project[] = [
  {
    id: 'lms-platform',
    title: 'Modern LMS Platform',
    description:
      'Full‑stack learning management system with role‑based dashboards, real‑time progress tracking, secure authentication, and content management.',
    image: '/images/lms-placeholder.png',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind'],
    github: 'https://github.com/',
    demo: 'https://example.com',
    category: 'Full Stack',
  },
  {
    id: 'leaflet-map',
    title: 'Leaflet Map Area Selection Tool',
    description:
      'Interactive map tool for drawing, editing, and exporting custom geo‑spatial regions, built for data‑driven workflows.',
    image: '/images/leaflet-placeholder.png',
    techStack: ['React', 'Leaflet', 'TypeScript', 'GeoJSON'],
    github: 'https://github.com/',
    demo: 'https://example.com',
    category: 'Tools',
  },
  {
    id: 'secure-auth',
    title: 'Secure Authentication System',
    description:
      'Authentication service with JWT, refresh tokens, password reset flows, and hardened security best practices.',
    image: '/images/auth-placeholder.png',
    techStack: ['Node.js', 'Express', 'MongoDB', 'JWT', 'BCrypt'],
    github: 'https://github.com/',
    demo: 'https://example.com',
    category: 'Full Stack',
  },
  {
    id: 'devops-pipeline',
    title: 'DevOps Deployment Pipeline',
    description:
      'Containerized CI/CD pipeline with automated testing, image builds, and blue‑green deployments to a cloud environment.',
    image: '/images/devops-placeholder.png',
    techStack: ['Docker', 'GitHub Actions', 'Node.js', 'NGINX'],
    github: 'https://github.com/',
    demo: 'https://example.com',
    category: 'DevOps',
  },
]

