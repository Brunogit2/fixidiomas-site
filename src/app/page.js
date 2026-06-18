import { siteContent } from "@/data/siteContent";

export default function Home() {
  const whatsappUrl = `https://wa.me/${siteContent.contact.whatsapp}`;

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
          {siteContent.promotion.active && (
            <div className="mb-8 w-fit rounded-full bg-blue-500/15 px-5 py-2 text-sm font-medium text-blue-200">
              {siteContent.promotion.text}
            </div>
          )}

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">
            {siteContent.company.name}
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
            {siteContent.hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {siteContent.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              className="rounded-full bg-blue-500 px-8 py-4 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              Falar pelo WhatsApp
            </a>

            <a
              href={siteContent.contact.instagram}
              target="_blank"
              className="rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Ver Instagram
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">Como funciona</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          A Fix Idiomas oferece aulas online ao vivo, em formato individual ou
          em grupos reduzidos, com programas personalizados de acordo com o
          objetivo do aluno.
        </p>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">Serviços</h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {siteContent.services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-slate-200 bg-white p-6 font-semibold"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">Diferenciais</h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteContent.differentials.map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-slate-950 p-6 font-semibold text-white"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-700 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold">
            Quer entender qual formato combina melhor com você?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Chame a Fix Idiomas pelo WhatsApp e conte seu objetivo.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Fix Idiomas.</p>

        <div className="flex gap-4">
          <a href={siteContent.contact.instagram} target="_blank">
            Instagram
          </a>
          <a href={`mailto:${siteContent.contact.email}`}>
            {siteContent.contact.email}
          </a>
        </div>
      </footer>
    </main>
  );
}