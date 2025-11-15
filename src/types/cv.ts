export interface PersonalInfo {
  name: string
  title: string
  phone: string
  email: string
  wechat: string
  github: string
  location: string | null
}

export interface EducationItem {
  institution: string
  school: string
  degree: string
  major: string
  start: string
  end: string | null
  courses: string[]
  awards: string[]
}

export interface ExperienceItem {
  company: string
  department: string
  title: string
  start: string
  end: string | null
  responsibilities: string[]
  achievements: string[]
}

export interface ProjectItem {
  name: string
  company: string
  start: string
  end: string
  description: string
  highlights: string[]
  tech_stack: string[]
}

export interface CVData {
  personal_info: PersonalInfo
  education: EducationItem[]
  experience: ExperienceItem[]
  projects: ProjectItem[]
  other: {
    skills: string[]
    hobbies: string[]
  }
}