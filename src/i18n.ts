// src/i18n.ts

export type Language = "sv" | "en";

export const translations = {
  sv: {
    cv: "CV",
    download: "Ladda ner som PDF",
    profile: "Profil",
    experience: "Erfarenhet",
    education: "Utbildning",
    skillsTech: "Tekniska färdigheter",
    skillsSoft: "Övriga styrkor",
    footer: "Designad & byggd av",
    using: "med",
    title: "Frontend-utvecklare",
    profileText:
      "Frontendutvecklare med bakgrund inom marknadsföring, sälj och byggbranschen. Studerar Front-End Development på Jensen YH och bygger aktivt teknisk kompetens inom HTML, CSS, JavaScript, TypeScript, React, Next.js och Tailwind CSS, med dagligt arbete i Git/GitHub och Figma, Tidigare Key Account Manager på Viaplay Group Radio, med ansvar för strategiska samarbeten och kampanjer för några av Sveriges största företag. Jag är lösningsorienterad, kommunikativ och driven av att kombinera teknik med affärsnytta.",
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
    experience: "Experience",
    education: "Education",
    skillsTech: "Technical skills",
    skillsSoft: "Other strengths",
    footer: "Designed & built by",
    using: "using",
    title: "Frontend Developer",
    profileText:
      "Frontend Developer with a background in marketing, sales, and the construction industry. Currently studying Front-End Development at Jensen YH, actively building technical skills in HTML, CSS, JavaScript, TypeScript, React, Next.js, and Tailwind CSS, with daily work in Git/GitHub and Figma. Previously a Key Account Manager at Viaplay Group Radio, responsible for strategic partnerships and campaigns for some of Sweden’s largest companies. I am solution-oriented, communicative, and driven by combining technology with business value.",
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
      "Solution oriented and curious",
      "Goal-driven doer with a passion for growth",
      "Strong drive to create value and build relationships both internally and externally",
      "Thrives in team environments while also being self driven and proactive",
    ],
  },
} as const;
