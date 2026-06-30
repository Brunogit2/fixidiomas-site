import { siteContent } from "@/data/siteContent";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Steps() {
  return (
    <Section id="como-funciona" className="bg-slate-50">
      <SectionTitle
        eyebrow="Como Funciona"
        title="Uma metodologia simples, personalizada e eficiente."
        subtitle="Nosso processo foi desenvolvido para facilitar sua evolução no inglês sem perder tempo com conteúdos que não fazem sentido para seus objetivos."
      />

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {siteContent.steps.map((step, index) => (
          <div
            key={step.title}
            className="rounded-2xl bg-white p-8 shadow-sm border border-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-red-700 text-lg font-bold text-white">
              {index + 1}
            </div>

            <h3 className="text-xl font-semibold text-slate-900">
              {step.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}