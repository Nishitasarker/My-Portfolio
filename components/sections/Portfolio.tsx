"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { Rocket, Code, ChevronLeft, ChevronRight } from "lucide-react";
import Magnetic from "@/components/animations/Magnetic";
import { useTilt } from "@/hooks/use-tilt";
import { projects, Project } from "@/data/projects"; 

gsap.registerPlugin(ScrollTrigger);

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
        {/* Glow Effect Updated to Cyan */}
        <motion.div 
          style={{ x: smoothX, y: smoothY }}
          className="absolute w-64 h-64 bg-cyan-400/10 blur-3xl rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
        />

        <div className="relative w-48 h-48 shrink-0 overflow-hidden circular-mask border-2 border-white/10 group-hover:border-cyan-400/40 transition-colors">
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
          <span className="text-[15px] font-black uppercase tracking-[0.4em] text-cyan-400 mb-2">
            {project.category}
          </span>
          <h3 className="text-xl font-black uppercase tracking-tighter mb-4 text-white group-hover:text-cyan-400 transition-all">
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
            {/* View Details Page Link (Updated to Cyan) */}
            <Magnetic>
              <Link 
                href={`/projects/${project.id}`} 
                className="bg-cyan-400 text-slate-950 text-[13px] font-black uppercase tracking-widest px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-cyan-300 transition-all active:scale-95 shadow-[0_4px_20px_rgba(34,211,238,0.25)]"
              >
                <Rocket size={16} />
                View Details
              </Link>
            </Magnetic>

            {/* GitHub Link */}
            <Magnetic>
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 text-[13px] font-black uppercase tracking-widest px-6 py-3 rounded-xl border border-white/10 flex items-center gap-2 hover:bg-white/10 hover:text-white transition-all active:scale-95"
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
      {/* Background Orbs Updated to Cyan */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-cyan-400/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-cyan-400/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]"
          >
            Recent <br /> <span className="text-brand-purple text-glow-purple italic">Projects</span>
          </motion.h2>
          <p className="font-medium text-gray-400 text-xl max-w-2xl leading-relaxed mt-4">
            A selection of my latest MERN stack projects, focusing on scalable architecture, seamless user experiences, and modern web standards.
          </p>
        </div>

        <div key={currentPage} className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 mt-16">
          {/* বাম কলাম */}
          <motion.div style={{ y: leftColY }} className="space-y-12">
            {leftColumnProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx * 2} />
            ))}
          </motion.div>

          {/* ডান কলাম */}
          <motion.div style={{ y: rightColY }} className="space-y-12 mt-20 lg:mt-32">
            {rightColumnProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx * 2 + 1} />
            ))}
          </motion.div>
        </div>

        {/* পেজিনেশন কন্ট্রোল (Updated to Cyan) */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-8">
            <Magnetic>
              <button 
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`w-16 h-16 flex items-center justify-center rounded-full glass-card border-white/5 transition-all duration-300 ${
                  currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:border-cyan-400 hover:bg-cyan-400/10 text-cyan-400'
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
                      ? 'bg-cyan-400 w-6 shadow-[0_0_10px_rgba(34,211,238,0.8)]' 
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
                  currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'hover:border-cyan-400 hover:bg-cyan-400/10 text-cyan-400'
                }`}
              >
                <ChevronRight size={28} />
              </button>
            </Magnetic>
          </div>
        )}
      </div>
    </section>
  );
}