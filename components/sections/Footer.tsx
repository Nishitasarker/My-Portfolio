"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUp, Infinity } from "lucide-react";
import Magnetic from "@/components/animations/Magnetic";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 px-6 md:px-12 lg:px-24 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
          <div className="flex flex-col items-center md:items-start gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 flex items-center justify-center bg-brand-purple rounded-xl transition-transform duration-700 group-hover:rotate-[360deg]">
                <Infinity size={24} className="text-white" />
              </div>
              <span className="text-3xl font-black tracking-tighter uppercase">Reeni</span>
            </Link>
            <p className="text-gray-500 max-w-xs text-center md:text-left font-medium">
              Designing and developing digital experiences with a focus on speed, performance, and luxury aesthetics.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-4">
              {["instagram", "linkedin-in", "twitter", "github"].map((icon) => (
                <Magnetic key={icon}>
                  <Link
                    href="#"
                    className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/5 hover:border-brand-purple hover:bg-brand-purple/10 transition-all text-gray-400 hover:text-brand-purple"
                  >
                    <i className={`fa-brands fa-${icon} text-xl`}></i>
                  </Link>
                </Magnetic>
              ))}
            </div>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Connect with me</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-8">
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">
            <span>© {currentYear} All Rights Reserved</span>
            <Link href="#" className="hover:text-brand-purple transition-colors">Privacy Policy</Link>
          </div>
          <Magnetic>
            <button onClick={scrollToTop} className="group flex items-center gap-4 text-brand-purple font-black uppercase tracking-widest text-xs">
              <span>Back to Top</span>
              <div className="w-12 h-12 rounded-full border border-brand-purple flex items-center justify-center group-hover:bg-brand-purple group-hover:text-white transition-all">
                <ArrowUp size={20} />
              </div>
            </button>
          </Magnetic>
        </div>
      </div>
      <div className="absolute -left-20 bottom-0 w-64 h-64 bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />
    </footer>
  );
}
