import { Bike, CloudSun, IdCard, Mountain } from "lucide-react";
import type { Tour } from "@/data/tours";
import { SectionReveal } from "@/components/ui/SectionReveal";

const mapNoteToIcon = (text: string) => {
  const t = text.toLowerCase();
  if (t.includes("altitude") || t.includes("acclimatiz")) return Mountain;
  if (t.includes("id") || t.includes("proof")) return IdCard;
  if (t.includes("rid") || t.includes("bike") || t.includes("experience"))
    return Bike;
  if (t.includes("weather") || t.includes("itinerary")) return CloudSun;
  return Mountain;
};

export function ImportantNotes({ tour }: { tour: Tour }) {
  const notes = tour.importantNotes;
  if (!notes?.length) return null;

  return (
    <section className="section bg-sand">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <SectionReveal>
          <div className="eyebrow">Good to know</div>
          <h2 className="mt-4 max-w-2xl font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Smarter travel — not alarmist fine print.
          </h2>
        </SectionReveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {notes.map((note, idx) => {
            const Icon = mapNoteToIcon(note);
            return (
              <SectionReveal key={note} delay={0.04 * idx}>
                <div className="card h-full p-5">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/8 bg-cream text-ink/85">
                    <Icon className="h-5 w-5 text-copper" />
                  </div>
                  <p className="mt-4 text-sm leading-6 text-ink/80">{note}</p>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
