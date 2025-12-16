// src/App.tsx
import { cvData } from "./cvData";
import { SectionTitle } from "./components/Sectiontitle";
import { Timeline } from "./components/Timeline";

export default function App() {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-900 px-4 py-10 print:bg-white">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4">
        {/* Actions */}
        <div className="no-print flex justify-end">
          <button
            onClick={handlePrint}
            className="rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-teal-700 active:translate-y-[1px]"
          >
            Ladda ner som PDF
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
                src="./public/profile.jpg"
                alt={`${cvData.name} profilbild`}
                className="h-30 w-30 rounded-full object-cover ring-2 ring-slate-200 print:ring-slate-300"
              />

              <div>
                <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900">
                  {cvData.name}
                </h1>
                <p className="mt-1 text-base text-slate-600">{cvData.title}</p>
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
            <SectionTitle>Profil</SectionTitle>
            <p className="mt-2 text-sm leading-6 text-slate-800">
              {cvData.profileText}
            </p>
          </section>

          {/* Erfarenhet */}
          <section className="mb-8">
            <SectionTitle>Erfarenhet</SectionTitle>
            <Timeline items={cvData.experience} />
          </section>

          {/* Utbildning */}
          <section className="mb-8">
            <SectionTitle>Utbildning</SectionTitle>
            <Timeline items={cvData.education} />
          </section>

          {/* Skills */}
          <section className="grid gap-6 md:grid-cols-2">
            <div>
              <SectionTitle>Tekniska färdigheter</SectionTitle>
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-800">
                {cvData.techSkills.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>

            <div>
              <SectionTitle>Övriga styrkor</SectionTitle>
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
              CV Designed &amp; built by{" "}
              <span className="font-medium text-slate-500">{cvData.name}</span>{" "}
              using{" "}
              <span className="font-medium text-slate-500">TypeScript</span>
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
