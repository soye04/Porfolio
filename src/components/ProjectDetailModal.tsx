import React, { useEffect } from 'react';
import { useData } from '../context/DataContext';
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, Layers, Lightbulb, Compass, Code2 } from 'lucide-react';

export const ProjectDetailModal: React.FC = () => {
  const { selectedProject, closeProjectDetail } = useData();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeProjectDetail();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeProjectDetail]);

  if (!selectedProject) return null;

  const getStatusBadge = () => {
    if (selectedProject.status === 'en_cours') {
      return (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 dark:text-blue-400 light:text-blue-600">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span>Projet en développement actif</span>
        </span>
      );
    }
    if (selectedProject.status === 'conception') {
      return (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 dark:text-purple-400 light:text-purple-600">
          <span className="w-2 h-2 rounded-full bg-purple-500" />
          <span>Projet en phase de conception & prototypage</span>
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 dark:text-emerald-400 light:text-emerald-600">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        <span>Projet finalisé & déployé</span>
      </span>
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-6"
      onClick={closeProjectDetail}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-2xl p-4 sm:p-8 space-y-5 sm:space-y-7"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-3 pb-4 border-b border-slate-800 dark:border-slate-800 light:border-slate-200">
          <div>
            <div className="mb-1">{getStatusBadge()}</div>
            <h3 className="text-xl sm:text-3xl font-extrabold text-white dark:text-white light:text-slate-900">
              {selectedProject.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-0.5 sm:mt-1">
              {selectedProject.tagline}
            </p>
          </div>

          <button
            onClick={closeProjectDetail}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-100 text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors cursor-pointer shrink-0"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Visual Container */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-800 dark:border-slate-800 light:border-slate-200 aspect-video max-h-[380px] bg-slate-950">
          <img
            src={selectedProject.imageUrl}
            alt={selectedProject.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
            <span className="font-mono bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800 backdrop-blur-md">
              Architecture SoyeTECH
            </span>
            <span className="font-mono bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800 backdrop-blur-md">
              Côte d'Ivoire
            </span>
          </div>
        </div>

        {/* Detailed Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Problématique */}
          <div className="p-5 rounded-2xl bg-slate-950/50 dark:bg-slate-950/50 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 space-y-2">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>Problématique identifiée</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
              {selectedProject.problemStatement}
            </p>
          </div>

          {/* Solution proposée */}
          <div className="p-5 rounded-2xl bg-slate-950/50 dark:bg-slate-950/50 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 space-y-2">
            <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
              <Lightbulb className="w-4 h-4" />
              <span>Solution technologique apportée</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
              {selectedProject.proposedSolution}
            </p>
          </div>
        </div>

        {/* Full Overview Description */}
        <div className="space-y-2">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 dark:text-slate-200 light:text-slate-800 flex items-center gap-2">
            <Compass className="w-4 h-4 text-purple-400" />
            <span>Présentation détaillée du projet</span>
          </h4>
          <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
            {selectedProject.fullDescription}
          </p>
        </div>

        {/* Key Features */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 dark:text-slate-200 light:text-slate-800 flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-400" />
            <span>Fonctionnalités clés</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {selectedProject.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-100 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Employées */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 dark:text-slate-200 light:text-slate-800 flex items-center gap-2">
            <Code2 className="w-4 h-4 text-indigo-400" />
            <span>Technologies & Outils utilisés</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {selectedProject.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-mono font-medium px-3 py-1.5 rounded-lg bg-slate-950 dark:bg-slate-950 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-blue-300 dark:text-blue-300 light:text-blue-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="pt-4 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500">
            Statut : <span className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">{selectedProject.statusLabel}</span>
          </div>

          <div className="flex items-center gap-3">
            {selectedProject.githubUrl && (
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 bg-slate-800 dark:bg-slate-800 light:bg-slate-100 hover:bg-slate-700 rounded-xl transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Code source</span>
              </a>
            )}

            <button
              onClick={closeProjectDetail}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors cursor-pointer"
            >
              Fermer la fiche
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
