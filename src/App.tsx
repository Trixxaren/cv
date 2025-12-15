// src/App.tsx
import { cvData } from "./cvData";
import { Entry } from "./components/Entry";
import { SectionTitle } from "./components/SectionTitle";

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
        <main className="rounded-2xl bg-white p-6 shadow-2xl md:p-10 print:rounded-none print:shadow-none">
          {/* Header */}
          <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                {cvData.name}
              </h1>
              <p className="mt-1 text-base text-slate-600">{cvData.title}</p>
            </div>

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
          <section className="mb-6">
            <SectionTitle>Profil</SectionTitle>
            <p className="mt-2 text-sm leading-6 text-slate-800">
              {cvData.profileText}
            </p>
          </section>

          {/* Erfarenhet */}
          <section className="mb-6">
            <SectionTitle>Erfarenhet</SectionTitle>
            <div className="mt-3 space-y-4">
              {cvData.experience.map((x) => (
                <Entry
                  key={`${x.title}-${x.subtitle}-${x.dates}`}
                  title={x.title}
                  subtitle={x.subtitle}
                  dates={x.dates}
                  bullets={x.bullets}
                />
              ))}
            </div>
          </section>

          {/* Utbildning */}
          <section className="mb-6">
            <SectionTitle>Utbildning</SectionTitle>
            <div className="mt-3 space-y-4">
              {cvData.education.map((e) => (
                <Entry
                  key={`${e.title}-${e.subtitle}-${e.dates}`}
                  title={e.title}
                  subtitle={e.subtitle}
                  dates={e.dates}
                  bullets={e.bullets}
                />
              ))}
            </div>
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
        </main>
      </div>
    </div>
  );
}

/* ============================================================================

TAILWIND CSS – DJUPFÖRKLARING (MOBILE-FIRST CV)

Den här kommentaren är tänkt som en PERMANENT FUSKLAPP.
Allt nedan förklarar exakt hur Tailwind-klasserna i detta CV fungerar,
vad de gör i CSS, och VARFÖR de används.

Grundidé:
- Utan prefix = MOBILE FIRST (gäller från mobil och uppåt)
- sm:, md:, lg: = förbättringar när skärmen blir större
- print: = hur sidan ser ut som PDF / utskrift

============================================================================ */

/* ----------------------------------------------------------------------------
LAYOUT / YTTERSTA CONTAINER (hela sidan)
---------------------------------------------------------------------------- */

/*
min-h-screen
→ min-height: 100vh;
Säger: sidan ska vara MINST lika hög som skärmen.
Om innehållet är kort → bakgrunden fyller ändå hela höjden.

Mental bild:
"Mattans storlek ska alltid täcka hela golvet, även om möblerna är få."
*/

/*
bg-slate-900
→ background-color: slate-900 (mycket mörk blå/grå)
Används för att skapa kontrast mot det vita CV-pappret.

Designprincip:
Mörk omgivning + ljust innehåll = fokus på innehållet.
*/

/*
px-4
→ padding-left/right: 16px
Ger luft mot mobilens kanter.

Mobile-first-regel:
ALDRIG innehåll som sitter klistrat mot skärmens kant.
*/

/*
py-10
→ padding-top/bottom: 40px
Ger vertikal luft ovanför och under CV:t.
Vertikal luft är extra viktig på mobil.
*/

/*
print:bg-white
När sidan skrivs ut (PDF):
→ bakgrunden blir vit

Varför:
PDF ska se ut som ett riktigt papper, inte en webbsida.
*/

/* ----------------------------------------------------------------------------
WRAPPER RUNT CV:T
---------------------------------------------------------------------------- */

/*
mx-auto
→ margin-left/right: auto
Centrerar innehållet horisontellt.

OBS:
Funkar bara ihop med max-width.
*/

/*
w-full
→ width: 100%
Elementet får ta all bredd som finns tillgänglig.
*/

/*
max-w-4xl
→ max-width: ca 896px
Begränsar bredden på stora skärmar.

CV-princip:
För bred text = sämre läsbarhet.
*/

/*
flex
→ display: flex
Aktiverar flexbox.
*/

/*
flex-col
→ flex-direction: column
Mobile-first:
Alla element staplas vertikalt.
*/

/*
gap-4
→ gap: 16px
Skapar jämnt mellanrum mellan alla barn.

Skillnad:
gap = layout-ansvar
margin = element-ansvar
*/

/* ----------------------------------------------------------------------------
ACTIONS / KNAPP (LADDA NER PDF)
---------------------------------------------------------------------------- */

/*
no-print
Egen CSS-klass (i index.css):

@media print {
  .no-print { display: none; }
}

All UI-kontroll ska bort i PDF.
*/

/*
justify-end
→ justify-content: flex-end
I en flex-container:
innehållet hamnar längst till höger.
*/

/*
rounded-full
→ border-radius: 9999px
Skapar pill-formad knapp.

UX:
Runda former upplevs mer klickvänliga.
*/

