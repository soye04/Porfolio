import React from 'react';
import { useData } from '../context/DataContext';
import { ArrowDown, FileText, Mail, MapPin, Send, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const { profile, openCvModal, openQuoteModal } = useData();

  return (
    <section id="accueil" className="relative pt-6 pb-12 sm:pt-12 sm:pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[250px] sm:h-[350px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/15 to-purple-600/20 blur-[100px] sm:blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">
          {/* Left Column: Typographic Hierarchy & Action Buttons */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-7">
            {/* Editorial brand kicker */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs tracking-wider uppercase font-semibold text-blue-400 dark:text-blue-400 light:text-blue-600">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-500/10 dark:bg-blue-500/10 light:bg-blue-50 border border-blue-500/20">
                <Terminal className="w-3.5 h-3.5" />
                <span>{profile.brandName}</span>
              </span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span className="text-slate-400 dark:text-slate-400 light:text-slate-600 font-medium">
                {profile.name}
              </span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span className="inline-flex items-center gap-1 text-slate-400 dark:text-slate-400 light:text-slate-600">
                <MapPin className="w-3 h-3 text-red-400" />
                <span>Côte d'Ivoire</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.2] text-balance">
              Transformer les idées en{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                solutions technologiques.
              </span>
            </h1>

            {/* Slogan & Bio Prose */}
            <div className="space-y-2 sm:space-y-3">
              <p className="text-base sm:text-lg font-medium text-slate-200 dark:text-slate-200 light:text-slate-800">
                {profile.slogan}
              </p>
              <p className="text-xs sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed max-w-2xl">
                {profile.bio}
              </p>
            </div>

            {/* Action Buttons: Full width on mobile, inline on desktop */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#projets"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-xl shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
              >
                <span>Découvrir mes projets</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={openCvModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-700 bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-200 border border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 rounded-xl transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>Consulter / Télécharger mon CV</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 border border-slate-800 sm:border-transparent rounded-xl transition-colors whitespace-nowrap active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Me contacter</span>
              </a>
            </div>

            {/* Trust points / Availability */}
            <div className="pt-1 flex flex-wrap items-center gap-3 sm:gap-5 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>{profile.availability}</span>
              </span>
              <span aria-hidden="true">·</span>
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-blue-400 transition-colors"
              >
                {profile.email}
              </a>
            </div>
          </div>

          {/* Right Column: High-Tech Holographic Visual Card with SoyeTECH Logo & Portrait */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition duration-1000 -z-10" />

              {/* Holographic Container */}
              <div className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-8 bg-slate-900/90 dark:bg-slate-900/90 light:bg-white/95 border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-2xl backdrop-blur-xl">
                {/* Tech Header Strip inside card */}
                <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500">
                      SoyeTECH System v2026
                    </span>
                  </div>
                  <span className="text-xs font-mono text-purple-400 dark:text-purple-400">
                    Abidjan · CI
                  </span>
                </div>

                {/* Central Visual: Official 3D Logo Presentation */}
                <div className="py-4 sm:py-6 flex flex-col items-center text-center">
                  <div className="relative w-36 h-36 sm:w-48 sm:h-48 mb-3 sm:mb-4 group">
                    {/* Concentric rotating ambient rings */}
                    <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-spin" style={{ animationDuration: '24s' }} />
                    <div className="absolute inset-3 rounded-full border border-purple-500/25 border-dashed animate-spin" style={{ animationDuration: '36s', animationDirection: 'reverse' }} />
                    
                    {/* The Official Uploaded 3D SoyeTECH Logo */}
                    <div className="relative w-full h-full p-2 flex items-center justify-center">
                      <img
                        src="/public/assets/aistudio/Logo_technologique_SoyeTECH_futuriste_6fbee483.png"
                        alt="Logo Officiel SoyeTECH"
                        className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  {/* Soye Evra Badge Lockup */}
                  <div className="flex items-center gap-3 mt-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-md">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden border-2 border-blue-400/60 shrink-0 bg-white shadow-sm">
                      <img
                        src={profile.avatarUrl}
                        alt="Soye Evra"
                        className="w-full h-full object-cover object-top"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="text-left">
                      <p className="text-xs sm:text-sm font-bold text-white dark:text-white light:text-slate-900 leading-tight">
                        {profile.name}
                      </p>
                      <p className="text-[11px] sm:text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                        Fondateur & Développeur
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Capability Tags */}
                <div className="pt-3 sm:pt-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 grid grid-cols-2 gap-2 text-[11px] sm:text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                  <div className="px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50 border border-slate-800/60 flex items-center gap-1.5 sm:gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    <span className="truncate">Maintenance & Réseaux</span>
                  </div>
                  <div className="px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50 border border-slate-800/60 flex items-center gap-1.5 sm:gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                    <span className="truncate">Dév React & Python</span>
                  </div>
                  <div className="px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50 border border-slate-800/60 flex items-center gap-1.5 sm:gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                    <span className="truncate">Électronique & Circuits</span>
                  </div>
                  <div className="px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50 border border-slate-800/60 flex items-center gap-1.5 sm:gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span className="truncate">Solutions IA & Outils</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width KPI / Trust Strip below the Split */}
        <div className="mt-10 sm:mt-16 pt-8 sm:pt-10 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center">
          <div className="p-3 sm:p-4 rounded-xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-100/60 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 space-y-0.5 sm:space-y-1">
            <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 font-mono tabular-nums">
              2023
            </p>
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium">
              Baccalauréat F2 Électronique
            </p>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-100/60 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 space-y-0.5 sm:space-y-1">
            <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-blue-400 dark:text-blue-400 light:text-blue-600 font-mono tabular-nums">
              6+
            </p>
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium">
              Projets Technologiques
            </p>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-100/60 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 space-y-0.5 sm:space-y-1">
            <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-purple-400 dark:text-purple-400 light:text-purple-600 font-mono tabular-nums">
              4 Pôles
            </p>
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium">
              Info, Dév, Élec & IA
            </p>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-100/60 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 space-y-0.5 sm:space-y-1">
            <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 font-mono tabular-nums">
              100%
            </p>
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium">
              Rigueur & Autonomie
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
