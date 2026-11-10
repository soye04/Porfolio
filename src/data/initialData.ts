import { Profile, Project, SkillCategory, Experience, EducationItem, Service, SiteStats } from '../types';

export const initialProfile: Profile = {
  name: "Soye Evra",
  brandName: "SoyeTECH",
  tagline: "Transformer les idées en solutions technologiques.",
  slogan: "SOYETECH — L'innovation au service des idées.",
  subSlogan: "Technicien informatique polyvalent & Concepteur de solutions digitales",
  title: "Technicien Informatique, Électronique & Développeur Logiciel",
  bio: "Technicien informatique polyvalent et passionné par le développement logiciel, l'électronique embarquée, l'intelligence artificielle et l'innovation technologique en Côte d'Ivoire. Doté d'une forte capacité d'apprentissage, d'une grande rigueur de diagnostic et d'une autonomie reconnue, je conçois des outils modernes orientés vers une croissance technologique durable et concrète.",
  location: "Abidjan, Côte d'Ivoire",
  email: "soyeevra@gmail.com",
  phone: "+225 05 00 60 27 27",
  whatsappNumber: "+2250500602727",
  whatsappMessage: "Bonjour Soye Evra, j'ai découvert votre portfolio SoyeTECH et j'aimerais échanger avec vous concernant un projet technologique.",
  avatarUrl: "/public/assets/aistudio/Portrait_professionnel_sur_fond_blanc_f14b41ff.png",
  logoUrl: "/public/assets/aistudio/Logo_technologique_SoyeTECH_futuriste_6fbee483.png",
  githubUrl: "https://github.com/soyeevra",
  linkedinUrl: "https://linkedin.com/in/soye-evra",
  twitterUrl: "https://twitter.com/soyetech_ci",
  availability: "Disponible pour missions, contrats et collaborations techniques",
  motivationLetter: `À l'attention des Recruteurs, Entreprises et Partenaires Technologiques,

Passionné dès mon plus jeune âge par l'architecture des systèmes numériques et les circuits électroniques, j'ai orienté mon cursus vers la filière technique d'excellence du Baccalauréat F2 (Électronique), que j'ai obtenu avec fierté en 2023. J'ai ensuite approfondi mes compétences au sein d'une formation spécialisée en Systèmes Électroniques et Informatiques (SEI), complétée par un parcours d'études supérieures en cours de consolidation.

Ce qui me caractérise avant tout sur le terrain, c'est mon esprit pragmatique, ma polyvalence et ma soif constante d'apprendre :
1. Sur le volet matériel et système, je maîtrise le diagnostic hardware, la maintenance préventive/curative et le déploiement réseau.
2. Sur le volet logiciel, je développe avec les technologies contemporaines (React, TypeScript, Python, Flutter, Dart) et j'intègre l'intelligence artificielle comme levier de productivité.
3. Sur le plan humain, mon expérience en enseignement des mathématiques au sein de l'établissement ETIC m'a apporté un sens aigu de la pédagogie, de la rigueur analytique et de la communication claire.

Sous la marque SoyeTECH, ma vocation est d'apporter des solutions technologiques sur mesure, fiables et pérennes aux entreprises ivoiriennes et internationales.

Je suis à votre entière disposition pour tout entretien technique, stage ou collaboration professionnelle.

Soye Evra — Fondateur SoyeTECH`
};

