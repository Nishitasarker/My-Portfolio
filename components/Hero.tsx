"use client";

import Image from "next/image";
import Link from "next/link";
import { Variants } from 'framer-motion';
import { motion } from "framer-motion";
import { FaLinkedinIn, FaEnvelope, FaFacebookF, FaWhatsapp, FaDownload } from "react-icons/fa6"; 

const Hero = () => {
  
  // fadeInUp ভ্যারিয়েন্ট
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.25, 1, 0.5, 1]
      } 
    }
  };

  // staggerContainer ভ্যারিয়েন্ট
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  // ইমেইল ক্লিক হ্যান্ডলার - ক্লিপবোর্ডে কপি করার জন্য
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText("nishitasarkerjui@gmail.com");
    alert("Email address copied to clipboard!");
  };

  const socialLinks = [
    { 
      icon: <FaLinkedinIn />, 
      href: "https://www.linkedin.com/in/nishitasarker2005",
      isExternal: true 
    },
    { 
      icon: <FaWhatsapp />, 
      href: "https://wa.me/8801750691825",
      isExternal: true 
    },
    { 
      icon: <FaFacebookF />, 
      href: "https://www.facebook.com/100080777081861/posts/962049083164319/?substory_index=1745046966465629&app=fbl",
      isExternal: true 
    },
    { 
      icon: <FaEnvelope />, 
      href: "mailto:nishitasarkerjui@gmail.com",
      isExternal: false
    }
  ];

  return (
    <main id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-deep">
      <div className="max-w-7xl mx-auto px-6 w-full py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="lg:col-span-7 space-y-8 z-10"
        >
          <div className="space-y-4">
            <motion.p 
              variants={fadeInUp}
              className="text-xs font-bold tracking-[0.2em] text-brand-purple text-glow-purple italic uppercase"
            >
              Welcome to my world
            </motion.p>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold leading-tight text-white"
            >
              I&apos;m <span>Nishita Sarker</span>
              <br />
              <span className="text-brand-purple text-glow-purple italic">Developer & Statistician</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-gray-300 text-lg leading-relaxed max-w-xl"
            >
              Full-Stack Web Developer specializing in TypeScript, Next.js, React, Node.js, Express.js, and MongoDB.
              Combining statistical analytical precision with modern web development to build scalable, data-driven applications.
            </motion.p>
          </div>

          {/* Action & Social Links Section */}
          <motion.div 
            variants={fadeInUp}
            className="space-y-6 pt-8 border-t border-white/10"
          >
            {/* Resume Download Button */}
            <div className="flex flex-wrap items-center gap-4">
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-teal text-brand-purple text-slate-950 font-bold shadow-lg shadow-brand-cyan/20 hover:bg-brand-teal transition-all cursor-pointer"
              >
                <FaDownload className="text-lg" />
                Download Resume
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="space-y-3 pt-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                Find me on
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => {
                  const linkClass = "w-12 h-12 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 shadow-xl hover:border-brand-cyan/40 hover:shadow-brand-cyan/20 transition-all text-xl text-gray-300 hover:text-brand-cyan";

                  return (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      {social.isExternal ? (
                        <Link
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={linkClass}
                        >
                          {social.icon}
                        </Link>
                      ) : (
                        <a
                          href={social.href}
                          onClick={handleEmailClick}
                          className={linkClass}
                        >
                          {social.icon}
                        </a>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end z-10"
        >
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative group p-4 bg-white/5 rounded-2xl shadow-2xl border border-white/10"
          >
            <div className="relative overflow-hidden rounded-xl bg-gray-900 h-[450px] w-[320px] md:h-[550px] md:w-[400px]">
              <Image
                src="/portfolio-image.jpeg" 
                alt="Nishita Sarker Portrait"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </main>
  );
};

export default Hero;