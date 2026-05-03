"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Code2,
  Database,
  MapPin,
  Bell,
  Users,
  ShieldCheck,
  Clock,
  Smartphone,
  ExternalLink,
  Github
} from "lucide-react";

export default function Projects() {
  const sectionRef = useRef(null);

  const projects = [
    {
      title: "BisonRiver Resorts",
      role: "Full Stack Developer",
      techStack: ["Next.js, Tailwind CSS, JavaScript, API Integration"],
      period: "2026",
      description:
        "Developed a full-featured resort booking and information website with SSR for high performance and SEO optimization. Built a custom admin panel to manage resort details, bookings, content, and user data with role-based access control. Designed a fully responsive and modern UI for both customer-facing pages and the admin dashboard.",
      features: [
        "Server-side rendering for SEO & performance",
        "Admin panel with role‑based access control",
        "Resort and booking management",
        "Fully responsive, modern UI",
      ],
      image: "/images/bison.jpg", // resort image
      liveLink: "https://bisonriverresorts.com",
      codeLink: "#", // optional if you have a repo
    },
    {
      title: "Loan Application System",
      company: "Avitam Technologies",
      role: "Frontend Developer",
      techStack: ["React Native", "Java Spring Boot", "REST APIs"],
      period: "2024",
      image: "/images/LoanApplicationSystem.png", // placeholder – replace with actual image path
      features: [
        "Loan request submission & approval workflow",
        "Admin panel with user management and role-based access control",
        "Real-time loan status tracking (approved/rejected)",
        "Live user tracking via Google Maps",
        "Notification system for status changes & reminders",
        "User-friendly, mobile-first forms",
        "Customer and loan record management",
        "Audit logs for approval/rejection actions",
      ],
      liveLink: "https://play.google.com/store/apps/details?id=com.avitam.smfadmin&hl=en_IN",
      codeLink: "#",
    },
    // Additional projects can be added here – for now, we'll add one more based on skills
    {
      title: "Easy Taxation",
      role: "Full Stack Developer",
      techStack: ["Next.js", "Tailwind CSS", "JavaScript", "API Integration"], // ✅ fixed
      description:
        "Developed a modern taxation services website with Next.js delivering fast, SEO-friendly pages. Built a secure, scalable admin dashboard for managing client data, services, and business records. Implemented dynamic data handling and seamless frontend–backend API communication.",
      features: [
        "SEO-optimized pages with Next.js",
        "Secure admin dashboard",
        "Client and service management",
        "Dynamic API integration",
      ],
      period: "2025",
      image: "/images/tax.jpg",
      liveLink: "https://easytaxation.in",
      codeLink: "#",
    }
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full bg-black py-20 px-6 md:px-10 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4c5a8] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#b4a17a] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 backdrop-blur-sm text-white text-sm font-medium border border-white/20 mb-4">
            <Code2 size={14} />
            <span>Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Projects</h2>
          <p className="text-white mt-4 max-w-2xl mx-auto">
            Real-world applications I've built, showcasing my expertise in modern web and mobile development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#f7f1e6] backdrop-blur-sm rounded-2xl shadow-lg  overflow-hidden hover:shadow-xl transition-all group"
            >
              {/* Project Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
              </div>

              <div className="p-6 space-y-4">
                {/* Title & Meta */}
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                    <span className="text-xs text-[#b4a17a] font-medium bg-[#F3E4C9] px-2 py-1 rounded-full">
                      {project.period}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {project.company} • {project.role}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#F3E4C9] text-gray-700 px-2 py-1 rounded-full border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features List */}
                <ul className="space-y-1.5 text-sm text-gray-600">
                  {project.features.slice(0, 4).map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#b4a17a] mt-0.5">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                  {project.features.length > 4 && (
                    <li className="text-xs text-gray-500 italic">
                      + {project.features.length - 4} more features
                    </li>
                  )}
                </ul>

                {/* Action Buttons */}
                <div className="pt-2 flex gap-3">
                  <div className="mt-4 flex gap-4">
                    {project.codeLink !== "#" && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-orange-500 transition flex items-center gap-1 text-sm"
                      >
                        <Github size={16} /> Code
                      </a>
                    )}
                    {project.liveLink !== "#" && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-orange-500 transition flex items-center gap-1 text-sm"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                    {project.liveLink === "#" && project.codeLink === "#" && (
                      <span className="text-gray-400 text-sm">Private project</span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional Call-to-Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">
            Want to see more?{" "}
            <button className="text-[#b4a17a] font-medium hover:underline">
              Check out my GitHub
            </button>{" "}
            or{" "}
            <button className="text-[#b4a17a] font-medium hover:underline">
              get in touch
            </button>.
          </p>
        </motion.div>
      </div>

      {/* Custom CSS for blob animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}