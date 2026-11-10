import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { MessageSquare, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const { profile } = useData();
  const [showTooltip, setShowTooltip] = useState(false);

  const rawNumber = profile.whatsappNumber.replace(/[^0-9]/g, '');
  const url = `https://wa.me/${rawNumber}?text=${encodeURIComponent(profile.whatsappMessage)}`;

  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-3">
      {/* Tooltip on hover/click */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-white text-xs font-medium text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-800 shadow-xl backdrop-blur-md animate-fade-in">
          <span>Échanger directement avec Soye Evra</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        aria-label="Contacter Soye Evra sur WhatsApp"
        className="w-13 h-13 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] transition-all duration-300 transform hover:scale-105 group"
      >
        <MessageSquare className="w-6 h-6 group-hover:rotate-6 transition-transform" />
      </a>
    </div>
  );
};
