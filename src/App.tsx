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
  FaBriefcase,
} from "react-icons/fa";

export default function App() {
  const [lang, setLang] = useState<Language>("sv");
  const t = translations[lang];

  const handlePrint = () => window.print();

  const contactLabels =
    lang === "sv"
      ? {
          address: "Adress",
          email: "E-post",
          phone: "Telefon",
          linkedin: "LinkedIn",
          github: "GitHub",
          portfolio: "Portfolio",
        }
      : {
          address: "Address",
          email: "E-mail",
          phone: "Phone",
          linkedin: "LinkedIn",
          github: "GitHub",
          portfolio: "Portfolio",
        };

  const linkedinHref = cvData.contact.linkedin.startsWith("http")
    ? cvData.contact.linkedin
    : `https://${cvData.contact.linkedin}`;

  const portfolioHref = cvData.contact.portfolio.startsWith("http")
    ? cvData.contact.portfolio
    : `https://${cvData.contact.portfolio}`;

  const githubHref = cvData.contact.github.startsWith("http")
    ? cvData.contact.github
    : `https://${cvData.contact.github}`;

  const phoneHref = `tel:${cvData.contact.phone.replace(/\s/g, "")}`;
  const emailHref = `mailto:${cvData.contact.email}`;

  const profileAlt =
    lang === "sv"
      ? `${cvData.name} profilbild`
      : `${cvData.name} profile photo`;

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 print:bg-white print:px-0 print:py-0">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 print:max-w-none print:gap-0">
        {/* Actions */}
        <div className="no-print flex justify-end gap-2">
          <button
            onClick={() => setLang(lang === "sv" ? "en" : "sv")}
            className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-800 shadow-sm hover:bg-slate-50 active:translate-y-px"
          >
            {lang === "sv" ? "English" : "Svenska"}
          </button>

          <button
            onClick={handlePrint}
            className="rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-teal-700 active:translate-y-px"
          >
            {t.download}
          </button>
        </div>

        {/* CV Page */}
        <main className="relative rounded-2xl bg-white p-6 shadow-2xl md:p-10 print:rounded-none print:p-8 print:shadow-none">
          {/* Header */}
          <header className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between print:flex-row print:items-start print:justify-between">
            {/* Left: profile */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-4">
                <img
                  src="/profile.jpg"
                  alt={profileAlt}
                  className="h-24 w-24 shrink-0 rounded-full border border-slate-200 object-cover md:h-28 md:w-28"
                />

                <div className="min-w-0">
                  <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                    {cvData.name}
                  </h1>
                  <p className="mt-1 text-sm font-medium text-slate-600 md:text-base">
                    {t.title}
                  </p>
                </div>
              </div>

              <p className=" max-w-xl text-sm leading-6 text-slate-700 whitespace-pre-line">
                {t.profileText}
              </p>
            </div>

            {/* Right: contact card */}
            <aside className="w-full md:max-w-65 md:shrink-0 print:w-65 print:shrink-0">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 print:bg-white">
                <div className="space-y-4 text-sm">
                  {/* Address */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <FaHome className="shrink-0 text-slate-400" />
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                        {contactLabels.address}
                      </span>
                    </div>
                    <p className="mt-1 wrap-break-words text-slate-800">
                      {cvData.contact.location}
                    </p>
                  </div>

                  {/* Email */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <FaEnvelope className="shrink-0 text-slate-400" />
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                        {contactLabels.email}
                      </span>
                    </div>
                    <a
                      href={emailHref}
                      className="mt-1 block wrap-break-words text-slate-800 underline-offset-4 hover:underline"
                    >
                      {cvData.contact.email}
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <FaPhoneAlt className="shrink-0 text-slate-400" />
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                        {contactLabels.phone}
                      </span>
                    </div>
                    <a
                      href={phoneHref}
                      className="mt-1 block wrap-break-words text-slate-800 underline-offset-4 hover:underline"
                    >
                      {cvData.contact.phone}
                    </a>
                  </div>

                  {/* GitHub */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <FaGithub className="shrink-0 text-slate-400" />
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                        {contactLabels.github}
                      </span>
                    </div>
                    <a
                      href={githubHref}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 block wrap-break-words text-slate-800 underline-offset-4 hover:underline"
                    >
                      {cvData.contact.github}
                    </a>
                  </div>

                  {/* LinkedIn */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <FaLinkedin className="shrink-0 text-slate-400" />
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                        {contactLabels.linkedin}
                      </span>
                    </div>
                    <a
                      href={linkedinHref}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 block wrap-break-words text-slate-800 underline-offset-4 hover:underline"
                    >
                      {cvData.contact.linkedin}
                    </a>
                  </div>

                  {/* Portfolio  */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <FaBriefcase className="shrink-0 text-slate-400" />
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                        {contactLabels.portfolio}
                      </span>
                    </div>
                    <a
                      href={portfolioHref}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 block wrap-break-words text-slate-800 underline-offset-4 hover:underline"
                    >
                      {cvData.contact.portfolio}
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </header>

          <hr className="my-6 border-slate-200" />
          {/* Experience */}
          <section className="mb-8">
            <SectionTitle>{t.experienceLabel}</SectionTitle>
            <Timeline items={t.experience} />
          </section>
          {/* Education */}
          <section className="mb-8">
            <SectionTitle>{t.educationLabel}</SectionTitle>
            <Timeline items={t.education} />
          </section>
          <hr className="my-6 border-slate-200" />
          {/* Skills */}
          <section className="grid gap-6 md:grid-cols-2">
            <div>
              <SectionTitle>{t.skillsTech}</SectionTitle>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-800">
                {t.techSkills.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>

            <div>
              <SectionTitle>{t.skillsSoft}</SectionTitle>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-800">
                {t.softSkills.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </section>
          <footer className="mt-10 border-t border-slate-200 pt-4 text-center">
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
