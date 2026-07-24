"use client";

import { motion } from "framer-motion";
import Magnetic from "@/components/animations/Magnetic";

const technologies = [
  {
    name: "Next.js",
    desc: "Building fast, SEO-friendly, and production-ready full-stack applications with Server Components and App Router.",
    icon: (
      <svg className="w-12 h-12 text-white" viewBox="0 0 180 180" fill="none">
        <mask id="mask0_next" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: "alpha" }}>
          <circle cx="90" cy="90" r="90" fill="black" />
        </mask>
        <g mask="url(#mask0_next)">
          <circle cx="90" cy="90" r="90" fill="black" />
          <path d="M149.508 157.52L69.142 54H54V125.97H66.8136V69.7128L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" />
          <rect x="115" y="54" width="12" height="72" fill="white" />
        </g>
      </svg>
    ),
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
    icon: (
      <svg className="w-12 h-12 text-green-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm0 2.311l7.15 3.932v.002L12 12.18 4.85 8.245V8.24L12 4.311zM4.35 9.973L11.25 13.76v7.351L4.35 17.322V9.973zm15.3 0v7.349l-6.9 3.789V13.76l6.9-3.787z"/>
      </svg>
    ),
  },
  {
    name: "Express.js",
    desc: "Building fast, unopinionated, and minimalist web frameworks for Node.js backends.",
    icon: (
      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    desc: "Managing NoSQL databases with flexible schemas for high-performance data storage.",
    icon: (
      <svg className="w-12 h-12 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C11.5 2 11 2.5 11 3v2.1C8 6.2 6 8.9 6 12c0 3.3 2.7 6 6 6s6-2.7 6-6c0-3.1-2-5.8-5-6.9V3c0-.5-.5-1-1-1zm0 5.1c2.3.5 4 2.5 4 4.9 0 2.8-2.2 5-5 5s-5-2.2-5-5c0-2.4 1.7-4.4 4-4.9V12c0 .6.4 1 1 1s1-.4 1-1V7.1z"/>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    desc: "Writing strongly typed, maintainable, and robust code to prevent runtime bugs.",
    icon: (
      <div className="bg-[#3178C6] text-white font-bold text-2xl w-12 h-12 flex items-center justify-center rounded">
        TS
      </div>
    ),
  },
  {
    name: "JavaScript",
    desc: "Writing efficient, modern, and optimized code for both frontend and backend logic.",
    icon: (
      <div className="bg-[#F7DF1E] text-black font-bold text-3xl w-12 h-12 flex items-center justify-center rounded">
        JS
      </div>
    ),
  },
  {
    name: "Tailwind CSS",
    desc: "Crafting modern, highly responsive, and pixel-perfect user interfaces with utility-first CSS.",
    icon: (
      <svg className="w-12 h-12 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "HTML5",
    desc: "Structuring semantic, accessible, and SEO-optimized web content for modern browsers.",
    icon: (
      <svg className="w-12 h-12 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M1.5 0h21l-1.91 21.563L11.97 24 2.41 21.563zm17.03 5.063H5.323l.312 3.516h11.968l-.422 4.703-5.18 1.391-5.188-1.391-.328-3.687H2.984l.594 6.75 8.39 2.313 8.39-2.313z" />
      </svg>
    ),
  },
];

// Framer Motion এর জন্য এনিমেশন ভ্যারিয়েন্ট কনফিগারেশন
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      ease: [0.16, 1, 0.3, 1] as const,
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

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {technologies.map((tech, i) => (
          <Magnetic key={i}>
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