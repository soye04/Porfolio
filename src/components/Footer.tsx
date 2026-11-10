import React from 'react';
import { useData } from '../context/DataContext';
import { ShieldCheck, Heart, Terminal, ArrowUp, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const { profile, openAdminModal, isAdminAuthenticated } = useData();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 bg-slate-950 dark:bg-slate-950 light:bg-slate-100 py-10 sm:py-14 pb-24 md:pb-14 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-blue-500/30 bg-black flex items-center justify-center">
                <img
                  src="/public/assets/aistudio/Logo_technologique_SoyeTECH_futuriste_6fbee483.png"
                  alt="Logo SoyeTECH"
                  className="w-full h-full object-contain p-0.5"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
                Soye<span className="text-blue-400">TECH</span>
              </span>
            </div>

            <p className="text-sm font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
              {profile.slogan}
            </p>

            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-sm leading-relaxed">
              Portfolio professionnel de {profile.name}. Maintenance informatique, développement logiciel, électronique et intelligence artificielle en Côte d'Ivoire.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs">
            <div className="space-y-2">
              <p className="font-bold uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-800">
                Navigation
              </p>
              <ul className="space-y-1.5 text-slate-400 dark:text-slate-400 light:text-slate-600">
                <li><a href="#accueil" className="hover:text-blue-400 transition-colors">Accueil</a></li>
                <li><a href="#a-propos" className="hover:text-blue-400 transition-colors">À propos</a></li>
                <li><a href="#competences" className="hover:text-blue-400 transition-colors">Compétences</a></li>
                <li><a href="#projets" className="hover:text-blue-400 transition-colors">Projets</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="font-bold uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-800">
                Expertises
              </p>
              <ul className="space-y-1.5 text-slate-400 dark:text-slate-400 light:text-slate-600">
                <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
                <li><a href="#cv" className="hover:text-blue-400 transition-colors">Curriculum Vitae</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact Direct</a></li>
              </ul>
            </div>
          </div>

          {/* Admin & Back to Top */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between space-y-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-slate-200 border border-slate-800 text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white cursor-pointer transition-colors"
            >
              <span>Haut de page</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={openAdminModal}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-blue-400 transition-colors cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{isAdminAuthenticated ? 'Tableau de Bord Admin (Connecté)' : 'Espace Administrateur'}</span>
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
          <p>© {new Date().getFullYear()} SoyeTECH · Soye Evra. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-red-400" />
              <span>Abidjan, Côte d'Ivoire</span>
            </span>
            <span aria-hidden="true">·</span>
            <span>Conçu avec rigueur et passion technique</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
