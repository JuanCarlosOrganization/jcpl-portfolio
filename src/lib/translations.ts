/* ─── Centralized translations for EN/FR ─── */

export type Locale = "en" | "fr";

export type FAQItem = {
  question: string;
  answer: string;
  featured: boolean;
};

const faqEn: FAQItem[] = [
  {
    question: "I ran Google Ads before and lost money. Why would this be different?",
    answer:
      "Because ads without a conversion system are just expensive traffic. You got clicks. The website that received them was not built to close. The targeting was not built around purchase intent. The landing page was probably your home page.\n\nI have seen this exact story more times than I can count. A business owner spends $500 to $1,000, gets clicks, gets zero calls, and concludes ads do not work in their industry.\n\nThe clicks were real. Everything behind them was not built. I build it first. Then the ads run. When the funnel exists before the traffic, the calls come. The difference between losing money on ads and 46x return on ad spend is the infrastructure that receives the traffic.",
    featured: true,
  },
  {
    question: "What exactly is the Growth Architecture?",
    answer:
      "It's a complete acquisition system. Not just a website, not just ads. All of it, built together so each part makes the others stronger. Positioning, conversion website, Google Ads, AI automation, lead qualification, monthly optimization. Built once. Improved every month. It's the last marketing system you will need to think about.",
    featured: false,
  },
  {
    question: "How fast will I see results?",
    answer:
      "Fast build from signed agreement to live system. That includes the diagnostic audit, full website build, and campaign setup. Most clients see their first inbound call within weeks of going live. The full system reaches peak efficiency at 60 to 90 days as the SEO compounds and the ad campaigns optimize. The tracking dashboard shows you every call, every cost, and every source from day one.",
    featured: false,
  },
  {
    question: "What happens if I already have a website?",
    answer:
      "If it converts, I keep it. If it does not, I rebuild it around one goal: booking calls.",
    featured: false,
  },
  {
    question: "What is the minimum I need to invest in ads?",
    answer:
      "I recommend starting at $500 per month. At $33 per qualified call, that is roughly 15 calls. One closed job usually covers the entire system cost.",
    featured: false,
  },
  {
    question: "How is this different from hiring a regular agency?",
    answer:
      "An agency delivers a project and moves to the next client. I measure my success by one number: qualified calls on your calendar. If that number is not growing every month, I have not done my job. I own the full system, which means nothing falls through the gaps between vendors. And I have never sent a report full of impressions as a substitute for actual results.",
    featured: false,
  },
  {
    question: "What if it does not work?",
    answer:
      "If I do not produce a measurable result in the first 90 days, I keep working until I do. I do not take clients I do not believe I can help. That is why there is an application. I review your business before agreeing to work with you, not after you have paid.",
    featured: false,
  },
  {
    question: "What does this cost?",
    answer:
      "A Growth Partnership starts at $2,500/month. That covers the full acquisition system: conversion website, local SEO, Google Ads, and weekly optimization. Ad spend goes directly to Google, not to me. The initial term is 90 days, then month-to-month. No hidden fees.",
    featured: false,
  },
  {
    question: "Who is NOT a good fit?",
    answer:
      "Businesses under $5K per month in revenue. Businesses wanting a logo, a brochure site, or a one-off project. Anyone not ready to commit to a 90-day initial run. Anyone who wants to test the waters with no real system behind it.",
    featured: false,
  },
  {
    question: "Who is this built for?",
    answer:
      "Service businesses generating $5K or more per month that rely too heavily on referrals and want a predictable, scalable way to get new clients from the internet. Painters, barbershops, RV rental companies, dental clinics, and any local service where the phone needs to ring with qualified buyers.",
    featured: false,
  },
];

const faqFr: FAQItem[] = [
  {
    question: "J'ai fait du Google Ads avant et j'ai perdu de l'argent. Pourquoi ce serait différent?",
    answer:
      "Parce que les annonces sans système de conversion ne sont que du trafic coûteux. Vous avez eu des clics. Le site qui les a reçus n'était pas conçu pour convertir. Le ciblage n'était pas axé sur l'intention d'achat. La page d'atterrissage était probablement votre page d'accueil.\n\nJ'ai vu cette histoire plus de fois que je ne peux compter. Un propriétaire d'entreprise dépense 500 à 1000 $, obtient des clics, zéro appel, et conclut que les annonces ne fonctionnent pas dans son secteur.\n\nLes clics étaient réels. Tout ce qui les suivait n'était pas construit. Je le construis d'abord. Ensuite les annonces tournent. Quand l'entonnoir existe avant le trafic, les appels arrivent. La différence entre perdre de l'argent en annonces et un retour de 46x sur l'investissement publicitaire, c'est l'infrastructure qui reçoit le trafic.",
    featured: true,
  },
  {
    question: "Qu'est-ce que la Growth Architecture exactement?",
    answer:
      "C'est un système d'acquisition complet. Pas seulement un site web, pas seulement des annonces. Tout cela, construit ensemble pour que chaque partie renforce les autres. Positionnement, site de conversion, Google Ads, automatisation IA, qualification des leads, optimisation mensuelle. Construit une fois. Amélioré chaque mois. C'est le dernier système marketing dont vous aurez besoin de penser.",
    featured: false,
  },
  {
    question: "En combien de temps verrai-je des résultats?",
    answer:
      "Construction rapide entre la signature et le système en ligne. Cela inclut l'audit diagnostique, la construction complète du site et la configuration des campagnes. La plupart des clients reçoivent leur premier appel dans les semaines suivant le lancement. Le système atteint son efficacité maximale en 60 à 90 jours.",
    featured: false,
  },
  {
    question: "Et si j'ai déjà un site web?",
    answer:
      "S'il convertit, je le garde. Sinon, je le reconstruis autour d'un seul objectif: réserver des appels.",
    featured: false,
  },
  {
    question: "Quel est le minimum à investir en annonces?",
    answer:
      "Je recommande de commencer à 500 $ par mois. À 33 $ par appel qualifié, cela fait environ 15 appels. Un seul contrat conclu couvre généralement le coût du système.",
    featured: false,
  },
  {
    question: "En quoi est-ce différent d'embaucher une agence classique?",
    answer:
      "Une agence livre un projet et passe au client suivant. Je mesure mon succès par un seul chiffre: les appels qualifiés dans votre calendrier. Si ce nombre ne croît pas chaque mois, je n'ai pas fait mon travail. Je possède le système entier, donc rien ne tombe entre les mailles des prestataires. Et je n'ai jamais envoyé un rapport plein d'impressions en guise de résultats concrets.",
    featured: false,
  },
  {
    question: "Et si ça ne fonctionne pas?",
    answer:
      "Si je ne peux pas faire bouger les choses dans les 90 premiers jours, je continue jusqu'à y arriver. Je ne prends pas de clients que je ne crois pas pouvoir aider. C'est pourquoi il y a une candidature. J'examine votre entreprise avant de m'engager, pas après que vous ayez payé.",
    featured: false,
  },
  {
    question: "Combien ça coûte?",
    answer:
      "Un Partenariat de Croissance commence à 2 500 $/mois. Cela couvre l'ensemble du système d'acquisition : site optimisé pour la conversion, SEO local, Google Ads et optimisation hebdomadaire. Le budget pub va directement à Google, pas à moi. Durée initiale de 90 jours, puis mois par mois. Aucun frais caché.",
    featured: false,
  },
  {
    question: "Qui n'est PAS un bon fit?",
    answer:
      "Les entreprises à moins de 5 000 $ de revenus par mois. Celles qui veulent un logo, un site vitrine ou un projet ponctuel. Toute personne pas prête à s'engager pour une période initiale de 90 jours. Toute personne qui veut tester sans réel système derrière.",
    featured: false,
  },
  {
    question: "Pour qui est-ce conçu?",
    answer:
      "Les entreprises de services générant 5 000 $ ou plus par mois qui comptent trop sur les références et veulent une manière prévisible et évolutive d'obtenir de nouveaux clients sur Internet. Peintres, barbiers, sociétés de location de VR, cliniques dentaires, et tout service local où le téléphone doit sonner avec des acheteurs qualifiés.",
    featured: false,
  },
];

