import React from 'react';
import { useData } from '../context/DataContext';
import { Award, BookOpen, Compass, Cpu, FileText, Lightbulb, ShieldCheck, Zap } from 'lucide-react';

export const About: React.FC = () => {
  const { profile, education, openCvModal } = useData();

  return (
    <section id="a-propos" className="py-12 sm:py-20 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-14">
          <p className="text-xs uppercase tracking-widest font-semibold text-blue-400 dark:text-blue-400 light:text-blue-600 mb-2">
            01. Trajectoire & Vocation
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 text-balance">
            Une passion forgée dans les circuits, le code et l'innovation utile.
          </h2>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Main narrative */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-sm sm:text-base">
            {/* Identity Photo Card */}
            <div className="flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-sm">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 border-blue-500/40 shrink-0 bg-white shadow-md">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-base font-bold text-white dark:text-white light:text-slate-900">
                  {profile.name}
                </h3>
                <p className="text-xs text-blue-400 font-medium">
                  {profile.title}
                </p>
                <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500 mt-0.5">
                  Baccalauréat F2 (2023) · Formation SEI · Côte d'Ivoire
                </p>
              </div>
            </div>

            <p>
              Je m'appelle <strong className="text-white dark:text-white light:text-slate-900 font-semibold">Soye Evra</strong>, technicien informatique et passionné par les technologies émergentes en Côte d'Ivoire. À travers la marque <strong className="text-blue-400 font-semibold">SoyeTECH</strong>, je concrétise une vision claire : transformer les défis techniques en solutions numériques fiables, accessibles et pérennes.
            </p>
            <p>
              Mon parcours allie la rigueur du matériel électronique à la souplesse du génie logiciel. Dès le lycée technique, le choix de la filière <strong className="text-white dark:text-white light:text-slate-900 font-semibold">F2 (Électronique)</strong> m'a appris à raisonner au niveau du signal, à manier les composants physiques, à lire des schémas d'architectures complexes et à diagnostiquer avec précision.
            </p>
            <p>
              Poursuivant ma formation en <strong className="text-white dark:text-white light:text-slate-900 font-semibold">Systèmes Électroniques et Informatiques (SEI)</strong> et consolidant mon parcours supérieur de technicien, je cultive une démarche d'apprentissage constant et une curiosité insatiable. En autodidacte méthodique, j'explore le développement logiciel moderne (React, TypeScript, Python, Flutter) et l'intégration de l'intelligence artificielle pour résoudre de vrais problèmes sur le terrain.
            </p>

            {/* Core Values Strip */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                <div className="flex items-center gap-2.5 text-blue-400 font-bold text-sm mb-1">
                  <Zap className="w-4 h-4" />
                  <span>Autonomie & Apprentissage</span>
                </div>
                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                  Capacité éprouvée à assimiler rapidement de nouveaux frameworks, outils et architectures technologiques.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                <div className="flex items-center gap-2.5 text-purple-400 font-bold text-sm mb-1">
                  <Compass className="w-4 h-4" />
                  <span>Polyvalence Terrain</span>
                </div>
                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                  Aisance aussi bien dans l'ouverture d'un boîtier pour un dépannage matériel que dans la rédaction d'un composant React.
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={openCvModal}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-slate-800 hover:bg-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 light:bg-slate-900 light:hover:bg-slate-800 rounded-xl transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Lire ma lettre de motivation & CV</span>
              </button>
            </div>
          </div>

          {/* Education & Academic Roadmap */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                <BookOpen className="w-4 h-4 text-blue-400" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-white dark:text-white light:text-slate-900">
                  Formation Académique & Technique
                </h3>
              </div>

              <div className="space-y-6">
                {education.map((item) => (
                  <div key={item.id} className="relative pl-6 before:content-[''] before:absolute before:left-1 before:top-2 before:bottom-0 before:w-px before:bg-slate-800 dark:before:bg-slate-800">
                    <span className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-slate-950 dark:ring-slate-950" />
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900">
                          {item.degree}
                        </h4>
                        <span className="text-xs font-mono text-blue-400 dark:text-blue-400 light:text-blue-600">
                          {item.year}
                        </span>
                      </div>

                      <p className="text-xs font-medium text-slate-400 dark:text-slate-400 light:text-slate-500">
                        {item.field} · {item.institution}
                      </p>

                      <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 pt-1 leading-relaxed">
                        {item.details}
                      </p>

                      {item.honestNote && (
                        <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500 italic pt-1 border-t border-slate-800/40 mt-1.5 flex items-center gap-1.5">
                          <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span>{item.honestNote}</span>
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slogan card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/40 via-indigo-950/30 to-purple-950/40 border border-blue-500/20 shadow-lg">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-mono uppercase tracking-wider mb-2">
                <Lightbulb className="w-4 h-4" />
                <span>Devise SoyeTECH</span>
              </div>
              <p className="text-base font-bold text-white dark:text-white light:text-slate-900 leading-snug">
                « {profile.tagline} »
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2">
                Un engagement ferme vers une croissance technologique durable et mesurable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
