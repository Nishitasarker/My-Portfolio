import Image from "next/image";
import Link from "next/link";
// React Icons import kora holo
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa6"; 

const Hero = () => {
  return (
    <main className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <p className="text-xs font-bold tracking-[0.2em] text-purple-500 uppercase">
              Welcome to my world
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              I&apos;m <span className="text-white">Nishita Sarker </span>
              <br />
              <span className="text-purple-500"> Developer & Statistician.</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
               Specializing in building modern, responsive web applications with JavaScript, React and Next.js. 
               Combining the precision of Statistics with the creativity of web development to create data-driven user experiences.
            </p>
          </div>

          <div className="space-y-6 pt-8 border-t border-white/10">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
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
                <Link
                  key={index}
                  href={social.href}
                  target={social.isEmail ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#1a1a1a] border border-white/5 shadow-xl hover:shadow-purple-500/20 transition-all hover:-translate-y-1 text-xl text-gray-300 hover:text-purple-500"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Image Section (Existing code) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
           <div className="relative group p-4 bg-[#1a1a1a] rounded-2xl shadow-2xl border border-white/10">
             <div className="relative overflow-hidden rounded-xl bg-gray-800 h-[450px] w-[320px] md:h-[550px] md:w-[400px]">
               <Image
                 src="/portfolio,image.png" 
                 alt="Nishita sarker Portrait"
                 width={800}
                 height={600}
                 className="w-full h-full object-cover transition-all duration-700"
                 priority
               />
             </div>
           </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;