import React from 'react';
import { useData } from '../context/DataContext';
import { Service } from '../types';
import {
  Wrench,
  Settings,
  Globe,
  Smartphone,
  HelpCircle,
  Cpu,
  Palette,
  ArrowRight,
  Clock,
  CheckCircle2
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const { services, openQuoteModal } = useData();

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-blue-400" />;
      case 'Settings':
        return <Settings className="w-5 h-5 text-indigo-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-cyan-400" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-purple-400" />;
      case 'HelpCircle':
        return <HelpCircle className="w-5 h-5 text-amber-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-pink-400" />;
      default:
        return <Wrench className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="services" className="py-12 sm:py-20 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-12">
          <p className="text-xs uppercase tracking-widest font-semibold text-blue-400 dark:text-blue-400 light:text-blue-600 mb-2">
            05. Prestations & Solutions
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 text-balance">
            Services technologiques & accompagnement
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2">
            Des prestations personnalisées pour les particuliers, étudiants, entreprises et écoles en Côte d'Ivoire. Demandez un devis clair et rapide sans engagement.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between p-5 sm:p-7 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-xl transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1 group"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                    {getServiceIcon(service.iconName)}
                  </div>
                  {service.turnaroundTime && (
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-500">
                      <Clock className="w-3 h-3 text-blue-400" />
                      <span>{service.turnaroundTime}</span>
                    </div>
                  )}
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 mt-2 leading-relaxed">
                    {service.detailedDescription}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-3 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 space-y-2">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500">
                    Ce qui est inclus :
                  </p>
                  <ul className="space-y-1.5">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                <button
                  onClick={() => openQuoteModal(service)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-200 dark:text-slate-200 light:text-slate-700 bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-100 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white light:hover:bg-blue-600 light:hover:text-white border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-transparent rounded-xl transition-all cursor-pointer"
                >
                  <span>Demander un devis</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
