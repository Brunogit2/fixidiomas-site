import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--fix-border)] bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <a href="#inicio" className="flex items-center gap-3">

          <Image
            src="/images/logo-fix.png"
            alt="Fix Idiomas"
            width={58}
            height={58}
            priority
            className="h-12 w-auto"
          />

          <div className="leading-none">
            <div className="text-xl font-bold text-[var(--fix-text)]">
              Fix
            </div>

            <div className="text-sm tracking-[0.30em] uppercase text-[var(--fix-primary)]">
              Idiomas
            </div>
          </div>

        </a>

        {/* Menu */}

        <nav className="hidden gap-10 text-sm font-medium text-[var(--fix-text-light)] md:flex">

          <a href="#sobre" className="transition hover:text-[var(--fix-primary)]">
            Quem Somos
          </a>

          <a href="#como-funciona" className="transition hover:text-[var(--fix-primary)]">
            Como funciona
          </a>

          <a href="#servicos" className="transition hover:text-[var(--fix-primary)]">
            Serviços
          </a>

          <a href="#diferenciais" className="transition hover:text-[var(--fix-primary)]">
            Diferenciais
          </a>

        </nav>

        <Button
          href="#contato"
          variant="primary"
        >
          Fale conosco
        </Button>

      </div>
    </header>
  );
}