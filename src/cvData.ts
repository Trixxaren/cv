export type CvContact = {
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
};

export type CvEntry = {
  title: string;
  subtitle: string;
  dates: string;
  bullets: string[];
};

export type CvData = {
  name: string;
  title: string;
  contact: CvContact;
  profileText: string;
  experience: CvEntry[];
  education: CvEntry[];
  techSkills: string[];
  softSkills: string[];
};

export const cvData: CvData = {
  name: "Robin Vikström",
  title: "Frontend-utvecklare",
  contact: {
    location: "Stockholm, Sverige",
    email: "robin.m.e.vikstrom@gmail.com",
    phone: "070-000 00 00",
    linkedin: "linkedin.com/in/robinvikstrom",
    github: "github.com/robinvikstrom",
  },
  profileText:
    "Nyfiken frontend-utvecklare som gillar att bygga tydliga, enkla och användarvänliga gränssnitt. Van vid React, TypeScript och moderna verktyg som Vite och Tailwind. Brinner för att lära mig mer och bygga projekt som faktiskt används.",
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
      subtitle: "Namn på skola",
      dates: "2024 – 2026",
      bullets: [
        "Fokus på React, TypeScript, API:er, UI/UX.",
        "Projektarbete med Git och versionshantering.",
      ],
    },
  ],
  techSkills: [
    "JavaScript, TypeScript",
    "React, Vite",
    "HTML, CSS, Tailwind",
    "Git, GitHub",
    "REST API, JSON",
  ],
  softSkills: [
    "Nyfiken och lär mig snabbt",
    "Strukturerad och noggrann",
    "Tydlig kommunikation",
    "Gillar att bygga projekt",
  ],
};
