import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Proceso from "@/components/Proceso";
import Nosotros from "@/components/Nosotros";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackgroundOrbs from "@/components/BackgroundOrbs";
import Spotlight from "@/components/Spotlight";

export default function Home() {
  return (
    <>
      <BackgroundOrbs />
      <Spotlight />
      <Nav />
      <Hero />
      <Stats />
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
