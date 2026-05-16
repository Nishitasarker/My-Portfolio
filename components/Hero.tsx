"use client";

import Image from "next/image";
import Link from "next/link";
import { Variants } from 'framer-motion';
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa6"; 

const Hero = () => {
  
  // fadeInUp ভ্যারিয়েন্ট - টাইপ সেফ করা হয়েছে
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: ([0.25, 1, 0.5, 1] as any) // টাইপস্ক্রিপ্ট এরর এড়াতে as any ব্যবহার
      } 
    }
  };

  // staggerContainer ভ্যারিয়েন্ট
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <main className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-deep">
      <div className="max-w-7xl mx-auto px-6 w-full py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="lg:col-span-7 space-y-8"
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
              Specializing in building modern, responsive web applications with JavaScript, React and Next.js. 
              Combining the precision of Statistics with the creativity of web development to create data-driven user experiences.
            </motion.p>
          </div>

          {/* Social Links Section */}
          <motion.div 
            variants={fadeInUp}
            className="space-y-6 pt-8 border-t border-white/10"
          >
            <p className="text-xl font-semibold uppercase tracking-widest text-gray-100">
              Find me on
            </p>
            <div className="flex items-center gap-4">
              {[
                { 
                  icon: <FaLinkedinIn />, 
                  href: "https://www.linkedin.com/in/nishitasarker2005" 
                },
                { 
                  icon: <FaGithub />, 
                  href: "https://github.com/Nishitasarker" 
                },
                { 
                  icon: <FaEnvelope />, 
                  href: "mailto:nishitasarkerjui@gmail.com",
                  isEmail: true 
                },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Link
                    href={social.href}
                    target={social.isEmail ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 shadow-xl hover:shadow-brand-purple/20 transition-all text-xl text-gray-300 hover:text-brand-purple"
                  >
                    {social.icon}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
           <motion.div 
             animate={{ y: [0, -12, 0] }}
             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
             className="relative group p-4 bg-[#1a1a1a] rounded-2xl shadow-2xl border border-white/10"
           >
             <div className="relative overflow-hidden rounded-xl bg-gray-900 h-[450px] w-[320px] md:h-[550px] md:w-[400px]">
               <Image
                 src="/portfolio,image.png" 
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