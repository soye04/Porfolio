import React, { useState, useEffect } from 'react';
import { useData } from '../context/DataContext';
import { X, Send, CheckCircle2, Calculator, MessageSquare } from 'lucide-react';

export const QuoteModal: React.FC = () => {
  const { selectedServiceForQuote, closeQuoteModal, addQuoteRequest, services, profile } = useData();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceTitle: '',
    projectBudget: 'Budget modéré',
    timeline: 'Moins de 2 semaines',
    description: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (selectedServiceForQuote) {
      setFormData((prev) => ({
        ...prev,
        serviceTitle: selectedServiceForQuote.title
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        serviceTitle: services[0]?.title || 'Maintenance Informatique & Diagnostic'
      }));
    }
  }, [selectedServiceForQuote, services]);

  if (!selectedServiceForQuote && !selectedServiceForQuote) {
    // If quote modal is open via header without specific service, check if active
  }

  // To know if quote modal is opened, let's also listen to ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeQuoteModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeQuoteModal]);

  if (!selectedServiceForQuote) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) return;

    addQuoteRequest({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      serviceTitle: formData.serviceTitle,
      projectBudget: formData.projectBudget,
      timeline: formData.timeline,
      description: formData.description
    });

    setIsSubmitted(true);
  };

  const getWhatsAppSummary = () => {
    const rawNumber = profile.whatsappNumber.replace(/[^0-9]/g, '');
    const text = `Bonjour SoyeTECH, je viens de faire une demande de devis pour : *${formData.serviceTitle}*.\nNom : ${formData.name}\nDélai souhaité : ${formData.timeline}\nDétails : ${formData.description}`;
    return `https://wa.me/${rawNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-6"
      onClick={closeQuoteModal}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative w-full max-w-xl max-h-[94vh] sm:max-h-[92vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-2xl p-4 sm:p-8 space-y-4 sm:space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-800 dark:border-slate-800 light:border-slate-200">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
              Estimation & Cahier des charges
            </span>
            <h3 className="text-lg sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 mt-0.5">
              Demande de Devis Technologique
            </h3>
          </div>
          <button
            onClick={closeQuoteModal}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-200 text-slate-400 hover:text-white cursor-pointer shrink-0"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xl font-bold text-white dark:text-white light:text-slate-900">
                Demande de devis enregistrée !
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 max-w-md mx-auto">
                Soye Evra étudiera votre cahier des charges et reviendra vers vous sous 24h avec une proposition adaptée.
              </p>
            </div>
            <div className="pt-3 flex flex-wrap justify-center gap-3">
              <a
                href={getWhatsAppSummary()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Notifier directement sur WhatsApp</span>
              </a>
              <button
                onClick={closeQuoteModal}
                className="px-5 py-2.5 text-xs font-semibold text-slate-300 bg-slate-800 rounded-xl hover:bg-slate-700"
              >
                Fermer
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                Service souhaité
              </label>
              <select
                value={formData.serviceTitle}
                onChange={(e) => setFormData({ ...formData, serviceTitle: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-800 text-sm text-white dark:text-white light:text-slate-900 focus:outline-none focus:border-blue-500"
              >
                {services.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                  Votre nom ou société *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jean Kouadio"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-800 text-sm text-white dark:text-white light:text-slate-900 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                  Numéro de téléphone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+225 07..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-800 text-sm text-white dark:text-white light:text-slate-900 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                Email de contact *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="contact@exemple.ci"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-800 text-sm text-white dark:text-white light:text-slate-900 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                  Délai souhaité
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-800 text-sm text-white dark:text-white light:text-slate-900 focus:outline-none focus:border-blue-500"
                >
                  <option value="Urgent (24h - 48h)">Urgent (24h - 48h)</option>
                  <option value="Sous 1 semaine">Sous 1 semaine</option>
                  <option value="Sous 2 à 3 semaines">Sous 2 à 3 semaines</option>
                  <option value="Planification future">Planification future</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                  Cadre budgétaire estimé
                </label>
                <select
                  value={formData.projectBudget}
                  onChange={(e) => setFormData({ ...formData, projectBudget: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-800 text-sm text-white dark:text-white light:text-slate-900 focus:outline-none focus:border-blue-500"
                >
                  <option value="Standard / Dépannage">Standard / Dépannage ponctuel</option>
                  <option value="Projet intermédiaire">Projet intermédiaire</option>
                  <option value="Projet d'envergure">Projet complet / Entreprise</option>
                  <option value="À définir ensemble">À définir selon devis</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                Description de votre besoin
              </label>
              <textarea
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Précisez le nombre de postes, les technologies souhaitées, l'urgence ou la nature du problème..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 border border-slate-800 text-sm text-white dark:text-white light:text-slate-900 focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg transition-all cursor-pointer"
            >
              <span>Envoyer la demande de devis</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
