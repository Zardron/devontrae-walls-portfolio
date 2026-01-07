export interface Experience {
  company: string
  position: string
  period: string
  description: string[]
  technologies?: string[]
}

export interface Skill {
  category: string
  items: string[]
}

export interface Project {
  title: string
  description: string
  features?: string[]
  technologies: string[]
}

