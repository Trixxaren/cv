// src/i18n.ts
import type { CvEntry } from "./types";

export type Language = "sv" | "en";

export type Translation = {
  cv: string;
  download: string;
  profile: string;

  experienceLabel: string;
  educationLabel: string;

  skillsTech: string;
  skillsSoft: string;

  footer: string;
  using: string;

  title: string;
  profileText: string;

  experience: CvEntry[];
  education: CvEntry[];

  techSkills: string[];
  softSkills: string[];
};

// Om du inte redan har den här typen i projektet: skapa filen src/types.ts (se längst ner).
export const translations = {
  sv: {
    cv: "CV",
    download: "Ladda ner som PDF",
    profile: "Profil",

    experienceLabel: "Erfarenhet",
    educationLabel: "Utbildning",

    skillsTech: "Tekniska färdigheter",
    skillsSoft: "Övriga styrkor",

    footer: "Designad & byggd av",
    using: "med",

    title: "“CV:t visar erfarenhet. Dialogen visar potential.”",
    profileText: `
Frontendutvecklare med bakgrund inom försäljning och affärsdrivna roller. Jag studerar idag Frontend Development på Jensen Yrkeshögskola.

Tidigare arbetade jag som Key Account Manager på Viaplay Group Radio där jag ansvarade för strategiska samarbeten med några av Sveriges största företag. Erfarenheten gav mig starka färdigheter inom kundansvar, behovsanalys och att driva projekt från idé till resultat.

Jag drivs av att bygga användarvänliga och responsiva webblösningar där teknik möter verkliga affärs- och användarbehov. Med förståelse för både kundperspektiv och utveckling trivs jag i gränslandet mellan affär och teknik.`,

    experience: [
      {
        title: "Frontend Utvecklare (praktik)",
        subtitle: "Sprinto AB",
        dates: "nov 2025 – pågående",
        bullets: [
          "Utvecklar plattformen CrossRoads i Next.js, med fokus på användarvänliga och skalbara gränssnitt.",
          "Arbetar i team enligt Scrum, med gemensam planering, utveckling och uppföljning.",
          "Versionshantering och samarbete via Git och GitHub genom hela utvecklingsprocessen.",
        ],
      },
      {
        title: "Key Account Manager",
        subtitle: "Viaplay Group Radio AB",
        dates: "aug 2022 – juli 2024",
        bullets: [
          "Säljroll med kund och budgetansvar för nationella B2B kunder",
          "Ansvar för hela säljprocessen: prospektering, behovsanalys, presentation, förhandling, avtal, genomförande och uppföljning",
          "Arbetade självständigt med egen kundportfölj och budget, samt i team med gemensamma mål",
          "Analys av kunddata, affärsresultat och kampanjutfall för kontinuerlig förbättring",
          "Fokus på långsiktigt relationsbyggande och värdeskapande samarbeten",
        ],
      },
      {
        title: "Bilförsäljare",
        subtitle: "J Bil AB",
        dates: "maj 2021 – aug 2022",
        bullets: [
          "Säljroll med kund och budgetansvar för B2B och B2C kunder, både nytt och begagnat.",
          "Ansvar för hela säljprocessen från behovsanalys till uppföljning",
          "Eget märkesansvar för Peugeot med teamutbildning och budgetuppföljning",
          "Samarbete med kollegor och ledning för att säkerställa kvalitet, affärsresultat och kundnöjdhet",
        ],
      },
      {
        title: "Account Manager",
        subtitle: "Retriever AB",
        dates: "jan 2021 – maj 2021",
        bullets: [
          "Säljroll med kund och budgetansvar för nationella B2B kunder",
          "Ansvar för hela säljprocessen från prospektering till uppföljning",
          "Samarbete med ledning och interna team i affärsarbetet",
          "Fokus på långsiktiga kundrelationer",
        ],
      },
      {
        title: "Account Manager",
        subtitle: "Viaplay Group Radio AB",
        dates: "apr 2019 – jan 2021",
        bullets: [
          "Säljroll med kund och budgetansvar för lokala B2B och B2C kunder",
          "Ansvar för hela säljprocessen från prospektering till uppföljning",
          "Samarbete med marknad och ledning i affärsarbetet",
          "Arbetade självständigt med egen kundportfölj",
        ],
      },
      {
        title: "Account Manager",
        subtitle: "MillionMind AB",
        dates: "dec 2018 – apr 2019",
        bullets: [
          "Säljroll med kund och budgetansvar för nationella B2B och B2C kunder",
          "Ansvar för hela säljprocessen från prospektering till uppföljning",
          "Samarbete med marknad, kundservice och ledning i affärsarbetet",
          "Långsiktigt relationsfokus",
        ],
      },
      {
        title: "Murare",
        subtitle: "Stockholms Puts & Bygg AB",
        dates: "feb 2014 – apr 2018",
        bullets: [
          "Puts och fasadarbeten inom bygg och murarbranschen",
          "Teamledaransvar på både mindre och större byggprojekt",
          "Samarbete med kollegor och projektledning för att säkerställa leverans enligt tidsplan",
          "Ansvar för planering, genomförande och kvalitet i det dagliga arbetet",
        ],
      },
      {
        title: "Murare",
        subtitle: "Henriks Fasad & Kakel AB",
        dates: "aug 2012 – jan 2014",
        bullets: ["Nyexaminerad murare (lärling)"],
      },
    ],

    education: [
      {
        title: "Frontend-utvecklare",
        subtitle: "Jensen Yrkeshögskola",
        dates: "aug 2024 – juni 2026",
        bullets: [
          "Utvecklar moderna och responsiva webbapplikationer med JavaScript, TypeScript, React, Vite och Tailwind, både individuellt och i team",
          "Arbetar med UX/UI, interaktionsdesign och användarupplevelse, från idé och prototyp till färdig implementation",
          "Genomför projekt enligt agila arbetssätt (Scrum), inklusive planering, implementation, testning och iteration",
          "Versionshantering och kodsamarbete via Git och GitHub i pågående projekt",
          "Bygger och vidareutvecklar egna och gemensamma projekt, såsom receptappar, quiz-SPA:er, chattapplikationer, komponentbibliotek",
          "Utvecklar egna frontend projekt utanför studierna, inklusive detta CV och andra webbapplikationer",
          "Använder Node.js, npm, API-integrationer och DevTools för utveckling, felsökning och kvalitetssäkring",
          "Arbetar strukturerat med testning, paketering, leverans och uppföljning som del av utbildningen",
        ],
      },
      {
        title: "Sälj & Personlig utveckling",
        subtitle: "Arndts Sales Academy",
        dates: "aug 2018 – dec 2018",
        bullets: [
          "Utbildning inom försäljning och personlig utveckling",
          "Bokade värderingsmöten åt Bjurforss med dokumenterat starka resultat",
          "Arbete genom hela säljprocessen med fokus på analys och förbättring",
        ],
      },
      {
        title: "Byggnadsprogrammet",
        subtitle: "Bolandsgymnasiet",
        dates: "2009 – 2012",
        bullets: ["Byggnadsprogrammet med inriktning murare."],
      },
    ],

    techSkills: [
      "JavaScript, TypeScript",
      "React, Next.js, Vite",
      "HTML, CSS, Tailwind CSS",
      "Node.js, npm",
      "Git, GitHub",
      "REST-API:er, JSON",
      "API-integration och autentisering (REST, JWT, sessioner)",
      "Responsiv design och mobile-first",
      "Tillgänglighet (semantisk HTML)",
      "Figma, Miro",
    ],

    softSkills: [
      "initiativtagande",
      "Lösningsorienterad och nyfiken",
      "Målinriktad doer med passion för utveckling",
      "Starkt driv för att skapa värde samt bygga relationer både internt och externt",
      "Trivs i team men även självgående",
    ],
  },

  en: {
    cv: "CV",
    download: "Download PDF",
    profile: "Profile",

    experienceLabel: "Experience",
    educationLabel: "Education",

    skillsTech: "Technical skills",
    skillsSoft: "Other strengths",

    footer: "Designed & built by",
    using: "using",

    title: "CV shows experience. A conversation reveals potential.",
    profileText: `Frontend developer with a background in sales and business-driven roles. I am currently studying Frontend Development at Jensen Yrkeshögskola.
    
    Previously, I worked as a Key Account Manager at Viaplay Group Radio, where I was responsible for strategic partnerships with some of Sweden’s largest companies. This experience gave me strong skills in client management, needs analysis, and driving projects from idea to results.
    
    I am motivated by building user-friendly and responsive web solutions where technology meets real business and user needs. With an understanding of both the customer perspective and development, I thrive at the intersection of business and technology.`,

    experience: [
      {
        title: "Frontend Developer (Internship)",
        subtitle: "Sprinto AB",
        dates: "Nov 2025 – present",
        bullets: [
          "Developing the CrossRoads platform in Next.js, with a focus on userfriendly and scalable interfaces.",
          "Working in a team according to Scrum, including joint planning, development, and follow-up.",
          "Version control and collaboration via Git and GitHub throughout the development process.",
        ],
      },
      {
        title: "Key Account Manager",
        subtitle: "Viaplay Group Radio AB",
        dates: "Aug 2022 – Jul 2024",
        bullets: [
          "Sales role with customer and budget responsibility for national B2B clients.",
          "Full ownership of the sales process. Prospecting, needs analysis, presentation, negotiation, contracts, execution, and follow up.",
          "Worked independently with own customer portfolio and budget, as well as in teams with shared goals.",
          "Analysis of customer data, business results, and campaign performance for continuous improvement.",
          "Strong focus on long-term relationship building and value-driven partnerships.",
        ],
      },
      {
        title: "Car Sales Representative",
        subtitle: "J Bil AB",
        dates: "May 2021 – Aug 2022",
        bullets: [
          "Sales role with customer and budget responsibility for both B2B and B2C clients, both new and used cars.",
          "Responsible for the full sales process from needs analysis to followup.",
          "Brand responsibility for Peugeot, including team training and budget followup.",
          "Collaboration with colleagues and management to ensure quality, business results, and customer satisfaction.",
        ],
      },
      {
        title: "Account Manager",
        subtitle: "Retriever AB",
        dates: "Jan 2021 – May 2021",
        bullets: [
          "Sales role with customer and budget responsibility for national B2B clients.",
          "Responsible for the entire sales process from prospecting to followup.",
          "Collaboration with management and internal teams in business development.",
          "Focus on long-term customer relationships.",
        ],
      },
      {
        title: "Account Manager",
        subtitle: "Viaplay Group Radio AB",
        dates: "Apr 2019 – Jan 2021",
        bullets: [
          "Sales role with customer and budget responsibility for local B2B and B2C clients.",
          "Responsible for the full sales process from prospecting to followup.",
          "Collaboration with marketing and management in sales initiatives.",
          "Independent work with own customer portfolio.",
        ],
      },
      {
        title: "Account Manager",
        subtitle: "MillionMind AB",
        dates: "Dec 2018 – Apr 2019",
        bullets: [
          "Sales role with customer and budget responsibility for national B2B and B2C clients.",
          "Responsible for the entire sales process from prospecting to followup.",
          "Collaboration with marketing, customer service, and management in sales activities.",
          "Strong focus on long-term relationship building.",
        ],
      },
      {
        title: "Bricklayer",
        subtitle: "Stockholms Puts & Bygg AB",
        dates: "Feb 2014 – Apr 2018",
        bullets: [
          "Plastering and façade work within the construction and masonry industry.",
          "Team lead responsibility on both small and large construction projects.",
          "Collaboration with colleagues and project management to ensure on-time delivery.",
          "Responsibility for planning, execution, and quality in daily work.",
        ],
      },
      {
        title: "Bricklayer",
        subtitle: "Henriks Fasad & Kakel AB",
        dates: "Aug 2012 – Jan 2014",
        bullets: ["Newly graduated bricklayer (apprentice)."],
      },
    ],

    education: [
      {
        title: "Frontend Developer",
        subtitle: "Jensen Higher Vocational Education",
        dates: "Aug 2024 – Jun 2026",
        bullets: [
          "Developing modern and responsive web applications using JavaScript, TypeScript, React, Vite, and Tailwind, both individually and in teams.",
          "Working with UX/UI, interaction design, and user experience from idea and prototype to final implementation.",
          "Carrying out projects according to agile methodologies (Scrum), including planning, implementation, testing, and iteration.",
          "Version control and code collaboration via Git and GitHub in ongoing projects.",
          "Building and further developing individual and team-based projects such as recipe apps, quiz SPAs, chat applications, and component libraries.",
          "Developing personal frontend projects outside of studies, including this CV and other web applications.",
          "Using Node.js, npm, API integrations, and DevTools for development, debugging, and quality assurance.",
          "Working in a structured manner with testing, packaging, delivery, and follow-up as part of the education.",
        ],
      },
      {
        title: "Sales & Personal Development",
        subtitle: "Arndts Sales Academy",
        dates: "Aug 2018 – Dec 2018",
        bullets: [
          "Education focused on sales and personal development.",
          "Booked property valuation meetings for Bjurfors with documented strong results.",
          "Worked throughout the entire sales process with a focus on analysis and improvement.",
        ],
      },
      {
        title: "Construction Program",
        subtitle: "Bolandsgymnasiet",
        dates: "2009 – 2012",
        bullets: ["Construction program with specialization in masonry."],
      },
    ],

    techSkills: [
      "JavaScript, TypeScript",
      "React, Next.js, Vite",
      "HTML, CSS, Tailwind CSS",
      "Node.js, npm",
      "Git, GitHub",
      "REST APIs, JSON",
      "API integration & authentication (REST, JWT, sessions)",
      "Responsive & mobile-first design",
      "Accessibility (semantic HTML)",
      "Figma, Miro",
    ],

    softSkills: [
      "initiative and proactive",
      "Solution oriented and curious",
      "Goal-driven doer with a passion for growth",
      "Strong drive to create value and build relationships both internally and externally",
      "Thrives in team environments while also being self driven",
    ],
  },
} satisfies Record<Language, Translation>;
