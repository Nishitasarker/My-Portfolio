"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "@/components/animations/TextReveal";

gsap.registerPlugin(ScrollTrigger);

interface TimelineItemType {
  year: string;
  title: string;
  desc: string;
}

const About = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".timeline-item", {
        opacity: 0,
        x: (i: any) => (i % 2 === 0 ? -50 : 50),
        stagger: 0.2,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 80%",
        },
      });

      gsap.from(".timeline-line", {
        scaleY: 0,
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Full-Stack Focus timeline data
  const timelineData: TimelineItemType[] = [
    { 
      year: "Phase 01", 
      title: "Full-Stack Web Core", 
      desc: "Started coding in January 2026 and quickly grew passionate about building full-stack web applications using Next.js, React, Node.js, Express.js, and MongoDB."
    },
    { 
      year: "Phase 02", 
      title: "Analytical Edge", 
      desc: "Pursuing B.Sc. in Statistics and Data Science at Begum Rokeya University (Session 2024-25). Leveraging Stata, SPSS, Excel, and Access to build data-driven web apps."
    },
    { 
      year: "Phase 03", 
      title: "Creative Balance", 
      desc: "Passionate dancer outside the terminal. Dancing brings rhythm, creativity, and fresh focus to my daily coding and web architecture problem-solving."
    }
  ];

  return (
    <section id="about" ref={containerRef} className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Content Column */}
          <div className="space-y-12">
            <header className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-brand-purple font-black uppercase tracking-[0.4em] text-xs"
              >
                Get To Know Me
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
                Building <span className="text-glow-purple">Scalable</span> <br /> Web Applications
              </h2>
            </header>
            
            <div className="space-y-8">
              <TextReveal className="text-gray-300 text-xl font-medium leading-relaxed">
                My web development journey began in January 2026. As a dedicated Full-Stack Developer, I love taking ideas from scratch and turning them into seamless, high-performance web applications that users enjoy interacting with.
              </TextReveal>
              
              <TextReveal className="text-gray-300 text-lg leading-relaxed">
                Currently studying Statistics and Data Science at Begum Rokeya University (Session 2024-25), I combine analytical precision with modern web technologies (TypeScript, Next.js, Node.js, MongoDB) and data tools (Stata, SPSS, Excel) to engineer intelligent full-stack solutions.
              </TextReveal>

              <TextReveal className="text-gray-300 text-lg leading-relaxed">
                Beyond coding and data structures, I am an enthusiastic dancer. Expressing rhythm through dance keeps me creative, energetic, and inspired to solve complex software problems with an open mind.
              </TextReveal>
            </div>
          </div>

          {/* Right Timeline Column */}
          <div className="timeline-container relative pl-12 py-10">
            <div className="timeline-line absolute left-0 top-0 w-px h-full bg-gradient-to-b from-brand-purple via-brand-purple/20 to-transparent origin-top" />
            
            <div className="space-y-20">
              {timelineData.map((item, i) => (
                <div key={i} className="timeline-item relative">
                  <div className="absolute -left-[53px] top-2 w-2.5 h-2.5 rounded-full bg-brand-purple shadow-[0_0_15px_rgba(123,97,255,1)]" />
                  <div className="space-y-2">
                    <span className="text-brand-purple font-black text-xs uppercase tracking-widest">{item.year}</span>
                    <h4 className="text-2xl font-bold text-white uppercase tracking-tight">{item.title}</h4>
                    <p className="text-gray-300 max-w-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;