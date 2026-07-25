"use client";

import { motion } from "framer-motion";
import { Variants } from 'framer-motion';
import Link from "next/link";
import { ArrowUp, Infinity as InfinityIcon } from "lucide-react"; 
import { FaLinkedin, FaGithub, FaWhatsapp, FaFacebook, FaEnvelope } from "react-icons/fa"; 
import Magnetic from "@/components/animations/Magnetic";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: <FaLinkedin size={20} />, 
      href: "https://www.linkedin.com/in/nishitasarker2005", 
      label: "LinkedIn" 
    },
    { 
      icon: <FaGithub size={20} />, 
      href: "https://github.com/Nishitasarker", 
      label: "GitHub" 
    },
    { 
      icon: <FaFacebook size={20} />, 
      href: "https://www.facebook.com/puja.sarker.602565",
      label: "Facebook" 
    },
    { 
      icon: <FaEnvelope size={20} />, 
      href: "mailto:nishitasarkerjui@gmail.com",
      label: "Email" 
    },
    { 
      icon: <FaWhatsapp size={20} />, 
      href: "https://wa.me/8801750691825",
      label: "WhatsApp" 
    },
  ];

  // অ্যানিমেশন ভেরিয়েন্টস
  const fadeInUp: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.6, -0.05, 0.01, 0.99]
      } 
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const iconVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20
      } 
    }
  };

  return (
    /* ব্যাকগ্রাউন্ড কালার পরিবর্তন: bg-[#0f172a] এবং border-slate-800/80 */
    <footer className="py-20 px-6 md:px-12 lg:px-24 bg-[#0f172a] border-t border-slate-800/80 relative overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto relative" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
          
          {/* বাম পাশ: ব্র্যান্ড লোগো ও বায়ো */}
          <motion.div 
            className="flex flex-col items-center md:items-start gap-6"
            variants={fadeInUp}
          >
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 flex items-center justify-center bg-cyan-400/10 border border-cyan-400/20 rounded-xl transition-transform duration-700 group-hover:rotate-[360deg]">
                <InfinityIcon size={24} className="text-cyan-400" />
              </div>
              <span className="text-3xl font-black tracking-tighter uppercase text-white">Nishi</span>
            </Link>
            <p className="text-gray-400 max-w-lg text-center md:text-left font-medium leading-relaxed">
              Full-Stack Web Developer specializing in Next.js, React, Node.js, Express.js, MongoDB, TypeScript, and JavaScript. I build fast, scalable, and visually interactive web applications with modern tools like Tailwind CSS and Framer Motion. Open to new opportunities and collaborations!
            </p>
          </motion.div>

          {/* ডান পাশ: সোশ্যাল লিংকসমূহ */}
          <motion.div 
            className="flex flex-col items-center md:items-end gap-6"
            variants={fadeInUp}
          >
            <motion.div 
              className="flex gap-4 flex-wrap justify-center md:justify-end"
              variants={containerVariants}
            >
              {socialLinks.map((social, index) => (
                <Magnetic key={index}>
                  <motion.div variants={iconVariants}>
                    <Link
                      href={social.href}
                      target={social.label !== "Email" ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-sm transition-all text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/30 hover:-translate-y-1 text-xl"
                    >
                      {social.icon}
                    </Link>
                  </motion.div>
                </Magnetic>
              ))}
            </motion.div>
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Connect with me</p>
          </motion.div>
        </div>

        {/* নিচের সেকশন (Copyright & Back to Top) */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-8"
          variants={fadeInUp}
        >
          <div className="flex gap-8 text-[11px] md:text-[13px] font-bold uppercase tracking-[0.2em] text-gray-500">
            <span>© {currentYear} All Rights Reserved</span>
            <Link href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
          </div>
          
          <Magnetic>
            <button 
              onClick={scrollToTop} 
              className="group flex items-center gap-4 text-cyan-400 font-black uppercase tracking-widest text-xs"
            >
              <span>Back to Top</span>
              {/* বাটন ব্যাকগ্রাউন্ড ও বর্ডার কালার সিয়ান করা হয়েছে */}
              <div className="w-12 h-12 rounded-full border border-cyan-400/30 flex items-center justify-center group-hover:bg-cyan-400 group-hover:border-cyan-400 group-hover:text-slate-950 transition-all overflow-hidden">
                <motion.div
                  animate={{ y: [0, -4, 0] } as const}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2, 
                    ease: "easeInOut" 
                  }}
                >
                  <ArrowUp size={20} />
                </motion.div>
              </div>
            </button>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট (Cyan Accent Glow) */}
      <motion.div 
        className="absolute -left-20 bottom-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut"
        }}
      />
    </footer>
  );
}