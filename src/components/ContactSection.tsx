import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle2,
  Github,
  Linkedin,
  Twitter,
  Clock,
  ExternalLink
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { profile, addMessage, services } = useData();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    serviceInterest: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Veuillez remplir tous les champs obligatoires (Nom, Email, Message).');
      return;
    }

    const success = addMessage({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || undefined,
      subject: formData.subject || 'Nouveau message depuis le portfolio SoyeTECH',
      serviceInterest: formData.serviceInterest || 'Information générale',
      message: formData.message
    });

    if (success) {
      setIsSubmitted(true);
      setErrorMessage('');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        serviceInterest: '',
        message: ''
      });
    }
  };

  const getWhatsAppDirectUrl = () => {
    const rawNumber = profile.whatsappNumber.replace(/[^0-9]/g, '');
    const encoded = encodeURIComponent(profile.whatsappMessage);
    return `https://wa.me/${rawNumber}?text=${encoded}`;
  };

  return (
    <section id="contact" className="py-12 sm:py-20 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-12">
          <p className="text-xs uppercase tracking-widest font-semibold text-blue-400 dark:text-blue-400 light:text-blue-600 mb-2">
            06. Échanges & Collaborations
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 text-balance">
            Démarrons un projet ou discutons d'une opportunité
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2">
            Disponible pour missions techniques, maintenance de systèmes, création d'applications et opportunités professionnelles en Côte d'Ivoire.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info & Social Contacts */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Contact Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-xl space-y-6">
              <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 pb-3 border-b border-slate-800 dark:border-slate-800 light:border-slate-200">
                Coordonnées Directes
              </h3>

              <div className="space-y-4 text-sm">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50 border border-slate-800/60 hover:border-blue-500/40 transition-colors group"
                >
                  <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium">Adresse Email</p>
                    <p className="font-semibold text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors">
                      {profile.email}
                    </p>
                  </div>
                </a>

                <a
                  href={getWhatsAppDirectUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50 border border-slate-800/60 hover:border-emerald-500/40 transition-colors group"
                >
                  <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium">WhatsApp Direct</p>
                    <p className="font-semibold text-white dark:text-white light:text-slate-900 group-hover:text-emerald-400 transition-colors">
                      {profile.phone}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50 border border-slate-800/60">
                  <MapPin className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium">Localisation</p>
                    <p className="font-semibold text-white dark:text-white light:text-slate-900">
                      {profile.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50 border border-slate-800/60">
                  <Clock className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium">Délai moyen de réponse</p>
                    <p className="font-semibold text-white dark:text-white light:text-slate-900">
                      Moins de 2 heures ouvrées
                    </p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-4 border-t border-slate-800 dark:border-slate-800 light:border-slate-200">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500 mb-3">
                  Réseaux & Plateformes
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-100 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                    aria-label="GitHub de Soye Evra"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-100 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                    aria-label="LinkedIn de Soye Evra"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={profile.twitterUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-100 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                    aria-label="Twitter / X de SoyeTECH"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 to-teal-950/40 border border-emerald-500/20 shadow-lg flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-mono uppercase text-emerald-400 font-semibold">Discussion instantanée</p>
                <p className="text-sm font-bold text-white dark:text-white light:text-slate-900 mt-0.5">
                  Échanger rapidement sur WhatsApp
                </p>
              </div>
              <a
                href={getWhatsAppDirectUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors shrink-0"
              >
                <span>Ouvrir</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-xl">
              <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 pb-3 mb-6 border-b border-slate-800 dark:border-slate-800 light:border-slate-200">
                Formulaire de Contact Professionnel
              </h3>

              {isSubmitted ? (
                <div className="p-8 text-center space-y-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-white dark:text-white light:text-slate-900">
                      Message transmis avec succès !
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 max-w-md mx-auto">
                      Merci pour votre prise de contact. Soye Evra vous répondra dans les plus brefs délais à l'adresse fournie.
                    </p>
                  </div>
                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 rounded-lg hover:bg-slate-700"
                    >
                      Envoyer un autre message
                    </button>
                    <a
                      href={getWhatsAppDirectUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 text-xs font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-500"
                    >
                      Doubler sur WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-500/30 text-rose-400 text-xs">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                        Votre nom ou entreprise <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Jean Kouassi ou Société Ivoire Tech"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-sm text-white dark:text-white light:text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                        Votre adresse e-mail <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nom@entreprise.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-sm text-white dark:text-white light:text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                        Téléphone / WhatsApp (Optionnel)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+225 07..."
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-sm text-white dark:text-white light:text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                        Service ou domaine concerné
                      </label>
                      <select
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-sm text-white dark:text-white light:text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option value="">Sélectionnez une prestation...</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Recrutement / Emploi">Opportunité d'Emploi / Stage</option>
                        <option value="Autre demande">Autre collaboration</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                      Objet du message
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Ex: Demande d'intervention informatique ou Proposition de projet"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-sm text-white dark:text-white light:text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                      Votre message détaillé <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Expliquez votre besoin, le contexte de votre panne ou les détails de votre projet logiciel..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-sm text-white dark:text-white light:text-slate-900 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
                  >
                    <span>Envoyer mon message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
