import React from 'react';
import { useData } from '../context/DataContext';
import { FileText, Download, Printer, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';

export const CVSection: React.FC = () => {
  const { openCvModal, profile, recordCvDownload } = useData();

  return (
    <section id="cv" className="py-12 sm:py-20 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl sm:rounded-3xl p-5 sm:p-12 bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-purple-950/40 border border-blue-500/25 shadow-2xl relative overflow-hidden">
          {/* Subtle tech background circle */}
          <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-4 sm:space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
              <FileText className="w-3.5 h-3.5" />
              <span>Dossier de Candidature & Profil Technique</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 text-balance">
              Consultez et téléchargez mon CV professionnel
            </h2>

            <p className="text-xs sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
              Retrouvez l'intégralité de mon parcours : Baccalauréat F2 (2023), formation en Systèmes Électroniques et Informatiques (SEI), missions d'enseignement des mathématiques à l'établissement ETIC, interventions en maintenance matérielle et réalisations logicielles.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={openCvModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer active:scale-[0.98]"
              >
                <FileText className="w-4 h-4" />
                <span>Ouvrir le visualiseur de CV</span>
              </button>

              <button
                onClick={() => {
                  recordCvDownload();
                  openCvModal();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-200 dark:text-slate-200 light:text-slate-700 bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-200 border border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 rounded-xl transition-all cursor-pointer active:scale-[0.98]"
              >
                <Printer className="w-4 h-4 text-purple-400" />
                <span>Télécharger / Imprimer en PDF</span>
              </button>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Mise à jour régulière & Informations vérifiées</span>
              </span>
              <span aria-hidden="true">·</span>
              <span>Format optimisé pour les recruteurs & cabinets IT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
