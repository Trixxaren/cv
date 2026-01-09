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
        title: "Frontend-student / Projekt",
        subtitle: "YH-utbildning – Projektarbete",
        dates: "2024 – 2025",
        bullets: [
          "Byggt React-appar (t.ex. chattapp, e-learning-sida).",
          "Jobbat med TypeScript, Tailwind och API:er.",
          "Git/GitHub-flöden med branches och pull requests.",
        ],
      },
      {
        title: "Säljare",
        subtitle: "Exempelbolag AB, Stockholm",
        dates: "2021 – 2022",
        bullets: [
          "Ansvar för hela säljprocessen: behov, offert, förhandling, avtal.",
          "Byggde och vårdade kundrelationer (B2B/B2C).",
          "Arbetade mot tydliga mål och uppföljning.",
        ],
      },
      {
        title: "Tidigare erfarenhet",
        subtitle: "Fyll i din roll / arbetsplats här",
        dates: "ÅÅÅÅ – ÅÅÅÅ",
        bullets: [
          "Kort punkt om ansvar/resultat.",
          "En punkt till (gärna mätbart om möjligt).",
          "En punkt som visar samarbete eller problemlösning.",
        ],
      },
    ],

    education: [
      {
        title: "Frontend-utvecklare (YH)",
        subtitle: "Jensen Yrkeshögskola",
        dates: "2024 – 2026",
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
        title: "Frontend Student / Projects",
        subtitle: "YH Program – Project Work",
        dates: "2024 – 2025",
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
