import dynamic from "next/dynamic";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import BackgroundOrbs from "@/components/BackgroundOrbs";
import Spotlight from "@/components/Spotlight";
import CursorGlow from "@/components/CursorGlow";
import PageLoader from "@/components/PageLoader";

const Outcomes   = dynamic(() => import("@/components/Outcomes"));
const Servicios  = dynamic(() => import("@/components/Servicios"));
const Modalidades = dynamic(() => import("@/components/Modalidades"));
const Projects   = dynamic(() => import("@/components/Projects"));
const Proceso    = dynamic(() => import("@/components/Proceso"));
const Nosotros   = dynamic(() => import("@/components/Nosotros"));
const Contact    = dynamic(() => import("@/components/Contact"));
const Footer     = dynamic(() => import("@/components/Footer"));
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"));

export default function Home() {
  return (
    <>
      <PageLoader />
      <BackgroundOrbs />
      <Spotlight />
      <CursorGlow />
      <Nav />
      <Hero />
      <TechMarquee />
      <Outcomes />
      <Servicios />
      <Modalidades />
      <Projects />
      <Proceso />
      <Nosotros />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
