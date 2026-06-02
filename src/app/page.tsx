import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Proceso from "@/components/Proceso";
import Stack from "@/components/Stack";
import Nosotros from "@/components/Nosotros";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CustomCursor from "@/components/CustomCursor";
import BackgroundOrbs from "@/components/BackgroundOrbs";

export default function Home() {
  return (
    <>
      <BackgroundOrbs />
      <CustomCursor />
      <Nav />
      <Hero />
      <Stats />
      <Projects />
      <Testimonials />
      <Proceso />
      <Stack />
      <Nosotros />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
