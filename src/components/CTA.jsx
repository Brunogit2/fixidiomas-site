import { siteContent } from "@/data/siteContent";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function CTA() {
  const whatsappUrl = `https://wa.me/${siteContent.contact.whatsapp}`;

  return (
   <Section
  id="contato"
  className="bg-gradient-to-r from-[var(--fix-primary)] via-[var(--fix-secondary)] to-[var(--fix-accent)] text-white"
>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-bold tracking-tight">
          Vamos conversar sobre seus objetivos?
        </h2>

        <p className="mt-6 text-lg leading-8 text-red-100">
          Descubra como a Fix Idiomas pode ajudar você, sua família ou sua
          empresa a desenvolver o inglês de forma prática e personalizada.
        </p>

        <div className="mt-10">
          <Button href={whatsappUrl} variant="light">
            Falar pelo WhatsApp
          </Button>
        </div>
      </div>
    </Section>
  );
}