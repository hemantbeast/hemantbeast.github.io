import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ImpactMetrics from "@/components/ImpactMetrics";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import { ParticlesBackground } from "@/components/ParticlesBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticlesBackground />
      <CommandPalette />
      <Navigation />
      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        <About />
        <ImpactMetrics />
        <TechStack />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
