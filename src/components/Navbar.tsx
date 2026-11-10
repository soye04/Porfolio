import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { Sun, Moon, ShieldCheck, Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { profile, theme, toggleTheme, openQuoteModal, openAdminModal, isAdminAuthenticated } = useData();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'À propos', href: '#a-propos' },
    { label: 'Compétences', href: '#competences' },
    { label: 'Projets', href: '#projets' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-slate-950/85 dark:bg-slate-950/85 light:bg-white/85 border-b border-slate-800/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Single brand wordmark with logo */}
        <a href="#accueil" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.25)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all bg-black flex items-center justify-center">
            <img
              src="/public/assets/aistudio/Logo_technologique_SoyeTECH_futuriste_6fbee483.png"
              alt="Logo SoyeTECH"
              className="w-full h-full object-contain p-0.5"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors">
              Soye<span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">TECH</span>
            </span>
          </div>
        </a>

        {/* Zone 2: 5–6 single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary CTA + Theme toggle + Admin Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Basculer le thème"
            className="p-2.5 rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-200 bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:border-slate-700 transition-all cursor-pointer"
            title={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Admin shortcut button */}
          <button
            onClick={openAdminModal}
            className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
              isAdminAuthenticated
                ? 'border-emerald-500/50 bg-emerald-950/40 text-emerald-400 hover:bg-emerald-900/50'
                : 'border-slate-800 dark:border-slate-800 light:border-slate-200 bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 text-slate-400 hover:text-slate-200'
            }`}
            title={isAdminAuthenticated ? 'Espace Administrateur (Connecté)' : 'Connexion Administrateur'}
            aria-label="Espace Administrateur"
          >
            <ShieldCheck className="w-4 h-4" />
          </button>

          {/* Primary Action Button */}
          <button
            onClick={() => openQuoteModal()}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl hover:from-blue-500 hover:to-purple-500 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Devis Projet</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl border border-slate-800 dark:border-slate-800 text-slate-300 hover:text-white"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800/80 bg-slate-950/95 dark:bg-slate-950/95 light:bg-white/95 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-300 hover:text-blue-400 py-2 border-b border-slate-800/40"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openQuoteModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg"
            >
              <span>Demander un devis</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openAdminModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-400 border border-slate-800 rounded-xl hover:text-white"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{isAdminAuthenticated ? 'Tableau de bord Admin' : 'Accès Administration'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
