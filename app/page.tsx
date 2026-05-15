
import Hero from "@/components/Hero";
import SkillsMarquee from "@/components/sections/SkillsMarquee";
import About from "@/components/sections/About";
import SkillsSection from "@/components/sections/SkillsSection";
import Services from "@/components/sections/Services";
import Qualification from "@/components/sections/Qualification";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import SmoothScroll from "@/components/animations/SmoothScroll";
import MouseFollower from "@/components/animations/MouseFollower";
import Loader from "@/components/animations/Loader";

export default function Home() {
  return (
    <SmoothScroll>
      <Loader />
      <div className="relative min-h-screen bg-brand-cream selection:bg-brand-purple selection:text-white">
        <div className="noise-overlay" />
        <MouseFollower />
       
        <Hero />
        <SkillsMarquee />
        <About />
        <SkillsSection />
        <Services />
        <Qualification />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </SmoothScroll>
  );
}
