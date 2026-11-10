import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Profile,
  Project,
  SkillCategory,
  Experience,
  EducationItem,
  Service,
  ContactMessage,
  QuoteRequest,
  SiteStats
} from '../types';
import {
  initialProfile,
  initialProjects,
  initialSkillCategories,
  initialExperiences,
  initialEducation,
  initialServices,
  initialStats
} from '../data/initialData';

interface DataContextType {
  profile: Profile;
  updateProfile: (updated: Partial<Profile>) => void;
  projects: Project[];
  addProject: (project: Omit<Project, 'id'>) => void;
  updateProject: (id: string, updated: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  skillCategories: SkillCategory[];
  updateSkillCategories: (categories: SkillCategory[]) => void;
  experiences: Experience[];
  addExperience: (exp: Omit<Experience, 'id'>) => void;
  updateExperience: (id: string, updated: Partial<Experience>) => void;
  deleteExperience: (id: string) => void;
  education: EducationItem[];
  updateEducation: (edu: EducationItem[]) => void;
  services: Service[];
  updateService: (id: string, updated: Partial<Service>) => void;
  messages: ContactMessage[];
  addMessage: (msg: Omit<ContactMessage, 'id' | 'createdAt' | 'isRead'>) => boolean;
  markMessageRead: (id: string, isRead: boolean) => void;
  deleteMessage: (id: string) => void;
  quotes: QuoteRequest[];
  addQuoteRequest: (quote: Omit<QuoteRequest, 'id' | 'createdAt' | 'status'>) => boolean;
  updateQuoteStatus: (id: string, status: QuoteRequest['status']) => void;
  deleteQuoteRequest: (id: string) => void;
  stats: SiteStats;
  recordProjectView: (projectId: string) => void;
  recordCvDownload: () => void;
  isAdminAuthenticated: boolean;
  loginAdmin: (password: string) => boolean;
  logoutAdmin: () => void;
  changeAdminPassword: (oldPass: string, newPass: string) => boolean;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  selectedProject: Project | null;
  openProjectDetail: (project: Project) => void;
  closeProjectDetail: () => void;
  selectedServiceForQuote: Service | null;
  openQuoteModal: (service?: Service) => void;
  closeQuoteModal: () => void;
  isAdminModalOpen: boolean;
  openAdminModal: () => void;
  closeAdminModal: () => void;
  isCvModalOpen: boolean;
  openCvModal: () => void;
  closeCvModal: () => void;
  exportAllData: () => void;
  importAllData: (jsonData: string) => boolean;
  resetToDefaultData: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const STORAGE_KEYS = {
  PROFILE: 'soyetech_profile_v1',
  PROJECTS: 'soyetech_projects_v1',
  SKILLS: 'soyetech_skills_v1',
  EXPERIENCES: 'soyetech_experiences_v1',
  EDUCATION: 'soyetech_education_v1',
  SERVICES: 'soyetech_services_v1',
  MESSAGES: 'soyetech_messages_v1',
  QUOTES: 'soyetech_quotes_v1',
  STATS: 'soyetech_stats_v1',
  ADMIN_TOKEN: 'soyetech_admin_session_v1',
  ADMIN_HASH: 'soyetech_admin_pass_v1',
  THEME: 'soyetech_theme_v1'
};

const DEFAULT_ADMIN_PASSWORD = 'soyetech-admin';

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Theme state
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.THEME);
      if (saved === 'dark' || saved === 'light') return saved;
      return 'dark'; // Dark default for futuristic tech aesthetic
    } catch {
      return 'dark';
    }
  });

  // Apply theme to document element
  useEffect(() => {
    try {
      const root = document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark');
        root.classList.remove('light');
        document.body.className = 'bg-slate-950 text-slate-100 antialiased selection:bg-blue-600 selection:text-white transition-colors duration-300';
      } else {
        root.classList.remove('dark');
        root.classList.add('light');
        document.body.className = 'bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white transition-colors duration-300';
      }
      localStorage.setItem(STORAGE_KEYS.THEME, theme);
    } catch (e) {
      console.error(e);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const [profile, setProfile] = useState<Profile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROFILE);
      if (saved) {
        const parsed = JSON.parse(saved);
        let changed = false;
        if (!parsed.whatsappNumber?.includes('0500602727')) {
          parsed.phone = initialProfile.phone;
          parsed.whatsappNumber = initialProfile.whatsappNumber;
          changed = true;
        }
        if (parsed.avatarUrl?.includes('avatar_soye_evra') || !parsed.avatarUrl) {
          parsed.avatarUrl = initialProfile.avatarUrl;
          changed = true;
        }
        if (changed) {
          localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(parsed));
        }
        return parsed;
      }
      return initialProfile;
    } catch {
      return initialProfile;
    }
  });

  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROJECTS);
      return saved ? JSON.parse(saved) : initialProjects;
    } catch {
      return initialProjects;
    }
  });

  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SKILLS);
      return saved ? JSON.parse(saved) : initialSkillCategories;
    } catch {
      return initialSkillCategories;
    }
  });

  const [experiences, setExperiences] = useState<Experience[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.EXPERIENCES);
      return saved ? JSON.parse(saved) : initialExperiences;
    } catch {
      return initialExperiences;
    }
  });

  const [education, setEducation] = useState<EducationItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.EDUCATION);
      return saved ? JSON.parse(saved) : initialEducation;
    } catch {
      return initialEducation;
    }
  });

  const [services, setServices] = useState<Service[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SERVICES);
      return saved ? JSON.parse(saved) : initialServices;
    } catch {
      return initialServices;
    }
  });

  const [messages, setMessages] = useState<ContactMessage[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.MESSAGES);
      if (saved) return JSON.parse(saved);
      // Sample realistic initial messages
      return [
        {
          id: "msg-demo-1",
          name: "Directeur Académique - Institut Tech",
          email: "partenariat@institut-tech.ci",
          phone: "+225 05 12 34 56 78",
          subject: "Intervention & Ateliers programmation pour étudiants",
          serviceInterest: "Développement d'applications",
          message: "Bonjour M. Soye Evra, nous avons apprécié votre approche pédagogique et vos projets comme SoyeTECH Academy. Nous aimerions échanger pour une série d'ateliers de développement web.",
          createdAt: "2026-11-04 14:30",
          isRead: false
        },
        {
          id: "msg-demo-2",
          name: "Cabinet Conseil Digital",
          email: "contact@cabinetconseil.ci",
          subject: "Demande de support maintenance informatique & réseaux",
          serviceInterest: "Maintenance Informatique & Diagnostic",
          message: "Bonjour SoyeTECH, nous recherchons un technicien régulier pour l'audit et l'optimisation de nos 12 postes de travail ainsi que la sécurisation du réseau local.",
          createdAt: "2026-11-07 09:15",
          isRead: true
        }
      ];
    } catch {
      return [];
    }
  });

  const [quotes, setQuotes] = useState<QuoteRequest[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.QUOTES);
      if (saved) return JSON.parse(saved);
      return [
        {
          id: "quote-1",
          name: "PME Agro-Business",
          email: "direction@agro-ivoire.ci",
          phone: "+225 07 44 22 11 00",
          serviceTitle: "Développement de Sites Web Modernes",
          projectBudget: "Budget intermédiaire",
          timeline: "Sous 3 semaines",
          description: "Création d'un site vitrine avec catalogue produits, formulaire devis et présentation d'équipe.",
          createdAt: "2026-11-06 11:20",
          status: "en_cours"
        }
      ];
    } catch {
      return [];
    }
  });

  const [stats, setStats] = useState<SiteStats>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.STATS);
      return saved ? JSON.parse(saved) : initialStats;
    } catch {
      return initialStats;
    }
  });

  // Admin session state
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.ADMIN_TOKEN) === 'true';
    } catch {
      return false;
    }
  });

  // Interactive UI modals
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<Service | null>(null);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState<boolean>(false);
  const [isCvModalOpen, setIsCvModalOpen] = useState<boolean>(false);

  // Sync state changes with localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
    } catch (e) {
      console.error(e);
    }
  }, [profile]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
    } catch (e) {
      console.error(e);
    }
  }, [projects]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.SKILLS, JSON.stringify(skillCategories));
    } catch (e) {
      console.error(e);
    }
  }, [skillCategories]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.EXPERIENCES, JSON.stringify(experiences));
    } catch (e) {
      console.error(e);
    }
  }, [experiences]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.EDUCATION, JSON.stringify(education));
    } catch (e) {
      console.error(e);
    }
  }, [education]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(services));
    } catch (e) {
      console.error(e);
    }
  }, [services]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(messages));
    } catch (e) {
      console.error(e);
    }
  }, [messages]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.QUOTES, JSON.stringify(quotes));
    } catch (e) {
      console.error(e);
    }
  }, [quotes]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
    } catch (e) {
      console.error(e);
    }
  }, [stats]);

  // Record visitor view count on page mount
  useEffect(() => {
    setStats(prev => ({
      ...prev,
      totalViews: prev.totalViews + 1
    }));
  }, []);

  // CRUD actions
  const updateProfile = (updated: Partial<Profile>) => {
    setProfile(prev => ({ ...prev, ...updated }));
  };

  const addProject = (projectData: Omit<Project, 'id'>) => {
    const newId = 'project-' + Date.now();
    const newProject: Project = {
      ...projectData,
      id: newId
    };
    setProjects(prev => [newProject, ...prev]);
  };

  const updateProject = (id: string, updated: Partial<Project>) => {
    setProjects(prev => prev.map(p => (p.id === id ? { ...p, ...updated } : p)));
    if (selectedProject && selectedProject.id === id) {
      setSelectedProject(prev => (prev ? { ...prev, ...updated } : null));
    }
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
    if (selectedProject?.id === id) {
      setSelectedProject(null);
    }
  };

  const updateSkillCategories = (categories: SkillCategory[]) => {
    setSkillCategories(categories);
  };

  const addExperience = (expData: Omit<Experience, 'id'>) => {
    const newExp: Experience = {
      ...expData,
      id: 'exp-' + Date.now()
    };
    setExperiences(prev => [newExp, ...prev]);
  };

  const updateExperience = (id: string, updated: Partial<Experience>) => {
    setExperiences(prev => prev.map(e => (e.id === id ? { ...e, ...updated } : e)));
  };

  const deleteExperience = (id: string) => {
    setExperiences(prev => prev.filter(e => e.id !== id));
  };

  const updateEducation = (edu: EducationItem[]) => {
    setEducation(edu);
  };

  const updateService = (id: string, updated: Partial<Service>) => {
    setServices(prev => prev.map(s => (s.id === id ? { ...s, ...updated } : s)));
  };

  const addMessage = (msgData: Omit<ContactMessage, 'id' | 'createdAt' | 'isRead'>) => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const newMsg: ContactMessage = {
      ...msgData,
      id: 'msg-' + Date.now(),
      createdAt: formattedDate,
      isRead: false
    };

    setMessages(prev => [newMsg, ...prev]);
    setStats(prev => ({
      ...prev,
      messagesCount: prev.messagesCount + 1
    }));
    return true;
  };

  const markMessageRead = (id: string, isRead: boolean) => {
    setMessages(prev => prev.map(m => (m.id === id ? { ...m, isRead } : m)));
  };

  const deleteMessage = (id: string) => {
    setMessages(prev => prev.filter(m => m.id !== id));
  };

  const addQuoteRequest = (quoteData: Omit<QuoteRequest, 'id' | 'createdAt' | 'status'>) => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const newQuote: QuoteRequest = {
      ...quoteData,
      id: 'quote-' + Date.now(),
      createdAt: formattedDate,
      status: 'nouveau'
    };

    setQuotes(prev => [newQuote, ...prev]);
    setStats(prev => ({
      ...prev,
      quotesCount: prev.quotesCount + 1
    }));
    return true;
  };

  const updateQuoteStatus = (id: string, status: QuoteRequest['status']) => {
    setQuotes(prev => prev.map(q => (q.id === id ? { ...q, status } : q)));
  };

  const deleteQuoteRequest = (id: string) => {
    setQuotes(prev => prev.filter(q => q.id !== id));
  };

  const recordProjectView = (projectId: string) => {
    setStats(prev => {
      const current = prev.projectViews[projectId] || 0;
      return {
        ...prev,
        projectViews: {
          ...prev.projectViews,
          [projectId]: current + 1
        }
      };
    });
  };

  const recordCvDownload = () => {
    setStats(prev => ({
      ...prev,
      cvDownloads: prev.cvDownloads + 1
    }));
  };

  // Admin authentication
  const getStoredPassword = (): string => {
    try {
      const pass = localStorage.getItem(STORAGE_KEYS.ADMIN_HASH);
      return pass || DEFAULT_ADMIN_PASSWORD;
    } catch {
      return DEFAULT_ADMIN_PASSWORD;
    }
  };

  const loginAdmin = (password: string): boolean => {
    const correctPassword = getStoredPassword();
    if (password === correctPassword) {
      setIsAdminAuthenticated(true);
      try {
        localStorage.setItem(STORAGE_KEYS.ADMIN_TOKEN, 'true');
      } catch (e) {
        console.error(e);
      }
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminAuthenticated(false);
    try {
      localStorage.removeItem(STORAGE_KEYS.ADMIN_TOKEN);
    } catch (e) {
      console.error(e);
    }
  };

  const changeAdminPassword = (oldPass: string, newPass: string): boolean => {
    const current = getStoredPassword();
    if (oldPass !== current) return false;
    if (newPass.length < 4) return false;
    try {
      localStorage.setItem(STORAGE_KEYS.ADMIN_HASH, newPass);
      return true;
    } catch {
      return false;
    }
  };

  // Modals
  const openProjectDetail = (project: Project) => {
    setSelectedProject(project);
    recordProjectView(project.id);
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
  };

  const openQuoteModal = (service?: Service) => {
    setSelectedServiceForQuote(service || null);
  };

  const closeQuoteModal = () => {
    setSelectedServiceForQuote(null);
  };

  const openAdminModal = () => {
    setIsAdminModalOpen(true);
  };

  const closeAdminModal = () => {
    setIsAdminModalOpen(false);
  };

  const openCvModal = () => {
    setIsCvModalOpen(true);
  };

  const closeCvModal = () => {
    setIsCvModalOpen(false);
  };

  // Full export/import
  const exportAllData = () => {
    const dataToExport = {
      version: "1.0",
      exportDate: new Date().toISOString(),
      profile,
      projects,
      skillCategories,
      experiences,
      education,
      services,
      stats
    };

    const blob = new Blob([JSON.stringify(dataToExport, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SoyeTECH_Backup_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const importAllData = (jsonData: string): boolean => {
    try {
      const parsed = JSON.parse(jsonData);
      if (parsed.profile) setProfile(parsed.profile);
      if (parsed.projects) setProjects(parsed.projects);
      if (parsed.skillCategories) setSkillCategories(parsed.skillCategories);
      if (parsed.experiences) setExperiences(parsed.experiences);
      if (parsed.education) setEducation(parsed.education);
      if (parsed.services) setServices(parsed.services);
      if (parsed.stats) setStats(parsed.stats);
      return true;
    } catch (e) {
      console.error("Failed to import data", e);
      return false;
    }
  };

  const resetToDefaultData = () => {
    setProfile(initialProfile);
    setProjects(initialProjects);
    setSkillCategories(initialSkillCategories);
    setExperiences(initialExperiences);
    setEducation(initialEducation);
    setServices(initialServices);
    setStats(initialStats);
  };

  return (
    <DataContext.Provider
      value={{
        profile,
        updateProfile,
        projects,
        addProject,
        updateProject,
        deleteProject,
        skillCategories,
        updateSkillCategories,
        experiences,
        addExperience,
        updateExperience,
        deleteExperience,
        education,
        updateEducation,
        services,
        updateService,
        messages,
        addMessage,
        markMessageRead,
        deleteMessage,
        quotes,
        addQuoteRequest,
        updateQuoteStatus,
        deleteQuoteRequest,
        stats,
        recordProjectView,
        recordCvDownload,
        isAdminAuthenticated,
        loginAdmin,
        logoutAdmin,
        changeAdminPassword,
        theme,
        toggleTheme,
        selectedProject,
        openProjectDetail,
        closeProjectDetail,
        selectedServiceForQuote,
        openQuoteModal,
        closeQuoteModal,
        isAdminModalOpen,
        openAdminModal,
        closeAdminModal,
        isCvModalOpen,
        openCvModal,
        closeCvModal,
        exportAllData,
        importAllData,
        resetToDefaultData
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
