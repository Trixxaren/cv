// src/App.tsx
import { cvData } from "./cvData";
import { SectionTitle } from "./components/SectionTitle";
import { Timeline } from "./components/Timeline";
import { useState } from "react";
import { translations, type Language } from "./i18n";

export default function App() {
  const handlePrint = () => window.print();

  const [lang, setLang] = useState<Language>("sv");

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-slate-900 px-4 py-10 print:bg-white">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4">
        <div className="no-print flex gap-2 justify-end">
          <button
            onClick={() => setLang(lang === "sv" ? "en" : "sv")}
            className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
          >
            {lang === "sv" ? "English" : "Svenska"}
          </button>

          <button
            onClick={handlePrint}
            className="rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-teal-700"
          >
            {t.download}
          </button>
        </div>

        {/* CV Page */}
        <main className="relative rounded-2xl bg-white p-6 shadow-2xl md:p-10 print:rounded-none print:shadow-none">
          {/* Diskret CV-etikett */}

          {/* Header */}
          <header className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-start sm:justify-between">
            {/* Vänster: bild + namn/titel */}
            <div className="flex items-start gap-4">
              {/* Profilbild */}
              <img
                src="./profile.jpg"
                alt={`${cvData.name} profilbild`}
                className="h-30 w-30 rounded-full object-cover ring-2 ring-slate-200 print:ring-slate-300 scale-110"
              />
              {/* Ha scale-110 eller inget?  */}

              <div className="text-center">
                <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900">
                  {cvData.name}
                </h1>
                <p className="mt-1 text-slate-600">{cvData.title}</p>
              </div>
            </div>

            {/* Höger: kontakt */}
            <div className="text-sm text-slate-700 sm:text-right">
              <p>📍 {cvData.contact.location}</p>
              <p>📧 {cvData.contact.email}</p>
              <p>📱 {cvData.contact.phone}</p>
              <p>🌐 {cvData.contact.linkedin}</p>
              <p>💻 {cvData.contact.github}</p>
            </div>
          </header>

          <hr className="my-6 border-slate-200" />

          {/* Profil */}
          <section className="mb-8">
            <SectionTitle>{t.profile}</SectionTitle>
            <p className="mt-2 text-sm leading-6 text-slate-800">
              {cvData.profileText}
            </p>
          </section>

          {/* Erfarenhet */}
          <section className="mb-8">
            <SectionTitle>{t.experience}</SectionTitle>
            <Timeline items={cvData.experience} />
          </section>

          {/* Utbildning */}
          <section className="mb-8">
            <SectionTitle>{t.education}</SectionTitle>
            <Timeline items={cvData.education} />
          </section>

          {/* Skills */}
          <section className="grid gap-6 md:grid-cols-2">
            <div>
              <SectionTitle>{t.skillsTech}</SectionTitle>
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-800">
                {cvData.techSkills.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>

            <div>
              <SectionTitle>{t.skillsSoft}</SectionTitle>
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-800">
                {cvData.softSkills.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Footer / signatur */}
          <footer className="mt-12 border-t border-slate-200 pt-4 text-center">
            <p className="text-[11px] text-slate-400">
              {t.footer}{" "}
              <span className="font-medium text-slate-500">{cvData.name}</span>{" "}
              {t.using}{" "}
              <span className="font-medium text-slate-500">TypeScript</span>
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
