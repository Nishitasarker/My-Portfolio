"use client";

import { motion } from "framer-motion";
import { useTilt } from "@/hooks/use-tilt";
import { 
  Code2, 
  Globe, 
  Zap, 
  Cpu, 
  Database, 
  DatabaseZap, 
  Table, 
  BarChart3, 
  PieChart, 
  FileJson,
  LucideIcon 
} from "lucide-react";

interface Skill {
  name: string;
  icon: LucideIcon;
  mastery: number;
  color: "blue" | "purple" | "orange" | "green";
}

const skills: Skill[] = [
  // Web Development
  { name: "JavaScript", icon: FileJson, mastery: 92, color: "orange" },
  { name: "React", icon: Code2, mastery: 95, color: "blue" },
  { name: "Next.js", icon: Globe, mastery: 90, color: "purple" },
  { name: "Node.js", icon: Zap, mastery: 85, color: "green" },
  
  // Database
  { name: "MongoDB", icon: DatabaseZap, mastery: 80, color: "green" },
  { name: "SQL", icon: Database, mastery: 88, color: "blue" },
  { name: "MS Access", icon: Table, mastery: 85, color: "purple" },
  
  // Statistical Tools
  { name: "Stata", icon: BarChart3, mastery: 82, color: "blue" },
  { name: "SPSS", icon: PieChart, mastery: 80, color: "orange" },
];

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const { tilt, onMouseMove, onMouseLeave } = useTilt(15);

  // Tailwind Dynamic Colors Mapping
  const colorClasses = {
    blue: "hover:border-blue-500 bg-blue-500/10 text-blue-500",
    purple: "hover:border-purple-500 bg-purple-500/10 text-purple-500",
    orange: "hover:border-orange-500 bg-orange-500/10 text-orange-500",
    green: "hover:border-green-500 bg-green-500/10 text-green-500",
  };

  const barColors = {
    blue: "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]",
    purple: "bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]",
    orange: "bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]",
    green: "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX: tilt.x,
        rotateY: tilt.y,
      }}
      className={`glass-card p-8 group relative overflow-hidden transition-all duration-500 border border-white/5 ${colorClasses[skill.color].split(' ')[0]}`}
    >
      <div className="flex justify-between items-start mb-12">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:bg-opacity-100 group-hover:text-white ${colorClasses[skill.color].split(' ').slice(1).join(' ')}`}>
          <skill.icon size={28} strokeWidth={1.5} />
        </div>
        <span className="text-4xl font-black text-white/10 group-hover:text-white/20 transition-colors uppercase tracking-widest">
          {skill.mastery}%
        </span>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold uppercase tracking-tight text-white">{skill.name}</h3>
        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.mastery}%` }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 + 0.5 }}
            className={`h-full ${barColors[skill.color]}`}
          />
        </div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-20 space-y-6 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-purple-500 font-black uppercase tracking-[0.4em] text-xs"
          >
            Technical Arsenal
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-white">
            My <span className="text-purple-500 italic">Digital</span> Tools
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 blur-[150px] pointer-events-none rounded-full" />
    </section>
  );
};

export default SkillsSection;