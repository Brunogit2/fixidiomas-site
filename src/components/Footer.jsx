import { siteContent } from "@/data/siteContent";
import Container from "@/components/ui/Container";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${siteContent.contact.whatsapp}`;

  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="flex flex-col gap-6 py-10 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-slate-900">
            {siteContent.company.name}
          </p>
          <p className="mt-1">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
          <a href={whatsappUrl} target="_blank" className="hover:text-red-700">
            WhatsApp
          </a>

          <a
            href={siteContent.contact.instagram}
            target="_blank"
            className="hover:text-red-700"
          >
            Instagram
          </a>

          <a
            href={`mailto:${siteContent.contact.email}`}
            className="hover:text-red-700"
          >
            {siteContent.contact.email}
          </a>
        </div>
      </Container>
    </footer>
  );
}