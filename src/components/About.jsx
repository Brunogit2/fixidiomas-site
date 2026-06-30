import { siteContent } from "@/data/siteContent";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

export default function About() {
  return (
    <Section id="sobre" className="bg-white">
      <SectionTitle
        eyebrow="Quem Somos"
        title={siteContent.about.title}
        subtitle={siteContent.about.text}
      />

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 p-8">
          <h3 className="text-lg font-semibold text-slate-900">
            Aulas ao vivo
          </h3>

          <p className="mt-3 text-slate-600 leading-7">
            Professores reais, interação constante e acompanhamento próximo do
            seu desenvolvimento.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-8">
          <h3 className="text-lg font-semibold text-slate-900">
            Método próprio
          </h3>

          <p className="mt-3 text-slate-600 leading-7">
            Nossa metodologia foi desenvolvida para tornar o inglês útil desde
            as primeiras aulas.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-8">
          <h3 className="text-lg font-semibold text-slate-900">
            Programas personalizados
          </h3>

          <p className="mt-3 text-slate-600 leading-7">
            Cada aluno possui objetivos diferentes. O programa acompanha essa
            realidade.
          </p>
        </div>
      </div>
    </Section>
  );
}