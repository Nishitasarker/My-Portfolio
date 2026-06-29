"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Rocket, ShoppingCart, Bot, Activity, Code, ChevronLeft, ChevronRight, LucideIcon } from "lucide-react";
import Magnetic from "@/components/animations/Magnetic";
import { useTilt } from "@/hooks/use-tilt";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  category: string;
  image: string;
  tags: string[];
  icon: LucideIcon;
  btnLabel: string;
  btnIcon: LucideIcon;
  liveLink: string;  
  githubLink: string;
}

const projects: Project[] = [
  {
    title: "RecipeHub — Recipe Sharing Platform",
    category: "Fullstack • 2026",
    image: "/RecipeHub.png", 
    tags: ["Next.js","Node.js", "Express.js", "Better-Auth", "MongoDB", "Stripe", "Tailwind CSS", "Framer Motion"],
    icon: Rocket,
    btnLabel: "Live Demo",
    btnIcon: Rocket,
    liveLink: "https://recipe-hub-one-peach.vercel.app",
    githubLink: "https://github.com/Nishitasarker/RecipeHub" 
  },
    {
    title: "Qurbani Nexus App",
    category: "Fullstack • 2026",
    image: "/AnimalsProject.png",
    tags: ["Next.js","JavaScript (ES6+)","Tailwind CSS","Better-Auth","Google OAuth","MongoDB", "React.js"],
    icon: Rocket,
    btnLabel: "Live Demo",
    btnIcon: Rocket,
    liveLink: "https://qurbani-haat-two.vercel.app",
    githubLink: "https://github.com/Nishitasarker/QurbaniHaat"
  },
  {
    title: "KeenKeeper: Personal Relationship Manager",
    category: "Social CRM Platform • 2026",
    image: "/KeenKeeper.png",
    tags: ["Next.js","JavaScript (ES6+)","DaisyUI", "Tailwind CSS", "Recharts"],
    icon: ShoppingCart,
    btnLabel: "Live Demo",
    btnIcon: Rocket,
    liveLink: "https://effervescent-jalebi-e2c324.netlify.app",
    githubLink: "https://github.com/Nishitasarker/Next-Js-Project"
  },
  {
    title: "OmniDesk Tools",
    category: "All-in-One Digital Tool Suite",
    image: "/Digitools.png",
    tags: ["React.js", "Vite", "Tailwind CSS", "DaisyUI", "JavaScript (ES6+)","React Router DOM"],
    icon: Bot,
    btnLabel: "Live Demo",
    btnIcon: Rocket,
    liveLink: "https://fancy-tiramisu-290684.netlify.app",
    githubLink: "https://github.com/Nishitasarker/Digitools-platform"
  },
  {
    title: "DevFlow Tracker",
    category: "Project Management Tool",
    image: "/Github.png",
    tags: ["HTML5 & CSS3", "Tailwind CSS", "JavaScript", "DaisyUI"],
    icon: Activity,
    btnLabel: "Live Demo",
    btnIcon: Rocket,
    liveLink: "https://nishitasarker.github.io/json-assignment/", 
    githubLink: "https://github.com/Nishitasarker/json-assignment" 
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const { tilt, onMouseMove, onMouseLeave } = useTilt(8);
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const imgX = useTransform(smoothX, [-100, 100], [15, -15]);
  const imgY = useTransform(smoothY, [-100, 100], [15, -15]);

  useEffect(() => {
    const bob = gsap.to(cardRef.current, {
      y: "+=20",
      duration: 3 + index * 0.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: index * 0.3
    });
    return () => {
      bob.kill();
    };
  }, [index]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    onMouseMove(e);
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        onMouseLeave();
        mouseX.set(0);
        mouseY.set(0);
      }}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <motion.div
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        className="glass-card rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden border border-white/10 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
      >
        <motion.div 
          style={{ x: smoothX, y: smoothY }}
          className="absolute w-64 h-64 bg-brand-purple/10 blur-3xl rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
        />

        <div className="relative w-48 h-48 shrink-0 overflow-hidden circular-mask border-2 border-white/10 group-hover:border-brand-purple/40 transition-colors">
          <motion.div 
            style={{ x: imgX, y: imgY, scale: 1.2 }}
            className="w-full h-full relative"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              unoptimized
              className="object-cover transition-all duration-700"
            />
          </motion.div>
        </div>

        <div className="flex flex-col flex-grow text-center md:text-left z-10 font-hanken">
          <span className="text-[15px] font-black uppercase tracking-[0.4em] text-brand-purple mb-2">
            {project.category}
          </span>
          <h3 className="text-xl font-black uppercase tracking-tighter mb-4 text-white group-hover:text-glow-purple transition-all">
            {project.title}
          </h3>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
            {project.tags.map((tag) => (
              <span key={tag} className="bg-white/5 px-3 py-1 rounded-full text-[12px] font-black text-slate-400 uppercase tracking-tighter border border-white/5">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-auto">
            <Magnetic>
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brand-purple text-white text-[13px] font-black uppercase tracking-widest px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-brand-purple/80 transition-all active:scale-95"
              >
                <project.btnIcon size={16} />
                {project.btnLabel}
              </a>
            </Magnetic>
            <Magnetic>
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 text-[13px] font-black uppercase tracking-widest px-6 py-3 rounded-xl border border-white/10 flex items-center gap-2 hover:bg-white/5 transition-all active:scale-95"
              >
                <Code size={16} />
                GitHub
              </a>
            </Magnetic>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Portfolio() {
  const containerRef = useRef<HTMLElement>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4; 

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handlePrevPage = () => { if (currentPage > 1) setCurrentPage((prev) => prev - 1); };
  const handleNextPage = () => { if (currentPage < totalPages) setCurrentPage((prev) => prev + 1); };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const leftColY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const rightColY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const leftColumnProjects = currentProjects.filter((_, idx) => idx % 2 === 0);
  const rightColumnProjects = currentProjects.filter((_, idx) => idx % 2 !== 0);

  return (
    <section ref={containerRef} id="projects" className="py-32 px-6 md:px-12 lg:px-24 font-hanken relative overflow-hidden bg-[#0f172a]">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-purple/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-purple/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]"
          >
            Recent <br /> <span className="text-brand-purple text-glow-purple italic">Projects</span>
          </motion.h2>
          <p className="font-medium text-gray-400 text-xl max-w-2xl leading-relaxed">
            A selection of my latest MERN stack projects, focusing on scalable architecture, seamless user experiences, and modern web standards.
          </p>
        </div>

        <div key={currentPage} className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          {/* বাম কলাম */}
          <motion.div style={{ y: leftColY }} className="space-y-12">
            {leftColumnProjects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} index={idx * 2} />
            ))}
          </motion.div>

          {/* ডান কলাম */}
          <motion.div style={{ y: rightColY }} className="space-y-12 mt-20 lg:mt-32">
            {rightColumnProjects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} index={idx * 2 + 1} />
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center items-center gap-8">
          <Magnetic>
            <button 
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`w-16 h-16 flex items-center justify-center rounded-full glass-card border-white/5 transition-all duration-300 ${
                currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:border-brand-purple hover:bg-brand-purple/10'
              }`}
            >
              <ChevronLeft size={28} />
            </button>
          </Magnetic>

          <div className="flex gap-4">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  currentPage === i + 1 
                    ? 'bg-brand-purple w-6 shadow-[0_0_10px_rgba(123,97,255,0.8)]' 
                    : 'bg-white/10 hover:bg-white/30'
                }`}
              />
            ))}
          </div>

          <Magnetic>
            <button 
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`w-16 h-16 flex items-center justify-center rounded-full glass-card border-white/5 transition-all duration-300 ${
                currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'hover:border-brand-purple hover:bg-brand-purple/10'
              }`}
            >
              <ChevronRight size={28} />
            </button>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}