import React from 'react';
import { useData } from '../context/DataContext';
import { Briefcase, Calendar, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ExperiencesSection: React.FC = () => {
  const { experiences } = useData();

  return (
    <section id="experiences" className="py-12 sm:py-20 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-12">
          <p className="text-xs uppercase tracking-widest font-semibold text-blue-400 dark:text-blue-400 light:text-blue-600 mb-2">
            04. Parcours Professionnel
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 text-balance">
            Expériences terrain & engagements vérifiés
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2">
            Des missions concrètes valorisant la pédagogie méthodique, la rigueur analytique et l'assistance technique en Côte d'Ivoire.
          </p>
        </div>

        {/* Timeline list */}
        <div className="space-y-8 max-w-4xl">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-xl transition-all hover:border-slate-700"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-5 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-slate-900">
                      {exp.role}
                    </h3>
                    {exp.verified && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Expérience vérifiée</span>
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-blue-400 dark:text-blue-400 light:text-blue-600">
                    {exp.organization}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 shrink-0">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="mt-5 space-y-4">
                <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key responsibilities */}
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <div className="pt-2 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500">
                      Missions & Réalisations clés
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {exp.responsibilities.map((resp, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
