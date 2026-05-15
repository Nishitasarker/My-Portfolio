"use client";

import { useEffect, useRef } from "react";
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
}

const projects: Project[] = [
  {
    title: "MERN Todo App",
    category: "Fullstack • 2025",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLxHIcND2XYIXtyWWqZ6_uW0QMF-GvqMCJicmJ-0n1MWsg0uTvdUTUHS4kUd-kslpqD7QMSu0eKpegzHMQvWXXaHT7Mg5oT786r9zmFwd7yLpAnfAj13Zwwl-BIlhH4iuxPPryGBDRItrLXXgBMS3XZshhwsz5haBDWVyHahoeu4yJNcm_aYoHTAMAyNwCoRy_a4sAHHBSAHlD0Ru5A3K3fQs0gqFvfIOgSHgW982UwlWRwtnnwRy5dI54c2O0tpIY5U3YB7NqkZrz",
    tags: ["MongoDB", "Express", "React"],
    icon: Rocket,
    btnLabel: "Live Demo",
    btnIcon: Rocket
  },
  {
    title: "E-Commerce Demo",
    category: "E-Commerce • 2025",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOspxe_f6JNFYPeeefKf5TRFciHllOVsx-1PIOx3NSRD187pnshxecUTCTURNQJK3sxAcWsEQVpnmQ--4ADGp0Nv_JQAlvGoz1swnDrlJW9XQ3CxkFWWZ2RJpPrCshFeCJdBMBOshWGWvJQYa9khwa0kUbtn4DV88wmRMI3IRgsUX_ZjnSm8iA9nI_vhM_t1iVS_IY94kIVkqXHXd-lQIzD0Et0jVgjbJBnRPs4NjOZLcdUN3bkIzEcyjNM8yO4b1JDxRPr1iHmod0",
    tags: ["Node.js", "Stripe", "Tailwind"],
    icon: ShoppingCart,
    btnLabel: "View Store",
    btnIcon: ShoppingCart
  },
  {
    title: "AI Portfolio Assistant",
    category: "Artificial Intelligence",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxGrpoekA4HMbO03p7cbmce7_JnZw9201i_yBf833eXKXgqxrsj_4Lg_3txHn9HOrg1frq1HSDujSuG9MKj2GFSZycJnZIOckVNK_6BtxfzsxTAPqiyPy4IwwH900nRx_JEhfA677FxX3qPP4TZbDL8gLHZMzcV4e_Fbh51SZqJKlmk_C68UalSAF035Ab4bdrSZMoUF9ONQn5O5YoxXC7cOOD8EOUwabGsp_Lw-LDhF74WLxqFtceoqBAHlGWE1WKDS5XSvY0W0Co",
    tags: ["OpenAI", "Next.js", "Vercel"],
    icon: Bot,
    btnLabel: "Try Assistant",
    btnIcon: Bot
  },
  {
    title: "Cloud Dashboard",
    category: "DevOps & Cloud",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJU1hnJ2T-_nVz8VpoKKEaDwb5TVDivSeiC8L28H-MqJZ0Q5zcf6csm-VtzfeFNrLkG9tP6_b0cwDDzcickZN3FUim6fNbvnsccGYacCYA88SUepYfWq4rT1c2Rtr14mtwi_slWCmY7hcSy0Zoebo3s-oesMbhffOBRvvN3ae8Hj-JELtRTkRKq5mC4NGGwx3nsQfqZ7ueP2PZ7B9j3qG8En8PqZ9aC8PnMirBZVJMBhYAzP2ABPNsv8Nluvi2GWoknRitI9a9bRKX",
    tags: ["AWS", "Docker", "Grafana"],
    icon: Activity,
    btnLabel: "Open Console",
    btnIcon: Activity
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
      whileHover={{ scale: 1.02, zIndex: 50 }}
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
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>

        <div className="flex flex-col flex-grow text-center md:text-left z-10 font-hanken">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-purple mb-2">
            {project.category}
          </span>
          <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-white group-hover:text-glow-purple transition-all">
            {project.title}
          </h3>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
            {project.tags.map((tag) => (
              <span key={tag} className="bg-white/5 px-3 py-1 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-tighter border border-white/5">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-auto">
            <Magnetic>
              <button className="bg-brand-purple text-white text-[10px] font-black uppercase tracking-widest px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-brand-purple/80 transition-all active:scale-95">
                <project.btnIcon size={16} />
                {project.btnLabel}
              </button>
            </Magnetic>
            <Magnetic>
              <button className="text-white/60 text-[10px] font-black uppercase tracking-widest px-6 py-3 rounded-xl border border-white/10 flex items-center gap-2 hover:bg-white/5 transition-all active:scale-95">
                <Code size={16} />
                GitHub
              </button>
            </Magnetic>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Portfolio() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const leftColY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const rightColY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={containerRef} id="projects" className="py-32 px-6 md:px-12 lg:px-24 font-hanken relative overflow-hidden bg-[#0f172a]">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-purple/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-purple/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-32 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-8"
          >
            Recent <br /> <span className="text-brand-purple text-glow-purple italic">Projects</span>
          </motion.h2>
          <p className="font-medium text-gray-400 text-xl max-w-2xl leading-relaxed">
            A selection of my latest MERN stack projects, focusing on scalable architecture, seamless user experiences, and modern web standards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          <motion.div style={{ y: leftColY }} className="space-y-12">
            <ProjectCard project={projects[0]} index={0} />
            <ProjectCard project={projects[2]} index={2} />
          </motion.div>

          <motion.div style={{ y: rightColY }} className="space-y-12 mt-20 lg:mt-32">
            <ProjectCard project={projects[1]} index={1} />
            <ProjectCard project={projects[3]} index={3} />
          </motion.div>
        </div>

        <div className="flex justify-center items-center gap-8">
          <Magnetic>
            <button className="w-16 h-16 flex items-center justify-center rounded-full glass-card border-white/5 hover:border-brand-purple hover:bg-brand-purple/10 transition-all duration-300">
              <ChevronLeft size={28} />
            </button>
          </Magnetic>
          
          <div className="flex gap-4">
            {[0, 1, 2].map((i) => (
              <div key={i} className={`w-2 h-2 rounded-full transition-all duration-500 ${i === 0 ? 'bg-brand-purple w-6 shadow-[0_0_10px_rgba(123,97,255,0.8)]' : 'bg-white/10'}`} />
            ))}
          </div>

          <Magnetic>
            <button className="w-16 h-16 flex items-center justify-center rounded-full glass-card border-white/5 hover:border-brand-purple hover:bg-brand-purple/10 transition-all duration-300">
              <ChevronRight size={28} />
            </button>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
