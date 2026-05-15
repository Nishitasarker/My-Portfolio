"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Link2, MessageSquare, Send, PenLine } from "lucide-react";
import Magnetic from "@/components/animations/Magnetic";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  { label: "Email", value: "sohan.explorer@gmail.com", icon: Mail, href: "mailto:sohan.explorer@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/sohan-dev25", icon: Link2, href: "https://linkedin.com/in/sohan-dev25" },
  { label: "WhatsApp", value: "+8801608421930", icon: MessageSquare, href: "https://wa.me/8801608421930" },
];

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState<"idle" | "sending" | "success">("idle");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-info-card", {
        x: -50, opacity: 0, stagger: 0.15, duration: 1, ease: "power4.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 75%" }
      });
      gsap.from(".contact-form-container", {
        x: 50, opacity: 0, duration: 1, ease: "power4.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 75%" }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    setTimeout(() => {
      setFormState("success");
      setTimeout(() => setFormState("idle"), 3000);
    }, 1500);
  };

  return (
    <section ref={containerRef} id="contact" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <header className="space-y-4">
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-brand-purple/10 text-brand-purple"><MessageSquare size={24} /></div>
                <h2 className="text-3xl font-black uppercase tracking-tighter">Talk to me</h2>
              </motion.div>
              <p className="text-gray-500 font-medium">Have a question or want to work together? Drop me a message.</p>
            </header>
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a key={info.label} href={info.href} target="_blank" rel="noopener noreferrer" className="contact-info-card block group">
                  <div className="glass-card p-6 flex items-center gap-6 border border-white/5 transition-all duration-500 group-hover:border-brand-purple group-hover:translate-x-2">
                    <div className="w-14 h-14 bg-brand-purple/5 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-brand-purple group-hover:text-white"><info.icon size={24} strokeWidth={1.5} /></div>
                    <div><p className="text-[10px] font-black text-brand-purple uppercase tracking-[0.3em]">{info.label}</p><p className="text-sm font-bold text-gray-200 mt-1">{info.value}</p></div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="contact-form-container glass-card p-10 md:p-12 border border-white/5 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-12"><PenLine size={20} className="text-brand-purple" /><h2 className="text-xl font-bold uppercase tracking-tight">Write me your project</h2></div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                {[{ id: "name", label: "Name", type: "text", placeholder: "Insert your name" }, { id: "email", label: "Email", type: "email", placeholder: "Insert your email" }].map((field) => (
                  <div key={field.id} className="relative group">
                    <label htmlFor={field.id} className="absolute -top-2.5 left-4 bg-[#0d0d10] px-2 text-[10px] font-black text-brand-purple uppercase tracking-[0.3em] z-10 transition-all group-focus-within:text-glow-purple">{field.label}</label>
                    <input id={field.id} type={field.type} placeholder={field.placeholder} className="w-full bg-transparent border border-white/10 rounded-2xl px-6 py-5 text-sm focus:ring-1 focus:ring-brand-purple focus:border-brand-purple outline-none placeholder:text-gray-700 transition-all font-medium" required />
                  </div>
                ))}
                <div className="relative group">
                  <label htmlFor="project" className="absolute -top-2.5 left-4 bg-[#0d0d10] px-2 text-[10px] font-black text-brand-purple uppercase tracking-[0.3em] z-10">Project</label>
                  <textarea id="project" placeholder="Write your project details" rows={5} className="w-full bg-transparent border border-white/10 rounded-2xl px-6 py-5 text-sm focus:ring-1 focus:ring-brand-purple focus:border-brand-purple outline-none placeholder:text-gray-700 transition-all resize-none font-medium" required />
                </div>
              </div>
              <Magnetic>
                <button disabled={formState !== "idle"} className="w-full bg-brand-purple hover:bg-opacity-90 text-white font-black uppercase tracking-widest py-5 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_10px_30px_rgba(79,57,246,0.2)]">
                  <AnimatePresence mode="wait">
                    {formState === "idle" && (<motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2"><span>Send Message</span><Send size={18} /></motion.div>)}
                    {formState === "sending" && (<motion.div key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2"><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /><span>Sending...</span></motion.div>)}
                    {formState === "success" && (<motion.div key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2"><span>Sent Successfully!</span></motion.div>)}
                  </AnimatePresence>
                </button>
              </Magnetic>
            </form>
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-brand-purple/5 rounded-full blur-[80px] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
