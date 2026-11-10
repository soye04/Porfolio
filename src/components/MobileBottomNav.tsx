import React from 'react';
import { useData } from '../context/DataContext';
import { Home, FolderGit2, Wrench, FileText, MessageSquare } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const { openCvModal, profile } = useData();

  const rawNumber = profile.whatsappNumber.replace(/[^0-9]/g, '');
  const whatsAppUrl = `https://wa.me/${rawNumber}?text=${encodeURIComponent(profile.whatsappMessage)}`;

  return (
    <nav
      aria-label="Navigation mobile rapide"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/92 dark:bg-slate-950/92 light:bg-white/92 backdrop-blur-xl border-t border-slate-800/90 dark:border-slate-800/90 light:border-slate-200/90 px-2 py-1.5 shadow-[0_-5px_20px_rgba(0,0,0,0.3)]"
    >
      <div className="grid grid-cols-5 items-center max-w-md mx-auto">
        {/* Tab 1: Accueil */}
        <a
          href="#accueil"
          className="flex flex-col items-center justify-center min-h-[48px] py-1 text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-blue-400 active:scale-95 transition-all"
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight">Accueil</span>
        </a>

        {/* Tab 2: Projets */}
        <a
          href="#projets"
          className="flex flex-col items-center justify-center min-h-[48px] py-1 text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-blue-400 active:scale-95 transition-all"
        >
          <FolderGit2 className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight">Projets</span>
        </a>

        {/* Tab 3: Services */}
        <a
          href="#services"
          className="flex flex-col items-center justify-center min-h-[48px] py-1 text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-blue-400 active:scale-95 transition-all"
        >
          <Wrench className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight">Services</span>
        </a>

        {/* Tab 4: CV */}
        <button
          onClick={openCvModal}
          className="flex flex-col items-center justify-center min-h-[48px] py-1 text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-purple-400 active:scale-95 transition-all cursor-pointer"
        >
          <FileText className="w-5 h-5 mb-0.5 text-purple-400" />
          <span className="text-[10px] font-semibold tracking-tight text-purple-400">Mon CV</span>
        </button>

        {/* Tab 5: WhatsApp Direct */}
        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center min-h-[48px] py-1 text-emerald-400 hover:text-emerald-300 active:scale-95 transition-all"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 mb-0.5" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          </div>
          <span className="text-[10px] font-semibold tracking-tight">WhatsApp</span>
        </a>
      </div>
    </nav>
  );
};
