"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { IoInfiniteOutline } from "react-icons/io5";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Resume", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header
      className={`fixed top-0  left-0 w-full z-50 transition-all duration-300 border-b border-white/5 ${
        scrolled ? "bg-white/90 dark:bg-[#0d0d0d]/90" : "bg-transparent"
      } `}
    >
      <div className="max-w-7xl mx-20 py-3 px-6 h-full flex items-center justify-between">
        
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

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white">
          <i className="fa-solid fa-bars-staggered text-2xl"></i>
        </button>
      </div>
    </header>
  );
};

export default Navbar;