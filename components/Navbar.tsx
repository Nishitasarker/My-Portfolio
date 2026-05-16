"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { IoInfiniteOutline } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero", active: true },
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#digitools" },
    { name: "Skills", href: "#services" },
    { name: "Resume", href: "#journey" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
     className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/5 ${
        scrolled || isOpen ? "bg-white dark:bg-[#0d0d0d]" : "bg-transparent"
      } `}
    >
      <div className="max-w-7xl mx-auto py-3 px-6 h-full flex  items-center justify-between">
        
        {/* Logo Section - মাউস নিলে ঘুরবে */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 flex items-center justify-center bg-brand-muted rounded-lg transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]">
            <IoInfiniteOutline className="text-white text-xl" />
          </div>
          <span className="text-3xl font-bold tracking-tight">Nishi</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8 ">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`nav-link ${
                link.active ? "nav-link-active" : "text-gray-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-3xl text-gray-900 dark:text-white focus:outline-none z-50"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Mobile Menu Button */}
        
    <div
          className={`absolute top-full right-0 w-40 bg-white dark:bg-[#0d0d0d] border-b border-white/5 transition-all duration-300 ease-in-out lg:hidden flex flex-col px-6 py-4 space-y-4 shadow-xl ${
            isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)} // কোনো লিংকে ক্লিক করলে যেন মেনুটি নিজে থেকেই বন্ধ হয়ে যায়
              className={`block text-lg font-medium transition-colors ${
                link.active ? "text-blue-500 font-semibold" : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

      </div>
    </header>
  );
};

export default Navbar;