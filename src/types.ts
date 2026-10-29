export interface Project {
  id: string;
  title: string;
  category: 'AI & Full-Stack' | 'E-Commerce & UX' | 'Brand & Motion' | 'All';
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  metrics?: string;
  client?: string;
  year?: string;
  liveUrl?: string;
  githubUrl?: string;
  features?: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  categoryCode: string;
  title: string;
  description: string;
  tags: string[];
  iconType: string;
  whatsappMessage: string;
  deliverables?: string[];
}

export interface PillarItem {
  id: string;
  title: string;
  description: string;
  iconType: 'devices' | 'ai' | 'speed' | 'palette';
}

export interface StatItem {
  value: string;
  label: string;
  subtitle: string;
  iconName: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

export type PageId = 'home' | 'about-and-skills' | 'services-and-solutions' | 'projects-and-portfolio' | 'contact';

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  status: string;
  iconName: string;
  accentColor: string;
}

export interface SkillItem {
  name: string;
  percentage: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  avgScore: string;
  description: string;
  iconName: string;
  accentColor: string;
  barColor: string;
  skills: SkillItem[];
  badges: string[];
}

export interface ValueProposition {
  id: string;
  title: string;
  description: string;
  iconName: string;
  doubleWidth?: boolean;
}
