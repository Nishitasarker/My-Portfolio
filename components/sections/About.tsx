"use client";

import { useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "@/components/animations/TextReveal";

gsap.registerPlugin(ScrollTrigger);

// ডাটা আইটেমের জন্য টাইপ ডিফাইন করা
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
        x: (i: number) => (i % 2 === 0 ? -50 : 50),
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

  // ডাটা লিস্ট যাতে 'year' প্রোপার্টি আছে
  const timelineData: TimelineItemType[] = [
    { 
      year: "Phase 01", 
      title: "Conceptual Design", 
      desc: "Mastering the art of building responsive layouts using HTML, CSS, and modern design principles."
    },
    { 
      year: "Phase 02", 
      title: "Advanced Development", 
      desc: "Developing dynamic full-stack applications using React, Next.js, and Java, with a focus on seamless user experiences."
    },
    { 
      year: "Phase 03", 
      title: "DATA ECOSYSTEMS", 
      desc: "Leveraging MongoDB, SQL, and MS Access for robust data management, while performing deep analytical research using Stata and SPSS."
    }
  ];

  return (
    <section id="about" ref={containerRef} className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <header className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-brand-purple font-black uppercase tracking-[0.4em] text-xs"
              >
                Philosophy & Vision
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
                Crafting <span className="text-glow-purple">Digital</span> <br /> Masterpieces
              </h2>
            </header>
            
            <div className="space-y-8">
              <TextReveal className="text-gray-300 text-xl font-medium leading-relaxed">
                I don&apos;t just build websites; I engineer data-driven experiences. With a solid foundation in Statistics and a passion for modern web technologies, my work sits at the intersection of logical performance and visual storytelling.
              </TextReveal>
              <TextReveal className="text-gray-300 text-lg leading-relaxed">
                Every project is a unique challenge to push the boundaries of what&apos;s possible in the browser, focusing on speed, accessibility, and high-fidelity motion.
              </TextReveal>
            </div>
          </div>

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