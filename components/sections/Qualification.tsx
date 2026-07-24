"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Star, Award } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface EducationItem {
  title: string;
  school: string;
  year: string;
  desc: string;
  achievement?: string;
}

const education: EducationItem[] = [
  { 
    title: "B.Sc in Statistics and Data Science", 
    school: "Begum Rokeya University, Rangpur", 
    year: "2024 - Present", 
    desc: "Focusing on data analysis, probability theory, statistical inference, and advanced mathematical modeling to bridge data with full-stack web applications.",
    achievement: "Session 2024-25"
  },
  { 
    title: "Higher Secondary Certificate (HSC)", 
    school: "Pirgachha Government College, Rangpur", 
    year: "2021 - 2023", 
    desc: "Completed core Science background with a strong academic concentration on Physics, Higher Mathematics, and Chemistry.",
    achievement: "Science Stream"
  }
];

const EducationCard = ({ item, index }: { item: EducationItem; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(cardRef.current, 
      { 
        opacity: 0, 
        y: 50,
        rotateX: -10 
      },
      { 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        duration: 1.2, 
        ease: "expo.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        delay: index * 0.15 
      }
    );
  }, [index]);

  return (
    <motion.div 
      ref={cardRef}
      whileHover={{ y: -8 }}
      className="group relative bg-white/5 backdrop-blur-md p-8 md:p-10 border border-white/5 hover:border-brand-purple/40 transition-all duration-500 rounded-[2rem] overflow-hidden"
    >
      {/* Background Animated Glow */}
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-purple/10 blur-3xl group-hover:bg-brand-purple/30 transition-all duration-700 rounded-full" />
      
      <div className="relative z-10 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-brand-purple">
            <div className="p-2 bg-brand-purple/10 rounded-lg group-hover:rotate-[360deg] transition-transform duration-700">
              <Calendar size={16} />
            </div>
            <span className="text-xs font-black uppercase tracking-[0.2em]">{item.year}</span>
          </div>

          {item.achievement && (
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold border border-brand-purple/20">
              <Award size={14} />
              <span>{item.achievement}</span>
            </div>
          )}
        </div>

        <div>
          <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 uppercase tracking-tight group-hover:text-brand-purple transition-colors duration-300">
            {item.title}
          </h4>
          <p className="text-brand-purple/90 font-bold text-lg uppercase tracking-wider">
            {item.school}
          </p>
        </div>

        <p className="text-gray-300 leading-relaxed text-base group-hover:text-gray-200 transition-colors">
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

const EducationalQualification = () => {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section ref={containerRef} id="education" className="py-32 px-6 md:px-12 lg:px-24 bg-[#0f172a] relative overflow-hidden">
      
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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <header className="mb-20 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
            viewport={{ once: true }}
            className="text-brand-purple font-black uppercase text-xs block"
          >
            Academic Background
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut"}}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]"
          >
            Educational <br />
            <span className="text-glow-purple italic text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-purple-400 to-indigo-400">
              Qualification
            </span>
          </motion.h2>

          <div className="flex items-center justify-center gap-3 pt-4">
            <div className="p-3 bg-brand-purple text-white rounded-2xl shadow-[0_10px_30px_rgba(123,97,255,0.3)]">
              <GraduationCap size={28} strokeWidth={1.5} />
            </div>
          </div>
        </header>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {education.map((item, i) => (
            <EducationCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
      
      {/* Dynamic Grid Background Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />
    </section>
  );
};

export default EducationalQualification;