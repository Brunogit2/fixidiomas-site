import { siteContent } from "@/data/siteContent";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Differentials() {
  return (
    <Section id="diferenciais" className="bg-slate-50">
      <SectionTitle
        eyebrow="Diferenciais"
        title="O que torna a Fix Idiomas diferente."
        subtitle="Nossa proposta combina método, personalização e acompanhamento para que o inglês faça sentido na prática."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {siteContent.differentials.map((item) => (
          <div
            key={item}
            className="rounded-2xl bg-white p-8 shadow-sm border border-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-red-700 text-white">
              ✓
            </div>

            <h3 className="text-xl font-semibold text-slate-900">
              {item}
            </h3>
          </div>
        ))}
      </div>
    </Section>
  );
}