export interface PersonalData {
  name: string;
  title: string;
  email: string;
  phone?: string;
  location: string;
  github: string;
  linkedin: string;
  nationality: string;
}

export interface ProfessionalProfile {
  summary: string;
}

export interface WorkExperience {
  position: string;
  company: string;
  period: string;
  location: string;
  client?: string;
  tasks: string[];
  technologies?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location:string;
  focus?: string;
}

export interface Skill {
  category: string;
  skills: string[];
}

export interface Project {
  name: string;
  url?: string;
  description: string;
  highlights: string[];
}

export interface Language {
  name: string;
  level: string;
  details: string[];
  note?: string;
}

export interface CvData {
  personalData: PersonalData;
  professionalProfile: ProfessionalProfile;
  workExperience: WorkExperience[];
  education: Education[];
  technicalSkills: Skill[];
  projects: Project[];
  continuousLearning: string[];
  languages: Language[];
  additionalInfo: string[];
}
