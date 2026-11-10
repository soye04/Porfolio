import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { Server, Code, Cpu, Shield, Terminal, Zap, Check } from 'lucide-react';
import { SkillCategory } from '../types';

export const SkillsSection: React.FC = () => {
  const { skillCategories } = useData();
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-5 h-5 text-blue-400" />;
      case 'Code':
        return <Code className="w-5 h-5 text-indigo-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-cyan-400" />;
      default:
        return <Zap className="w-5 h-5 text-blue-400" />;
    }
  };

  const displayedCategories =
    activeCategoryId === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeCategoryId);

  return (
    <section id="competences" className="py-12 sm:py-20 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest font-semibold text-blue-400 dark:text-blue-400 light:text-blue-600 mb-2">
              02. Savoir-faire technique
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 text-balance">
              Compétences concrètes & domaines d'expertise
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2">
              Une approche rigoureuse et polyvalente, sans jauges artificielles, fondée sur des pratiques vérifiables en maintenance, développement, électronique et systèmes.
            </p>
          </div>

          {/* Interactive filter tabs: scrollable on mobile */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 overflow-x-auto max-w-full touch-pan-x self-stretch sm:self-start">
            <button
              onClick={() => setActiveCategoryId('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeCategoryId === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900'
              }`}
            >
              Toutes (4)
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeCategoryId === cat.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900'
                }`}
              >
                {cat.title.split('&')[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-xl backdrop-blur-sm transition-all hover:border-slate-700/80"
            >
              {/* Category Header */}
              <div className="flex items-start gap-4 pb-5 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                <div className="p-3 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 shrink-0">
                  {getIcon(category.iconName)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 mt-1">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills List within Category */}
              <div className="mt-5 space-y-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.id}
                    className="p-3.5 rounded-xl bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50/70 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200/80 hover:border-blue-500/30 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <h4 className="text-sm font-semibold text-white dark:text-white light:text-slate-900">
                        {skill.name}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 pl-3.5 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
