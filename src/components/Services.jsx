import { siteContent } from "@/data/siteContent";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Services() {
  return (
    <Section id="servicos">
      <SectionTitle
        eyebrow="Serviços"
        title="Programas desenvolvidos para diferentes objetivos."
        subtitle="Independentemente da sua necessidade, desenvolvemos um plano de aprendizagem adequado ao seu momento."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {siteContent.services.map((service) => (
          <div
            key={service}
            className="rounded-2xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-red-700 hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold text-slate-900">
              {service}
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Programa personalizado desenvolvido de acordo com seus objetivos e
              sua realidade.
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}