export type TranslationsShape = {
  nav: {
    home: string;
    services: string;
    results: string;
    about: string;
    apply: string;
    pricing: string;
    seeResults: string;
  };
  faq: {
    eyebrow: string;
    heading: string;
    subheading: string;
    mostCommon: string;
    stillQuestion: string;
    applyCta: string;
    items: FAQItem[];
  };
  spots: {
    heading: string;
    paragraph: string;
    lastThree: string;
    proof1: string;
    proof2: string;
    proof3: string;
    oneSpot: string;
    applyParagraph: string;
    applyCta: string;
    seeResults: string;
    reply24: string;
    noContracts: string;
    threeSpots: string;
    compactHeading: string;
    compactSubline: string;
    confidential: string;
    noCommitment: string;
  };
  finalCta: {
    button: string;
  };
  footer: {
    navigation: string;
    legal: string;
    privacy: string;
    terms: string;
    rights: string;
    tagline: string;
  };
  common: {
    skipToContent: string;
    menu: string;
    close: string;
  };
  speedPopup: {
    eyebrow: string;
    title: string;
    body: string;
    highlight: string;
    closeLabel: string;
  };
  benefits: {
    eyebrow: string;
    headline: string;
    headlineBold: string;
    headlineItalic: string;
    paragraph: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    card4Title: string;
    card4Desc: string;
    card5Title: string;
    card5Desc: string;
    card6Title: string;
    card6Desc: string;
    card7Title: string;
    card7Desc: string;
  };
  faqBooking: {
    heading: string;
    headlineItalic?: string;
    supportingLine: string;
    items: Array<{ question: string; answer: string }>;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
    ctaEmail: string;
    ctaEmailLabel: string;
  };
  bookCall: {
    eyebrow: string;
    headline: string;
    italicSubline: string;
    body: string;
    bullet1: string;
    bullet2: string;
    bullet3: string;
    cta: string;
    notice: string;
  };
  homepage: {
    hero: {
      eyebrow: string;
      h1Line1: string;
      h1Line2: string;
      subHeadline: string;
      body: string;
      cta: string;
      microCopy: string;
      seeResults: string;
    };
    verifiedCard: {
      title: string;
      revenue: string;
      fromAdSpend: string;
      location: string;
      returnOnAd: string;
      perQualifiedCall: string;
      toFirstBookedCall: string;
      screenshotLabel: string;
    };
    statsBar: {
      revenueLabel: string;
      costPerCall: string;
      medianDays: string;
      activeClients: string;
      inBuild: string;
    };
    reality: {
      eyebrow: string;
      h2: string;
      sub: string;
      goldLine: string;
      notificationTime: string;
      notificationLine1: string;
      notificationLine2: string;
      notificationLine3: string;
      notificationLine4: string;
      notificationLine5: string;
      card01Title: string;
      card01Body: string;
      card02Title: string;
      card02Body: string;
      card03Title: string;
      card03Body: string;
      card04Title: string;
      card04Body: string;
    };
    provenOutcomes: {
      eyebrow: string;
      h2: string;
      h2Main: string;
      h2Italic: string;
      sub: string;
      card1Label: string;
      card1Revenue: string;
      card1Return: string;
      card1Verified: string;
      card2Label: string;
      card2Page1: string;
      card2Cost: string;
      card2Context: string;
      confirmingPattern: string;
      acrossAll: string;
      localSeo: string;
      localSeoSub: string;
      costPerCallLabel: string;
      costPerCallSub: string;
      speedLabel: string;
      speedSub: string;
      seeAllResults: string;
    };
    calculator: {
      eyebrow: string;
      h2: string;
      sub: string;
      avgJobValue: string;
      qualifiedCalls: string;
      calls: string;
      disclaimer: string;
      monthlyInvestment: string;
      projectedRevenue: string;
      returnOnLeadCost: string;
      returnSuffix: string;
      cta: string;
    };
    acquisitionSystem: {
      eyebrow: string;
      h2: string;
      sub: string;
      attract: string;
      convert: string;
      compound: string;
      googleAds: string;
      googleAdsSub: string;
      localSeo: string;
      localSeoSub: string;
      geoAi: string;
      geoAiSub: string;
      conversionWebsite: string;
      conversionWebsiteSub: string;
      conversionCopy: string;
      conversionCopySub: string;
      aiVoiceAgent: string;
      aiVoiceAgentSub: string;
      weeklyOptimization: string;
      weeklyOptimizationSub: string;
      monthlyReporting: string;
      monthlyReportingSub: string;
      expansionLayers: string;
      expansionLayersSub: string;
      seeFullSystem: string;
      attractSub: string;
      convertSub: string;
      compoundSub: string;
      footerLine: string;
      websiteCalloutLabel: string;
      websiteCalloutHeadline: string;
      websiteCalloutBody: string;
    };
    logoTicker: {
      label: string;
      footer: string;
    };
    oneOperator: {
      eyebrow: string;
      h2: string;
      p1: string;
      p2: string;
      p3: string;
      tag1: string;
      tag2: string;
      tag3: string;
      closing: string;
      link: string;
      videoLabel: string;
      videoSoon: string;
    };
    testimonial: {
      quote: string;
      name: string;
      business: string;
      below: string;
      seeResults: string;
    };
    pricing: {
      eyebrow: string;
      h2: string;
      sub: string;
      byApplication: string;
      workDirectly: string;
      noAccountManagers: string;
      spotOpen: string;
      growthPartnership: string;
      price: string;
      description: string;
      acquisitionSystem: string;
      item1: string;
      item2: string;
      item3: string;
      item4: string;
      ownershipOptimization: string;
      item5: string;
      item6: string;
      item7: string;
      item8: string;
      shortApplication: string;
      seeInvestment: string;
      cta: string;
      term1Title: string;
      term1Sub: string;
      term2Title: string;
      term2Sub: string;
      term3Title: string;
      term3Sub: string;
    };
    fitNotFit: {
      eyebrow: string;
      h2: string;
      sub: string;
      rightFitTitle: string;
      rightFit1: string;
      rightFit2: string;
      rightFit3: string;
      rightFit4: string;
      rightFit5: string;
      notFitTitle: string;
      notFit1: string;
      notFit2: string;
      notFit3: string;
      notFit4: string;
      notFit5: string;
      closingBold: string;
      closingSub: string;
      belowCta: string;
      cta: string;
      fullList: string;
    };
    diagnostic: {
      eyebrow: string;
      h2: string;
      addedLine: string;
      step1: string;
      step2: string;
      step3: string;
      note: string;
      loading: string;
      iframeTitle: string;
    };
    about: {
      label: string;
      headline: string;
      p1: string;
      p2: string;
      p3: string;
      stats: string;
    };
    heroSection: {
      headlineBefore: string;
      accentWord: string;
      headlineAfter: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    proofStrip: {
      stat1Label: string;
      stat1Sub: string;
      stat2Label: string;
      stat2Sub: string;
    };
    marketingShowcase: {
      eyebrow: string;
      rotatingPhrases: string[];
      subline: string;
      cards: Array<{ eyebrow: string; title: string }>;
    };
    problemGrid: {
      eyebrow: string;
      heading: string;
      subtitle: string;
      problem1Title: string;
      problem1Desc: string;
      problem2Title: string;
      problem2Desc: string;
      problem3Title: string;
      problem3Desc: string;
      closingBefore: string;
      closingAccent: string;
      closingAfter: string;
    };
    differentiationSection: {
      eyebrow: string;
      heading: string;
      leftHeader: string;
      leftItem1: string;
      leftItem2: string;
      leftItem3: string;
      rightHeader: string;
      rightItem1: string;
      rightItem2: string;
      rightItem3: string;
      closingLine: string;
    };
    acquisitionSlider: {
      eyebrow: string;
      heading: string;
      subtitle: string;
      step1Title: string;
      step1Desc: string;
      step1Proof: string;
      step2Title: string;
      step2Desc: string;
      step2Proof: string;
      step3Title: string;
      step3Desc: string;
      step3Proof: string;
      cta: string;
    };
    whatIBuildSlider: {
      eyebrow: string;
      heading: string;
      subtitle: string;
      svc1Title: string;
      svc1Desc: string;
      svc1Stat: string;
      svc2Title: string;
      svc2Desc: string;
      svc2Stat: string;
      svc3Title: string;
      svc3Desc: string;
      svc3Stat: string;
      svc4Title: string;
      svc4Desc: string;
      svc4Stat: string;
      svc5Title: string;
      svc5Desc: string;
      svc5Stat: string;
      svc6Title: string;
      svc6Desc: string;
      svc6Stat: string;
      svc6Badge: string;
      svc7Title: string;
      svc7Desc: string;
      svc7Stat: string;
      closingLine: string;
      cta: string;
    };
    testimonialBlock: {
      title: string;
      subtitle: string;
      seeAllResults: string;
      quote1: string;
      quote2: string;
      quote3: string;
      quote4: string;
      quote5: string;
    };
    pricingStatement: {
      eyebrow: string;
      heading: string;
      subtitle: string;
      growthFeatures: string[];
      scaleAdditions: string[];
      growthTag: string;
      growthName: string;
      growthProof: string;
      growthGuarantee: string;
      growthConditions: string;
      growthCta: string;
      growthMicro: string;
      scaleTag: string;
      scaleName: string;
      scaleIntro: string;
      scaleProof: string;
      scaleGuarantee: string;
      scaleConditions: string;
      scaleCta: string;
      scaleMicro: string;
      trustLine: string;
      badge1: string;
      badge2: string;
      badge3: string;
    };
    diagnosticForm: {
      sectionLabel: string;
      heading: string;
      body: string;
      deliverablesTitle: string;
      deliverable1: string;
      deliverable2: string;
      deliverable3: string;
      deliverable4: string;
      deliverable5: string;
      deliverablesNote: string;
      step1Title: string;
      step1Desc: string;
      step2Title: string;
      step2Desc: string;
      step3Title: string;
      step3Desc: string;
      placeholderName: string;
      placeholderBusiness: string;
      placeholderWebsite: string;
      placeholderEmail: string;
      submitText: string;
      submittingText: string;
      successTitle: string;
      successBody: string;
      errorTitle: string;
      errorBody: string;
      tryAgain: string;
      microcopy: string;
    };
    stickyMobileCta: string;
    howWeWork: {
      phaseChips: Record<string, string[]>;
      kickerLine: string;
    };
    featuredCaseStudy: {
      leadResultLabel: string;
      revenueLine: string;
      returnLine: string;
      verifiedDate: string;
      liveAccount: string;
      testimonialQuote: string;
      testimonialAttribution: string;
      viewCaseStudy: string;
      compactClients: Array<{
        badge: string;
        niche: string;
        stat: string;
        detail: string;
      }>;
      revenueSummary: string;
      seeFullCaseStudies: string;
    };
    footerExtra: {
      howItWorks: string;
      pricing: string;
      apply: string;
      operatedFrom: string;
    };
    faqHeading: string;
    faqHeadingItalic: string;
    faqStillQuestions: string;
    faqApplyCta: string;
    faqPreferEmail: string;
  };
  services: {
    hero: {
      eyebrow: string;
      h1: string;
      body1: string;
      body2: string;
      microResult: string;
      cta1: string;
      cta2: string;
      trust1: string;
      trust2: string;
      trust3: string;
      rotating: string[];
    };
    proofBanner: {
      stat1Sub: string;
      stat2Sub: string;
      stat3Sub: string;
      days: string;
    };
    architecture: {
      sectionLabel: string;
      heading: string;
      body1: string;
      body2: string;
      coreLabel: string;
      coreHeading: string;
      coreSub: string;
      expansionLabel: string;
      expansionHeading: string;
      expansionSub: string;
      core: Array<{ title: string; copy: string }>;
      layers: Array<{
        label: string;
        title: string;
        copy: string;
        items: string[];
        investment: string;
        investmentDetail: string;
        scarcity?: string;
      }>;
    };
    techStack: {
      label: string;
      heading: string;
      sub: string;
      items: Array<{ name: string; role: string; detail: string }>;
    };
    finalCta: {
      howLabel: string;
      howHeading: string;
      howSub: string;
      applyLabel: string;
      applyHeading: string;
      applyBody: string;
      proofText: string;
      button: string;
      microcopy: string;
    };
    guarantees: {
      standardLabel: string;
      standardHeading: string;
      standardBody: string;
      standardVerified: string;
      milestone: string;
      milestoneBody: string;
      ownership: string;
      ownershipBody: string;
      preEngagement: string;
      preEngagementBody: string;
    };
  };
  results: {
    hero: {
      eyebrow: string;
      h1: string;
      sub: string;
      stat1Value: string;
      stat1Label: string;
      stat1Note: string;
      stat2Value: string;
      stat2Label: string;
      stat2Note: string;
      stat3Value: string;
      stat3Label: string;
      stat3Note: string;
      stat4Value: string;
      stat4Label: string;
      stat4Note: string;
    };
    flagship: {
      sectionMarker: string;
      verified: string;
      viewCaseStudy: string;
      scrollToProof: string;
      verificationContext: string;
      verifyLine1: string;
      verifyLine2: string;
      verifyLine3: string;
      viewMetrics: string;
    };
    secondary: {
      sectionMarker: string;
      headline: string;
      infrastructureBuilt: string;
      verified: string;
      viewCaseStudy: string;
      outcome: string;
      newClients: string;
      timeframe: string;
      days: string;
      contextNote: string;
    };
    cta: {
      eyebrow: string;
      heading: string;
      body: string;
      trust1: string;
      trust2: string;
      trust3: string;
      button: string;
      link: string;
    };
    portfolio: {
      recentlyDelivered: string;
      recentSub: string;
      activeBuilds: string;
      inProgress: string;
      activeSub: string;
    };
    disclaimer: string;
  };
  about: {
    hero: {
      sectionLabel: string;
      h1: string;
      subHead: string;
      body1: string;
      body2: string;
      bullet1: string;
      bullet2: string;
      bullet3: string;
      cta1: string;
      cta2: string;
      trust1: string;
      trust2: string;
      trust3: string;
    };
    workingWithMe: {
      overline: string;
      headline: string;
      phase1Title: string;
      phase1Desc: string;
      phase2Title: string;
      phase2Desc: string;
      phase3Title: string;
      phase3Desc: string;
    };
    cta: {
      headline: string;
      sub: string;
      guarantee: string;
      primary: string;
      secondary: string;
      trust1: string;
      trust2: string;
    };
    metrics: {
      label1: string;
      note1: string;
      label2: string;
      label3: string;
      updated: string;
    };
  };
  aboutPage: {
    operatorHeading: string;
    card1Title: string;
    card1Body: string;
    card2Title: string;
    card2Body: string;
    card3Title: string;
    card3Body: string;
    ctaHeading: string;
    ctaSub: string;
    ctaButton: string;
    ctaTrust: string;
  };
  applyPage: {
    heading: string;
    sub: string;
    placeholderName: string;
    placeholderBusiness: string;
    placeholderWebsite: string;
    placeholderEmail: string;
    submitButton: string;
    submitting: string;
    trustLine: string;
    proofQuote: string;
    successTitle: string;
    successBody: string;
    errorTitle: string;
    tryAgain: string;
  };
  resultsPage: {
    eyebrow: string;
    heading: string;
    sub: string;
    revenueLine: string;
    returnLine: string;
    verifiedLine: string;
    testimonialQuote: string;
    whatWasBuilt: string;
    deliverables: string;
    viewLiveSite: string;
    ctaHeading: string;
    ctaSub: string;
    ctaButton: string;
    ctaTrust: string;
    client1Badge: string;
    client1Title: string;
    client1Desc: string;
    client1Testimonial: string;
    client2Badge: string;
    client2Title: string;
    client2Desc: string;
    client2Testimonial: string;
    client3Badge: string;
    client3Title: string;
    client3Desc: string;
    client3Testimonial: string;
    client4Badge: string;
    client4Title: string;
    client4Desc: string;
  };
};

export const translations: Record<Locale, TranslationsShape> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      results: "Results",
      about: "About",
      apply: "Apply",
      pricing: "Pricing",
      seeResults: "See Results",
    },
    faq: {
      eyebrow: "QUESTIONS",
      heading: "Questions Serious Buyers Ask.",
      subheading: "I would rather answer the hard ones here than waste your time on a call.",
      mostCommon: "Most common objection",
      stillQuestion: "Still have a question I did not answer? Let us talk.",
      applyCta: "Apply to be a Partner →",
      items: faqEn,
    },
    spots: {
      heading: "Ready to Build Your System?",
      paragraph:
        "Every system gets the weekly attention it needs to compound. I will not dilute the work.",
      lastThree: "Recent clients who applied:",
      proof1: "One went live in 9 days.",
      proof2: "One booked their first qualified call on day 7.",
      proof3: "One hit $2,716 in revenue in month one.",
      oneSpot: "One spot is open right now.",
      applyParagraph:
        "Apply now and I will review your business within 24 hours. If I cannot produce a return for you, I will tell you that on the review call, not after you have paid anything.",
      applyCta: "Apply to be a Partner",
      seeResults: "See Results →",
      reply24: "Reply within 24 hours",
      noContracts: "No long-term contracts",
      threeSpots: "Selective partnerships",
      compactHeading: "One operator. Full accountability. Apply now.",
      compactSubline: "If I can help, you will hear back within 24 hours.",
      confidential: "100% confidential",
      noCommitment: "No commitment",
    },
    finalCta: {
      button: "Apply to be a Partner",
    },
    footer: {
      navigation: "Navigation",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rights: "All rights reserved",
      tagline: "Growth infrastructure for local service businesses.",
    },
    common: {
      skipToContent: "Skip to content",
      menu: "Menu",
      close: "Close",
    },
    speedPopup: {
      eyebrow: "My Promise",
      title: "SPEED",
      body: "I respect your time as much as I respect mine. This is why ",
      highlight: "most systems launch within two weeks.",
      closeLabel: "Close popup",
    },
    benefits: {
      eyebrow: "SYSTEM BENEFITS",
      headline: "Finally a System",
      headlineBold: "Finally a system",
      headlineItalic: "that actually works.",
      paragraph:
        "I replace scattered vendors and guesswork with one connected growth system built to turn attention into qualified calls.",
      card1Title: "One Partner. One Growth System.",
      card1Desc: "One operator owns the full pipeline.",
      card2Title: "Engineered to Convert",
      card2Desc: "Every page engineered to drive booked calls.",
      card3Title: "Tracked From Click to Revenue",
      card3Desc: "Clear attribution and reporting.",
      card4Title: "Launch in Weeks, Not Months",
      card4Desc: "Clean execution without months of delays.",
      card5Title: "You Own Everything",
      card5Desc: "Site + data + infrastructure stays yours.",
      card6Title: "Full Visibility",
      card6Desc: "SEO + conversion gains stack monthly.",
      card7Title: "Elite Execution",
      card7Desc: "",
    },
    faqBooking: {
      heading: "Every question I hear before someone signs. ",
      headlineItalic: "Answered.",
      supportingLine: "Get clear answers before you apply.",
      items: [
        { question: "How fast can this go live?", answer: "Full system live within 2 to 4 weeks depending on onboarding speed." },
        { question: "Do you handle Google Ads?", answer: "Yes. Google Ads is built into every engagement. I handle campaign setup, keyword targeting, ad copy, and ongoing optimization. Every campaign targets purchase-intent searches only. People actively looking to hire, not browsers. Cost per call is tracked from day one." },
        { question: "Do I own the website and assets?", answer: "Everything built belongs to your business. The website, ad accounts, analytics, and tracking are all in your name. If you ever leave, you take everything with you. Nothing is held by me as leverage." },
        { question: "What happens after launch?", answer: "Every week I review what is working and cut what is not. Every month I send a revenue report with real numbers: calls generated, cost per call, revenue attributed to the system. The system compounds: your cost per call goes down the longer it runs." },
        { question: "What is the minimum ad spend?", answer: "I recommend starting at $500/month in ad spend. Ad spend goes directly to Google, not to me. The right budget is discussed during the fit process." },
      ],
      ctaTitle: "Apply to be a Partner",
      ctaBody: "I review your market before the call. I show you exactly where you are losing calls and what fixing it is worth.",
      ctaButton: "Apply to be a Partner →",
      ctaEmail: "juan@clientgrowth.ca",
      ctaEmailLabel: "Prefer email?",
    },
    bookCall: {
      eyebrow: "BOOK A CALL",
      headline: "Book your diagnostic. I will tell you if I can help.",
      italicSubline: "",
      body: "I will review your market, your current pipeline, and the fastest path to qualified calls. If I cannot produce a return, I will tell you that directly before you pay anything.",
      bullet1: "15 minutes",
      bullet2: "Clear next steps",
      bullet3: "No bloated sales process",
      cta: "Apply to be a Partner",
      notice: "I run a limited number of diagnostic calls per week. For a faster response, email juan@clientgrowth.ca for a same-day reply.",
    },
    homepage: {
      hero: {
        eyebrow: "Growth Infrastructure • Service Businesses",
        h1Line1: "$41,085 from $900 in ad spend.",
        h1Line2: "30 days.",
        subHeadline: "I build the system. You answer the phone.",
        body: "Google Ads, SEO, and conversion websites. One system, one owner, zero handoffs.",
        cta: "Apply to be a Partner",
        microCopy: "One call. I tell you if I can help.",
        seeResults: "See results →",
      },
      verifiedCard: {
        title: "Verified Client Result",
        revenue: "revenue",
        fromAdSpend: "from $900 ad spend · 30 days",
        location: "RV Rental · Texas",
        returnOnAd: "return on ad spend",
        perQualifiedCall: "per qualified call",
        toFirstBookedCall: "to first booked call",
        screenshotLabel: "Live Google Ads account · Verified February 2026",
      },
      statsBar: {
        revenueLabel: "REVENUE GENERATED",
        costPerCall: "avg cost per qualified call",
        medianDays: "median to first booked call",
        activeClients: "Active Clients",
        inBuild: "+2 in build",
      },
      reality: {
        eyebrow: "THE REALITY",
        h2: "Your work is good. Your pipeline should not be this fragile.",
        sub: "Untracked demand. A site that does not convert. No follow-up.",
        goldLine: "Most competitors do not work harder. They run a system.",
        notificationTime: "8:47 AM · TODAY",
        notificationLine1: "Someone in your city searched for your service.",
        notificationLine2: "They found a competitor first.",
        notificationLine3: "That phone rang. Yours did not.",
        notificationLine4: "Not because your work is worse.",
        notificationLine5: "Because their system was there. Yours was not.",
        card01Title: "People in your city are searching. You are easy to miss.",
        card01Body: "If you are not on Google, Maps, or AI search, that call goes elsewhere, before you knew it existed.",
        card02Title: "Your website looks fine. It does not convert.",
        card02Body: "A site that cannot answer 'why you, why now' is leakage. Visitors feel nothing and call whoever was clearer.",
        card03Title: "You are doing marketing on top of everything else.",
        card03Body: "Inconsistent, reactive, and easy to drop when things get busy. A system tied to your hours cannot compound.",
        card04Title: "Referrals keep you alive. They do not build predictability.",
        card04Body: "Good months. Quiet months. No control. If your pipeline depends on word of mouth, you are waiting, not growing.",
      },
      provenOutcomes: {
        eyebrow: "PROVEN OUTCOMES",
        h2: "$41,085 from $900 in ad spend.",
        h2Main: "$41,085 from $900 in ad spend.",
        h2Italic: "",
        sub: "Revenue, qualified calls, and search visibility. Not three separate wins. The same connected system, running continuously.",
        card1Label: "RV RENTAL · TEXAS · GOOGLE ADS",
        card1Revenue: "in revenue. First 30 days.",
        card1Return: "$46 returned per $1 of ad spend.",
        card1Verified: "Live account. Last verified February 2026.",
        card2Label: "BARBERSHOP · MONTREAL · LOCAL SEO",
        card2Page1: "in under 60 days",
        card2Cost: "avg cost per qualified call",
        card2Context: "Competitive Montreal market. Custom site and booking funnel delivered. Last verified Q1 2026.",
        confirmingPattern: "Confirming the pattern",
        acrossAll: "ACROSS ALL ACTIVE PARTNERSHIPS",
        localSeo: "LOCAL SEO",
        localSeoSub: "Under 60 days. Competitive Montreal market.",
        costPerCallLabel: "COST PER QUALIFIED CALL",
        costPerCallSub: "Avg per qualified inbound call. All active accounts.",
        speedLabel: "SPEED TO FIRST BOOKED CALL",
        speedSub: "Median across all active accounts.",
        seeAllResults: "See all client results →",
      },
      calculator: {
        eyebrow: "Unit Economics",
        h2: "Run the Math.",
        sub: "At $33 per qualified call, this is what the numbers look like for your business. Not projections. Just math.",
        avgJobValue: "Average job value",
        qualifiedCalls: "Qualified calls needed per month",
        calls: "calls",
        disclaimer: "Directional planning logic based on current benchmark averages. Not a guarantee. $33/call average verified Q4 2025.",
        monthlyInvestment: "Monthly Investment",
        projectedRevenue: "Projected Monthly Revenue",
        returnOnLeadCost: "Return on Lead Cost",
        returnSuffix: "× return",
        cta: "Apply to be a Partner →",
      },
      acquisitionSystem: {
        eyebrow: "THE ACQUISITION SYSTEM",
        h2: "What drives qualified calls.",
        sub: "Not six separate services. One connected acquisition system. Each layer feeds the next. The longer it runs, the cheaper each call gets.",
        attract: "ATTRACT",
        convert: "CONVERT",
        compound: "COMPOUND",
        googleAds: "Google Ads",
        googleAdsSub: "High-intent buyers, captured first",
        localSeo: "Local SEO",
        localSeoSub: "Ranking where your market searches",
        geoAi: "GEO / AI Search",
        geoAiSub: "Visible in ChatGPT and AI answers",
        conversionWebsite: "Conversion Website",
        conversionWebsiteSub: "Pages that turn visits into calls",
        conversionCopy: "Conversion Copy",
        conversionCopySub: "Language written to close",
        aiVoiceAgent: "AI Voice Agent",
        aiVoiceAgentSub: "Every call answered, 24/7",
        weeklyOptimization: "Weekly Optimization",
        weeklyOptimizationSub: "Continuous performance testing",
        monthlyReporting: "Monthly Reporting",
        monthlyReportingSub: "Clear revenue and ROI tracking",
        expansionLayers: "Expansion Layers",
        expansionLayersSub: "New channels as your market grows",
        seeFullSystem: "See the full system",
        attractSub: "Pull in buyers",
        convertSub: "Turn visits into calls",
        compoundSub: "Lower cost over time",
        footerLine: "The longer it runs, the cheaper each call gets.",
        websiteCalloutLabel: "Your Vision, Built to Convert",
        websiteCalloutHeadline: "You have an idea for how your site should look and feel. I build it. Designed from scratch around your brand, engineered to turn visitors into calls.",
        websiteCalloutBody: "No templates. No guesswork. You describe it, I make it real.",
      },
      logoTicker: {
        label: "SYSTEMS BUILT FOR",
        footer: "Five industries. One acquisition system.",
      },
      oneOperator: {
        eyebrow: "WHO RUNS THE SYSTEM",
        h2: "One operator. Full accountability.",
        p1: "Most service businesses have tried the agency route. Multiple contacts. Handoffs between departments. A junior account manager running things six months in.",
        p2: "I built Client Growth around the opposite model. Every system built and optimized personally. No account manager between us.",
        p3: "Strategy, conversion, paid acquisition, and optimization stay connected because the same person runs all of it. That person is me.",
        tag1: "Every system built and optimized personally.",
        tag2: "Every system built personally",
        tag3: "Direct access. No middlemen.",
        closing: "If performance improves, you know why. If something is underperforming, you know who owns it.",
        link: "Why this model works →",
        videoLabel: "Watch: how the system works",
        videoSoon: "Video coming soon",
      },
      testimonial: {
        quote: "Juan built the website exactly how I wanted it. Highly recommend.",
        name: "Tobari",
        business: "Culture Barbershop · Montreal, QC",
        below: "Every result on this page came from the same acquisition system.",
        seeResults: "See Results →",
      },
      pricing: {
        eyebrow: "PRICING",
        h2: "One person. Full pipeline.",
        sub: "A focused growth engagement: not a package. One partner, full scope, direct access.",
        byApplication: "BY APPLICATION ONLY",
        workDirectly: "Work directly with Juan.",
        noAccountManagers: "No account managers. No handoffs. Every system built, owned, and optimized by me. I take on three partnerships at a time. One spot is currently open.",
        spotOpen: "1 partnership spot open",
        growthPartnership: "GROWTH PARTNERSHIP",
        price: "$2,500/month",
        description: "The full acquisition system: conversion site, local SEO, Google Ads, weekly optimization, and monthly revenue reporting. Everything you need to stop depending on referrals.",
        acquisitionSystem: "Acquisition System",
        item1: "Conversion site built to close",
        item2: "Google Ads targeting buyers with intent",
        item3: "Local SEO and location pages",
        item4: "Copy engineered to convert",
        ownershipOptimization: "Ownership & Optimization",
        item5: "Weekly optimization loop",
        item6: "Monthly revenue reporting",
        item7: "Full asset ownership",
        item8: "Expansion layers as your market grows",
        shortApplication: "Short application. I review every fit personally.",
        seeInvestment: "See what changes the monthly investment →",
        cta: "Apply to be a Partner →",
        term1Title: "90-day initial term",
        term1Sub: "Month-to-month after that.",
        term2Title: "No payment before fit",
        term2Sub: "I confirm strategic fit on the call before you pay anything.",
        term3Title: "You own everything",
        term3Sub: "Every asset, campaign, and page is built for your business, not held by an agency.",
      },
      fitNotFit: {
        eyebrow: "WHO THIS IS FOR",
        h2: "This is not for everyone. Here is who it is for.",
        sub: "I only take on businesses where I am confident I can produce a measurable return. Before signing anything, I tell you directly whether that is you.",
        rightFitTitle: "You are the right fit if:",
        rightFit1: "You know the work is out there. You just cannot find it online.",
        rightFit2: "You are generating consistent revenue and ready to invest in infrastructure that compounds.",
        rightFit3: "Your pipeline leans too heavily on referrals.",
        rightFit4: "You are tired of watching competitors rank above you for work you do better.",
        rightFit5: "You want one person who owns the full picture, not five vendors.",
        notFitTitle: "This is NOT the right fit if:",
        notFit1: "You want a logo, a brochure site, or a one-off project.",
        notFit2: "Your business is under $5K per month in revenue.",
        notFit3: "You want to test the waters with no real commitment.",
        notFit4: "You are not prepared for a 90-day initial run.",
        notFit5: "You expect results without committing to the onboarding process.",
        closingBold: "Serious operators build infrastructure.",
        closingSub: "Everyone else waits for the phone to ring.",
        belowCta: "If I cannot produce a return, I tell you on the call. Before you pay anything.",
        cta: "Apply to be a Partner →",
        fullList: "Full list →",
      },
      diagnostic: {
        eyebrow: "THE DIAGNOSTIC",
        h2: "Book your diagnostic. I will tell you if I can help.",
        addedLine: "This is not a discovery call. It is an actual audit.",
        step1: "I audit your pipeline, your competitors, and your current traffic sources.",
        step2: "I show you where you are losing calls and what fixing it is worth.",
        step3: "I tell you if I can help. No pitch. No pressure.",
        note: "I run a limited number of diagnostic calls per week. For a faster response, email juan@clientgrowth.ca for a same-day reply.",
        loading: "Loading calendar...",
        iframeTitle: "Book a call",
      },
      about: {
        label: "WHO I AM",
        headline: "I watched good businesses lose to worse ones. The difference was never the work.",
        p1: "I build acquisition systems for local service businesses \u2014 conversion website, Google Ads, local SEO, and AI search visibility. Every system tracked to one metric: qualified calls on the calendar.",
        p2: "I started building these systems at 16. I am 18 now. By the time most people finish their first internship, I will have run more live ad accounts than most agency employees touch in a career.",
        p3: "The work was never the problem. The infrastructure was.",
        stats: "",
      },
      heroSection: {
        headlineBefore: "I build the system that",
        accentWord: "books",
        headlineAfter: "your calendar.",
        subtitle: "Your competitors are not better than you. They just get found first. I fix that.",
        ctaPrimary: "Apply to be a Partner \u2192",
        ctaSecondary: "See the results \u2192",
      },
      proofStrip: {
        stat1Label: "revenue in 30 days",
        stat1Sub: "Triple W Rentals",
        stat2Label: "tracked revenue",
        stat2Sub: "active accounts",
      },
      marketingShowcase: {
        eyebrow: "The standard",
        rotatingPhrases: [
          "Here is how marketing should be.",
          "Here is how ads should convert.",
          "Here is how sites should sell.",
          "Here is how offers should close.",
        ],
        subline:
          "Three moves that separate the operators from the agencies. Diagnose the funnel, bring in qualified calls, and close them with a site engineered to sell.",
        cards: [
          { eyebrow: "01 · Unlock", title: "The key to predictable demand." },
          { eyebrow: "02 · Reach", title: "Systems that scale across any market." },
          { eyebrow: "03 · Rank", title: "Climb the map where your buyers search." },
        ],
      },
      problemGrid: {
        eyebrow: "THE PROBLEM",
        heading: "You are losing money every single day.",
        subtitle: "and you do not even see it yet.",
        problem1Title: "You are not getting found first.",
        problem1Desc: "Google, Maps, AI search. If you are not in those results, the call goes to whoever is.",
        problem2Title: "Your website is not converting.",
        problem2Desc: "Traffic without conversion is wasted money. No clear offer, no call to action, no reason to pick up the phone.",
        problem3Title: "Your pipeline depends on referrals.",
        problem3Desc: "Good months. Quiet months. No control. Referrals keep you alive. They do not build predictability.",
        closingBefore: "Serious operators build ",
        closingAccent: "infrastructure",
        closingAfter: ". Everyone else waits for the phone to ring.",
      },
      differentiationSection: {
        eyebrow: "WHY THIS IS DIFFERENT",
        heading: "This is not another agency.",
        leftHeader: "What most agencies sell you",
        leftItem1: "A junior account manager you never chose",
        leftItem2: "Recycled templates adapted to your logo",
        leftItem3: "You rent the results. Leave and you start from zero.",
        rightHeader: "What I build",
        rightItem1: "One operator. I build the system myself.",
        rightItem2: "Custom coded. Your site, your ads account, your data.",
        rightItem3: "You own everything. If you leave, it all goes with you.",
        closingLine: "No junior team. No outsourced work. Every system built personally.",
      },
      acquisitionSlider: {
        eyebrow: "THE ACQUISITION SYSTEM",
        heading: "The system that fills your calendar.",
        subtitle: "Three layers. One connected pipeline. Every result on this page came from this exact system.",
        step1Title: "Pull in buyers",
        step1Desc: "Google Ads, Meta Ads, Local SEO, and geo-targeted AI campaigns that put your business in front of the right people at the right time.",
        step1Proof: "$41,085 revenue \u00b7 $900 ad spend \u00b7 30 days",
        step2Title: "Convert the click into a call",
        step2Desc: "A conversion website custom-coded for your niche. Built around one outcome: the visitor calls or books. Not a template. Not WordPress.",
        step2Proof: "First booking \u00b7 Culture Barbershop \u00b7 Montreal",
        step3Title: "Keep the pipeline full",
        step3Desc: "Missed-call follow-up, automated booking flow, and weekly optimization. Every month the system runs, your cost per call drops and your pipeline compounds.",
        step3Proof: "Fully booked calendar \u00b7 Elite Barbershop \u00b7 Montreal",
        cta: "Apply to be a Partner \u2192",
      },
      whatIBuildSlider: {
        eyebrow: "WHAT I BUILD",
        heading: "Seven layers. One connected system.",
        subtitle: "Not a menu. Everything below is included in every engagement, built and run as one unit.",
        svc1Title: "Conversion website",
        svc1Desc: "Custom coded. Loads in under a second. Built around one outcome: the visitor calls or books. Not a template. Not WordPress. Built for your niche, your market, your offer.",
        svc1Stat: "VISITORS BECOME CALLS.",
        svc2Title: "Google Ads / Meta Ads",
        svc2Desc: "Purchase-intent targeting only. I find the buyers in your city who are ready to hire today and place your business in front of them first. Every dollar tracked to a call.",
        svc2Stat: "$33 AVERAGE COST PER QUALIFIED CALL ACROSS ACTIVE ACCOUNTS.",
        svc3Title: "Local SEO",
        svc3Desc: "Google Maps and organic rankings for your service area. Compounds from day one. Every month it runs, your position gets stronger and your cost per call goes down.",
        svc3Stat: "PAGE 1 POSITIONING IN YOUR CITY.",
        svc4Title: "GEO / AI search",
        svc4Desc: "When someone asks ChatGPT, Perplexity, or Google AI \"best [service] near me,\" your business needs to be the answer. This is the new SEO. Most competitors do not have it yet.",
        svc4Stat: "VISIBLE BEFORE YOUR COMPETITORS KNOW THIS EXISTS.",
        svc5Title: "AI integration",
        svc5Desc: "Voice agents and chatbots that answer, qualify, and follow up with leads automatically. Your phone does not need to ring for a lead to be captured. The system works while you are on a job.",
        svc5Stat: "AUTOMATED FOLLOW-UP BEFORE YOU PICK UP THE PHONE.",
        svc6Title: "Email marketing",
        svc6Desc: "Nurture sequences, reactivation campaigns, and automated follow-ups that keep your business top of mind. Turn past leads into future bookings.",
        svc6Stat: "STAY TOP OF MIND. REACTIVATE PAST LEADS.",
        svc6Badge: "SCALE",
        svc7Title: "Weekly optimization + reporting",
        svc7Desc: "Every week I review the data and cut what is not working. Every month I send a revenue report with real numbers. The longer the system runs, the cheaper each call gets.",
        svc7Stat: "COST PER CALL DROPS EVERY MONTH.",
        closingLine: "Every service above is included. Nothing sold separately.",
        cta: "Apply to be a Partner \u2192",
      },
      testimonialBlock: {
        title: "Five businesses. Same system. Real outcomes.",
        subtitle: "Every result below came from the same acquisition system.",
        seeAllResults: "See all client results \u2192",
        quote1: "Juan built the website exactly how I wanted it. Highly recommend.",
        quote2: "Since Juan came on, we have been getting way more quality leads. Business is doing extremely well in the city now.",
        quote3: "I love it. Very nice and professional.",
        quote4: "Professional website that represents the brand. Built exactly what was needed.",
        quote5: "The site establishes credibility from the first visit. Patients book directly from search.",
      },
      pricingStatement: {
        eyebrow: "PRICING",
        heading: "One person. Full pipeline.",
        subtitle: "Two speeds. Same operator. Same accountability.",
        growthFeatures: [
          "Conversion website: custom coded, built to rank and convert",
          "Google Ads: purchase-intent targeting in your city",
          "Local SEO: Google Maps and organic positioning",
          "AI search visibility: appear in ChatGPT, Perplexity, Google AI",
          "Weekly campaign optimization",
          "Monthly performance review call",
          "Full asset ownership: everything in your name",
        ],
        scaleAdditions: [
          "Higher ad budget management: more spend, more calls",
          "AI lead qualification: automated follow-up before your phone rings",
          "GEO (Generative Engine Optimization): when someone asks ChatGPT \"best [service] near me,\" your business is the answer. Most competitors do not know this exists.",
          "Multi-location and multi-channel expansion",
          "Dedicated landing pages per service and per city",
          "Weekly strategy calls: direct line, every week",
          "CRM setup + full lead organization: your pipeline visible and managed",
          "Email marketing: nurture sequences, reactivation, past-lead follow-up",
        ],
        growthTag: "Get the phone ringing",
        growthName: "Growth Architecture",
        growthProof: "Triple W Rentals started here. $41,085. $900 ad spend. 30 days.",
        growthGuarantee: "If your phone does not ring in the first 30 days, I refund the management fee for that period.",
        growthConditions: "Conditions: tracking in place before launch \u00b7 minimum ad spend met \u00b7 onboarding completed within 5 days \u00b7 applies where Google Ads inventory exists",
        growthCta: "Apply to be a Partner \u2192",
        growthMicro: "I review every application within 24 hours.",
        scaleTag: "Saturate your market",
        scaleName: "Scale Architecture",
        scaleIntro: "Everything in Growth Architecture, plus:",
        scaleProof: "This is the tier where a single city becomes a category you own.",
        scaleGuarantee: "If your phone does not ring in the first 30 days, I refund the management fee for that period.",
        scaleConditions: "Conditions: tracking in place before launch \u00b7 minimum ad spend met \u00b7 onboarding completed within 5 days \u00b7 applies where Google Ads inventory exists",
        scaleCta: "Apply to be a Partner \u2192",
        scaleMicro: "I review every application within 24 hours.",
        trustLine: "No payment before fit. I confirm strategic fit on the call before you pay anything.",
        badge1: "90-day initial term",
        badge2: "You own everything",
        badge3: "No account managers",
      },
      diagnosticForm: {
        sectionLabel: "THE DIAGNOSTIC",
        heading: "Book your diagnostic. I will tell you if I can help.",
        body: "This is not a discovery call. It is an actual audit. I review your pipeline, your competitors, and your current traffic sources. I show you where you are losing calls and what fixing it is worth. I tell you if I can help. No pitch. No pressure.",
        deliverablesTitle: "You leave the call with:",
        deliverable1: "A gap map showing exactly where you are losing calls right now",
        deliverable2: "A competitor breakdown for your specific market and service area",
        deliverable3: "A 30-day sprint plan: what gets built, in what order, and why",
        deliverable4: "A budget model with projected cost per call for your niche",
        deliverable5: "A clear yes or no on whether I can produce a return for your business",
        deliverablesNote: "If the answer is no, I tell you on the call. You will not be asked to pay anything.",
        step1Title: "You apply",
        step1Desc: "Fill out the form. It takes under 2 minutes.",
        step2Title: "I review your business",
        step2Desc: "I look at your market, your competitors, and your current setup before we speak. The call is a diagnosis, not a pitch.",
        step3Title: "You get an answer within 24 hours",
        step3Desc: "I email you directly. If I can move the needle, I tell you exactly how. If I cannot, I tell you that too. Before you pay anything.",
        placeholderName: "Your name",
        placeholderBusiness: "Your business name",
        placeholderWebsite: "yourwebsite.com (if you have one)",
        placeholderEmail: "you@yourbusiness.com",
        submitText: "Apply to be a Partner \u2192",
        submittingText: "Submitting...",
        successTitle: "Application received.",
        successBody: "I will review your business within 24 hours and email you directly.",
        errorTitle: "Something went wrong.",
        errorBody: "Email directly.",
        tryAgain: "Try again",
        microcopy: "I review your market before the call. Response within 24 hours. No retainer until I confirm fit.",
      },
      stickyMobileCta: "Apply to be a Partner \u2192",
      howWeWork: {
        phaseChips: {
          "Market Gap Report": ["Market Gap Report", "Funnel Audit", "90-Day Roadmap"],
          "System Launch": ["Live Website", "Ads Campaign", "Booking System", "Tracking Dashboard"],
          "Compound Loop": ["Weekly Performance Report", "Monthly Review Call", "Conversion Improvements"],
        },
        kickerLine: "Most clients see their first booked call within weeks of going live. Timeline depends on onboarding speed.",
      },
      featuredCaseStudy: {
        leadResultLabel: "LEAD RESULT \u2014 VERIFIED REVENUE",
        revenueLine: "in revenue. First 30 days.",
        returnLine: "$46 returned per $1 of ad spend.",
        verifiedDate: "Verified Feb 2026",
        liveAccount: "LIVE ACCOUNT",
        testimonialQuote: "Since Juan came on, we have been getting way more quality leads. Business is doing extremely well in the city now.",
        testimonialAttribution: "Westin Wayne Walker, Triple W Rentals \u00b7 Texas",
        viewCaseStudy: "View full case study \u2192",
        compactClients: [
          { badge: "IN PROGRESS", niche: "BARBERSHOP \u00b7 MONTREAL \u00b7 LOCAL SEO", stat: "Targeting #1", detail: "Local SEO campaign active. Competing for top position in Google." },
          { badge: "DELIVERED", niche: "BARBERSHOP \u00b7 MONTREAL \u00b7 WEB DESIGN", stat: "Live", detail: "Full custom website. Mobile-optimized booking flow." },
          { badge: "DELIVERED", niche: "PAINTING CONTRACTOR \u00b7 DALLAS-FORT WORTH", stat: "Live", detail: "Conversion website. DFW market. Tracking active." },
          { badge: "DELIVERED", niche: "DENTAL CLINIC \u00b7 LAVAL", stat: "Live", detail: "Full custom website. Booking funnel built." },
        ],
        revenueSummary: "$60K+ in tracked revenue across active partnerships.",
        seeFullCaseStudies: "See full case studies \u2192",
      },
      footerExtra: {
        howItWorks: "How it works",
        pricing: "Pricing",
        apply: "Apply",
        operatedFrom: "Operated from Quebec, Canada. Founder-led. Juan@clientgrowth.ca",
      },
      faqHeading: "Every question I hear before someone signs.",
      faqHeadingItalic: "Answered.",
      faqStillQuestions: "Still have questions?",
      faqApplyCta: "Apply to be a Partner \u2192",
      faqPreferEmail: "Prefer email?",
    },
    services: {
      hero: {
        eyebrow: "SERVICES",
        h1: "One system. Every qualified call tracked.",
        body1: "Conversion site. Local SEO. Google Ads with tracked cost per call. AI that qualifies leads after hours. Built as one connected system, run by one person. Timeline depends on asset approvals.",
        body2: "Every layer feeds the next. The longer it runs, the less each call costs.",
        microResult: "Most recent result: $41,085 from $900 in ad spend. 30 days.",
        cta1: "Apply to be a Partner →",
        cta2: "See how the system works",
        trust1: "Response within 24 hours",
        trust2: "No retainer until I confirm fit",
        trust3: "One spot currently open",
        rotating: [
          "Sites that convert.",
          "SEO that compounds.",
          "Ads tracked to cost per call.",
          "AI that captures every lead.",
          "One owner. Zero handoffs.",
        ],
      },
      proofBanner: {
        stat1Sub: "Revenue generated. One client. First 30 days.",
        stat2Sub: "Average cost per qualified call. All active accounts.",
        stat3Sub: "Median time from signed agreement to first booked call.",
        days: "days",
      },
      architecture: {
        sectionLabel: "THE ACQUISITION ENGINE",
        heading: "One System. Every Layer Connected.",
        body1: "Not a bundle of services. One acquisition infrastructure: site, search, paid, AI qualification, and optimization running as one connected machine.",
        body2: "The core system ships with every engagement. Expansion layers activate based on your stage.",
        coreLabel: "BUILT INTO EVERY PARTNERSHIP",
        coreHeading: "The Core Acquisition System",
        coreSub: "Always included. The foundation every expansion layer builds on.",
        expansionLabel: "WHAT ACTIVATES BASED ON STAGE",
        expansionHeading: "Expansion Layers",
        expansionSub: "Not separate packages. The next layer of the same machine, activated when your stage calls for it.",
        core: [
          { title: "Market Analysis", copy: "I map your competitors before writing a line of code. Every build decision follows from what the data shows." },
          { title: "Conversion Website", copy: "Hand-coded. Loads in under a second. Built to turn visitors into booked calls, not to look impressive." },
          { title: "Local Search Visibility", copy: "SEO targeting buyers with intent to book in your city. Compounds from day one and gets stronger every month." },
          { title: "Booking Flow", copy: "Calls and forms captured around the clock. No lead slips through while you are on a job." },
          { title: "Revenue Tracking", copy: "Every call, form, and booking traced to its source. You see exactly what the system is producing each month." },
          { title: "You Own Everything", copy: "Website, ad accounts, analytics, and tracking belong to your business. If you leave, you take all of it." },
        ],
        layers: [
          {
            label: "PAID ACQUISITION LAYER",
            title: "When organic capture alone is not enough.",
            copy: "When search alone is not fast enough. Ads targeting active purchase intent, tracked to cost per call.",
            items: [
              "Google Ads targeting active buyers in your market",
              "Landing pages per service and city",
              "AI voice agent: no lead to voicemail",
              "Weekly optimization against cost per qualified call",
            ],
            investment: "$2,500 / month + ad spend",
            investmentDetail: "Ad spend separate. Minimum $500/month. 90-day initial term.",
          },
          {
            label: "MARKET SCALE LAYER",
            title: "When the objective is structural dominance.",
            copy: "Proven demand. A competitor about to move. Multi-city architecture built to own a market, not just rank in it.",
            items: [
              "Multi-city campaign architecture",
              "Competitor displacement across search and paid",
              "Expanded SEO targeting high-value commercial terms",
              "Bi-weekly strategy calls",
            ],
            investment: "$6,000 / month + ad spend",
            investmentDetail: "Ad spend minimum $1,500/month. Two slots per niche per city.",
            scarcity: "If a competitor in your market applies first, this layer closes for your area.",
          },
        ],
      },
      techStack: {
        label: "Infrastructure Advantage",
        heading: "Built With Infrastructure. Not Page Builders.",
        sub: "Page speed, search ranking, and full asset ownership do not happen by accident. They follow from what the infrastructure is built on.",
        items: [
          { name: "Next.js", role: "Page speed", detail: "Sub-second load times globally. Faster pages book more calls." },
          { name: "Vercel", role: "Reliability", detail: "99.99% uptime on a global CDN. No downtime during your busiest season." },
          { name: "Google Ads", role: "Paid acquisition", detail: "Purchase-intent targeting tracked to cost per qualified call. Optimized weekly against outcomes." },
          { name: "Retell AI", role: "Lead capture", detail: "Calls captured and qualified after hours. No lead goes to voicemail." },
          { name: "Google Analytics", role: "Revenue attribution", detail: "Every call and form traced to its source. You see exactly where each dollar went." },
          { name: "Custom code", role: "Full ownership", detail: "Hand-coded. No WordPress. No templates. Everything built is yours from day one." },
        ],
      },
      finalCta: {
        howLabel: "HOW I WORK",
        howHeading: "What you know before signing anything.",
        howSub: "The terms, the standards, and the protections are set before any retainer is signed.",
        applyLabel: "APPLY",
        applyHeading: "Ready to Build Your System?",
        applyBody: "Short application. I review your market before the call. If I can produce a return, you will get a call link within 24 hours. If not, I will tell you directly.",
        proofText: "Recent results: one system went live in 9 days. One booked their first qualified call on day 7. One generated $2,716 in month one.",
        button: "Apply to be a Partner →",
        microcopy: "Response within 24 hours. No retainer until I confirm fit.",
      },
      guarantees: {
        standardLabel: "THE STANDARD",
        standardHeading: "Every number is real or it does not get published.",
        standardBody: "All results are from live client accounts. No projections. No hypotheticals.",
        standardVerified: "Verified Q1 2026. All results from live accounts.",
        milestone: "Milestone Delivery",
        milestoneBody: "Phase 1: market analysis and 90-day roadmap. Phase 2: live site, campaigns, and booking system. You approve before each phase starts. Nothing ships without your sign-off.",
        ownership: "Asset Ownership",
        ownershipBody: "Website, ad accounts, and tracking are yours. Month-to-month after build. Leave with everything.",
        preEngagement: "Pre-Engagement Review",
        preEngagementBody: "I review your market before any agreement. If I cannot produce a return, I tell you directly on the review call. Before you pay anything. I have turned clients down before.",
      },
    },
    results: {
      hero: {
        eyebrow: "Client Results: Verified Record",
        h1: "$41,085 in revenue. SEO campaigns active. Built on the same system.",
        sub: "A structured record from live partnerships. Starting conditions, what was built, and what resulted. Every figure tied to a real account.",
        stat1Value: "$41,085",
        stat1Label: "Revenue generated",
        stat1Note: "Google Ads · 30 days",
        stat2Value: "90",
        stat2Label: "New clients acquired",
        stat2Note: "Full acquisition system",
        stat3Value: "$33",
        stat3Label: "Cost per qualified call",
        stat3Note: "Paid search",
        stat4Value: "46×",
        stat4Label: "Return on ad spend",
        stat4Note: "Month one",
      },
      flagship: {
        sectionMarker: "Lead partnership",
        verified: "Verified",
        viewCaseStudy: "View full case study →",
        scrollToProof: "Scroll to proof",
        verificationContext: "Verification context",
        verifyLine1: "Full Google Ads account access provided",
        verifyLine2: "Revenue figures owner-reported and verified",
        verifyLine3: "Booking tracking confirmed via GA4 events",
        viewMetrics: "View campaign metrics report ↗",
      },
      secondary: {
        sectionMarker: "Featured partnership",
        headline: "SEO campaign active.\nTargeting #1 in local search.",
        infrastructureBuilt: "Infrastructure built",
        verified: "Verified",
        viewCaseStudy: "View full case study →",
        outcome: "Outcome",
        newClients: "New clients acquired",
        timeframe: "Timeframe",
        days: "days",
        contextNote: "Full acquisition infrastructure built from scratch. No prior website, no paid channels, no existing discoverability.",
      },
      cta: {
        eyebrow: "Next step",
        heading: "The results are documented. The system is the same one I would build for you.",
        body: "If you are generating consistent revenue and your pipeline depends on referrals, that is the problem I fix. One spot is open this quarter. Book the diagnostic call. I will tell you exactly what it is worth before you pay anything.",
        trust1: "Response within 24 hours",
        trust2: "No commitment to apply",
        trust3: "Founder-led, not an agency intake",
        button: "Apply to be a Partner \u2192",
        link: "How the acquisition system works \u2192",
      },
      portfolio: {
        recentlyDelivered: "Recently Delivered",
        recentSub: "Systems live. Results tracked.",
        activeBuilds: "Active Builds",
        inProgress: "in progress",
        activeSub: "System live. Performance tracking active.",
      },
      disclaimer: "Results shown are from real client engagements. Revenue figures are client-reported. Your results will vary based on market, offer, and execution.",
    },
    about: {
      hero: {
        sectionLabel: "ABOUT",
        h1: "Juan Carlos. I build systems that turn search traffic into booked calls.",
        subHead: "One operator. Every layer. Full accountability.",
        body1: "Most business owners I talk to are great at what they do. The work is there. The reputation is there. What is missing is the infrastructure that lets the right people find them before they find a competitor. That is the gap I close.",
        body2: "Website, ads, SEO, and AI automation. Built as one connected system so the right clients find you first, already convinced you are the right choice.",
        bullet1: "Strategy, build, and optimization owned by one person",
        bullet2: "No account managers between you and the work",
        bullet3: "Measured by qualified calls and revenue, nothing else",
        cta1: "Apply to be a Partner",
        cta2: "See Results →",
        trust1: "Response within 24h",
        trust2: "100% confidential",
        trust3: "Limited spots per quarter",
      },
      workingWithMe: {
        overline: "WORKING WITH ME",
        headline: "The First 30 Days",
        phase1Title: "Days 1–3",
        phase1Desc: "Discovery call, market gap audit, and 90-day roadmap. I define what success looks like and lock the offer.",
        phase2Title: "Days 4–11",
        phase2Desc: "System build. Website, funnel, tracking, and ads architecture. Timeline depends on asset approvals.",
        phase3Title: "Days 12–30",
        phase3Desc: "Optimization and first calls. I iterate on conversion and cost per call. You start seeing booked appointments.",
      },
      cta: {
        headline: "Your Pipeline Will Not Build Itself.",
        sub: "Apply for a diagnostic call. I review your business, your market, and your pipeline before the call. I show you exactly where you are losing calls and what fixing it is worth.",
        guarantee: "If I cannot produce a return, I tell you on the call. Before you pay anything.",
        primary: "Apply to be a Partner",
        secondary: "See Results →",
        trust1: "Response within 24 hours",
        trust2: "100% confidential",
      },
      metrics: {
        label1: "New clients acquired",
        note1: "Elite Barbershop, 90 days",
        label2: "Return on ad spend, Triple W Rentals",
        label3: "Typical time from signed to live system",
        updated: "UPDATED AS RESULTS COME IN.",
      },
    },
    aboutPage: {
      operatorHeading: "One operator. Full accountability.",
      card1Title: "Personally built",
      card1Body: "Every site, campaign, and optimization is done by me. Not delegated.",
      card2Title: "Direct access",
      card2Body: "You message me. I respond. No account managers. No tickets.",
      card3Title: "Selective by design",
      card3Body: "I only take on clients I know I can produce a return for.",
      ctaHeading: "Ready to see what this system can do for your business?",
      ctaSub: "One call. I review your market before we speak. No pitch. No pressure.",
      ctaButton: "Apply to be a Partner →",
      ctaTrust: "Response within 24 hours.",
    },
    applyPage: {
      heading: "Apply to be a partner",
      sub: "I review your market, competitors, and current setup before we speak. If I can move the needle, I tell you exactly how. If I cannot, I tell you that too.",
      placeholderName: "Full name",
      placeholderBusiness: "Business name",
      placeholderWebsite: "Website URL (if you have one)",
      placeholderEmail: "Email",
      submitButton: "Submit application",
      submitting: "Submitting...",
      trustLine: "No payment before fit is confirmed. I respond within 24 hours.",
      proofQuote: "First call came in 9 days. We had tried two agencies before this. Nothing came close.",
      successTitle: "Application received.",
      successBody: "I will review your business within 24 hours and email you directly.",
      errorTitle: "Something went wrong.",
      tryAgain: "Try again",
    },
    resultsPage: {
      eyebrow: "PROVEN OUTCOMES",
      heading: "Five businesses. Same system. Real outcomes.",
      sub: "Every result below came from the same acquisition system. One operator. Verified numbers.",
      revenueLine: "in revenue. First 30 days.",
      returnLine: "$46 returned per $1 of ad spend.",
      verifiedLine: "Live account. Last verified February 2026.",
      testimonialQuote: "Since Juan came on, we have been getting way more quality leads. Business is doing extremely well in the city now.",
      whatWasBuilt: "What was built:",
      deliverables: "Google Ads  ·  Conversion Website  ·  Booking Flow  ·  Weekly Optimization",
      viewLiveSite: "View live site →",
      ctaHeading: "Ready to see what this system can do for your business?",
      ctaSub: "One call. I review your market before we speak. No pitch. No pressure.",
      ctaButton: "Apply to be a Partner →",
      ctaTrust: "Response within 24 hours. No retainer until I confirm fit.",
      client1Badge: "DELIVERED",
      client1Title: "Full custom website + booking flow",
      client1Desc: "Conversion website designed and built. Mobile-optimized booking flow included.",
      client1Testimonial: "\"Juan built the website exactly how I wanted it. Highly recommend.\"",
      client2Badge: "IN PROGRESS",
      client2Title: "Custom website + local SEO campaign",
      client2Desc: "Conversion website designed and built. Local SEO campaign launched, competing for top position in Google.",
      client2Testimonial: "\"I love it. Very nice and professional.\"",
      client3Badge: "DELIVERED",
      client3Title: "Conversion website",
      client3Desc: "Full custom website built for the DFW painting market. Designed for quote requests.",
      client3Testimonial: "\"Professional website that represents the brand. Built exactly what was needed.\"",
      client4Badge: "DELIVERED",
      client4Title: "Custom website + booking funnel",
      client4Desc: "Full custom website designed and built. Booking funnel included.",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      results: "Résultats",
      about: "À propos",
      apply: "Postuler",
      pricing: "Tarifs",
      seeResults: "Voir les résultats",
    },
    faq: {
      eyebrow: "QUESTIONS",
      heading: "Questions que posent les acheteurs sérieux.",
      subheading:
        "Je préfère répondre aux questions difficiles ici plutôt que de vous faire perdre du temps en appel.",
      mostCommon: "Objection la plus courante",
      stillQuestion: "Une question sans réponse? Parlons-en.",
      applyCta: "Devenir partenaire →",
      items: faqFr,
    },
    spots: {
      heading: "Je gère 3 partenariats à la fois.",
      paragraph:
        "Pas par rareté artificielle. Parce qu'au-delà de trois systèmes actifs, je ne peux pas donner à chacun l'attention hebdomadaire dont il a besoin. Je ne dilue pas le travail.",
      lastThree: "Les trois derniers clients ayant postulé :",
      proof1: "Un en ligne en 9 jours.",
      proof2: "Un premier appel qualifié réservé au jour 7.",
      proof3: "2 716 $ de revenus le premier mois.",
      oneSpot: "Une place est ouverte en ce moment.",
      applyParagraph:
        "Postulez maintenant et j'examinerai votre entreprise sous 24 heures. Si je ne peux pas faire avancer les choses, je vous le dirai lors de l'appel de revue, pas après avoir payé.",
      applyCta: "Devenir partenaire",
      seeResults: "Voir les résultats →",
      reply24: "Réponse sous 24 heures",
      noContracts: "Pas de contrats à long terme",
      threeSpots: "3 places par trimestre",
      compactHeading: "Je gère 3 partenariats à la fois. Une place actuellement ouverte.",
      compactSubline: "Si je peux vous aider, vous aurez une réponse sous 24 heures.",
      confidential: "100% confidentiel",
      noCommitment: "Sans engagement",
    },
    finalCta: {
      button: "Devenir partenaire",
    },
    footer: {
      navigation: "Navigation",
      legal: "Mentions légales",
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
      rights: "Tous droits réservés",
      tagline: "Infrastructure de croissance pour les entreprises de services locales.",
    },
    common: {
      skipToContent: "Aller au contenu",
      menu: "Menu",
      close: "Fermer",
    },
    speedPopup: {
      eyebrow: "Ma Promesse",
      title: "RAPIDIT\u00c9",
      body: "Je respecte votre temps autant que le mien. C'est pourquoi ",
      highlight: "la plupart des syst\u00e8mes sont lanc\u00e9s en deux semaines.",
      closeLabel: "Fermer le popup",
    },
    benefits: {
      eyebrow: "AVANTAGES DU SYSTÈME",
      headline: "Enfin un Système",
      headlineBold: "Enfin un système",
      headlineItalic: "qui fonctionne vraiment.",
      paragraph:
        "Client Growth remplace les prestataires dispersés et les approximations par un système de croissance connecté, conçu pour transformer l'attention en appels qualifiés.",
      card1Title: "Un partenaire. Un système de croissance.",
      card1Desc: "Un seul opérateur gère tout le pipeline.",
      card2Title: "Conçu pour convertir",
      card2Desc: "Chaque page conçue pour générer des appels réservés.",
      card3Title: "Traçabilité du clic au revenu",
      card3Desc: "Attribution claire et rapports.",
      card4Title: "Lancement en semaines, pas en mois",
      card4Desc: "Exécution propre sans mois de délais.",
      card5Title: "Vous possédez tout",
      card5Desc: "Site, données et infrastructure restent à vous.",
      card6Title: "Visibilité complète",
      card6Desc: "SEO et conversion progressent chaque mois.",
      card7Title: "Exécution d'excellence",
      card7Desc: "",
    },
    faqBooking: {
      heading: "Questions que je reçois à chaque fois.",
      headlineItalic: "",
      supportingLine: "Obtenez des réponses claires avant de postuler.",
      items: [
        { question: "En combien de temps c'est en ligne?", answer: "La plupart des clients sont en ligne en 2 à 4 semaines. Je commence par un audit rapide, puis je construis." },
        { question: "Vous gérez Google Ads?", answer: "Oui. Google Ads est intégré dans chaque engagement. Je gère la configuration des campagnes, le ciblage par mots-clés, la rédaction des annonces et l'optimisation continue. Chaque campagne cible uniquement les recherches d'intention d'achat. Des gens qui cherchent activement à embaucher, pas des curieux. Le coût par appel est suivi dès le premier jour." },
        { question: "Est-ce que je possède le site et les actifs?", answer: "Tout ce qui est construit appartient à votre entreprise. Le site, les comptes publicitaires, les analyses et le suivi sont tous à votre nom. Si vous partez, vous emportez tout. Rien n'est retenu par moi comme levier." },
        { question: "Que se passe-t-il après le lancement?", answer: "Chaque semaine, j'examine ce qui fonctionne et je coupe ce qui ne fonctionne pas. Chaque mois, j'envoie un rapport de revenus avec de vrais chiffres : appels générés, coût par appel, revenus attribués au système. Le système se cumule. Votre coût par appel diminue au fil du temps." },
        { question: "Quel est le budget pub minimum?", answer: "Je recommande de commencer à 500 $/mois en budget pub. Le budget va directement à Google, pas à moi. Le bon montant est discuté pendant le processus de sélection." },
      ],
      ctaTitle: "Réservez un appel stratégie de 15 min",
      ctaBody: "J'examinerai votre marché et vous dirai directement si ce système peut faire la différence.",
      ctaButton: "Devenir partenaire →",
      ctaEmail: "juan@clientgrowth.ca",
      ctaEmailLabel: "Préférez le courriel?",
    },
    bookCall: {
      eyebrow: "RÉSERVER UN APPEL",
      headline: "Réservez votre diagnostic. Je vous dis si je peux aider.",
      italicSubline: "",
      body: "J'examinerai votre marché, votre pipeline actuel et la voie la plus rapide vers des appels qualifiés. Si je ne peux pas faire la différence, je vous le dirai directement avant que vous ne payiez quoi que ce soit.",
      bullet1: "15 minutes",
      bullet2: "Prochaines étapes claires",
      bullet3: "Pas de processus commercial lourd",
      cta: "Devenir partenaire",
      notice: "Je fais un nombre limité d'appels diagnostiques par semaine. Pour une réponse plus rapide, écrivez à juan@clientgrowth.ca pour une réponse le jour même.",
    },
    homepage: {
      hero: {
        eyebrow: "Infrastructure de croissance • Entreprises de services",
        h1Line1: "$41 085 générés avec $900 en publicité.",
        h1Line2: "30 jours.",
        subHeadline: "Je bâtis le système. Vous répondez au téléphone.",
        body: "Google Ads, SEO et sites de conversion. Un système, un opérateur, zéro intermédiaire.",
        cta: "Devenir partenaire",
        microCopy: "Un appel. Je vous dis si je peux vous aider.",
        seeResults: "Voir les résultats →",
      },
      verifiedCard: {
        title: "Résultat client vérifié",
        revenue: "revenus",
        fromAdSpend: "avec $900 en publicité · 30 jours",
        location: "Location de VR · Texas",
        returnOnAd: "retour sur investissement pub",
        perQualifiedCall: "par appel qualifié",
        toFirstBookedCall: "avant le premier appel réservé",
        screenshotLabel: "Compte Google Ads actif · Vérifié en février 2026",
      },
      statsBar: {
        revenueLabel: "REVENUS GÉNÉRÉS",
        costPerCall: "coût moyen par appel qualifié",
        medianDays: "médiane avant le premier appel réservé",
        activeClients: "Clients actifs",
        inBuild: "+2 en construction",
      },
      reality: {
        eyebrow: "LA RÉALITÉ",
        h2: "Votre travail est excellent. Votre pipeline ne devrait pas être aussi fragile.",
        sub: "Demande non suivie. Un site qui ne convertit pas. Aucun suivi.",
        goldLine: "Vos concurrents ne travaillent pas plus fort. Ils ont un système.",
        notificationTime: "8 H 47 · AUJOURD'HUI",
        notificationLine1: "Quelqu'un dans votre ville a cherché votre service.",
        notificationLine2: "Il a trouvé un concurrent en premier.",
        notificationLine3: "Ce téléphone a sonné. Le vôtre, non.",
        notificationLine4: "Pas parce que votre travail est moins bon.",
        notificationLine5: "Parce que leur système était là. Le vôtre, non.",
        card01Title: "Les gens de votre ville cherchent. Vous êtes invisible.",
        card01Body: "Si vous n'êtes pas sur Google, Maps ou la recherche IA, cet appel va ailleurs, avant même que vous sachiez qu'il existait.",
        card02Title: "Votre site a l'air bien. Il ne convertit pas.",
        card02Body: "Un site qui ne répond pas à « pourquoi vous, pourquoi maintenant » est une fuite. Les visiteurs ne ressentent rien et appellent celui qui était plus clair.",
        card03Title: "Vous faites du marketing en plus de tout le reste.",
        card03Body: "Incohérent, réactif, et facile à abandonner quand ça devient occupé. Un système lié à vos heures ne peut pas s'accumuler.",
        card04Title: "Les références vous gardent en vie. Elles ne créent pas de prévisibilité.",
        card04Body: "De bons mois. Des mois tranquilles. Aucun contrôle. Si votre pipeline dépend du bouche-à-oreille, vous attendez au lieu de croître.",
      },
      provenOutcomes: {
        eyebrow: "RÉSULTATS PROUVÉS",
        h2: "$41 085 avec $900 en publicité.",
        h2Main: "$41 085 avec $900 en publicité.",
        h2Italic: "",
        sub: "Revenus, appels qualifiés et visibilité de recherche. Pas trois victoires séparées. Le même système connecté, en continu.",
        card1Label: "LOCATION DE VR · TEXAS · GOOGLE ADS",
        card1Revenue: "en revenus. Premiers 30 jours.",
        card1Return: "46 $ retournés pour chaque 1 $ en publicité.",
        card1Verified: "Compte actif. Dernière vérification février 2026.",
        card2Label: "BARBIER · MONTRÉAL · SEO LOCAL",
        card2Page1: "en moins de 60 jours",
        card2Cost: "coût moyen par appel qualifié",
        card2Context: "Marché compétitif de Montréal. Site sur mesure et tunnel de réservation livrés. Dernière vérification T1 2026.",
        confirmingPattern: "Confirmation du pattern",
        acrossAll: "À TRAVERS TOUS LES PARTENARIATS ACTIFS",
        localSeo: "SEO LOCAL",
        localSeoSub: "Moins de 60 jours. Marché compétitif de Montréal.",
        costPerCallLabel: "COÛT PAR APPEL QUALIFIÉ",
        costPerCallSub: "Moyenne par appel entrant qualifié. Tous les comptes actifs.",
        speedLabel: "RAPIDITÉ VERS LE PREMIER APPEL RÉSERVÉ",
        speedSub: "Médiane de tous les comptes actifs.",
        seeAllResults: "Voir tous les résultats clients →",
      },
      calculator: {
        eyebrow: "Économie unitaire",
        h2: "Faites le calcul.",
        sub: "À 33 $ par appel qualifié, voici ce que les chiffres donnent pour votre entreprise. Pas des projections. Juste des mathématiques.",
        avgJobValue: "Valeur moyenne d'un contrat",
        qualifiedCalls: "Appels qualifiés nécessaires par mois",
        calls: "appels",
        disclaimer: "Logique de planification directionnelle basée sur les moyennes actuelles. Pas une garantie. Moyenne de 33 $/appel vérifiée T4 2025.",
        monthlyInvestment: "Investissement mensuel",
        projectedRevenue: "Revenus mensuels projetés",
        returnOnLeadCost: "Retour sur coût d'acquisition",
        returnSuffix: "× retour",
        cta: "Devenir partenaire →",
      },
      acquisitionSystem: {
        eyebrow: "LE SYSTÈME D'ACQUISITION",
        h2: "Ce qui génère des appels qualifiés.",
        sub: "Pas six services séparés. Un système d'acquisition connecté. Chaque couche alimente la suivante. Plus il roule longtemps, moins chaque appel coûte cher.",
        attract: "ATTIRER",
        convert: "CONVERTIR",
        compound: "ACCUMULER",
        googleAds: "Google Ads",
        googleAdsSub: "Acheteurs à forte intention, captés en premier",
        localSeo: "SEO local",
        localSeoSub: "Positionné là où votre marché cherche",
        geoAi: "GEO / Recherche IA",
        geoAiSub: "Visible dans ChatGPT et les réponses IA",
        conversionWebsite: "Site de conversion",
        conversionWebsiteSub: "Des pages qui transforment les visites en appels",
        conversionCopy: "Texte de conversion",
        conversionCopySub: "Rédaction conçue pour conclure",
        aiVoiceAgent: "Agent vocal IA",
        aiVoiceAgentSub: "Chaque appel répondu, 24/7",
        weeklyOptimization: "Optimisation hebdomadaire",
        weeklyOptimizationSub: "Tests de performance continus",
        monthlyReporting: "Rapports mensuels",
        monthlyReportingSub: "Suivi clair des revenus et du ROI",
        expansionLayers: "Couches d'expansion",
        expansionLayersSub: "Nouveaux canaux au fur et à mesure que votre marché grandit",
        seeFullSystem: "Voir le système complet",
        attractSub: "Attirer les acheteurs",
        convertSub: "Transformer les visites en appels",
        compoundSub: "Réduire le coût au fil du temps",
        footerLine: "Plus il roule longtemps, moins chaque appel coûte cher.",
        websiteCalloutLabel: "Votre vision, conçue pour convertir",
        websiteCalloutHeadline: "Vous avez une idée de l'apparence et du ressenti de votre site. Je le construis. Conçu de zéro autour de votre marque, optimisé pour transformer les visiteurs en appels.",
        websiteCalloutBody: "Aucun gabarit. Aucune approximation. Vous le décrivez, je le réalise.",
      },
      logoTicker: {
        label: "CLIENTS ACTUELS GÉNÉRANT DES APPELS QUALIFIÉS EN CE MOMENT",
        footer: "Cinq secteurs. Un système de croissance.",
      },
      oneOperator: {
        eyebrow: "QUI OPÈRE LE SYSTÈME",
        h2: "Un opérateur. Pleine responsabilité.",
        p1: "La plupart des entreprises de services ont essayé la voie des agences. Plusieurs contacts. Des transferts entre départements. Un gestionnaire de compte junior qui prend le relais après six mois.",
        p2: "J'ai bâti Client Growth autour du modèle opposé. Trois partenariats actifs maximum. Chaque système construit et optimisé personnellement. Aucun gestionnaire de compte entre nous.",
        p3: "Stratégie, conversion, acquisition payante et optimisation restent connectées parce que la même personne gère tout. Cette personne, c'est moi.",
        tag1: "3 partenariats actifs max",
        tag2: "Chaque système construit personnellement",
        tag3: "Accès direct. Aucun intermédiaire.",
        closing: "Si la performance s'améliore, vous savez pourquoi. Si quelque chose sous-performe, vous savez qui en est responsable.",
        link: "Pourquoi ce modèle fonctionne →",
        videoLabel: "Voir : comment le système fonctionne",
        videoSoon: "Vidéo bientôt disponible",
      },
      testimonial: {
        quote: "Juan a complètement refait notre présence en ligne depuis zéro. Le calendrier n'a plus eu un seul créneau vide depuis.",
        name: "Tobari",
        business: "Culture Barbershop · Montréal, QC",
        below: "Chaque résultat sur cette page provient du même système d'acquisition.",
        seeResults: "Voir les résultats →",
      },
      pricing: {
        eyebrow: "TARIFICATION",
        h2: "Une personne. Un pipeline complet.",
        sub: "Un engagement de croissance ciblé : pas un forfait. Un partenaire, portée complète, accès direct.",
        byApplication: "SUR CANDIDATURE UNIQUEMENT",
        workDirectly: "Travaillez directement avec Juan.",
        noAccountManagers: "Aucun gestionnaire de compte. Aucun transfert. Chaque système construit, détenu et optimisé par moi. Je prends trois partenariats à la fois. Une place est actuellement ouverte.",
        spotOpen: "1 place de partenariat ouverte",
        growthPartnership: "PARTENARIAT DE CROISSANCE",
        price: "2 500 $/mois",
        description: "Le système d'acquisition complet : site de conversion, SEO local, Google Ads, optimisation hebdomadaire et rapports mensuels de revenus. Tout ce qu'il faut pour arrêter de dépendre des références.",
        acquisitionSystem: "Système d'acquisition",
        item1: "Site de conversion conçu pour conclure",
        item2: "Google Ads ciblant les acheteurs avec intention",
        item3: "SEO local et pages de localisation",
        item4: "Rédaction conçue pour convertir",
        ownershipOptimization: "Propriété et optimisation",
        item5: "Boucle d'optimisation hebdomadaire",
        item6: "Rapports mensuels de revenus",
        item7: "Propriété complète des actifs",
        item8: "Couches d'expansion au fur et à mesure que votre marché grandit",
        shortApplication: "Candidature courte. J'évalue chaque compatibilité personnellement.",
        seeInvestment: "Voir ce qui influence l'investissement mensuel →",
        cta: "Devenir partenaire →",
        term1Title: "Terme initial de 90 jours",
        term1Sub: "Mois par mois par la suite.",
        term2Title: "Aucun paiement avant confirmation",
        term2Sub: "Je confirme la compatibilité stratégique lors de l'appel avant tout paiement.",
        term3Title: "Vous êtes propriétaire de tout",
        term3Sub: "Chaque actif, campagne et page est construit pour votre entreprise, pas retenu par une agence.",
      },
      fitNotFit: {
        eyebrow: "À QUI S'ADRESSE CE SERVICE",
        h2: "Ce n'est pas pour tout le monde. Voici à qui ça s'adresse.",
        sub: "Je n'accepte que les entreprises où je suis confiant de pouvoir produire un retour mesurable. Avant de signer quoi que ce soit, je vous dis directement si c'est vous.",
        rightFitTitle: "Vous êtes un bon candidat si :",
        rightFit1: "Vous savez que le travail est là. Vous n'arrivez simplement pas à le trouver en ligne.",
        rightFit2: "Vous générez des revenus constants et êtes prêt à investir dans une infrastructure qui s'accumule.",
        rightFit3: "Votre pipeline dépend trop des références.",
        rightFit4: "Vous en avez assez de voir des concurrents se classer au-dessus de vous pour du travail que vous faites mieux.",
        rightFit5: "Vous voulez une personne qui gère l'ensemble, pas cinq fournisseurs.",
        notFitTitle: "Ce n'est PAS pour vous si :",
        notFit1: "Vous voulez un logo, un site vitrine ou un projet ponctuel.",
        notFit2: "Votre entreprise fait moins de 5 000 $ par mois en revenus.",
        notFit3: "Vous voulez tester sans réel engagement.",
        notFit4: "Vous n'êtes pas prêt pour un engagement initial de 90 jours.",
        notFit5: "Vous attendez des résultats sans vous engager dans le processus d'intégration.",
        closingBold: "Les opérateurs sérieux bâtissent des infrastructures.",
        closingSub: "Les autres attendent que le téléphone sonne.",
        belowCta: "Si je ne peux pas produire un retour, je vous le dis lors de l'appel. Avant que vous ne payiez quoi que ce soit.",
        cta: "Devenir partenaire →",
        fullList: "Liste complète →",
      },
      diagnostic: {
        eyebrow: "LE DIAGNOSTIC",
        h2: "Réservez votre diagnostic. Je vous dis si je peux aider.",
        addedLine: "Ce n'est pas un appel découverte. C'est un véritable audit.",
        step1: "J'audite votre pipeline, vos concurrents et vos sources de trafic actuelles.",
        step2: "Je vous montre où vous perdez des appels et ce que ça vaut de corriger.",
        step3: "Je vous dis si je peux aider. Aucun pitch. Aucune pression.",
        note: "Je fais un nombre limité d'appels diagnostiques par semaine. Pour une réponse plus rapide, écrivez à juan@clientgrowth.ca pour une réponse le jour même.",
        loading: "Chargement du calendrier...",
        iframeTitle: "Devenir partenaire",
      },
      about: {
        label: "QUI JE SUIS",
        headline: "J\u2019ai vu de bonnes entreprises perdre face \u00e0 de moins bonnes. La diff\u00e9rence n\u2019\u00e9tait jamais le travail.",
        p1: "Je construis des syst\u00e8mes d\u2019acquisition pour les entreprises de services locaux \u2014 site de conversion, Google Ads, r\u00e9f\u00e9rencement local et visibilit\u00e9 IA. Chaque syst\u00e8me suivi \u00e0 une seule m\u00e9trique : des appels qualifi\u00e9s dans le calendrier.",
        p2: "J\u2019ai commenc\u00e9 \u00e0 construire ces syst\u00e8mes \u00e0 16 ans. J\u2019en ai 18 maintenant. Le temps que la plupart des gens finissent leur premier stage, j\u2019aurai g\u00e9r\u00e9 plus de comptes publicitaires en direct que la plupart des employ\u00e9s d\u2019agence n\u2019en touchent dans toute leur carri\u00e8re.",
        p3: "Le travail n\u2019a jamais \u00e9t\u00e9 le probl\u00e8me. L\u2019infrastructure l\u2019\u00e9tait.",
        stats: "",
      },
      heroSection: {
        headlineBefore: "Je construis le syst\u00e8me qui",
        accentWord: "remplit",
        headlineAfter: "votre calendrier.",
        subtitle: "Vos concurrents ne sont pas meilleurs que vous. Ils sont simplement trouv\u00e9s en premier. Je corrige \u00e7a.",
        ctaPrimary: "Devenir partenaire \u2192",
        ctaSecondary: "Voir les r\u00e9sultats \u2192",
      },
      proofStrip: {
        stat1Label: "revenus en 30 jours",
        stat1Sub: "Triple W Rentals",
        stat2Label: "revenus suivis",
        stat2Sub: "comptes actifs",
      },
      marketingShowcase: {
        eyebrow: "La norme",
        rotatingPhrases: [
          "Voici comment le marketing devrait fonctionner.",
          "Voici comment les annonces devraient convertir.",
          "Voici comment les sites devraient vendre.",
          "Voici comment les offres devraient conclure.",
        ],
        subline:
          "Trois actions qui séparent les opérateurs des agences. Diagnostiquer l'entonnoir, obtenir des appels qualifiés, et les conclure avec un site conçu pour vendre.",
        cards: [
          { eyebrow: "01 · Déverrouiller", title: "La clé d'une demande prévisible." },
          { eyebrow: "02 · Atteindre", title: "Des systèmes qui s'adaptent à n'importe quel marché." },
          { eyebrow: "03 · Classer", title: "Montez dans les résultats où vos acheteurs cherchent." },
        ],
      },
      problemGrid: {
        eyebrow: "LE PROBL\u00c8ME",
        heading: "Vous perdez de l\u2019argent chaque jour.",
        subtitle: "et vous ne le voyez pas encore.",
        problem1Title: "On ne vous trouve pas en premier.",
        problem1Desc: "Google, Maps, recherche IA. Si vous n\u2019\u00eates pas dans ces r\u00e9sultats, l\u2019appel va \u00e0 celui qui y est.",
        problem2Title: "Votre site ne convertit pas.",
        problem2Desc: "Du trafic sans conversion, c\u2019est de l\u2019argent gaspill\u00e9. Aucune offre claire, aucun appel \u00e0 l\u2019action, aucune raison de d\u00e9crocher le t\u00e9l\u00e9phone.",
        problem3Title: "Votre pipeline d\u00e9pend des r\u00e9f\u00e9rences.",
        problem3Desc: "Bons mois. Mois tranquilles. Aucun contr\u00f4le. Les r\u00e9f\u00e9rences vous gardent en vie. Elles ne cr\u00e9ent pas de pr\u00e9visibilit\u00e9.",
        closingBefore: "Les op\u00e9rateurs s\u00e9rieux construisent une ",
        closingAccent: "infrastructure",
        closingAfter: ". Les autres attendent que le t\u00e9l\u00e9phone sonne.",
      },
      differentiationSection: {
        eyebrow: "POURQUOI C\u2019EST DIFF\u00c9RENT",
        heading: "Ce n\u2019est pas une agence de plus.",
        leftHeader: "Ce que la plupart des agences vous vendent",
        leftItem1: "Un charg\u00e9 de compte junior que vous n\u2019avez jamais choisi",
        leftItem2: "Des templates recycl\u00e9s adapt\u00e9s \u00e0 votre logo",
        leftItem3: "Vous louez les r\u00e9sultats. Partez et vous repartez de z\u00e9ro.",
        rightHeader: "Ce que je construis",
        rightItem1: "Un seul op\u00e9rateur. Je construis le syst\u00e8me moi-m\u00eame.",
        rightItem2: "Code sur mesure. Votre site, votre compte pub, vos donn\u00e9es.",
        rightItem3: "Vous \u00eates propri\u00e9taire de tout. Si vous partez, tout part avec vous.",
        closingLine: "Pas d\u2019\u00e9quipe junior. Pas de sous-traitance. Chaque syst\u00e8me construit personnellement.",
      },
      acquisitionSlider: {
        eyebrow: "LE SYST\u00c8ME D\u2019ACQUISITION",
        heading: "Le syst\u00e8me qui remplit votre calendrier.",
        subtitle: "Trois couches. Un seul pipeline connect\u00e9. Chaque r\u00e9sultat sur cette page vient de ce syst\u00e8me exact.",
        step1Title: "Attirer les acheteurs",
        step1Desc: "Google Ads, Meta Ads, SEO local et campagnes IA g\u00e9olocalis\u00e9es qui placent votre entreprise devant les bonnes personnes au bon moment.",
        step1Proof: "$41,085 revenus \u00b7 $900 en pub \u00b7 30 jours",
        step2Title: "Convertir le clic en appel",
        step2Desc: "Un site de conversion cod\u00e9 sur mesure pour votre niche. Construit autour d\u2019un seul r\u00e9sultat : le visiteur appelle ou r\u00e9serve. Pas un template. Pas WordPress.",
        step2Proof: "Premi\u00e8re r\u00e9servation \u00b7 Culture Barbershop \u00b7 Montr\u00e9al",
        step3Title: "Garder le pipeline plein",
        step3Desc: "Suivi d\u2019appels manqu\u00e9s, flux de r\u00e9servation automatis\u00e9 et optimisation hebdomadaire. Chaque mois o\u00f9 le syst\u00e8me tourne, votre co\u00fbt par appel baisse et votre pipeline se renforce.",
        step3Proof: "Calendrier complet \u00b7 Elite Barbershop \u00b7 Montr\u00e9al",
        cta: "Devenir partenaire \u2192",
      },
      whatIBuildSlider: {
        eyebrow: "CE QUE JE CONSTRUIS",
        heading: "Sept couches. Un syst\u00e8me connect\u00e9.",
        subtitle: "Pas un menu. Tout ce qui suit est inclus dans chaque engagement, construit et g\u00e9r\u00e9 comme un tout.",
        svc1Title: "Site de conversion",
        svc1Desc: "Code sur mesure. Charge en moins d\u2019une seconde. Construit autour d\u2019un seul r\u00e9sultat : le visiteur appelle ou r\u00e9serve. Pas un template. Pas WordPress. Construit pour votre niche, votre march\u00e9, votre offre.",
        svc1Stat: "LES VISITEURS DEVIENNENT DES APPELS.",
        svc2Title: "Google Ads / Meta Ads",
        svc2Desc: "Ciblage par intention d\u2019achat uniquement. Je trouve les acheteurs dans votre ville pr\u00eats \u00e0 embaucher aujourd\u2019hui et je place votre entreprise devant eux en premier. Chaque dollar suivi jusqu\u2019\u00e0 l\u2019appel.",
        svc2Stat: "$33 CO\u00dbT MOYEN PAR APPEL QUALIFI\u00c9 SUR LES COMPTES ACTIFS.",
        svc3Title: "SEO local",
        svc3Desc: "Google Maps et classements organiques pour votre zone de service. Se renforce d\u00e8s le premier jour. Chaque mois, votre position s\u2019am\u00e9liore et votre co\u00fbt par appel diminue.",
        svc3Stat: "POSITIONNEMENT PAGE 1 DANS VOTRE VILLE.",
        svc4Title: "GEO / Recherche IA",
        svc4Desc: "Quand quelqu\u2019un demande \u00e0 ChatGPT, Perplexity ou Google AI \"meilleur [service] pr\u00e8s de moi\", votre entreprise doit \u00eatre la r\u00e9ponse. C\u2019est le nouveau SEO. La plupart des concurrents ne le savent pas encore.",
        svc4Stat: "VISIBLE AVANT QUE VOS CONCURRENTS SACHENT QUE \u00c7A EXISTE.",
        svc5Title: "Int\u00e9gration IA",
        svc5Desc: "Agents vocaux et chatbots qui r\u00e9pondent, qualifient et assurent le suivi automatiquement. Votre t\u00e9l\u00e9phone n\u2019a pas besoin de sonner pour capturer un lead. Le syst\u00e8me travaille pendant que vous \u00eates en intervention.",
        svc5Stat: "SUIVI AUTOMATIS\u00c9 AVANT M\u00caME QUE VOUS D\u00c9CROCHIEZ.",
        svc6Title: "Marketing par courriel",
        svc6Desc: "S\u00e9quences de nurturing, campagnes de r\u00e9activation et suivis automatis\u00e9s qui gardent votre entreprise en t\u00eate. Transformez les anciens leads en futures r\u00e9servations.",
        svc6Stat: "RESTEZ EN T\u00caTE. R\u00c9ACTIVEZ LES ANCIENS LEADS.",
        svc6Badge: "SCALE",
        svc7Title: "Optimisation + rapports hebdomadaires",
        svc7Desc: "Chaque semaine, j\u2019analyse les donn\u00e9es et coupe ce qui ne fonctionne pas. Chaque mois, j\u2019envoie un rapport de revenus avec de vrais chiffres. Plus le syst\u00e8me tourne, moins chaque appel co\u00fbte.",
        svc7Stat: "LE CO\u00dbT PAR APPEL BAISSE CHAQUE MOIS.",
        closingLine: "Chaque service ci-dessus est inclus. Rien vendu s\u00e9par\u00e9ment.",
        cta: "Devenir partenaire \u2192",
      },
      testimonialBlock: {
        title: "Cinq entreprises. M\u00eame syst\u00e8me. De vrais r\u00e9sultats.",
        subtitle: "Chaque r\u00e9sultat ci-dessous vient du m\u00eame syst\u00e8me d\u2019acquisition.",
        seeAllResults: "Voir tous les r\u00e9sultats clients \u2192",
        quote1: "Juan a construit le site exactement comme je le voulais. Je recommande fortement.",
        quote2: "Depuis que Juan est arriv\u00e9, on re\u00e7oit beaucoup plus de leads de qualit\u00e9. L\u2019entreprise va extr\u00eamement bien dans la ville maintenant.",
        quote3: "J\u2019adore. Tr\u00e8s beau et professionnel.",
        quote4: "Un site professionnel qui repr\u00e9sente la marque. Exactement ce qu\u2019il fallait.",
        quote5: "Le site \u00e9tablit la cr\u00e9dibilit\u00e9 d\u00e8s la premi\u00e8re visite. Les patients r\u00e9servent directement depuis la recherche.",
      },
      pricingStatement: {
        eyebrow: "TARIFICATION",
        heading: "Une personne. Pipeline complet.",
        subtitle: "Deux vitesses. M\u00eame op\u00e9rateur. M\u00eame responsabilit\u00e9.",
        growthFeatures: [
          "Site de conversion : code sur mesure, construit pour le r\u00e9f\u00e9rencement et la conversion",
          "Google Ads : ciblage par intention d\u2019achat dans votre ville",
          "SEO local : Google Maps et positionnement organique",
          "Visibilit\u00e9 IA : appara\u00eetre dans ChatGPT, Perplexity, Google AI",
          "Optimisation hebdomadaire des campagnes",
          "Appel mensuel de revue de performance",
          "Propri\u00e9t\u00e9 compl\u00e8te des actifs : tout \u00e0 votre nom",
        ],
        scaleAdditions: [
          "Gestion de budget publicitaire \u00e9largi : plus de d\u00e9penses, plus d\u2019appels",
          "Qualification IA des leads : suivi automatis\u00e9 avant que votre t\u00e9l\u00e9phone ne sonne",
          "GEO (Generative Engine Optimization) : quand quelqu\u2019un demande \u00e0 ChatGPT \"meilleur [service] pr\u00e8s de moi\", votre entreprise est la r\u00e9ponse. La plupart des concurrents ne savent pas que \u00e7a existe.",
          "Expansion multi-emplacements et multi-canaux",
          "Pages d\u2019atterrissage d\u00e9di\u00e9es par service et par ville",
          "Appels strat\u00e9giques hebdomadaires : ligne directe, chaque semaine",
          "Configuration CRM + organisation compl\u00e8te des leads : votre pipeline visible et g\u00e9r\u00e9",
          "Marketing par courriel : s\u00e9quences de nurturing, r\u00e9activation, suivi des anciens leads",
        ],
        growthTag: "Faire sonner le t\u00e9l\u00e9phone",
        growthName: "Growth Architecture",
        growthProof: "Triple W Rentals a commenc\u00e9 ici. $41,085. $900 en pub. 30 jours.",
        growthGuarantee: "Si votre t\u00e9l\u00e9phone ne sonne pas dans les 30 premiers jours, je rembourse les frais de gestion pour cette p\u00e9riode.",
        growthConditions: "Conditions : suivi en place avant le lancement \u00b7 d\u00e9pense publicitaire minimum respect\u00e9e \u00b7 onboarding compl\u00e9t\u00e9 en 5 jours \u00b7 applicable l\u00e0 o\u00f9 l\u2019inventaire Google Ads existe",
        growthCta: "Devenir partenaire \u2192",
        growthMicro: "J\u2019examine chaque candidature en moins de 24 heures.",
        scaleTag: "Dominer votre march\u00e9",
        scaleName: "Scale Architecture",
        scaleIntro: "Tout ce qui est dans Growth Architecture, plus :",
        scaleProof: "C\u2019est le niveau o\u00f9 une seule ville devient une cat\u00e9gorie que vous poss\u00e9dez.",
        scaleGuarantee: "Si votre t\u00e9l\u00e9phone ne sonne pas dans les 30 premiers jours, je rembourse les frais de gestion pour cette p\u00e9riode.",
        scaleConditions: "Conditions : suivi en place avant le lancement \u00b7 d\u00e9pense publicitaire minimum respect\u00e9e \u00b7 onboarding compl\u00e9t\u00e9 en 5 jours \u00b7 applicable l\u00e0 o\u00f9 l\u2019inventaire Google Ads existe",
        scaleCta: "Devenir partenaire \u2192",
        scaleMicro: "J\u2019examine chaque candidature en moins de 24 heures.",
        trustLine: "Aucun paiement avant confirmation. Je confirme l\u2019ad\u00e9quation strat\u00e9gique lors de l\u2019appel avant que vous ne payiez quoi que ce soit.",
        badge1: "Terme initial de 90 jours",
        badge2: "Vous \u00eates propri\u00e9taire de tout",
        badge3: "Pas de charg\u00e9s de compte",
      },
      diagnosticForm: {
        sectionLabel: "LE DIAGNOSTIC",
        heading: "R\u00e9servez votre diagnostic. Je vous dis si je peux aider.",
        body: "Ce n\u2019est pas un appel d\u00e9couverte. C\u2019est un vrai audit. J\u2019examine votre pipeline, vos concurrents et vos sources de trafic actuelles. Je vous montre o\u00f9 vous perdez des appels et ce que corriger le probl\u00e8me vaut. Je vous dis si je peux aider. Pas de pitch. Pas de pression.",
        deliverablesTitle: "Vous repartez de l\u2019appel avec :",
        deliverable1: "Une carte des failles montrant exactement o\u00f9 vous perdez des appels en ce moment",
        deliverable2: "Une analyse concurrentielle pour votre march\u00e9 et zone de service sp\u00e9cifiques",
        deliverable3: "Un plan sprint de 30 jours : ce qui est construit, dans quel ordre, et pourquoi",
        deliverable4: "Un mod\u00e8le budg\u00e9taire avec le co\u00fbt par appel projet\u00e9 pour votre niche",
        deliverable5: "Un oui ou non clair sur ma capacit\u00e9 \u00e0 produire un retour pour votre entreprise",
        deliverablesNote: "Si la r\u00e9ponse est non, je vous le dis lors de l\u2019appel. On ne vous demandera pas de payer quoi que ce soit.",
        step1Title: "Vous postulez",
        step1Desc: "Remplissez le formulaire. Cela prend moins de 2 minutes.",
        step2Title: "J\u2019examine votre entreprise",
        step2Desc: "J\u2019analyse votre march\u00e9, vos concurrents et votre configuration actuelle avant qu\u2019on se parle. L\u2019appel est un diagnostic, pas un pitch.",
        step3Title: "Vous recevez une r\u00e9ponse en 24 heures",
        step3Desc: "Je vous \u00e9cris directement. Si je peux faire bouger les choses, je vous explique exactement comment. Si je ne peux pas, je vous le dis aussi. Avant que vous ne payiez quoi que ce soit.",
        placeholderName: "Votre nom",
        placeholderBusiness: "Le nom de votre entreprise",
        placeholderWebsite: "votresite.com (si vous en avez un)",
        placeholderEmail: "vous@votreentreprise.com",
        submitText: "Devenir partenaire \u2192",
        submittingText: "Envoi en cours...",
        successTitle: "Candidature re\u00e7ue.",
        successBody: "J\u2019examinerai votre entreprise en moins de 24 heures et vous \u00e9crirai directement.",
        errorTitle: "Une erreur est survenue.",
        errorBody: "\u00c9crivez directement.",
        tryAgain: "R\u00e9essayer",
        microcopy: "J\u2019examine votre march\u00e9 avant l\u2019appel. R\u00e9ponse en 24 heures. Aucun acompte avant confirmation.",
      },
      stickyMobileCta: "Devenir partenaire \u2192",
      howWeWork: {
        phaseChips: {
          "Market Gap Report": ["Rapport d\u2019\u00e9cart march\u00e9", "Audit d\u2019entonnoir", "Feuille de route 90 jours"],
          "System Launch": ["Site en ligne", "Campagne publicitaire", "Syst\u00e8me de r\u00e9servation", "Tableau de bord"],
          "Compound Loop": ["Rapport de performance hebdomadaire", "Appel de revue mensuel", "Am\u00e9liorations de conversion"],
        },
        kickerLine: "La plupart des clients voient leur premier appel r\u00e9serv\u00e9 dans les semaines suivant le lancement. Le d\u00e9lai d\u00e9pend de la vitesse d\u2019onboarding.",
      },
      featuredCaseStudy: {
        leadResultLabel: "R\u00c9SULTAT PRINCIPAL \u2014 REVENUS V\u00c9RIFI\u00c9S",
        revenueLine: "en revenus. Les 30 premiers jours.",
        returnLine: "$46 retourn\u00e9s par $1 investi en publicit\u00e9.",
        verifiedDate: "V\u00e9rifi\u00e9 f\u00e9vrier 2026",
        liveAccount: "COMPTE ACTIF",
        testimonialQuote: "Depuis que Juan est arriv\u00e9, on re\u00e7oit beaucoup plus de leads de qualit\u00e9. L\u2019entreprise va extr\u00eamement bien dans la ville maintenant.",
        testimonialAttribution: "Westin Wayne Walker, Triple W Rentals \u00b7 Texas",
        viewCaseStudy: "Voir l\u2019\u00e9tude de cas compl\u00e8te \u2192",
        compactClients: [
          { badge: "EN COURS", niche: "BARBERSHOP \u00b7 MONTR\u00c9AL \u00b7 SEO LOCAL", stat: "Ciblant #1", detail: "Campagne SEO local active. En comp\u00e9tition pour la premi\u00e8re position sur Google." },
          { badge: "LIVR\u00c9", niche: "BARBERSHOP \u00b7 MONTR\u00c9AL \u00b7 WEB DESIGN", stat: "En ligne", detail: "Site sur mesure complet. Flux de r\u00e9servation optimis\u00e9 mobile." },
          { badge: "LIVR\u00c9", niche: "PEINTRE \u00b7 DALLAS-FORT WORTH", stat: "En ligne", detail: "Site de conversion. March\u00e9 DFW. Suivi actif." },
          { badge: "LIVR\u00c9", niche: "CLINIQUE DENTAIRE \u00b7 LAVAL", stat: "En ligne", detail: "Site sur mesure complet. Entonnoir de r\u00e9servation construit." },
        ],
        revenueSummary: "$60K+ en revenus suivis \u00e0 travers les partenariats actifs.",
        seeFullCaseStudies: "Voir les \u00e9tudes de cas compl\u00e8tes \u2192",
      },
      footerExtra: {
        howItWorks: "Comment \u00e7a fonctionne",
        pricing: "Tarification",
        apply: "Postuler",
        operatedFrom: "Op\u00e9r\u00e9 depuis le Qu\u00e9bec, Canada. Dirig\u00e9 par le fondateur. Juan@clientgrowth.ca",
      },
      faqHeading: "Chaque question que j\u2019entends avant qu\u2019un client signe.",
      faqHeadingItalic: "R\u00e9pondue.",
      faqStillQuestions: "Encore des questions?",
      faqApplyCta: "Devenir partenaire \u2192",
      faqPreferEmail: "Pr\u00e9f\u00e9rez le courriel?",
    },
    services: {
      hero: {
        eyebrow: "SERVICES",
        h1: "Un syst\u00e8me d\u2019acquisition.",
        body1: "Site de conversion. SEO local. Google Ads avec coût par appel suivi. IA qui qualifie les leads après les heures. Construit comme un système connecté, géré par une personne.",
        body2: "Chaque couche alimente la suivante. Plus il roule longtemps, moins chaque appel coûte cher.",
        microResult: "Résultat le plus récent : $41 085 avec $900 en publicité.",
        cta1: "Devenir partenaire →",
        cta2: "Voir comment le système fonctionne",
        trust1: "Réponse dans les 24 heures",
        trust2: "Aucun acompte avant confirmation",
        trust3: "Une place actuellement ouverte",
        rotating: [
          "Sites qui convertissent.",
          "SEO qui s'accumule.",
          "Annonces tracées au coût par appel.",
          "IA qui capte chaque lead.",
          "Un propriétaire. Zéro intermédiaire.",
        ],
      },
      proofBanner: {
        stat1Sub: "Revenus générés. Un client. Premiers 30 jours.",
        stat2Sub: "Coût moyen par appel qualifié. Tous les comptes actifs.",
        stat3Sub: "Délai médian entre la signature et le premier appel réservé.",
        days: "jours",
      },
      architecture: {
        sectionLabel: "LE MOTEUR D'ACQUISITION",
        heading: "Un système. Chaque couche connectée.",
        body1: "Pas un ensemble de services. Une infrastructure d'acquisition : site, recherche, publicité payante, qualification IA et optimisation fonctionnant comme une seule machine connectée.",
        body2: "Le système de base est inclus dans chaque engagement. Les couches d'expansion s'activent selon votre stade.",
        coreLabel: "INCLUS DANS CHAQUE PARTENARIAT",
        coreHeading: "Le système d'acquisition de base",
        coreSub: "Toujours inclus. La fondation sur laquelle chaque couche d'expansion s'appuie.",
        expansionLabel: "CE QUI S'ACTIVE SELON LE STADE",
        expansionHeading: "Couches d'expansion",
        expansionSub: "Pas des forfaits séparés. La prochaine couche de la même machine, activée quand votre stade le demande.",
        core: [
          { title: "Rapport d'écart de marché", copy: "Exposition des concurrents cartographiée avant qu'une ligne de code soit écrite. Chaque décision de construction en découle." },
          { title: "Site de conversion", copy: "Codé à la main. Chargement en sous-seconde. Conçu pour réserver des appels, pas pour paraître présentable." },
          { title: "Capture de recherche locale", copy: "SEO local ciblant les acheteurs avec intention de réserver. S'accumule dès le premier jour." },
          { title: "Tunnel de réservation", copy: "Appels et formulaires capturés 24h/7j. Aucun lead perdu pendant que vous travaillez." },
          { title: "Couche analytique", copy: "Chaque appel, formulaire et réservation attribué à sa source. Vous voyez exactement ce que le système produit." },
          { title: "Propriété complète des actifs", copy: "Site web, comptes publicitaires, analyses et suivi vous appartiennent. Si vous partez, vous emportez tout." },
        ],
        layers: [
          {
            label: "COUCHE D'ACQUISITION PAYANTE",
            title: "Quand la capture organique seule ne suffit pas.",
            copy: "Quand la recherche seule n'est pas assez rapide. Annonces ciblant l'intention d'achat active, tracées au coût par appel.",
            items: [
              "Google Ads ciblant les acheteurs actifs dans votre marché",
              "Pages d'atterrissage par service et par ville",
              "Agent vocal IA : aucun lead vers la messagerie vocale",
              "Optimisation hebdomadaire contre le coût par appel qualifié",
            ],
            investment: "2 500 $ / mois + budget pub",
            investmentDetail: "Budget pub séparé. Minimum 500 $/mois. Terme initial de 90 jours.",
          },
          {
            label: "COUCHE DE MISE À L'ÉCHELLE DU MARCHÉ",
            title: "Quand l'objectif est la domination structurelle.",
            copy: "Demande prouvée. Un concurrent prêt à bouger. Architecture multi-villes construite pour posséder un marché, pas juste pour s'y classer.",
            items: [
              "Architecture de campagne multi-villes",
              "Déplacement des concurrents en recherche et en payant",
              "SEO étendu ciblant les termes commerciaux à haute valeur",
              "Appels de stratégie bi-hebdomadaires",
            ],
            investment: "6 000 $ / mois + budget pub",
            investmentDetail: "Budget pub minimum 1 500 $/mois. Deux places par niche par ville.",
            scarcity: "Si un concurrent dans votre marché postule en premier, cette couche se ferme pour votre région.",
          },
        ],
      },
      techStack: {
        label: "Avantage infrastructure",
        heading: "Construit avec une infrastructure. Pas des constructeurs de pages.",
        sub: "La vitesse de page, le classement en recherche et la propriété complète des actifs ne sont pas le fruit du hasard. Ils découlent de l'infrastructure sur laquelle tout est construit.",
        items: [
          { name: "Next.js", role: "Vitesse de page", detail: "Temps de chargement en sous-seconde à l'échelle mondiale. Les pages plus rapides réservent plus d'appels." },
          { name: "Vercel", role: "Fiabilité", detail: "99,99 % de disponibilité sur un CDN mondial. Aucune interruption pendant votre saison la plus occupée." },
          { name: "Google Ads", role: "Acquisition payante", detail: "Ciblage par intention d'achat tracé au coût par appel qualifié. Optimisé hebdomadairement selon les résultats." },
          { name: "Retell AI", role: "Capture de leads", detail: "Appels capturés et qualifiés après les heures. Aucun lead vers la messagerie vocale." },
          { name: "Google Analytics", role: "Attribution des revenus", detail: "Chaque appel et formulaire tracé à sa source. Vous voyez exactement où chaque dollar est allé." },
          { name: "Code sur mesure", role: "Propriété complète", detail: "Codé à la main. Pas de WordPress. Pas de gabarits. Tout ce qui est construit vous appartient dès le premier jour." },
        ],
      },
      finalCta: {
        howLabel: "MA MÉTHODE DE TRAVAIL",
        howHeading: "Ce que vous savez avant de signer quoi que ce soit.",
        howSub: "Les conditions, les standards et les protections sont définis avant qu'un contrat soit signé.",
        applyLabel: "POSTULER",
        applyHeading: "Je gère 3 partenariats à la fois.",
        applyBody: "Candidature courte. J'examine votre marché avant qu'on parle. Si je peux produire un retour, vous recevrez un lien d'appel dans les 24 heures. Sinon, je vous le dirai directement.",
        proofText: "3 derniers partenariats : l'un était en ligne en 9 jours. L'un a réservé son premier appel qualifié le jour 7. L'un a généré 2 716 $ le premier mois.",
        button: "Devenir partenaire →",
        microcopy: "Réponse dans les 24 heures. Aucun acompte avant confirmation.",
      },
      guarantees: {
        standardLabel: "LE STANDARD",
        standardHeading: "Chaque chiffre est réel ou il n'est pas publié.",
        standardBody: "Tous les résultats proviennent de comptes clients actifs. Pas de projections. Pas d'hypothèses.",
        standardVerified: "Vérifié T1 2026. Tous les résultats proviennent de comptes actifs.",
        milestone: "Livraison par étapes",
        milestoneBody: "Phase 1 : analyse de marché et feuille de route 90 jours. Phase 2 : site en ligne, campagnes et système de réservation. Vous approuvez avant chaque phase.",
        ownership: "Propriété des actifs",
        ownershipBody: "Site web, comptes publicitaires et suivi vous appartiennent. Mois par mois après la construction. Partez avec tout.",
        preEngagement: "Revue pré-engagement",
        preEngagementBody: "J'examine votre marché et votre opération avant tout accord. Si je ne peux pas produire un retour, je vous le dis directement. J'ai déjà refusé des clients.",
      },
    },
    results: {
      hero: {
        eyebrow: "Résultats clients : dossier vérifié",
        h1: "$41 085 en revenus. Campagnes SEO actives. Construit sur le même système.",
        sub: "Un dossier structuré de partenariats actifs. Conditions de départ, ce qui a été construit et les résultats obtenus. Chaque chiffre lié à un compte réel.",
        stat1Value: "$41 085",
        stat1Label: "Revenus générés",
        stat1Note: "Google Ads · 30 jours",
        stat2Value: "90",
        stat2Label: "Nouveaux clients acquis",
        stat2Note: "Système d'acquisition complet",
        stat3Value: "$33",
        stat3Label: "Coût par appel qualifié",
        stat3Note: "Recherche payante",
        stat4Value: "46×",
        stat4Label: "Retour sur investissement pub",
        stat4Note: "Premier mois",
      },
      flagship: {
        sectionMarker: "Partenariat principal",
        verified: "Vérifié",
        viewCaseStudy: "Voir l'étude de cas complète →",
        scrollToProof: "Voir la preuve",
        verificationContext: "Contexte de vérification",
        verifyLine1: "Accès complet au compte Google Ads fourni",
        verifyLine2: "Chiffres de revenus déclarés par le propriétaire et vérifiés",
        verifyLine3: "Suivi des réservations confirmé via les événements GA4",
        viewMetrics: "Voir le rapport de métriques de campagne ↗",
      },
      secondary: {
        sectionMarker: "Partenariat vedette",
        headline: "Campagne SEO active.\nCiblant la position #1 en recherche locale.",
        infrastructureBuilt: "Infrastructure construite",
        verified: "Vérifié",
        viewCaseStudy: "Voir l'étude de cas complète →",
        outcome: "Résultat",
        newClients: "Nouveaux clients acquis",
        timeframe: "Délai",
        days: "jours",
        contextNote: "Infrastructure d'acquisition complète construite de zéro. Aucun site préexistant, aucun canal payant, aucune visibilité.",
      },
      cta: {
        eyebrow: "Prochaine étape",
        heading: "Si les résultats vous semblent convaincants, la prochaine étape est une conversation.",
        body: "Les partenariats sont sélectifs. Le premier appel est diagnostic. Il s'agit de vérifier si l'adéquation est réelle, pas d'un pitch de vente. Aucun engagement requis, aucune présentation.",
        trust1: "Réponse dans les 24 heures",
        trust2: "Aucun engagement pour postuler",
        trust3: "Fondateur, pas une agence",
        button: "Devenir partenaire",
        link: "Comment le système d'acquisition fonctionne →",
      },
      portfolio: {
        recentlyDelivered: "Récemment livrés",
        recentSub: "Systèmes en ligne. Résultats suivis.",
        activeBuilds: "Constructions actives",
        inProgress: "en cours",
        activeSub: "Système en ligne. Suivi de performance actif.",
      },
      disclaimer: "Les résultats présentés proviennent de mandats clients réels. Les chiffres de revenus sont déclarés par les clients. Vos résultats varieront selon le marché, l'offre et l'exécution.",
    },
    about: {
      hero: {
        sectionLabel: "À PROPOS",
        h1: "Juan Carlos. Je construis des systèmes qui transforment le trafic de recherche en appels réservés.",
        subHead: "Un opérateur. Chaque couche. Pleine responsabilité.",
        body1: "La plupart des propriétaires d'entreprise que je rencontre sont excellents dans ce qu'ils font. Le travail est là. La réputation est là. Ce qui manque, c'est l'infrastructure qui permet aux bonnes personnes de les trouver avant de trouver un concurrent. C'est l'écart que je comble.",
        body2: "Site web, annonces, SEO et automatisation IA. Construit comme un système connecté pour que les bons clients vous trouvent en premier, déjà convaincus que vous êtes le bon choix.",
        bullet1: "Stratégie, construction et optimisation gérées par une seule personne",
        bullet2: "Aucun gestionnaire de compte entre vous et le travail",
        bullet3: "Mesuré par les appels qualifiés et les revenus, rien d'autre",
        cta1: "Devenir partenaire",
        cta2: "Voir les résultats →",
        trust1: "Réponse sous 24h",
        trust2: "100% confidentiel",
        trust3: "Places limitées par trimestre",
      },
      workingWithMe: {
        overline: "TRAVAILLER AVEC MOI",
        headline: "Les 30 premiers jours",
        phase1Title: "Jours 1–3",
        phase1Desc: "Appel de découverte, audit des lacunes du marché et feuille de route de 90 jours. Je définis ce à quoi ressemble le succès et verrouille l'offre.",
        phase2Title: "Jours 4–14",
        phase2Desc: "Construction du système. Site web, tunnel, suivi et architecture des annonces.",
        phase3Title: "Jours 12–30",
        phase3Desc: "Optimisation et premiers appels. J'itère sur la conversion et le coût par appel. Vous commencez à voir des rendez-vous réservés.",
      },
      cta: {
        headline: "Votre pipeline ne se construira pas tout seul.",
        sub: "Postulez pour un appel diagnostic. Je révise votre entreprise, votre marché et votre pipeline avant qu'on parle. Lors de l'appel, je vous montre exactement où vous perdez des appels et ce que ça vaut de corriger.",
        guarantee: "Si je ne peux pas produire un retour, je vous le dis lors de l'appel. Avant que vous payiez quoi que ce soit.",
        primary: "Devenir partenaire",
        secondary: "Voir les résultats →",
        trust1: "Réponse sous 24 heures",
        trust2: "100% confidentiel",
      },
      metrics: {
        label1: "Nouveaux clients acquis",
        note1: "Elite Barbershop, 90 jours",
        label2: "Retour sur investissement pub, Triple W Rentals",
        label3: "Délai typique entre signature et système en ligne",
        updated: "MIS À JOUR AU FIL DES RÉSULTATS.",
      },
    },
    aboutPage: {
      operatorHeading: "Un seul opérateur. Responsabilité totale.",
      card1Title: "Construit personnellement",
      card1Body: "Chaque site, campagne et optimisation est fait par moi. Jamais délégué.",
      card2Title: "Accès direct",
      card2Body: "Vous m'écrivez. Je réponds. Pas de gestionnaire de compte. Pas de tickets.",
      card3Title: "Sélectif par choix",
      card3Body: "Je ne prends que des clients pour qui je sais que je peux produire un retour.",
      ctaHeading: "Prêt à voir ce que ce système peut faire pour votre entreprise?",
      ctaSub: "Un appel. J'examine votre marché avant qu'on parle. Pas de pitch. Pas de pression.",
      ctaButton: "Devenir partenaire →",
      ctaTrust: "Réponse dans les 24 heures.",
    },
    applyPage: {
      heading: "Devenir partenaire",
      sub: "J'examine votre marché, vos concurrents et votre configuration actuelle avant qu'on parle. Si je peux faire bouger les choses, je vous dis exactement comment. Sinon, je vous le dis aussi.",
      placeholderName: "Nom complet",
      placeholderBusiness: "Nom de l'entreprise",
      placeholderWebsite: "URL du site web (si vous en avez un)",
      placeholderEmail: "Courriel",
      submitButton: "Soumettre la candidature",
      submitting: "Envoi en cours...",
      trustLine: "Aucun paiement avant confirmation. Je réponds dans les 24 heures.",
      proofQuote: "Le premier appel est arrivé en 9 jours. On avait essayé deux agences avant. Rien ne s'en approchait.",
      successTitle: "Candidature reçue.",
      successBody: "J'examinerai votre entreprise dans les 24 heures et je vous écrirai directement.",
      errorTitle: "Une erreur est survenue.",
      tryAgain: "Réessayer",
    },
    resultsPage: {
      eyebrow: "RÉSULTATS PROUVÉS",
      heading: "Cinq entreprises. Même système. Résultats réels.",
      sub: "Chaque résultat ci-dessous provient du même système d'acquisition. Un seul opérateur. Chiffres vérifiés.",
      revenueLine: "de revenus. Premiers 30 jours.",
      returnLine: "46 $ retournés pour chaque 1 $ investi en publicité.",
      verifiedLine: "Compte actif. Dernière vérification février 2026.",
      testimonialQuote: "Depuis que Juan est arrivé, on reçoit beaucoup plus de prospects qualifiés. L'entreprise va extrêmement bien dans la ville maintenant.",
      whatWasBuilt: "Ce qui a été construit :",
      deliverables: "Google Ads  ·  Site de conversion  ·  Système de réservation  ·  Optimisation hebdomadaire",
      viewLiveSite: "Voir le site →",
      ctaHeading: "Prêt à voir ce que ce système peut faire pour votre entreprise?",
      ctaSub: "Un appel. J'examine votre marché avant qu'on parle. Pas de pitch. Pas de pression.",
      ctaButton: "Devenir partenaire →",
      ctaTrust: "Réponse dans les 24 heures. Aucun contrat avant confirmation.",
      client1Badge: "LIVRÉ",
      client1Title: "Site web sur mesure + système de réservation",
      client1Desc: "Site de conversion conçu et construit. Système de réservation mobile inclus.",
      client1Testimonial: "\"Juan a construit le site exactement comme je le voulais. Je recommande.\"",
      client2Badge: "EN COURS",
      client2Title: "Site web sur mesure + campagne SEO locale",
      client2Desc: "Site de conversion conçu et construit. Campagne SEO locale lancée, en compétition pour la première position Google.",
      client2Testimonial: "\"J'adore. Très beau et professionnel.\"",
      client3Badge: "LIVRÉ",
      client3Title: "Site de conversion",
      client3Desc: "Site web sur mesure construit pour le marché de la peinture à DFW. Conçu pour les demandes de soumission.",
      client3Testimonial: "\"Un site professionnel qui représente la marque. Exactement ce qu'il fallait.\"",
      client4Badge: "LIVRÉ",
      client4Title: "Site web sur mesure + entonnoir de réservation",
      client4Desc: "Site web sur mesure conçu et construit. Entonnoir de réservation inclus.",
    },
  },
};
