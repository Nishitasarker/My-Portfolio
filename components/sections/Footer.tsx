"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUp, Infinity } from "lucide-react"; // Common icons
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa"; // Social icons
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

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
     transition: { duration: 0.8, ease: "easeOut" }    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 260, damping: 20 } 
    }
  };

  return (
    <footer className="py-20 px-6 md:px-12 lg:px-24 border-t border-gray-400 relative overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
          
          {/* Left Side: Brand & Bio */}
          <motion.div 
            className="flex flex-col items-center md:items-start gap-6"
            variants={fadeInUp}
          >
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 flex items-center justify-center bg-brand-muted rounded-xl transition-transform duration-700 group-hover:rotate-[360deg]">
                <Infinity size={24} className="text-white" />
              </div>
              <span className="text-3xl font-black tracking-tighter uppercase">Nishi</span>
            </Link>
            <p className="text-gray-300 max-w-lg text-center md:text-left font-medium">
              Full-stack Developer | Data Analyst. Specialized in Next.js, React, and MongoDB, with a deep interest in statistical modeling and database management. Turning complex problems into elegant, data-driven solutions.
            </p>
          </motion.div>

          {/* Right Side: Social Links */}
          <motion.div 
            className="flex flex-col items-center md:items-end gap-6"
            variants={fadeInUp}
          >
            <motion.div 
              className="flex gap-4"
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
                      className="w-12 h-12 flex items-center justify-center rounded-lg bg-sky-800 border border-white/5 shadow-xl hover:shadow-blue-500/20 transition-all hover:-translate-y-1 text-xl text-gray-300 hover:text-blue-500"
                    >
                      {social.icon}
                    </Link>
                  </motion.div>
                </Magnetic>
              ))}
            </motion.div>
            <p className="text-white text-lg font-bold uppercase tracking-widest">Connect with me</p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-8"
          variants={fadeInUp}
        >
          <div className="flex gap-8 text-[13px] font-black uppercase tracking-[0.3em] text-gray-300">
            <span>© {currentYear} All Rights Reserved</span>
            <Link href="#" className="hover:text-brand-purple transition-colors">Privacy Policy</Link>
          </div>
          
          <Magnetic>
            <button onClick={scrollToTop} className="group flex items-center gap-4 text-brand-purple font-black uppercase tracking-widest text-xs">
              <span>Back to Top</span>
              <div className="w-12 h-12 rounded-full border border-brand-purple flex items-center justify-center group-hover:bg-brand-purple group-hover:text-white transition-all overflow-hidden">
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <ArrowUp size={20} />
                </motion.div>
              </div>
            </button>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Decorative Animated Ambient Light */}
      <motion.div 
        className="absolute -left-20 bottom-0 w-64 h-64 bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut"
        }}
      />
    </footer>
  );
}