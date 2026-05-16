"use client";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Link2, MessageSquare, Send, PenLine } from "lucide-react";
import Magnetic from "@/components/animations/Magnetic";
import emailjs from "@emailjs/browser"; 

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  { label: "Email", value: "nishitasarkerjui@gmail.com", icon: Mail, href: "mailto:nishitasarkerjui@gmail.com" },
  { label: "LinkedIn", value: "nishitasarker2005", icon: Link2, href: "https://www.linkedin.com/in/nishitasarker2005" },
  { label: "WhatsApp", value: "+8801750-691825", icon: MessageSquare, href: "https://wa.me/8801750691825" },
];

export default function Contact() {
  const containerRef = useRef(null);
  const formRef = useRef(null); 
  const [formState, setFormState] = useState("idle");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // কার্ডগুলো নিচ থেকে স্লাইড হয়ে আসবে
      gsap.from(".contact-info-card", {
        y: 30, opacity: 0, stagger: 0.15, duration: 1, ease: "expo.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 80%" }
      });
      // ফর্মটি ডান থেকে আসবে
      gsap.from(".contact-form-container", {
        x: 40, opacity: 0, duration: 1.2, ease: "expo.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 75%" }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setFormState("sending");

    emailjs.sendForm('service_lbp5z4j', 'template_e1qzjwc', formRef.current, '7iZZm8_oXhbhFPZSQ')
    .then(() => {
      setFormState("success");
      formRef.current?.reset(); 
      setTimeout(() => setFormState("idle"), 4000);
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      setFormState("error");
      setTimeout(() => setFormState("idle"), 4000);
    });
  };

  return (
    <section ref={containerRef} id="contact" className="py-32 px-6 md:px-12 lg:px-24 bg-brand-deep text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: Contact Info */}
          <div className="space-y-12">
            <header className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="p-2 rounded-lg bg-brand-teal/10 text-brand-teal">
                  <MessageSquare size={24} className="text-brand-teal" />
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tighter">Talk to me</h2>
              </motion.div>
              <motion.p 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                transition={{ delay: 0.2 }}
                className="text-gray-200 font-medium"
              >
                Have a question or want to work together? Drop me a message.
              </motion.p>
            </header>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a key={info.label} href={info.href} target="_blank" rel="noopener noreferrer" className="contact-info-card block group">
                  <div className="bg-white/5 backdrop-blur-md p-6 flex items-center gap-6 border border-white/5 transition-all duration-500 hover:border-brand-teal hover:translate-x-2 rounded-3xl">
                    <div className="w-14 h-14 bg-brand-teal/10 rounded-2xl flex items-center justify-center transition-all group-hover:bg-brand-teal group-hover:text-brand-deep">
                      <info.icon size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[15px] font-black text-brand-teal uppercase tracking-[0.3em]">{info.label}</p>
                      <p className="text-sm font-bold text-gray-100 mt-1">{info.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Contact Form (Design kept original) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="contact-form-container bg-brand-muted/10 backdrop-blur-xl p-10 md:p-12 border border-white/5 relative overflow-hidden rounded-[2rem]"
          >
            <div className="flex items-center gap-3 mb-12">
              <PenLine size={20} className="text-brand-teal" />
              <h2 className="text-xl font-bold uppercase tracking-tight text-white">Write me your project</h2>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <div className="relative group">
                  <label className="absolute -top-2.5 left-4 bg-brand-deep px-2 text-[15px] font-black text-brand-teal uppercase tracking-[0.3em] z-10">Name</label>
                  <input name="user_name" type="text" placeholder="Insert your name" className="w-full bg-transparent border-2 border-white/10 rounded-2xl px-6 py-5 text-sm focus:ring-1 focus:ring-brand-teal focus:border-brand-teal outline-none placeholder:text-gray-400 transition-all text-white" required />
                </div>

                <div className="relative group">
                  <label className="absolute -top-2.5 left-4 bg-brand-deep px-2 text-[15px] font-black text-brand-teal uppercase tracking-[0.3em] z-10">Email</label>
                  <input name="user_email" type="email" placeholder="Insert your email" className="w-full bg-transparent border-2 border-white/10 rounded-2xl px-6 py-5 text-sm focus:ring-1 focus:ring-brand-teal focus:border-brand-teal outline-none placeholder:text-gray-400 transition-all text-white" required />
                </div>

                <div className="relative group">
                  <label className="absolute -top-2.5 left-4 bg-brand-deep px-2 text-[15px] font-black text-brand-teal uppercase tracking-[0.3em] z-10">Project</label>
                  <textarea name="message" placeholder="Write your project details" rows={5} className="w-full bg-transparent border-2 border-white/10 rounded-2xl px-6 py-5 text-sm focus:ring-1 focus:ring-brand-teal focus:border-brand-teal outline-none placeholder:text-gray-400 transition-all resize-none text-white" required />
                </div>
              </div>

              <Magnetic>
                <button 
                  type="submit"
                  disabled={formState === "sending" || formState === "success"} 
                  className="w-full bg-brand-deep hover:bg-brand-muted text-white font-black uppercase tracking-widest py-5 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 disabled:opacity-50 shadow-[0_10px_30px_rgba(111,209,215,0.2)]"
                >
                  <AnimatePresence mode="wait">
                    {formState === "idle" && (
                      <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                        <span>Send Message</span><Send size={18} />
                      </motion.div>
                    )}
                    {formState === "sending" && (
                      <motion.div key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-brand-deep/30 border-t-brand-deep rounded-full animate-spin" />
                        <span>Sending...</span>
                      </motion.div>
                    )}
                    {formState === "success" && (
                      <motion.div key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                        <span>Message Sent!</span>
                      </motion.div>
                    )}
                    {formState === "error" && (
                      <motion.div key="error" className="text-red-900">Something Failed!</motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </Magnetic>
            </form>

            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-brand-teal/5 rounded-full blur-[80px] pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}