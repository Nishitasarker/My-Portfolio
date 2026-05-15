"use client";

import { motion } from "framer-motion";
import { useTilt } from "@/hooks/use-tilt";
// নতুন আইকন ইম্পোর্ট করা হয়েছে (Lucide React থেকে)
import { 
  Code2, 
  Layers, 
  Cpu, 
  Database, 
  Globe, 
  Zap, 
  FileJson, 
  Table, 
  BarChart3, 
  PieChart, 
  DatabaseZap,
  LucideIcon 
} from "lucide-react";

interface Skill {
  name: string;
  icon: LucideIcon;
  mastery: number;
  color: "blue" | "purple" | "orange" | "green";
}

const skills: Skill[] = [
  // ওয়েব ডেভেলপমেন্ট স্কিলস
  { name: "JavaScript", icon: FileJson, mastery: 92, color: "orange" },
  { name: "React", icon: Code2, mastery: 95, color: "blue" },
  { name: "Next.js", icon: Globe, mastery: 90, color: "purple" },
  { name: "Node.js", icon: Zap, mastery: 85, color: "green" },
  
  // ডেটাবেজ স্কিলস
  { name: "MongoDB", icon: DatabaseZap, mastery: 80, color: "green" },
  { name: "SQL", icon: Database, mastery: 88, color: "blue" },
  { name: "MS Access", icon: Table, mastery: 85, color: "purple" },
  
  // স্ট্যাটিস্টিকস টুলস
  { name: "Stata", icon: BarChart3, mastery: 82, color: "blue" },
  { name: "SPSS", icon: PieChart, mastery: 80, color: "orange" },
 ];

// বাকি SkillCard এবং SkillsSection কোড একই থাকবে...

const SkillsMarquee = () => {
  return (
    <div className="py-20 border-y border-white/5 bg-brand-black/50 overflow-hidden">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-20 items-center whitespace-nowrap"
      >
        {[...skills, ...skills].map((skill, i) => (
          <div key={i} className="flex items-center gap-6">
            <span className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-gray-800 hover:text-brand-purple transition-colors duration-500">
              {/* ✅ নিচে skill এর জায়গায় skill.name দিন */}
              {skill.name} 
            </span>
            <div className="w-3 h-3 rounded-full bg-brand-purple/20" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsMarquee;
