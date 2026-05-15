"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import Magnetic from "@/components/animations/Magnetic";
import { IoInfiniteOutline } from "react-icons/io5";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Works", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-[#0d0d0d]/80 backdrop-blur-xl h-16 border-b border-white/5" : "bg-transparent h-24"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 flex items-center justify-center bg-brand-purple rounded-xl group-hover:rotate-[360deg] transition-transform duration-700">
             <IoInfiniteOutline size={28} className="text-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase">Reeni</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative group text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-purple transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            {["instagram", "linkedin-in", "twitter"].map((icon) => (
              <Magnetic key={icon}>
                <Link
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors"
                >
                  <i className={`fa-brands fa-${icon} text-lg`}></i>
                </Link>
              </Magnetic>
            ))}
            
            <Magnetic>
              <button className="ml-4 px-6 py-2 bg-white text-black rounded-full font-bold text-sm hover:bg-brand-purple hover:text-white transition-all">
                Let&apos;s Talk
              </button>
            </Magnetic>
          </div>

          <button className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 glass-card">
            <span className="w-5 h-0.5 bg-white" />
            <span className="w-3 h-0.5 bg-white self-end mr-2.5" />
          </button>
        </div>
        
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-purple origin-left"
          style={{ scaleX }}
        />
      </motion.header>
    </>
  );
};

export default Navbar;
