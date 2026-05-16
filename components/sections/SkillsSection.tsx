"use client";

import { motion } from "framer-motion";
import { useTilt } from "@/hooks/use-tilt";
import { 
  Code2, 
  Globe, 
  Zap, 
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
  color: "purple" | "cyan" | "indigo";
}

const skills: Skill[] = [
  // Web Development
  { name: "JavaScript", icon: FileJson, mastery: 92, color: "cyan" },
  { name: "React", icon: Code2, mastery: 95, color: "purple" },
  { name: "Next.js", icon: Globe, mastery: 90, color: "indigo" },
  { name: "Node.js", icon: Zap, mastery: 85, color: "cyan" },
  
  // Database
  { name: "MongoDB", icon: DatabaseZap, mastery: 80, color: "purple" },
  { name: "SQL", icon: Database, mastery: 88, color: "indigo" },
  { name: "MS Access", icon: Table, mastery: 85, color: "cyan" },
  
  // Statistical Tools
  { name: "Stata", icon: BarChart3, mastery: 82, color: "purple" },
  { name: "SPSS", icon: PieChart, mastery: 80, color: "indigo" },
];

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const { tilt, onMouseMove, onMouseLeave } = useTilt(15);

  // Portfolio এর কালার প্যালেট অনুযায়ী ম্যাপিং
  const colorClasses = {
    purple: "hover:border-brand-purple bg-brand-purple/10 text-brand-purple",
    cyan: "hover:border-cyan-400 bg-cyan-400/10 text-cyan-400",
    indigo: "hover:border-indigo-400 bg-indigo-400/10 text-indigo-400",
  };

  const barColors = {
    purple: "bg-brand-purple shadow-[0_0_15px_rgba(168,85,247,0.5)]",
    cyan: "bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]",
    indigo: "bg-indigo-400 shadow-[0_0_15px_rgba(129,140,248,0.5)]",
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
        <span className="text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors uppercase tracking-widest">
          {skill.mastery}%
        </span>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold uppercase tracking-tight text-white group-hover:text-brand-purple transition-colors">
          {skill.name}
        </h3>
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
    <section id="digitools" className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-[#0f172a]">
      {/* Portfolio এর মতো একই ব্যাকগ্রাউন্ড গ্লো */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-purple/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-purple/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-20 space-y-6 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-brand-purple font-black uppercase tracking-[0.4em] text-xs"
          >
            Technical Arsenal
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] text-white">
            My <span className="text-brand-purple text-glow-purple italic">Digital</span> Tools
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;