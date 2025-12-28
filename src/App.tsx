// src/App.tsx
import { useState } from "react";
import { cvData } from "./cvData";
import { SectionTitle } from "./components/SectionTitle";
import { Timeline } from "./components/Timeline";
import { translations, type Language } from "./i18n";
import {
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
  FaEnvelope,
  FaHome,
} from "react-icons/fa";

export default function App() {
  const [lang, setLang] = useState<Language>("sv");
  const t = translations[lang];

  const handlePrint = () => window.print();

  const contactLabels =
    lang === "sv"
      ? {
          address: "Adress",
          email: "Email",
          phone: "Telefon",
          linkedin: "LinkedIn",
          github: "GitHub",
        }
      : {
          address: "Address",
          email: "Email",
          phone: "Phone",
          linkedin: "LinkedIn",
          github: "GitHub",
        };

  const linkedinHref = cvData.contact.linkedin.startsWith("http")
    ? cvData.contact.linkedin
    : `https://${cvData.contact.linkedin}`;

  const githubHref = cvData.contact.github.startsWith("http")
    ? cvData.contact.github
    : `https://${cvData.contact.github}`;

  const phoneHref = `tel:${cvData.contact.phone.replace(/\s/g, "")}`;
  const emailHref = `mailto:${cvData.contact.email}`;

  return (
    <div className="min-h-screen bg-slate-900 px-4 py-10 print:bg-white">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4">
        {/* Actions */}
        <div className="no-print flex justify-end gap-2">
          <button
            onClick={() => setLang(lang === "sv" ? "en" : "sv")}
            className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
          >
            {lang === "sv" ? "English" : "Svenska"}
          </button>

          <button
            onClick={handlePrint}
            className="rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-teal-700 active:translate-y-[1px]"
          >
            {t.download}
          </button>
        </div>

        {/* CV Page */}
        <main className="relative rounded-2xl bg-white p-6 shadow-2xl md:p-10 print:rounded-none print:shadow-none">
          {/* Header */}
          <header className="flex flex-col gap-8 pt-4 sm:flex-row sm:items-start">
            {/* Vänster: profil */}
            <div className="flex-1">
              {/* Rad: bild + namn/roll */}
              <div className="flex items-center gap-4">
                <img
                  src="/profile.jpg"
                  alt={`${cvData.name} profilbild`}
                  className="h-28 w-28 rounded-full object-cover border-2 border-slate-200"
                />

                <div className="min-w-0">
                  <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                    {cvData.name}
                  </h1>
                  <p className="mt-1 text-slate-600">{cvData.title}</p>
                </div>
              </div>

              {/* Profiltext */}
              <p className="mt-4 max-w-md text-sm leading-6 text-slate-700">
                {cvData.profileText}
              </p>
            </div>

            {/* Höger: kontakt (ikon+label över värdet) */}
            <aside className="ml-auto w-full max-w-[240px] text-sm text-slate-700">
              <div className="space-y-4">
                {/* Address */}
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <FaHome className="text-slate-400" />
                    <span className="font-medium text-slate-600">
                      {contactLabels.address}
                    </span>
                  </div>
                  <p className="mt-1 break-words text-slate-800">
                    {cvData.contact.location}
                  </p>
                </div>

                {/* Email (måste synas helt) */}
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <FaEnvelope className="text-slate-400" />
                    <span className="font-medium text-slate-600">
                      {contactLabels.email}
                    </span>
                  </div>
                  <a
                    href={emailHref}
                    className="mt-1 block break-words text-slate-800 hover:underline underline-offset-4"
                  >
                    {cvData.contact.email}
                  </a>
                </div>

                {/* Phone */}
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <FaPhoneAlt className="text-slate-400" />
                    <span className="font-medium text-slate-600">
                      {contactLabels.phone}
                    </span>
                  </div>
                  <a
                    href={phoneHref}
                    className="mt-1 block break-words text-slate-800 hover:underline underline-offset-4"
                  >
                    {cvData.contact.phone}
                  </a>
                </div>

                {/* GitHub */}
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <FaGithub className="text-slate-400" />
                    <span className="font-medium text-slate-600">
                      {contactLabels.github}
                    </span>
                  </div>
                  <a
                    href={githubHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block break-words text-slate-800 hover:underline underline-offset-4"
                  >
                    {cvData.contact.github}
                  </a>
                </div>

                {/* LinkedIn */}
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <FaLinkedin className="text-slate-400" />
                    <span className="font-medium text-slate-600">
                      {contactLabels.linkedin}
                    </span>
                  </div>
                  <a
                    href={linkedinHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block break-words text-slate-800 hover:underline underline-offset-4"
                  >
                    {cvData.contact.linkedin}
                  </a>
                </div>
              </div>
            </aside>
          </header>

          {/* Divider */}
          <hr className="mt-5 mb-4 border-slate-200" />

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
