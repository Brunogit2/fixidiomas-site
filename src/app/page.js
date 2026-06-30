import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Steps from "@/components/Steps";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />
      <Hero />
      <About />
      <Steps />
      <Services />
      <Differentials />
      <CTA />
      <Footer />
    </main>
  );
}