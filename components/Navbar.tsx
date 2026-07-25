"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { IoInfiniteOutline } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    // ১. ব্যাকগ্রাউন্ড স্ক্রোল হ্যান্ডলার
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // ২. বর্তমান দৃশ্যমান সেকশন ডিটেক্ট করার জন্য IntersectionObserver
    const navLinks = [
      "hero",
      "about",
      "digitools",
      "services",
      "Qualification",
      "projects",
      "contact",
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // স্ক্রিনের মাঝে কোন সেকশনটি আছে তা সঠিক করার জন্য
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "Resume", href: "#hero", id: "resume-btn" }, // রেজুমি হিরো সেকশনেই যুক্ত
    { name: "About", href: "#about", id: "about" },
    { name: "Tech Stack", href: "#digitools", id: "digitools" },
    { name: "Skills", href: "#services", id: "services" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/5 ${
        scrolled || isOpen ? "bg-[#093c5d]/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto py-3 px-6 h-full flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 flex items-center justify-center bg-brand-muted rounded-lg transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]">
            <IoInfiniteOutline className="text-white text-xl" />
          </div>
          <span className="text-3xl font-bold tracking-tight text-white">Nishi</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`nav-link transition-colors ${
                  isActive ? "nav-link-active text-brand-teal font-bold" : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-3xl text-gray-900 dark:text-white focus:outline-none z-50"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Mobile Menu Content */}
        <div
          className={`absolute top-full right-0 w-48 bg-[#093c5d] border-b border-white/10 transition-all duration-300 ease-in-out lg:hidden flex flex-col px-6 py-4 space-y-4 shadow-xl ${
            isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
          }`}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block text-base font-medium transition-colors ${
                  isActive
                    ? "text-brand-teal font-bold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

      </div>
    </header>
  );
};

export default Navbar;