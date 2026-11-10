export interface Profile {
  name: string;
  brandName: string;
  tagline: string;
  slogan: string;
  subSlogan: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  whatsappMessage: string;
  avatarUrl: string;
  logoUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
  availability: string;
  motivationLetter: string;
}

export type ProjectStatus = 'en_cours' | 'conception' | 'termine' | 'en_ligne';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'web' | 'mobile' | 'ai' | 'electronique' | 'education';
  shortDescription: string;
  fullDescription: string;
  problemStatement: string;
  proposedSolution: string;
  features: string[];
  technologies: string[];
  status: ProjectStatus;
  statusLabel: string;
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  order: number;
}

export interface SkillItem {
  id: string;
  name: string;
  description: string;
  badge?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: 'Cpu' | 'Code' | 'Zap' | 'Shield' | 'Terminal' | 'Server';
  description: string;
  skills: SkillItem[];
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  verified: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  year: string;
  details: string;
  honestNote?: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  iconName: string;
  deliverables: string[];
  turnaroundTime?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  serviceInterest?: string;
  message: string;
  createdAt: string;
  isRead: boolean;
}

export interface QuoteRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  serviceTitle: string;
  projectBudget: string;
  timeline: string;
  description: string;
  createdAt: string;
  status: 'nouveau' | 'en_cours' | 'termine';
}

export interface SiteStats {
  totalViews: number;
  cvDownloads: number;
  projectViews: Record<string, number>;
  messagesCount: number;
  quotesCount: number;
}