export const initialProjects: Project[] = [
  {
    id: "soyetech-academy",
    title: "SoyeTECH Academy",
    tagline: "Plateforme innovante de formation en ligne aux compétences numériques",
    category: "web",
    shortDescription: "Plateforme éducative web dédiée à l'apprentissage pratique du code, de l'informatique système et de l'électronique en Afrique francophone.",
    fullDescription: "SoyeTECH Academy est un projet d'environnement d'apprentissage immersif conçu pour combler le déficit de compétences pratiques en informatique et technologies émergentes. La plateforme intègre un éditeur de code interactif, des parcours progressifs par projet et des évaluations automatiques.",
    problemStatement: "Le manque d'outils interactifs accessibles pour apprendre la programmation et l'électronique avec un accompagnement contextualisé aux réalités techniques locales.",
    proposedSolution: "Une plateforme web légère, optimisée pour les connexions à bande passante modérée, combinant vidéos courtes, simulateur d'exercices pratiques et communauté d'entraide.",
    features: [
      "Éditeur de code interactif intégré directement dans le navigateur",
      "Parcours structurés : Programmation (Python, JS, React), Systèmes & Réseaux, Électronique",
      "Suivi de progression en temps réel avec badges et jalons d'apprentissage",
      "Système de quiz dynamiques et validation instantanée des exercices",
      "Mode hors-ligne partiel pour l'accès aux fiches de révision"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Python"],
    status: "en_cours",
    statusLabel: "En développement actif",
    imageUrl: "/src/assets/images/project_soyetech_academy_1794331228141.jpg",
    demoUrl: "#",
    githubUrl: "https://github.com/soyeevra/soyetech-academy",
    featured: true,
    order: 1
  },
  {
    id: "cvpro-ai",
    title: "CVPro AI",
    tagline: "Générateur intelligent et gestionnaire de curriculum vitae optimisés",
    category: "ai",
    shortDescription: "Application intelligente d'assistance à la rédaction et structuration de CV professionnels adaptés aux exigences des recruteurs IT.",
    fullDescription: "CVPro AI permet aux jeunes diplômés et techniciens de créer en quelques minutes des CV percutants, conformes aux standards de recrutement actuels. L'application suggère des formulations professionnelles ciblées et assure un export PDF net et élégant.",
    problemStatement: "De nombreux candidats qualifiés peinent à valoriser leurs compétences techniques et réalisations face aux filtres de recrutement automatisés.",
    proposedSolution: "Un générateur guidé pas à pas qui formate intelligemment les expériences, génère des résumés de profil clairs et propose des modèles typographiques ultra-lisibles.",
    features: [
      "Formulaire guidé par sections (Compétences, Expériences, Projets, Formations)",
      "Suggestions d'amélioration de style pour valoriser les verbes d'action",
      "Prévisualisation en temps réel sur double volet",
      "Exportation PDF vectorielle haute résolution sans déformation",
      "Sauvegarde sécurisée des versions multiples de CV"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Intelligence Artificielle", "jsPDF"],
    status: "en_cours",
    statusLabel: "En développement actif",
    imageUrl: "/src/assets/images/project_cvpro_ai_1794331229135.jpg",
    demoUrl: "#",
    githubUrl: "https://github.com/soyeevra/cvpro-ai",
    featured: true,
    order: 2
  },
  {
    id: "sankofa-educ",
    title: "Sankofa Educ",
    tagline: "Application éducative interactive pour le soutien scolaire et l'éveil scientifique",
    category: "education",
    shortDescription: "Application mobile et web conçue pour accompagner les élèves africains dans la maîtrise des sciences et des mathématiques.",
    fullDescription: "Inspirée du symbole Sankofa qui célèbre l'apprentissage par les racines pour bâtir l'avenir, Sankofa Educ met à disposition des leçons illustrées, des exercices interactifs adaptés aux programmes scolaires et un suivi personnalisé.",
    problemStatement: "Accès limité aux manuels récents et manque d'exercices interactifs progressifs pour les élèves préparant leurs examens scolaires.",
    proposedSolution: "Une interface intuitive et motivante, pensée pour fonctionner de manière fluide sur smartphones modestes avec contenu accessible sans connexion continue.",
    features: [
      "Modules complets de révision en Mathématiques et Sciences Physiques",
      "Fiches synthétiques téléchargeables pour travail autonome",
      "Tableau de bord de suivi pour les parents et enseignants",
      "Système de récompenses et gamification de la régularité",
      "Support multilingue et interface adaptée aux débutants"
    ],
    technologies: ["Flutter", "Dart", "Firebase", "UI/UX Mobile"],
    status: "conception",
    statusLabel: "En conception & prototypage",
    imageUrl: "/src/assets/images/project_sankofa_educ_1794331229605.jpg",
    demoUrl: "#",
    githubUrl: "https://github.com/soyeevra/sankofa-educ",
    featured: true,
    order: 3
  },
  {
    id: "sankofa-quiz",
    title: "Sankofa Quiz",
    tagline: "Plateforme de quiz éducatifs stimulants et compétitifs",
    category: "education",
    shortDescription: "Application ludique de questionnaires à choix multiples couvrant culture générale, sciences et technologies pour tester ses connaissances.",
    fullDescription: "Sankofa Quiz transforme l'évaluation en une expérience engageante. Conçue pour stimuler l'apprentissage entre pairs, l'application propose des défis chronométrés, des classements mensuels et des explications détaillées pour chaque bonne ou mauvaise réponse.",
    problemStatement: "L'apprentissage traditionnel manque souvent d'interactions motivantes permettant de mesurer rapidement ses acquis sans stress.",
    proposedSolution: "Une mécanique de jeu d'apprentissage dynamique avec banques de questions thématiques et retours pédagogiques immédiats.",
    features: [
      "Modes Solo contre la montre et Défi 1 contre 1",
      "Banque de plus de 1000 questions vérifiées en informatique, sciences et culture",
      "Explications détaillées fournies après chaque réponse",
      "Statistiques détaillées de progression par catégorie",
      "Gestionnaire de création de quiz pour les éducateurs"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Python API", "SQLite"],
    status: "en_cours",
    statusLabel: "En développement actif",
    imageUrl: "/src/assets/images/project_sankofa_educ_1794331229605.jpg",
    demoUrl: "#",
    githubUrl: "https://github.com/soyeevra/sankofa-quiz",
    featured: false,
    order: 4
  },
  {
    id: "fitconnect",
    title: "FITCONNECT",
    tagline: "Application mobile de mise en relation sportive et motivation communautaire",
    category: "mobile",
    shortDescription: "Réseau social sportif permettant de trouver des partenaires d'entraînement, des circuits de running et des événements sportifs à proximité.",
    fullDescription: "FITCONNECT connecte les passionnés de fitness, de course à pied et de sports collectifs. Grâce à une carte interactive et des filtres par niveau et discipline, les sportifs peuvent organiser des sessions de groupe et rester motivés ensemble.",
    problemStatement: "Difficulté pour les sportifs amateurs de trouver des partenaires réguliers du même niveau et partageant les mêmes créneaux horaires.",
    proposedSolution: "Une application mobile géolocalisée permettant de planifier des sorties sportives et de suivre ses séances dans un flux sécurisé.",
    features: [
      "Radar de recherche géolocalisé pour trouver des partenaires de sport à proximité",
      "Création d'événements de groupe (running du matin, street workout, football)",
      "Messagerie intégrée sécurisée entre sportifs",
      "Journal d'activités avec suivi des séances réalisées",
      "Système de réputation et de sécurité communautaire"
    ],
    technologies: ["Flutter", "Dart", "Geolocation API", "Firebase Auth", "Cloud Functions"],
    status: "conception",
    statusLabel: "En conception & prototypage",
    imageUrl: "/src/assets/images/project_fitconnect_app_1794331229671.jpg",
    demoUrl: "#",
    githubUrl: "https://github.com/soyeevra/fitconnect",
    featured: false,
    order: 5
  },
  {
    id: "nexora-ai",
    title: "NEXORA AI",
    tagline: "Laboratoire d'expérimentation et d'automatisation intelligente",
    category: "ai",
    shortDescription: "Projet de recherche appliquée explorant l'intégration de modèles d'IA générative pour l'assistance technique et l'automatisation de flux informatiques.",
    fullDescription: "NEXORA AI est un bac à sable technologique développé au sein de SoyeTECH pour explorer les cas d'usage concrets de l'intelligence artificielle dans l'assistance informatique, l'analyse automatique de logs système et la réponse aux requêtes clients fréquentes.",
    problemStatement: "Le temps considérable perdu dans les opérations de support informatique de premier niveau répétitives.",
    proposedSolution: "Un agent conversationnel et d'orchestration capable de classifier les incidents, d'orienter le technicien vers la solution exacte et d'automatiser des scripts système.",
    features: [
      "Traitement du langage naturel pour le diagnostic d'incidents techniques",
      "Génération automatique de recommandations de dépannage",
      "Connecteurs d'automatisation via scripts Python et bash",
      "Interface conversationnelle épurée avec historique d'interventions",
      "Respect strict de la confidentialité des données traitées"
    ],
    technologies: ["Python", "Large Language Models", "FastAPI", "React", "Vector Embeddings"],
    status: "conception",
    statusLabel: "En conception & recherche",
    imageUrl: "/src/assets/images/project_cvpro_ai_1794331229135.jpg",
    demoUrl: "#",
    githubUrl: "https://github.com/soyeevra/nexora-ai",
    featured: false,
    order: 6
  }
];

export const initialSkillCategories: SkillCategory[] = [
  {
    id: "informatique",
    title: "Informatique & Systèmes",
    iconName: "Server",
    description: "Maintenance matérielle, administration système et déploiement d'infrastructures informatiques fiables.",
    skills: [
      { id: "s1", name: "Maintenance informatique", description: "Diagnostic matériel et logiciel, dépannage de parcs de PC, nettoyage physique et optimisation des performances." },
      { id: "s2", name: "Installation & Configuration de systèmes", description: "Déploiement complet de systèmes d'exploitation, pilotes, périphériques et logiciels professionnels." },
      { id: "s3", name: "Diagnostic & Dépannage avancé", description: "Résolution méthodique des pannes d'écran bleu, corruptions de disque, infections logicielles et pannes d'alimentation." },
      { id: "s4", name: "Réseaux informatiques", description: "Câblage structuré RJ45, configuration de routeurs, switchs, adressage IP, Wi-Fi sécurisé et partages locaux." },
      { id: "s5", name: "Systèmes d'exploitation", description: "Maîtrise approfondie des environnements Windows (10/11/Server) et distributions Linux (Ubuntu, Debian)." }
    ]
  },
  {
    id: "developpement",
    title: "Développement Logiciel",
    iconName: "Code",
    description: "Conception d'applications web modernes et mobiles robustes, ergonomiques et modulaires.",
    skills: [
      { id: "s6", name: "HTML5, CSS3 & JavaScript moderne", description: "Fondations solides du web, interfaces fluides, responsive design mobile-first et sémantique propre." },
      { id: "s7", name: "React & TypeScript", description: "Développement de Single Page Applications complexes, typage strict, gestion d'états réactifs et composants réutilisables." },
      { id: "s8", name: "Python", description: "Scripts d'automatisation de tâches, traitement de données, programmation orientée objet et backend léger." },
      { id: "s9", name: "Flutter & Dart", description: "Développement d'applications multiplateformes pour Android et iOS avec architecture soignée." },
      { id: "s10", name: "Développement d'applications", description: "Architecture logicielle, consommation d'API REST, persistance locale et gestion du cycle de vie applicatif." }
    ]
  },
  {
    id: "electronique",
    title: "Électronique & Automatisme",
    iconName: "Cpu",
    description: "Compétences concrètes issues de la filière F2 et formation SEI : circuits, microcontrôleurs et prototypage.",
    skills: [
      { id: "s11", name: "Électronique analogique & numérique", description: "Lecture de schémas de principe, analyse des composants (diodes, transistors, amplis-op, portes logiques) et mesures au multimètre/oscilloscope." },
      { id: "s12", name: "Microcontrôleurs", description: "Programmation de puces embarquées, gestion des interruptions, protocoles I2C/SPI/UART." },
      { id: "s13", name: "Arduino & Prototypage", description: "Conception de prototypes interactifs avec capteurs (température, ultrasons, présence) et actionneurs (relais, servomoteurs)." },
      { id: "s14", name: "Maintenance électronique", description: "Recherche de pannes sur cartes imprimées, soudure/dessoudure de précision et remplacement de composants défectueux." },
      { id: "s15", name: "Automatisme & Systèmes programmables", description: "Logique combinatoire et séquentielle, automatisation de petits cycles électromécaniques." }
    ]
  },
  {
    id: "technologies",
    title: "Technologies & Innovation",
    iconName: "Shield",
    description: "Veille continue et intégration des outils numériques de pointe pour une transformation digitale durable.",
    skills: [
      { id: "s16", name: "Intelligence Artificielle", description: "Intégration d'API d'IA générative, prompt engineering appliqué, création d'assistants intelligents et automatisation de flux de travail." },
      { id: "s17", name: "Cybersécurité & Bonnes pratiques", description: "Sécurisation des postes de travail, gestion des droits d'accès, sensibilisation aux attaques de phishing et sauvegardes 3-2-1." },
      { id: "s18", name: "Environnement Linux", description: "Ligne de commande bash, gestion des paquets, permissions de fichiers et configuration de services locaux." },
      { id: "s19", name: "Outils numériques & Solutions digitales", description: "Mise en place de suites collaboratives, outils de gestion de projet, Git/GitHub et plateformes no-code/low-code." }
    ]
  }
];

export const initialExperiences: Experience[] = [
  {
    id: "exp-1",
    role: "Enseignant / Formateur de soutien en Mathématiques",
    organization: "Établissement ETIC (Côte d'Ivoire)",
    period: "2023 - 2024",
    location: "Abidjan, Côte d'Ivoire",
    type: "Enseignement & Pédagogie",
    description: "Animation de séances de soutien scolaire et de renforcement en mathématiques auprès des élèves. Élaboration de méthodes pédagogiques favorisant la compréhension logique, la rigueur méthodologique et la résolution de problèmes.",
    responsibilities: [
      "Préparation et animation de modules de cours et d'exercices d'application ciblés",
      "Évaluation continue de la progression des apprenants et remédiation personnalisée",
      "Vulgarisation des concepts mathématiques complexes par des exemples concrets",
      "Développement de l'autonomie et de la confiance des élèves face aux évaluations"
    ],
    verified: true
  },
  {
    id: "exp-2",
    role: "Technicien Support & Maintenance Informatique",
    organization: "SoyeTECH Solutions (Interventions Indépendantes)",
    period: "2023 - Présent",
    location: "Abidjan & Régions",
    type: "Technique & Terrain",
    description: "Prise en charge d'interventions de diagnostic, maintenance préventive et curative, dépannage réseau et optimisation logicielle pour professionnels, étudiants et particuliers.",
    responsibilities: [
      "Diagnostic complet de pannes matérielles et logicielles sur postes fixes et portables",
      "Installation, sécurisation et mise à jour de systèmes Windows et distributions Linux",
      "Mise en place et sécurisation de réseaux locaux (Wi-Fi, routeurs, câblage)",
      "Conseil technique pour le renouvellement ou l'amélioration d'équipements informatiques"
    ],
    verified: true
  }
];

export const initialEducation: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Baccalauréat F2 (Électronique)",
    field: "Systèmes Électroniques & Informatiques",
    institution: "Lycée Technique / Enseignement Technique",
    year: "Obtenu en 2023",
    details: "Formation technique approfondie en électronique analogique, logique numérique, instrumentation et mesures, schémas de circuits et automatisme industriel.",
    honestNote: "Diplôme officiel obtenu avec succès en 2023."
  },
  {
    id: "edu-2",
    degree: "Formation Supérieure en Systèmes Électroniques et Informatiques (SEI)",
    field: "Parcours Brevet de Technicien Supérieur (BTS)",
    institution: "Établissement d'Enseignement Supérieur Technique",
    year: "2023 - 2025",
    details: "Approfondissement des architectures microprocesseurs, programmation C/Python, protocoles réseaux, télécommunications et gestion de projets techniques.",
    honestNote: "Parcours de formation académique en cours de consolidation technique (parcours d'études suivi sans revendication anticipée du diplôme final)."
  }
];

export const initialServices: Service[] = [
  {
    id: "srv-maintenance",
    title: "Maintenance Informatique & Diagnostic",
    shortDescription: "Dépannage rapide, nettoyage préventif et optimisation des performances de vos ordinateurs et périphériques.",
    detailedDescription: "Un service complet pour redonner vie à vos ordinateurs lents, résoudre les pannes matérielles et logicielles, remplacer des composants défectueux et éliminer les logiciels malveillants.",
    iconName: "Wrench",
    deliverables: [
      "Diagnostic matériel et logiciel approfondi",
      "Nettoyage physique interne et changement de pâte thermique",
      "Optimisation du démarrage et suppression des programmes indésirables",
      "Sauvegarde préventive et récupération de données",
      "Rapport d'intervention et recommandations d'entretien"
    ],
    turnaroundTime: "24h à 48h selon la panne"
  },
  {
    id: "srv-installation",
    title: "Installation & Configuration de Logiciels",
    shortDescription: "Mise en place propre de systèmes d'exploitation, suites bureautiques, antivirus et logiciels métiers.",
    detailedDescription: "Installation et paramétrage d'environnements de travail fiables et sécurisés sous Windows ou Linux, avec tous les pilotes requis et les logiciels indispensables à votre productivité.",
    iconName: "Settings",
    deliverables: [
      "Installation propre de Windows 10/11 ou Linux avec licence",
      "Configuration complète des pilotes graphiques, audio et réseau",
      "Installation des logiciels bureautiques et outils essentiels",
      "Sécurisation antivirus et pare-feu",
      "Configuration de la sauvegarde automatique des dossiers clés"
    ],
    turnaroundTime: "Quelques heures sur rendez-vous"
  },
  {
    id: "srv-web",
    title: "Développement de Sites Web Modernes",
    shortDescription: "Création de sites vitrines, portfolios professionnels et plateformes web réactives et fluides.",
    detailedDescription: "Conception sur-mesure de sites internet élégants, optimisés pour les téléphones portables et référencés sur les moteurs de recherche pour valoriser votre activité ou vos services.",
    iconName: "Globe",
    deliverables: [
      "Design moderne, responsive et adapté à votre charte visuelle",
      "Structure rapide et accessible sur smartphones et ordinateurs",
      "Optimisation SEO pour un bon référencement naturel",
      "Formulaire de contact relié à votre email ou WhatsApp",
      "Hébergement et configuration de votre nom de domaine"
    ],
    turnaroundTime: "1 à 3 semaines"
  },
  {
    id: "srv-apps",
    title: "Création d'Applications Web & Mobiles",
    shortDescription: "Développement d'outils et d'applications sur-mesure répondant aux défis de votre activité.",
    detailedDescription: "De l'analyse du besoin jusqu'à la mise en ligne, création d'applications légères et performantes sous React, Flutter ou Python adaptées aux réalités des utilisateurs en Côte d'Ivoire.",
    iconName: "Smartphone",
    deliverables: [
      "Étude fonctionnelle et maquettage de l'interface",
      "Développement de l'application (web ou mobile Android)",
      "Intégration de bases de données et persistance fiable",
      "Phase de tests complets et correction de bugs",
      "Formation à l'utilisation et support technique"
    ],
    turnaroundTime: "Sur devis selon le cahier des charges"
  },
  {
    id: "srv-assistance",
    title: "Assistance Informatique & Support",
    shortDescription: "Accompagnement technique personnalisé à distance ou sur site pour particuliers et professionnels.",
    detailedDescription: "Une aide réactive pour débloquer un mot de passe, configurer une imprimante en Wi-Fi, résoudre un problème de connexion réseau ou vous guider pas à pas dans l'usage de vos outils.",
    iconName: "HelpCircle",
    deliverables: [
      "Assistance par prise en main à distance ou intervention sur site",
      "Configuration de boîtes emails et comptes professionnels",
      "Partage d'imprimantes et disques réseau en local",
      "Formation rapide aux gestes de sécurité numérique",
      "Disponibilité rapide via WhatsApp et téléphone"
    ],
    turnaroundTime: "Intervention sous 2h à 12h"
  },
  {
    id: "srv-digital",
    title: "Solutions Numériques & Automatisation",
    shortDescription: "Mise en place d'outils digitaux simples pour automatiser les tâches répétitives et gagner du temps.",
    detailedDescription: "Création de scripts Python d'automatisation, formulaires en ligne intelligents, gestionnaires de stock ou intégration d'outils d'intelligence artificielle adaptés à votre quotidien.",
    iconName: "Cpu",
    deliverables: [
      "Audit de vos processus manuels répétitifs",
      "Mise en place de scripts d'automatisation et modèles prêts à l'emploi",
      "Numérisation de vos documents et classements intelligents",
      "Intégration d'outils d'IA pour booster votre rédaction et vos analyses",
      "Guide d'utilisation documenté"
    ],
    turnaroundTime: "Selon la complexité du projet"
  },
  {
    id: "srv-multimedia",
    title: "Création Graphique & Multimédia",
    shortDescription: "Conception de visuels professionnels, logos, affiches et supports digitaux pour vos réseaux sociaux.",
    detailedDescription: "Valorisation de votre image de marque grâce à des créations graphiques percutantes, modernes et adaptées à tous les formats de publication.",
    iconName: "Palette",
    deliverables: [
      "Création de logos et chartes visuelles épurées",
      "Conception d'affiches publicitaires et flyers numériques",
      "Visuels optimisés pour WhatsApp, Facebook et LinkedIn",
      "Fichiers haute résolution prêts pour l'impression ou le web",
      "Déclinaisons aux dimensions requises"
    ],
    turnaroundTime: "3 à 5 jours ouvrés"
  }
];

export const initialStats: SiteStats = {
  totalViews: 428,
  cvDownloads: 54,
  projectViews: {
    "soyetech-academy": 182,
    "cvpro-ai": 154,
    "sankofa-educ": 118,
    "sankofa-quiz": 96,
    "fitconnect": 87,
    "nexora-ai": 92
  },
  messagesCount: 6,
  quotesCount: 4
};
