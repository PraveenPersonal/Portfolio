"use client";

import React, { useRef } from "react";
import { Download, FileText } from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function Resume() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/data/Praveen_Kumar_Resume.pdf";
    link.download = "Praveen_Kumar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="resume"
      ref={sectionRef}
      className="relative w-full bg-[#F3E4C9] text-gray-800 py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4c5a8] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#b4a17a] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 backdrop-blur-sm text-gray-700 text-sm font-medium border border-white/20 mb-6">
            <FileText size={16} className="text-[#b4a17a]" />
            <span>My Resume</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Professional <span className="font-light">Document</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
            Review my professional background, experience, and complete skill set. You can view the document below or download it for your records.
          </p>
        </motion.div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <button
            onClick={handleDownload}
            className="group px-8 py-4 bg-black text-[#F3E4C9] font-semibold rounded-full text-base flex items-center gap-3 hover:bg-gray-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            DOWNLOAD RESUME
          </button>
        </motion.div>

        {/* Resume Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full max-w-5xl h-[80vh] min-h-[600px] border border-white/40 rounded-2xl overflow-hidden bg-white/50 backdrop-blur-sm shadow-2xl relative p-2 md:p-4"
        >
          {/* Subtle gradient overlay to match premium aesthetic */}
          <div className="absolute inset-0 bg-linear-to-tr from-[#d4c5a8]/20 to-transparent pointer-events-none"></div>

          <div className="w-full h-full rounded-xl overflow-hidden border border-gray-200 shadow-inner bg-white relative z-10">
            <iframe
              src="/data/Praveen_Kumar_Resume.pdf#toolbar=0"
              className="w-full h-full border-none"
              title="Praveen Kumar Resume"
            >
              <p className="text-center text-gray-700 p-10 mt-10">
                Your browser does not support PDFs.
                <a href="/data/Praveen_Kumar_Resume.pdf" className="text-black font-semibold underline ml-2">Download the PDF</a>.
              </p>
            </iframe>
          </div>
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