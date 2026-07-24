// app/projects/[id]/page.tsx

import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Code, CheckCircle2 } from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound(); // ৪০৪ পেজে নিয়ে যাবে যদি প্রজেক্ট আইডি না মেলে
  }

  return (
    <main className="min-h-screen bg-[#0f172a] text-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Back Button */}
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-slate-400 hover:text-brand-purple transition-colors font-bold text-sm uppercase tracking-wider"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="space-y-4">
          <span className="text-brand-purple font-black tracking-[0.3em] uppercase text-xs">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            {project.title}
          </h1>
        </div>

        {/* Main Image */}
        <div className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Action Buttons & Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-6">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold uppercase mb-4 text-brand-purple">Overview</h2>
              <p className="text-slate-300 text-lg leading-relaxed font-medium">
                {project.description}
              </p>
            </div>

            {/* Key Features */}
            {project.features && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold uppercase text-brand-purple">Key Features</h2>
                <ul className="space-y-3">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 size={20} className="text-brand-purple shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8 bg-white/5 p-8 rounded-3xl border border-white/5 h-fit">
            {/* Tech Stack */}
            <div>
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-300 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Live & Code Links */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-brand-purple hover:bg-brand-purple/80 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all text-sm uppercase tracking-wider"
              >
                <ExternalLink size={18} />
                Live Preview
              </a>
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all text-sm uppercase tracking-wider"
              >
                <Code size={18} />
                Source Code
              </a>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}