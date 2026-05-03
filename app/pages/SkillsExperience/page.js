"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, GraduationCap, Award, Code, Database, Layout, Server, TrendingUp } from "lucide-react";

export default function SkillsExperience() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const skills = [
    { name: "React / React Native", level: 90, icon: Code },
    { name: "JavaScript (ES6+)", level: 88, icon: Code },
    { name: "HTML5 / CSS3 / Tailwind", level: 85, icon: Layout },
    { name: "Java / Spring Boot", level: 75, icon: Server },
    { name: "Node.js / Express", level: 70, icon: Server },
    { name: "RESTful APIs", level: 85, icon: Database },
  ];

  const experiences = [
    {
      title: "React & React Native Developer",
      company: "Avitam Technologies",
      period: "Aug 2024 - Present",
      location: "Coimbatore, Tamil Nadu",
      description: [
        "Contributed to development and maintenance of web and mobile applications using React and React Native.",
        "Implemented state management using React hooks and Context API.",
        "Developed cross-platform mobile features with React Native, integrating RESTful APIs.",
        "Collaborated with designers to create pixel-perfect, responsive interfaces.",
        "Implemented debugging, testing, and performance optimization strategies.",
      ],
    },
  ];

  const education = [
    {
      degree: "Full Stack Developer",
      institution: "Computer Center Course",
      period: "May 2023 - Aug 2024",
      location: "Coimbatore",
      coursework: "C, C++, Java, Python, HTML5, CSS3, JavaScript, React JS, Django, Spring Boot",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Alagappa University",
      period: "July 2021 - June 2024",
      location: "Karaikudi",
      cgpa: "7.0",
      coursework: "Data Structures, C Programming, OOP in C++, DBMS, Operating Systems, Java, Computer Networks",
    },
    {
      degree: "Diploma in Mechanical Engineering (DME)",
      institution: "The Karur Polytechnic College",
      period: "Oct 2015 - Apr 2018",
      location: "Karur",
      percentage: "73%",
      coursework: "Computer Fundamentals, Mechanical CAD",
    },
  ];

  const certifications = [
    "Advanced JavaScript Bootcamp - DOM manipulation, event handling, async programming",
    "SQL Bootcamp - Complex queries, data manipulation, optimization",
  ];

  // Skill bars animation when in view
  useEffect(() => {
    if (!isInView) return;
    const skillBars = document.querySelectorAll(".skill-bar-fill");
    skillBars.forEach((bar) => {
      const width = bar.getAttribute("data-width");
      if (width) {
        bar.style.width = width;
      }
    });
  }, [isInView]);

  return (
    <section
      id="skills-experience"
      ref={sectionRef}
      className="relative w-full bg-[#F3E4C9] text-gray-800 py-20 px-6 md:px-10 overflow-hidden"
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 backdrop-blur-sm text-gray-700 text-sm font-medium border border-white/20 mb-4">
            <TrendingUp size={14} />
            <span>My Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Skills & Experience</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column: Skills & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Technical Skills */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/40">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-gray-800">
                <Award size={24} className="text-[#b4a17a]" /> Technical Skills
              </h3>
              <div className="space-y-5">
                {skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center gap-2">
                        <skill.icon size={18} className="text-[#b4a17a]" />
                        <span className="font-medium text-gray-700">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="skill-bar-fill bg-linear-to-r from-[#d4c5a8] to-[#b4a17a] h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: "0%" }}
                        data-width={`${skill.level}%`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/40">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-gray-800">
                <Award size={24} className="text-[#b4a17a]" /> Certifications
              </h3>
              <div className="grid gap-3">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="bg-white/80 p-4 rounded-xl shadow-sm border border-white/40 hover:shadow-md transition-shadow">
                    <p className="text-sm text-gray-700">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Experience & Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Work Experience */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/40">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-gray-800">
                <Briefcase size={24} className="text-[#b4a17a]" /> Work Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-[#d4c5a8]">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#b4a17a] rounded-full"></div>
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h4 className="text-xl font-bold text-gray-800">{exp.title}</h4>
                      <span className="text-sm text-[#b4a17a] font-medium bg-[#F3E4C9] px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-600 font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-500 mb-4">{exp.location}</p>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-gray-600 flex gap-2">
                          <span className="text-[#b4a17a]">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/40">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-gray-800">
                <GraduationCap size={24} className="text-[#b4a17a]" /> Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-[#d4c5a8]">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#b4a17a] rounded-full"></div>
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h4 className="text-lg font-bold text-gray-800">{edu.degree}</h4>
                      <span className="text-xs text-gray-500">{edu.period}</span>
                    </div>
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-xs text-gray-500 mb-2">{edu.location}</p>
                    {edu.cgpa && <p className="text-xs text-gray-500">CGPA: {edu.cgpa}</p>}
                    {edu.percentage && <p className="text-xs text-gray-500">Percentage: {edu.percentage}</p>}
                    <p className="text-xs text-gray-400 mt-2">Coursework: {edu.coursework}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
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