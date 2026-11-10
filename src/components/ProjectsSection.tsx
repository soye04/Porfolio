import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { Project, ProjectStatus } from '../types';
import { ArrowUpRight, Code, Eye, Sparkles, Terminal } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { projects, openProjectDetail } = useData();
  const [filter, setFilter] = useState<'all' | ProjectStatus>('all');

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    return p.status === filter;
  });

  return (
    <section id="projets" className="py-12 sm:py-20 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest font-semibold text-blue-400 dark:text-blue-400 light:text-blue-600 mb-2">
              03. Réalisations & Initiatives
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 text-balance">
              Galerie de projets technologiques
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2">
              Des applications concrètes conçues pour l'éducation, le développement de compétences et la modernisation des usages digitaux. Statuts présentés avec transparence.
            </p>
          </div>

          {/* Interactive filter tabs: scrollable on mobile */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 overflow-x-auto max-w-full touch-pan-x self-stretch sm:self-start">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900'
              }`}
            >
              Tous les projets ({projects.length})
            </button>
            <button
              onClick={() => setFilter('en_cours')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filter === 'en_cours'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900'
              }`}
            >
              En développement
            </button>
            <button
              onClick={() => setFilter('conception')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filter === 'conception'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900'
              }`}
            >
              En conception & R&D
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => openProjectDetail(project)}
              className="group flex flex-col rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 overflow-hidden shadow-lg hover:shadow-2xl hover:border-blue-500/40 transition-all duration-300 cursor-pointer"
            >
              {/* Media Thumbnail Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Status indicator on media */}
                <div className="absolute top-3 left-3">
                  {project.status === 'en_cours' ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-950/85 backdrop-blur-md text-blue-400 border border-blue-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                      <span>En développement</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-950/85 backdrop-blur-md text-purple-300 border border-purple-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span>En conception</span>
                    </span>
                  )}
                </div>

                {/* Category tag */}
                <div className="absolute top-3 right-3">
                  <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-slate-950/70 text-slate-300 backdrop-blur-sm border border-slate-800">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-blue-400" />
                  </h3>
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium line-clamp-1">
                    {project.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 line-clamp-3 leading-relaxed pt-1">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech list & Action link */}
                <div className="pt-3 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-col space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-600 bg-slate-950/50 dark:bg-slate-950/50 light:bg-slate-100 px-2 py-0.5 rounded border border-slate-800/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[11px] font-mono text-slate-500 px-1 py-0.5">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs font-semibold text-blue-400 dark:text-blue-400 light:text-blue-600 pt-1">
                    <span className="inline-flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Consulter la fiche détaillée</span>
                    </span>
                    <span className="font-mono text-slate-500 text-[10px]">
                      SoyeTECH
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
