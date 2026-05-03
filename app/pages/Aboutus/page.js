"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Code2, Sparkles, Layers } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !leftRef.current || !rightRef.current) return;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(leftRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      tl.from(
        rightRef.current,
        {
          opacity: 0,
          x: 80,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.7"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Skill list with icons
  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "React Native", icon: "📱" },
    { name: "JavaScript", icon: "🟨" },
    { name: "Next.js", icon: "" },
    { name: "Tailwind CSS", icon: "🎨" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full bg-[#F3E4C9] min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4c5a8] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#b4a17a] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <div ref={leftRef} className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 backdrop-blur-sm text-gray-700 text-sm font-medium border border-white/20">
            <Sparkles size={14} />
            <span>About Me</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            About <br />
            <span className="text-gray-800 font-light">Me</span>
          </h1>

          <div className="space-y-4 text-gray-700">
            <p className="leading-relaxed text-base">
              I'm a passionate Senior Software Developer with a unique blend of
              technical expertise and creative problem-solving. My journey began
              with a Diploma in Mechanical Engineering, followed by a Bachelor of
              Computer Applications (BCA), which gave me a solid foundation in
              both hardware and software perspectives.
            </p>

            <p className="leading-relaxed text-base">
              I specialize in building responsive, high-performance web and mobile
              applications using modern technologies like React, React Native,
              Node.js, and Java Spring Boot. My experience at Avitam Technologies
              has allowed me to contribute to enterprise-level applications,
              focusing on user-centric design and scalable architecture.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="pt-4">
            <div className="flex items-center gap-2 text-gray-700 font-medium mb-4">
              <Layers size={18} />
              <span>Tech Stack & Tools</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, idx) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-1.5 bg-white/70 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:bg-white transition-all duration-300 cursor-default"
                >
                  <span className="text-base">{skill.icon}</span>
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Optional extra detail */}
          <div className="pt-6 border-t border-gray-300/40">
            <div className="flex items-center gap-2 text-gray-600">
              <Code2 size={16} />
              <span className="text-sm">Available for freelance & collaborations</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div ref={rightRef} className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-square group">
            {/* Outer decorative ring */}
            <div className="absolute -inset-2 bg-linear-to-r from-[#d4c5a8] to-[#b4a17a] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>

            {/* Image container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]">
              <Image
                src="/images/AboutMe.jpg"
                alt="Developer workspace"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-gray-700">Open to work</span>
            </div>
          </div>
        </div>
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