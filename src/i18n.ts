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

    title: "Frontend-utvecklare",
    profileText: `
Jag är en lösningsorienterad och nyfiken frontendutvecklare under utbildning, med bakgrund i affärsdrivna roller där ansvar, kommunikation och resultat stått i fokus. Jag studerar Front-End Development på Jensen YH och arbetar med användarvänliga & responsiva lösningar.

Jag har erfarenhet av kund och budgetansvar och är van att analysera behov, samarbeta tvärfunktionellt och omsätta krav till fungerande lösningar. Jag är målinriktad, självgående och trivs i team, med ett starkt driv att utvecklas och skapa värde.
`,

    experience: [
      {
        title: "Frontend Utvecklare",
        subtitle: "Sprinto AB",
        dates: "nov 2025 – Pågående",
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
          "Säljroll med kund- och budgetansvar för nationella kunder inom både B2B och B2C",
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
          "Säljroll med kund och budgetansvar för B2B och B2C kunder",
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
          "Självständigt arbete med egen kundportfölj",
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
          "Fokus på React, TypeScript, API:er, UI/UX.",
          "Projektarbete med Git och versionshantering.",
        ],
      },
      {
        title: "Sälj & Personlig utveckling",
        subtitle: "Arndts Sales Academy",
        dates: "aug 2018 – dec 2018",
        bullets: [
          "Fokus på React, TypeScript, API:er, UI/UX.",
          "Projektarbete med Git och versionshantering.",
        ],
      },
      {
        title: "Byggnadsprogrammet",
        subtitle: "Bolandsgymnasiet",
        dates: "2009 – 2012",
        bullets: [
          "Fokus på React, TypeScript, API:er, UI/UX.",
          "Projektarbete med Git och versionshantering.",
        ],
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
      "Lösningsorienterad och nyfiken",
      "Målinriktad doer med passion för utveckling",
      "Starkt driv för att skapa värde samt bygga relationer både internt och externt",
      "Trivs i team men även självgående och initiativtagande",
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

    title: "Frontend Developer",
    profileText: `I am a solution oriented and curious frontend developer in training, with a background in businessdriven roles where responsibility, communication, and results have been key. I am studying Front-End Development at Jensen YH and work with userfriendly and responsive solutions.

I have experience with customer and budget responsibility and am used to analyzing needs, collaborating crossfunctionally, and turning requirements into working solutions. I am goaldriven, selfmotivated, and thrive in team environments, with a strong drive to grow and create value.
`,

    experience: [
      {
        title: "Sprinto",
        subtitle: "Frontend Utvecklare",
        dates: "2025 - nu",
        bullets: [
          "Built React apps (e.g., chat app, e-learning site).",
          "Worked with TypeScript, Tailwind, and APIs.",
          "Git/GitHub workflows with branches and pull requests.",
        ],
      },
      {
        title: "Sales Representative",
        subtitle: "Example Company AB, Stockholm",
        dates: "2021 – 2022",
        bullets: [
          "Owned the full sales process: needs analysis, quote, negotiation, agreement.",
          "Built and maintained customer relationships (B2B/B2C).",
          "Worked towards clear targets with structured follow-up.",
        ],
      },
      {
        title: "Previous Experience",
        subtitle: "Add your role / workplace here",
        dates: "YYYY – YYYY",
        bullets: [
          "Short bullet about responsibility/results.",
          "One more point (preferably measurable).",
          "A point highlighting collaboration or problem-solving.",
        ],
      },
    ],

    education: [
      {
        title: "Frontend Developer (Higher Vocational Education)",
        subtitle: "Jensen Yrkeshögskola",
        dates: "2024 – 2026",
        bullets: [
          "Focus on React, TypeScript, APIs, UI/UX.",
          "Project work with Git and version control.",
        ],
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
      "Solution-oriented and curious",
      "Goal-driven doer with a passion for growth",
      "Strong drive to create value and build relationships both internally and externally",
      "Thrives in team environments while also being self-driven and proactive",
    ],
  },
} satisfies Record<Language, Translation>;
