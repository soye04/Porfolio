import React, { useState, useEffect } from 'react';
import { useData } from '../context/DataContext';
import {
  X,
  Lock,
  Unlock,
  KeyRound,
  BarChart3,
  User,
  FolderGit2,
  Cpu,
  Briefcase,
  Wrench,
  Mail,
  FileCheck2,
  Download,
  Upload,
  RefreshCw,
  Plus,
  Trash2,
  Edit,
  Save,
  CheckCircle2,
  ExternalLink,
  ShieldAlert,
  LogOut,
  Eye
} from 'lucide-react';
import { Project, SkillCategory, Experience, Service } from '../types';

export const AdminModal: React.FC = () => {
  const {
    isAdminModalOpen,
    closeAdminModal,
    isAdminAuthenticated,
    loginAdmin,
    logoutAdmin,
    changeAdminPassword,
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
    services,
    updateService,
    messages,
    markMessageRead,
    deleteMessage,
    quotes,
    updateQuoteStatus,
    deleteQuoteRequest,
    stats,
    exportAllData,
    importAllData,
    resetToDefaultData
  } = useData();

  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<
    'stats' | 'profile' | 'projects' | 'skills' | 'experiences' | 'services' | 'messages' | 'quotes' | 'backup'
  >('stats');

  // Project editing state
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
  const [newProjectForm, setNewProjectForm] = useState(false);
  const [projectForm, setProjectForm] = useState<Omit<Project, 'id'>>({
    title: '',
    tagline: '',
    category: 'web',
    shortDescription: '',
    fullDescription: '',
    problemStatement: '',
    proposedSolution: '',
    features: [''],
    technologies: ['React', 'TypeScript'],
    status: 'en_cours',
    statusLabel: 'En développement actif',
    imageUrl: '/src/assets/images/project_soyetech_academy_1794331228141.jpg',
    demoUrl: '#',
    githubUrl: '',
    featured: true,
    order: 1
  });

  // Password change state
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [passMsg, setPassMsg] = useState({ text: '', isError: false });

  // Import JSON state
  const [importJsonText, setImportJsonText] = useState('');
  const [importStatus, setImportStatus] = useState('');

  // Close with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeAdminModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeAdminModal]);

  if (!isAdminModalOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = loginAdmin(passwordInput);
    if (success) {
      setAuthError('');
      setPasswordInput('');
    } else {
      setAuthError('Mot de passe incorrect. (Par défaut: soyetech-admin)');
    }
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProjectId) {
      updateProject(editingProjectId, projectForm);
      setEditingProjectId(null);
    } else {
      addProject(projectForm);
      setNewProjectForm(false);
    }
  };

  const handleStartEditProject = (proj: Project) => {
    setEditingProjectId(proj.id);
    setProjectForm({
      title: proj.title,
      tagline: proj.tagline,
      category: proj.category,
      shortDescription: proj.shortDescription,
      fullDescription: proj.fullDescription,
      problemStatement: proj.problemStatement,
      proposedSolution: proj.proposedSolution,
      features: [...proj.features],
      technologies: [...proj.technologies],
      status: proj.status,
      statusLabel: proj.statusLabel,
      imageUrl: proj.imageUrl,
      demoUrl: proj.demoUrl,
      githubUrl: proj.githubUrl,
      featured: proj.featured,
      order: proj.order
    });
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    const success = changeAdminPassword(oldPass, newPass);
    if (success) {
      setPassMsg({ text: 'Mot de passe modifié avec succès !', isError: false });
      setOldPass('');
      setNewPass('');
    } else {
      setPassMsg({ text: 'Erreur : ancien mot de passe incorrect ou nouveau trop court.', isError: true });
    }
  };

  const handleImportSubmit = () => {
    if (!importJsonText.trim()) return;
    const ok = importAllData(importJsonText);
    if (ok) {
      setImportStatus('Données importées avec succès !');
      setImportJsonText('');
    } else {
      setImportStatus('Erreur : format JSON non valide.');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4"
      onClick={closeAdminModal}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative w-full max-w-6xl max-h-[96vh] sm:max-h-[94vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-2xl p-4 sm:p-8 space-y-4 sm:space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-800 dark:border-slate-800 light:border-slate-200">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="p-2 sm:p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
              <KeyRound className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-2xl font-bold text-white dark:text-white light:text-slate-900">
                Espace Administrateur SoyeTECH
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-400 dark:text-slate-400 light:text-slate-500">
                Gestion sécurisée du portfolio et statistiques
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAdminAuthenticated && (
              <button
                onClick={logoutAdmin}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-rose-400 hover:text-white bg-rose-950/30 hover:bg-rose-900/50 border border-rose-500/30 rounded-lg transition-colors cursor-pointer min-h-[44px]"
                title="Se déconnecter"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Déconnexion</span>
              </button>
            )}
            <button
              onClick={closeAdminModal}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-200 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Not Authenticated: Login Screen */}
        {!isAdminAuthenticated ? (
          <div className="py-12 max-w-md mx-auto space-y-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center mx-auto text-blue-400 shadow-xl">
              <Lock className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900">
                Connexion Sécurisée
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Entrez la clé d'accès pour modifier les contenus et consulter les messages reçus.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4 text-left">
              {authError && (
                <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/30 text-rose-400 text-xs">
                  {authError}
                </div>
              )}

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">
                  Mot de passe administrateur
                </label>
                <input
                  type="password"
                  required
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Mot de passe..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
                />
                <p className="text-[11px] text-slate-500 pt-1">
                  Clé par défaut : <span className="font-mono text-slate-300">soyetech-admin</span>
                </p>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all cursor-pointer shadow-lg shadow-blue-600/30"
              >
                <Unlock className="w-4 h-4" />
                <span>Accéder au Tableau de Bord</span>
              </button>
            </form>
          </div>
        ) : (
          /* Authenticated Dashboard */
          <div className="space-y-6">
            {/* Dashboard Navigation Tabs */}
            <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-slate-950/80 border border-slate-800 overflow-x-auto">
              {[
                { id: 'stats', label: 'Statistiques', icon: BarChart3 },
                { id: 'profile', label: 'Profil & Identité', icon: User },
                { id: 'projects', label: `Projets (${projects.length})`, icon: FolderGit2 },
                { id: 'skills', label: 'Compétences', icon: Cpu },
                { id: 'experiences', label: 'Expériences', icon: Briefcase },
                { id: 'services', label: 'Services', icon: Wrench },
                { id: 'messages', label: `Messages (${messages.filter((m) => !m.isRead).length} new)`, icon: Mail },
                { id: 'quotes', label: `Devis (${quotes.length})`, icon: FileCheck2 },
                { id: 'backup', label: 'Sauvegarde / Import', icon: Download },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white shadow'
                        : 'text-slate-400 hover:text-white hover:bg-slate-900'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* TAB 1: Real Live Analytics */}
            {activeTab === 'stats' && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                    <p className="text-xs uppercase font-mono text-slate-400">Vues Totales</p>
                    <p className="text-3xl font-extrabold text-white font-mono">{stats.totalViews}</p>
                    <p className="text-[11px] text-emerald-400">Visites réelles enregistrées</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                    <p className="text-xs uppercase font-mono text-slate-400">CV Consultés / Imprimés</p>
                    <p className="text-3xl font-extrabold text-blue-400 font-mono">{stats.cvDownloads}</p>
                    <p className="text-[11px] text-blue-400/80">Téléchargements ou lectures</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                    <p className="text-xs uppercase font-mono text-slate-400">Messages Reçus</p>
                    <p className="text-3xl font-extrabold text-purple-400 font-mono">{messages.length}</p>
                    <p className="text-[11px] text-purple-400/80">{messages.filter((m) => !m.isRead).length} non lus</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                    <p className="text-xs uppercase font-mono text-slate-400">Demandes de Devis</p>
                    <p className="text-3xl font-extrabold text-emerald-400 font-mono">{quotes.length}</p>
                    <p className="text-[11px] text-emerald-400/80">Prospects enregistrés</p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                    Consultations par projet
                  </h4>
                  <div className="space-y-3">
                    {projects.map((proj) => {
                      const views = stats.projectViews[proj.id] || 0;
                      const percentage = Math.min(Math.round((views / Math.max(stats.totalViews, 1)) * 100), 100);
                      return (
                        <div key={proj.id} className="space-y-1">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold text-slate-200">{proj.title}</span>
                            <span className="font-mono text-slate-400">{views} consultations</span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                              style={{ width: `${Math.max(percentage, 8)}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: Profil & Coordonnées */}
            {activeTab === 'profile' && (
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-5">
                <h4 className="text-base font-bold text-white pb-3 border-b border-slate-800">
                  Modifier les informations professionnelles de Soye Evra
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Nom Complet</label>
                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) => updateProfile({ name: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Marque Professionnelle</label>
                    <input
                      type="text"
                      value={profile.brandName}
                      onChange={(e) => updateProfile({ brandName: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Slogan Officiel</label>
                  <input
                    type="text"
                    value={profile.slogan}
                    onChange={(e) => updateProfile({ slogan: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Phrase d'Accroche</label>
                  <input
                    type="text"
                    value={profile.tagline}
                    onChange={(e) => updateProfile({ tagline: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Biographie Professionnelle</label>
                  <textarea
                    rows={4}
                    value={profile.bio}
                    onChange={(e) => updateProfile({ bio: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Email</label>
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => updateProfile({ email: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Téléphone / WhatsApp</label>
                    <input
                      type="text"
                      value={profile.phone}
                      onChange={(e) => updateProfile({ phone: e.target.value, whatsappNumber: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Localisation</label>
                    <input
                      type="text"
                      value={profile.location}
                      onChange={(e) => updateProfile({ location: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Disponibilité</label>
                  <input
                    type="text"
                    value={profile.availability}
                    onChange={(e) => updateProfile({ availability: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white"
                  />
                </div>
              </div>
            )}

            {/* TAB 3: Projets CRUD */}
            {activeTab === 'projects' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white">
                    Liste des Projets Technologiques ({projects.length})
                  </h4>
                  <button
                    onClick={() => {
                      setNewProjectForm(true);
                      setEditingProjectId(null);
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Nouveau Projet</span>
                  </button>
                </div>

                {/* Form to edit or add project */}
                {(newProjectForm || editingProjectId) && (
                  <form onSubmit={handleSaveProject} className="p-6 rounded-2xl bg-slate-950 border border-blue-500/40 space-y-4">
                    <h5 className="text-sm font-bold text-blue-400">
                      {editingProjectId ? 'Modifier le projet' : 'Ajouter un nouveau projet'}
                    </h5>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-300">Titre du projet</label>
                        <input
                          type="text"
                          required
                          value={projectForm.title}
                          onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                          className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-300">Statut</label>
                        <select
                          value={projectForm.status}
                          onChange={(e) =>
                            setProjectForm({
                              ...projectForm,
                              status: e.target.value as any,
                              statusLabel:
                                e.target.value === 'en_cours'
                                  ? 'En développement actif'
                                  : e.target.value === 'conception'
                                  ? 'En conception & prototypage'
                                  : 'En ligne'
                            })
                          }
                          className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white"
                        >
                          <option value="en_cours">En développement</option>
                          <option value="conception">En conception & prototypage</option>
                          <option value="termine">Terminé / En ligne</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-300">Phrase d'accroche</label>
                      <input
                        type="text"
                        value={projectForm.tagline}
                        onChange={(e) => setProjectForm({ ...projectForm, tagline: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-300">Description courte</label>
                      <textarea
                        rows={2}
                        value={projectForm.shortDescription}
                        onChange={(e) => setProjectForm({ ...projectForm, shortDescription: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white resize-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-300">Problématique</label>
                        <textarea
                          rows={2}
                          value={projectForm.problemStatement}
                          onChange={(e) => setProjectForm({ ...projectForm, problemStatement: e.target.value })}
                          className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white resize-none"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-300">Solution apportée</label>
                        <textarea
                          rows={2}
                          value={projectForm.proposedSolution}
                          onChange={(e) => setProjectForm({ ...projectForm, proposedSolution: e.target.value })}
                          className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white resize-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-300">Technologies (séparées par des virgules)</label>
                      <input
                        type="text"
                        value={projectForm.technologies.join(', ')}
                        onChange={(e) =>
                          setProjectForm({
                            ...projectForm,
                            technologies: e.target.value.split(',').map((s) => s.trim()).filter(Boolean)
                          })
                        }
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white"
                      />
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                      <button
                        type="submit"
                        className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl"
                      >
                        Enregistrer le projet
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setEditingProjectId(null);
                          setNewProjectForm(false);
                        }}
                        className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
                      >
                        Annuler
                      </button>
                    </div>
                  </form>
                )}

                {/* List of current projects */}
                <div className="space-y-3">
                  {projects.map((proj) => (
                    <div
                      key={proj.id}
                      className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={proj.imageUrl}
                          alt={proj.title}
                          className="w-12 h-12 rounded-lg object-cover border border-slate-800"
                        />
                        <div>
                          <p className="text-sm font-bold text-white">{proj.title}</p>
                          <p className="text-xs text-slate-400">{proj.statusLabel}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleStartEditProject(proj)}
                          className="p-2 text-slate-400 hover:text-blue-400 rounded-lg hover:bg-slate-900"
                          title="Modifier"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteProject(proj.id)}
                          className="p-2 text-slate-400 hover:text-rose-400 rounded-lg hover:bg-slate-900"
                          title="Supprimer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: Messages Inbox */}
            {activeTab === 'messages' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white">
                    Messages Reçus ({messages.length})
                  </h4>
                </div>

                {messages.length === 0 ? (
                  <p className="text-xs text-slate-500 py-8 text-center">Aucun message pour le moment.</p>
                ) : (
                  <div className="space-y-3">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`p-5 rounded-2xl border transition-all ${
                          msg.isRead
                            ? 'bg-slate-950/60 border-slate-800/80 text-slate-400'
                            : 'bg-slate-950 border-blue-500/40 text-slate-200'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <h5 className="text-sm font-bold text-white">{msg.name}</h5>
                              <span className="text-xs text-blue-400 font-mono">({msg.email})</span>
                              {msg.phone && <span className="text-xs text-emerald-400 font-mono">{msg.phone}</span>}
                              {!msg.isRead && (
                                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-600 text-white">
                                  Nouveau
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-400 mt-0.5 font-medium">{msg.subject}</p>
                            {msg.serviceInterest && (
                              <p className="text-[11px] text-purple-400 mt-0.5">
                                Intérêt : {msg.serviceInterest}
                              </p>
                            )}
                          </div>
                          <span className="text-[11px] font-mono text-slate-500 shrink-0">
                            {msg.createdAt}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-300 mt-3 p-3 rounded-xl bg-slate-900 border border-slate-800 leading-relaxed whitespace-pre-line">
                          {msg.message}
                        </p>

                        <div className="flex items-center justify-between gap-3 mt-3 pt-3 border-t border-slate-800/60">
                          <button
                            onClick={() => markMessageRead(msg.id, !msg.isRead)}
                            className="text-xs text-slate-400 hover:text-white"
                          >
                            {msg.isRead ? 'Marquer comme non lu' : 'Marquer comme lu'}
                          </button>

                          <div className="flex items-center gap-3">
                            <a
                              href={`mailto:${msg.email}?subject=RE: ${encodeURIComponent(msg.subject)}`}
                              className="inline-flex items-center gap-1 text-xs text-blue-400 hover:underline"
                            >
                              <Mail className="w-3.5 h-3.5" />
                              <span>Répondre par Email</span>
                            </a>
                            {msg.phone && (
                              <a
                                href={`https://wa.me/${msg.phone.replace(/[^0-9]/g, '')}`}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1 text-xs text-emerald-400 hover:underline"
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                                <span>WhatsApp</span>
                              </a>
                            )}
                            <button
                              onClick={() => deleteMessage(msg.id)}
                              className="text-slate-500 hover:text-rose-400 p-1"
                              title="Supprimer"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* TAB 5: Demandes de Devis */}
            {activeTab === 'quotes' && (
              <div className="space-y-4">
                <h4 className="text-base font-bold text-white">
                  Demandes de Devis Reçues ({quotes.length})
                </h4>

                {quotes.length === 0 ? (
                  <p className="text-xs text-slate-500 py-8 text-center">Aucune demande de devis pour le moment.</p>
                ) : (
                  <div className="space-y-3">
                    {quotes.map((q) => (
                      <div key={q.id} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h5 className="text-sm font-bold text-white">{q.name}</h5>
                            <p className="text-xs text-blue-400 font-semibold">{q.serviceTitle}</p>
                            <p className="text-xs text-slate-400">
                              {q.email} · {q.phone}
                            </p>
                          </div>
                          <span className="text-[11px] font-mono text-slate-500">{q.createdAt}</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="p-2 rounded bg-slate-900 border border-slate-800">
                            <span className="text-slate-500">Délai : </span>
                            <span className="text-white font-medium">{q.timeline}</span>
                          </div>
                          <div className="p-2 rounded bg-slate-900 border border-slate-800">
                            <span className="text-slate-500">Budget : </span>
                            <span className="text-white font-medium">{q.projectBudget}</span>
                          </div>
                        </div>

                        {q.description && (
                          <p className="text-xs text-slate-300 p-2.5 rounded bg-slate-900/60 border border-slate-800/80">
                            {q.description}
                          </p>
                        )}

                        <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 text-xs">
                          <div className="flex items-center gap-2">
                            <span className="text-slate-500">Statut :</span>
                            <select
                              value={q.status}
                              onChange={(e) => updateQuoteStatus(q.id, e.target.value as any)}
                              className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-xs text-white"
                            >
                              <option value="nouveau">Nouveau</option>
                              <option value="en_cours">En traitement</option>
                              <option value="termine">Traité</option>
                            </select>
                          </div>

                          <div className="flex items-center gap-2">
                            <a
                              href={`https://wa.me/${q.phone.replace(/[^0-9]/g, '')}`}
                              target="_blank"
                              rel="noreferrer"
                              className="text-emerald-400 hover:underline"
                            >
                              Relancer sur WhatsApp
                            </a>
                            <button
                              onClick={() => deleteQuoteRequest(q.id)}
                              className="text-slate-500 hover:text-rose-400 p-1"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* TAB 6: Sauvegarde, Import & Mot de passe */}
            {activeTab === 'backup' && (
              <div className="space-y-6">
                {/* Export / Import Box */}
                <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                    Sauvegarde Intégrale & Synchronisation des données (1 Clic)
                  </h4>
                  <p className="text-xs text-slate-400">
                    Exportez un fichier JSON contenant tout votre portfolio (profil, projets, services, messages, statistiques). Vous pouvez le réimporter à tout moment.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={exportAllData}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl"
                    >
                      <Download className="w-4 h-4" />
                      <span>Télécharger la sauvegarde JSON</span>
                    </button>
                    <button
                      onClick={resetToDefaultData}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl"
                    >
                      <RefreshCw className="w-4 h-4" />
                      <span>Réinitialiser aux valeurs initiales</span>
                    </button>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 space-y-2">
                    <label className="text-xs font-semibold text-slate-300">
                      Importer un fichier de sauvegarde (Collez le contenu JSON) :
                    </label>
                    <textarea
                      rows={3}
                      value={importJsonText}
                      onChange={(e) => setImportJsonText(e.target.value)}
                      placeholder='{"version": "1.0", "profile": {...}}'
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
                    />
                    {importStatus && (
                      <p className="text-xs text-emerald-400 font-semibold">{importStatus}</p>
                    )}
                    <button
                      onClick={handleImportSubmit}
                      className="px-4 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-xl"
                    >
                      Restaurer les données
                    </button>
                  </div>
                </div>

                {/* Password Change Box */}
                <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                    Modifier la Clé d'Accès Administrateur
                  </h4>
                  <form onSubmit={handleChangePassword} className="space-y-3 max-w-sm">
                    {passMsg.text && (
                      <p className={`text-xs ${passMsg.isError ? 'text-rose-400' : 'text-emerald-400'}`}>
                        {passMsg.text}
                      </p>
                    )}
                    <div className="space-y-1">
                      <label className="text-xs text-slate-400">Ancien mot de passe</label>
                      <input
                        type="password"
                        required
                        value={oldPass}
                        onChange={(e) => setOldPass(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs text-slate-400">Nouveau mot de passe</label>
                      <input
                        type="password"
                        required
                        value={newPass}
                        onChange={(e) => setNewPass(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-xl"
                    >
                      Mettre à jour le mot de passe
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
