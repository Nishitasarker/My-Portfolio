"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Briefcase, Calendar, Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface JourneyItem {
  title: string;
  school?: string;
  company?: string;
  year: string;
  desc: string;
}

const education: JourneyItem[] = [
  { title: "B.Sc in Statistics", school: "Begum Rokeya University", year: "2024 - Present", desc: "Focusing on data science, probability, and advanced mathematical modeling." },
  { title: "Higher Secondary", school: "Govt Science College", year: "2021 - 2023", desc: "Core science background with focus on Physics and Mathematics." }
];

const experience: JourneyItem[] = [
  { title: "Full Stack Developer", company: "Programming Hero", year: "2026 - Present", desc: "Building high-performance web applications using MERN stack and Next.js." },
  { title: "Junior Data Analyst", company: "BRUR Projects", year: "2024 - Present", desc: "Transforming raw data into meaningful business insights through statistical analysis." }
];

const JourneyCard = ({ item, index, type }: { item: JourneyItem; index: number; type: 'edu' | 'exp' }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(cardRef.current, 
      { 
        opacity: 0, 
        y: 50,
        rotateX: -15 
      },
      { 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        duration: 1.2, 
        ease: "expo.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse"
        },
        delay: index * 0.1 
      }
    );
  }, [index, type]);

  return (
    <motion.div 
      ref={cardRef}
      whileHover={{ y: -10 }}
      className="group relative bg-white/5 backdrop-blur-md p-8 md:p-10 border border-white/5 hover:border-brand-purple/40 transition-all duration-500 rounded-[2rem] overflow-hidden"
    >
      {/* Background Animated Glow */}
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-purple/10 blur-3xl group-hover:bg-brand-purple/30 transition-all duration-700 rounded-full" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 text-brand-purple mb-6">
          <div className="p-2 bg-brand-purple/10 rounded-lg group-hover:rotate-[360deg] transition-transform duration-700">
            <Calendar size={14} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">{item.year}</span>
        </div>

        <h4 className="text-2xl font-bold text-white mb-2 uppercase tracking-tight group-hover:text-brand-purple transition-colors duration-300">
          {item.title}
        </h4>
        
        <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-[1px] bg-brand-purple/50 group-hover:w-12 transition-all duration-500" />
            <p className="text-brand-purple font-bold text-sm uppercase tracking-wider">
                {item.school || item.company}
            </p>
        </div>

        <p className="text-gray-400 leading-relaxed font-medium text-sm md:text-base group-hover:text-gray-200 transition-colors">
          {item.desc}
        </p>
      </div>

      {/* Decorative Star with Pulse Effect */}
      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-40 group-hover:scale-125 transition-all duration-500">
        <Star className="text-brand-purple fill-brand-purple" size={30} />
      </div>
    </motion.div>
  );
};

const Qualification = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const eduY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const expY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={containerRef} id="journey" className="py-32 px-6 md:px-12 lg:px-24 bg-[#0f172a] relative overflow-hidden">
      
      {/* Animated Floating Orbs */}
      <motion.div 
        animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-purple/20 blur-[120px] rounded-full pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-24 text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
            viewport={{ once: true }}
            className="text-brand-purple font-black uppercase text-xs mb-6 block"
          >
            Evolution
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut"}}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]"
          >
           <span className="text-glow-purple italic text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-purple-400 to-indigo-400">
             Education & <br className="hidden md:block" /> Experience
           </span>
          </motion.h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Education Column */}
          <motion.div style={{ y: eduY }} className="space-y-12">
            <div className="flex items-center gap-6 group">
              <motion.div 
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="p-5 bg-brand-purple text-white rounded-3xl shadow-[0_10px_30px_rgba(123,97,255,0.3)] cursor-pointer"
              >
                <GraduationCap size={40} strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-4xl font-black uppercase tracking-tighter text-white">Education</h3>
            </div>
            
            <div className="space-y-10">
              {education.map((item, i) => (
                <JourneyCard key={i} item={item} index={i} type="edu" />
              ))}
            </div>
          </motion.div>

          {/* Experience Column */}
          <motion.div style={{ y: expY }} className="space-y-12 lg:mt-32">
            <div className="flex items-center gap-6 group">
              <motion.div 
                whileHover={{ rotate: -15, scale: 1.1 }}
                className="p-5 bg-white/5 border border-white/10 text-brand-purple rounded-3xl cursor-pointer"
              >
                <Briefcase size={40} strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-4xl font-black uppercase tracking-tighter text-white">Experience</h3>
            </div>

            <div className="space-y-10">
              {experience.map((item, i) => (
                <JourneyCard key={i} item={item} index={i} type="exp" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Dynamic Grid Background Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />
    </section>
  );
};

export default Qualification;