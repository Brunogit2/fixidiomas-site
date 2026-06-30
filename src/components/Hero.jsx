import { siteContent } from "@/data/siteContent";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${siteContent.contact.whatsapp}`;

  return (
   <section id="inicio" className="bg-white text-slate-900">
      <Container className="grid min-h-screen items-center gap-12 py-24 lg:grid-cols-2">
        <div>
          {siteContent.promotion.active && (
            <div className="mb-8 w-fit rounded-full bg-blue-500/15 px-5 py-2 text-sm font-medium text-blue-200">
              {siteContent.promotion.text}
            </div>
          )}

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-red-700">
            {siteContent.hero.eyebrow}
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
            {siteContent.hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {siteContent.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href={whatsappUrl}>{siteContent.hero.primaryButton}</Button>

            <Button href="#como-funciona" variant="secondary">
              {siteContent.hero.secondaryButton}
            </Button>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-100 p-6 shadow-2xl transition duration-500 hover:-translate-y-2 hover:bg-white/10">
          <div className="rounded-[1.5rem] bg-white p-8 text-slate-950">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-700">
              Método Fix
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Inglês aplicado à sua realidade.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Aulas ao vivo, grupos reduzidos e programas personalizados para
              transformar o inglês em uma ferramenta prática para sua vida,
              carreira ou empresa.
            </p>

            <div className="mt-8 grid gap-3 text-sm font-medium">
              <div className="rounded-xl bg-white border border-slate-200 p-4 transition hover:-translate-y-1 hover:bg-blue-50">
                Aulas online ao vivo
              </div>
              <div className="rounded-xl bg-white border border-slate-200 p-4 transition hover:-translate-y-1 hover:bg-blue-50">
                Programas personalizados
              </div>
              <div className="rounded-xl bg-white border border-slate-200        p-4 transition hover:-translate-y-1 hover:bg-blue-50">
                Foco em comunicação real
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}