import React, { useState, useEffect } from 'react';
import { useData } from '../context/DataContext';
import { X, Download, Printer, CheckCircle2, MapPin, Mail, Phone, FileText, Send, Award, BookOpen, Briefcase, Cpu, Code2, ShieldCheck } from 'lucide-react';

export const CVModal: React.FC = () => {
  const { isCvModalOpen, closeCvModal, profile, experiences, education, skillCategories, recordCvDownload } = useData();
  const [activeTab, setActiveTab] = useState<'cv' | 'lettre'>('cv');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCvModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeCvModal]);

  if (!isCvModalOpen) return null;

  const handlePrint = () => {
    recordCvDownload();
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-6"
      onClick={closeCvModal}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative w-full max-w-4xl max-h-[95vh] sm:max-h-[92vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-2xl p-4 sm:p-8 space-y-4 sm:space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Navigation & Controls Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800 dark:border-slate-800 light:border-slate-200">
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 self-stretch sm:self-start">
            <button
              onClick={() => setActiveTab('cv')}
              className={`flex-1 sm:flex-none px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer text-center ${
                activeTab === 'cv'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900'
              }`}
            >
              Curriculum Vitae (CV)
            </button>
            <button
              onClick={() => setActiveTab('lettre')}
              className={`flex-1 sm:flex-none px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer text-center ${
                activeTab === 'lettre'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900'
              }`}
            >
              Lettre de Motivation
            </button>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-2.5">
            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all cursor-pointer shadow-md min-h-[44px]"
              title="Imprimer ou enregistrer en PDF via le navigateur"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimer / PDF</span>
            </button>

            <button
              onClick={closeCvModal}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-100 text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors cursor-pointer shrink-0"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab 1: Professional CV View */}
        {activeTab === 'cv' && (
          <div id="printable-cv" className="p-4 sm:p-10 rounded-xl sm:rounded-2xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-6 sm:space-y-8">
            {/* CV Header */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 pb-6 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 text-center sm:text-left">
              <div className="space-y-1">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 dark:text-blue-400 light:text-blue-600">
                  {profile.brandName} · Technologies
                </span>
                <h2 className="text-3xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
                  {profile.name}
                </h2>
                <p className="text-base font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                  {profile.title}
                </p>
                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 max-w-xl pt-1">
                  {profile.tagline}
                </p>
              </div>

              {/* Photo & Contacts */}
              <div className="flex flex-col items-center sm:items-end space-y-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-600">
                <div className="w-18 h-18 rounded-2xl overflow-hidden border-2 border-blue-500/40 mb-1 bg-white shadow-md">
                  <img
                    src={profile.avatarUrl}
                    alt={profile.name}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  <a href={`mailto:${profile.email}`} className="hover:underline">{profile.email}</a>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-400" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{profile.availability}</span>
                </div>
              </div>
            </div>

            {/* Profile summary */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400 dark:text-blue-400 light:text-blue-600 font-mono">
                Profil Professionnel & Synthèse
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                {profile.bio}
              </p>
            </div>

            {/* Formations */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400 dark:text-blue-400 light:text-blue-600 font-mono flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>Formations & Diplômes</span>
              </h3>
              <div className="space-y-3">
                {education.map((edu) => (
                  <div key={edu.id} className="p-3.5 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-1">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900">
                        {edu.degree}
                      </h4>
                      <span className="text-xs font-mono text-blue-400 font-semibold">{edu.year}</span>
                    </div>
                    <p className="text-xs font-medium text-slate-400 dark:text-slate-400 light:text-slate-600">
                      {edu.field} — {edu.institution}
                    </p>
                    <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 pt-1">
                      {edu.details}
                    </p>
                    {edu.honestNote && (
                      <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500 italic pt-1 flex items-center gap-1.5">
                        <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>{edu.honestNote}</span>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Expériences professionnelles */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400 dark:text-blue-400 light:text-blue-600 font-mono flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>Expériences Professionnelles</span>
              </h3>
              <div className="space-y-4">
                {experiences.map((exp) => (
                  <div key={exp.id} className="p-4 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-2">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900">
                        {exp.role}
                      </h4>
                      <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                    </div>
                    <p className="text-xs font-semibold text-blue-400 dark:text-blue-400 light:text-blue-600">
                      {exp.organization} · {exp.location}
                    </p>
                    <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                      {exp.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                      {exp.responsibilities.map((r, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600">
                          <span className="text-blue-400 font-bold">•</span>
                          <span>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Compétences techniques */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400 dark:text-blue-400 light:text-blue-600 font-mono flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                <span>Compétences Techniques Clés</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {skillCategories.map((cat) => (
                  <div key={cat.id} className="p-3 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200">
                    <h5 className="font-bold text-white dark:text-white light:text-slate-900 mb-1">
                      {cat.title}
                    </h5>
                    <div className="flex flex-wrap gap-1 text-[11px] text-slate-300 dark:text-slate-300 light:text-slate-600">
                      {cat.skills.map((s, idx) => (
                        <span key={s.id}>
                          {s.name}{idx < cat.skills.length - 1 ? ' · ' : ''}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer note */}
            <div className="pt-4 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>Soye Evra — Marque SoyeTECH</span>
              <span>Document vérifié · Côte d'Ivoire</span>
            </div>
          </div>
        )}

        {/* Tab 2: Motivation Letter View */}
        {activeTab === 'lettre' && (
          <div className="p-6 sm:p-10 rounded-2xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 dark:border-slate-800 light:border-slate-200">
              <div className="space-y-0.5">
                <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900">
                  Lettre de Motivation Professionnelle
                </h3>
                <p className="text-xs text-slate-400">
                  Candidature spontanée & Proposition de collaboration technique
                </p>
              </div>
              <span className="text-xs font-mono text-blue-400">
                Soye Evra · SoyeTECH
              </span>
            </div>

            <div className="prose prose-invert max-w-none text-slate-300 dark:text-slate-300 light:text-slate-700 text-sm whitespace-pre-line leading-relaxed font-sans">
              {profile.motivationLetter}
            </div>

            <div className="pt-6 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                Contact direct : <a href={`mailto:${profile.email}`} className="text-blue-400 font-semibold">{profile.email}</a>
              </div>
              <a
                href="#contact"
                onClick={closeCvModal}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl"
              >
                <span>Prendre contact</span>
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
