"use client";

import { motion } from "framer-motion";
import Magnetic from "@/components/animations/Magnetic";

const technologies = [
  {
    name: "Tailwind CSS",
    desc: "Creating responsive, modern, and clean layouts quickly using utility-first styling.",
    icon: (
      <svg className="w-12 h-12 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8 1.2.3 2.1 1.2 3 2.1 1.6 1.6 3.4 3.5 6.8 3.5 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.5-.9-2.2-1.5-.9-.9-1.8-1.8-3.6-2.1-.5-.1-1-.2-1.5-.2h-.5zM6 12.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8 1.2.3 2.1 1.2 3 2.1 1.6 1.6 3.4 3.5 6.8 3.5 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.5-.9-2.2-1.5-.9-.9-1.8-1.8-3.6-2.1-.5-.1-1-.2-1.5-.2h-.5z" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    desc: "Writing efficient, modern, and optimized code for both frontend and backend logic.",
    icon: <div className="bg-[#F7DF1E] text-black font-bold text-3xl w-12 h-12 flex items-center justify-center rounded">JS</div>,
  },
  {
    name: "React",
    desc: "Building fast, interactive, and component-based UIs with clean state management.",
    icon: (
      <svg className="w-12 h-12 text-cyan-400 animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
        <circle cx="50" cy="50" fill="currentColor" r="10" />
        <ellipse cx="50" cy="50" fill="none" rx="40" ry="15" stroke="currentColor" strokeWidth="4" />
        <ellipse cx="50" cy="50" fill="none" rx="40" ry="15" stroke="currentColor" strokeWidth="4" transform="rotate(60 50 50)" />
        <ellipse cx="50" cy="50" fill="none" rx="40" ry="15" stroke="currentColor" strokeWidth="4" transform="rotate(120 50 50)" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    desc: "Developing scalable backend logic and high-performance server-side applications.",
    icon: <div className="border-4 border-blue-500 text-blue-500 font-bold text-xl px-2 py-1 rounded-lg">US</div>,
  },
  {
    name: "MongoDB",
    desc: "Managing NoSQL databases with flexible schemas for high-performance data storage.",
    icon: (
      <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 7v10c0 1.66 3.58 3 8 3s8-1.34 8-3V7M4 7c0 1.66 3.58 3 8 3s8-1.34 8-3M4 7c0-1.66 3.58-3 8-3s8 1.34 8 3m-16 5c0 1.66 3.58 3 8 3s8-1.34 8-3" />
      </svg>
    ),
  },
  {
    name: "HTML",
    desc: "Creating clean, well-structured page layouts with semantic markup for better accessibility and SEO.",
    icon: <div className="border-4 border-blue-400 text-blue-400 font-black text-2xl w-12 h-12 flex items-center justify-center rounded">5</div>,
  },
];

// Framer Motion এর জন্য এনিমেশন ভ্যারিয়েন্ট কনফিগারেশন
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // প্রতিটি কার্ড একের পর এক আসবে (Stagger effect)
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const, // expo.out এর সমতুল্য কাস্টম বেজিয়ার কার্ভ
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="pt-32 pb-10 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
      <header className="text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-purple font-black uppercase tracking-[0.4em] text-xs mb-6"
        >
          Capabilities
        </motion.div>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
          Skills & <span className="text-glow-purple italic text-brand-purple">Technologies</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
          I work with modern tools and technologies to build fast, scalable, and efficient web applications.
        </p>
      </header>

      {/* কন্টেইনারে অ্যানিমেশন কন্ট্রোল যোগ করা হয়েছে */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {technologies.map((tech, i) => (
          <Magnetic key={i}>
            {/* প্রতিটি কার্ডকে motion.article বানানো হয়েছে */}
            <motion.article 
              variants={cardVariants}
              className="tech-card bg-white/[0.02] backdrop-blur-sm rounded-2xl p-10 flex flex-col items-center text-center group hover:bg-white/[0.05] border border-white/5 hover:border-brand-purple/30 transition-all duration-500"
            >
              <div className="mb-8 h-20 w-20 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                {tech.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight text-white group-hover:text-brand-purple transition-colors">
                {tech.name}
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                {tech.desc}
              </p>
              
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                viewport={{ once: true }}
                className="mt-8 h-1 bg-brand-purple rounded-full"
              />
            </motion.article>
          </Magnetic>
        ))}
      </motion.div>
      
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-32" />
    </section>
  );
}