/*
bg-teal-600
Bakgrundsfärg.
Teal = trygg, teknisk, inte aggressiv.
*/

/*
px-4 py-2
→ padding 16px horisontellt, 8px vertikalt
Ger bra tryckyta (viktigt på mobil).
*/

/*
text-sm
→ font-size: 0.875rem
Kompakt UI-text (CV ska vara tätt).
*/

/*
font-semibold
Texten är tydligare utan att skrika.
*/

/*
text-white
Vit text för kontrast.
*/

/*
shadow
Liten skugga → knappen "lyfts" visuellt.
*/

/*
hover:bg-teal-700
Hover-effekt (desktop).
Visar att knappen är interaktiv.
*/

/*
active:translate-y-[1px]
→ transform: translateY(1px)
Simulerar att knappen trycks ner.
Detalj som signalerar kvalitet.
*/

/* ----------------------------------------------------------------------------
CV-PAPPRET (SJÄLVA DOKUMENTET)
---------------------------------------------------------------------------- */

/*
rounded-2xl
Stora rundade hörn.
Ger modernt “kort”-utseende.
*/

/*
bg-white
Själva pappret.
*/

/*
p-6
→ padding: 24px
Standard-padding på mobil.
*/

/*
shadow-2xl
Stor, mjuk skugga.
Pappret ser ut att ligga på bordet.
*/

/*
md:p-10
På tablet/desktop:
→ padding 40px
Mer luft när skärmen tillåter det.
*/

/*
print:rounded-none
I PDF:
→ inga rundade hörn
PDF = A4 = fyrkantigt papper.
*/

/*
print:shadow-none
I PDF:
→ ingen skugga
Skuggor hör hemma på skärm, inte i tryck.
*/

/* ----------------------------------------------------------------------------
HEADER (NAMN + KONTAKT)
---------------------------------------------------------------------------- */

/*
flex flex-col
Mobile-first:
Namn överst, kontakt under.
*/

/*
gap-4
16px luft mellan blocken.
*/

/*
sm:flex-row
Från sm (>= 640px):
Namn och kontakt sida vid sida.
*/

/*
sm:justify-between
Trycker ut dem till varsin sida.
*/

/*
sm:items-start
Topplinje justeras snyggt.
*/

/*
tracking-tight
Mindre bokstavsavstånd.
Rubriker ser mer professionella ut.
*/

/*
sm:text-right
Kontaktinfo högerjusteras
ENDAS när den ligger till höger.
*/

/* ----------------------------------------------------------------------------
DIVIDER (LINJEN)
---------------------------------------------------------------------------- */

/*
my-6
→ margin-top/bottom: 24px
Visuell paus mellan sektioner.
*/

/*
border-slate-200
Diskret ljusgrå linje.
Ska inte stjäla fokus.
*/

/* ----------------------------------------------------------------------------
SEKTIONSTITLAR (Profil, Erfarenhet, etc)
---------------------------------------------------------------------------- */

/*
text-xs
Små rubriker → tydlig hierarki.
*/

/*
uppercase
CV-standard.
*/

/*
tracking-widest
Stort bokstavsavstånd.
Ger etikett-/rubrikkänsla.
*/

/*
mt-2 / mt-3
Små vertikala mellanrum (8px / 12px).
*/

/*
leading-6
Radavstånd ≈ 1.5
Ögat blir mindre trött.
*/

/* ----------------------------------------------------------------------------
ENTRIES (ERFARENHET / UTBILDNING)
---------------------------------------------------------------------------- */

/*
space-y-4
Alla barn får vertikalt mellanrum (16px).
Perfekt för listor av jobb.
*/

/*
gap-1
Litet mellanrum (4px).
Håller ihop rubrik + underrubrik visuellt.
*/

/*
sm:items-baseline
Text justeras efter baslinjen
(ser subtilt mer professionellt ut).
*/

/*
list-disc
Vanliga bullet points.
*/

/*
pl-5
Ger plats åt bullet-symbolerna.
Texten linjerar snyggt.
*/

/* ----------------------------------------------------------------------------
SKILLS GRID
---------------------------------------------------------------------------- */

/*
grid
Aktiverar CSS Grid.
*/

/*
gap-6
→ 24px mellan kolumner/rader.
*/

/*
md:grid-cols-2
Mobile-first:
- Mobil: 1 kolumn
- Tablet/desktop: 2 kolumner
*/

/* ----------------------------------------------------------------------------
MENTAL SAMMANFATTNING
---------------------------------------------------------------------------- */

/*
Tailwind = små, bokstavliga CSS-regler.
Du bygger beteende genom att kombinera dem.

Tänk:
- padding = luft
- max-w = läsbarhet
- flex/grid = layout
- sm/md = progressiv förbättring
- print = dokumentläge

Detta CV är:
Mobil först → sedan större skärm → sedan PDF.

============================================================================ */
