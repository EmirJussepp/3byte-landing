import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Proceso from "@/components/Proceso";
import Stack from "@/components/Stack";
import Nosotros from "@/components/Nosotros";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
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
