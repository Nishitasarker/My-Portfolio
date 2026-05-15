"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

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
  { title: "Full Stack Web Developer Learner(HTML, CSS, JavaScript, Next.js, React, Node.js)", company: "Programming Hero ", year: "2026 - Present", desc: "Leading the development of high-performance web applications and design systems." },
  { title: "Junior Data Analyst | Excel, SQL, MongoDB | Statistical Tools (SPSS, STATA)", company: "Begum Rokeya University", year: "2024 - Present", desc: "Transforming raw data into meaningful business insights through statistical analysis and modern database management." }
];

const Qualification = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const eduY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const expY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} id="journey" className="py-32 px-6 md:px-12 lg:px-24 bg-brand-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-32 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-brand-purple font-black uppercase tracking-[0.4em] text-xs mb-6"
          >
            Chronicle
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
            Education & <span className="text-glow-purple italic">Experience</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div style={{ y: eduY }} className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-brand-purple/10 text-brand-purple rounded-xl">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-3xl font-bold uppercase tracking-tight">Education</h3>
            </div>
            
            {education.map((item, i) => (
              <div key={i} className="glass-card p-10 border-white/5 hover:border-brand-purple/50 transition-all duration-500 group">
                <div className="flex items-center gap-3 text-brand-purple mb-6">
                  <Calendar size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">{item.year}</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-2 uppercase tracking-tight group-hover:text-glow-purple transition-all">{item.title}</h4>
                <p className="text-brand-purple font-bold text-sm mb-6">{item.school}</p>
                <p className="text-gray-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </motion.div>

          <motion.div style={{ y: expY }} className="space-y-12 lg:mt-32">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-brand-purple/10 text-brand-purple rounded-xl">
                <Briefcase size={32} />
              </div>
              <h3 className="text-3xl font-bold uppercase tracking-tight">Experience</h3>
            </div>

            {experience.map((item, i) => (
              <div key={i} className="glass-card p-10 border-white/5 hover:border-brand-purple/50 transition-all duration-500 group">
                <div className="flex items-center gap-3 text-brand-purple mb-6">
                  <Calendar size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">{item.year}</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-2 uppercase tracking-tight group-hover:text-glow-purple transition-all">{item.title}</h4>
                <p className="text-brand-purple font-bold text-sm mb-6">{item.company}</p>
                <p className="text-gray-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-purple/5 blur-[150px] pointer-events-none rounded-full" />
    </section>
  );
};

export default Qualification;
