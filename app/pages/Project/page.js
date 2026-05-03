"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, Briefcase, ArrowRight } from "lucide-react";

export default function Projects() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const projects = [
    {
      title: "BisonRiver Resorts",
      role: "Full Stack Developer",
      tech: "Next.js, Tailwind CSS, JavaScript, API",
      description:
        "Developed a full-featured resort booking and information website with SSR for high performance and SEO optimization. Built a custom admin panel with role-based access control.",
      features: [
        "Server-side rendering",
        "Role-based access",
        "Booking management",
      ],
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveLink: "https://bisonriverresorts.com",
      codeLink: "#",
    },
    {
      title: "Easy Taxation",
      role: "Full Stack Developer",
      tech: "Next.js, Tailwind CSS, API Integration",
      description:
        "Developed a modern taxation services website delivering fast, SEO-friendly pages. Built a secure, scalable admin dashboard for managing client data and services dynamically.",
      features: [
        "SEO-optimized pages",
        "Secure admin dashboard",
        "Dynamic API integration",
      ],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveLink: "https://easytaxation.in",
      codeLink: "#",
    },
    {
      title: "Shree Meenakshi Finance",
      role: "Full Stack Developer",
      tech: "React Native, Next.js, Spring Boot, MongoDB",
      description:
        "Developed a cross-platform React Native app and web admin panel for loan workflow management. Implemented real-time data sync with secure backend services via Spring Boot.",
      features: [
        "Cross-platform admin app",
        "Spring Boot + MongoDB",
        "Real-time remote sync",
      ],
      image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveLink: "#",
      codeLink: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <main className="min-h-screen bg-[#F3E4C9] pt-32 pb-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-black/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[40%] rounded-full bg-black/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 border border-black/10 text-gray-800 text-sm font-medium mb-6"
          >
            <Briefcase size={16} />
            <span>My Portfolio</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Featured <span className="text-gray-600 font-light italic">Projects</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            A selection of my recent work, showcasing full‑stack development skills, modern frameworks, and real‑world applications tailored to business growth.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="group bg-[#0f0f0f] border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:border-[#F3E4C9]/30 transition-all duration-500 flex flex-col"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0f0f0f] to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                
                {/* Tech Badge */}
                <div className="absolute top-6 right-6 px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full">
                  <p className="text-[#F3E4C9] text-[10px] font-mono tracking-wider uppercase">{project.tech.split(',')[0]}</p>
                </div>
              </div>

              <div className="p-8 lg:p-10 flex flex-col grow relative">
                {/* Decorative line */}
                <div className="absolute top-0 left-10 w-12 h-1 bg-[#F3E4C9] rounded-full transform -translate-y-1/2"></div>

                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
                    <p className="text-[#F3E4C9] text-sm font-medium mt-1">{project.role}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-[#F3E4C9] group-hover:bg-white/5 transition-all duration-300">
                    <ArrowRight size={18} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-8 grow">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, i) => (
                      <span
                        key={i}
                        className="bg-white/5 border border-white/10 text-gray-300 text-[11px] px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6 pt-6 border-t border-white/5">
                    {project.codeLink !== "#" && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#F3E4C9] transition-colors flex items-center gap-2 text-sm font-medium"
                      >
                        <Github size={18} /> Source
                      </a>
                    )}
                    {project.liveLink !== "#" && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#F3E4C9] transition-colors flex items-center gap-2 text-sm font-medium"
                      >
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    )}
                    {project.liveLink === "#" && project.codeLink === "#" && (
                      <span className="text-gray-500 text-sm italic flex items-center gap-2">
                        <Briefcase size={16} /> Enterprise Project
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call To Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="inline-block p-px rounded-full bg-linear-to-r from-transparent via-black/20 to-transparent">
            <a 
              href="/pages/Contact"
              className="px-8 py-4 bg-gray-900 border border-black/10 text-white rounded-full text-base font-semibold flex items-center gap-3 hover:bg-gray-800 transition-colors duration-300 shadow-xl"
            >
              Start a Project Together <ArrowRight size={18} className="text-[#F3E4C9]" />
            </a>
          </div>
        </motion.div>

      </div>
    </main>
  );
}