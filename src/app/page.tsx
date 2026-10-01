import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import TechMarquee from "@/components/TechMarquee";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Proceso from "@/components/Proceso";
import Nosotros from "@/components/Nosotros";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackgroundOrbs from "@/components/BackgroundOrbs";
import Spotlight from "@/components/Spotlight";
import CursorGlow from "@/components/CursorGlow";
import StatsBar from "@/components/StatsBar";

export default function Home() {
  return (
    <>
      <BackgroundOrbs />
      <Spotlight />
      <CursorGlow />
      <Nav />
      <Hero />
      <TechMarquee />
      <StatsBar />
      <Servicios />
      <Projects />
      <Testimonials />
      <Proceso />
      <Nosotros />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
