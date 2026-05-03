"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  MonitorSmartphone, 
  Smartphone, 
  Image as ImageIcon, 
  Server, 
  ArrowRight,
  Code2
} from "lucide-react";

export default function Service() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const services = [
    {
      id: "web-dev",
      title: "Web Development",
      description: "Building blazing-fast, responsive, and scalable web applications using React, Next.js, and modern frameworks. From landing pages to complex full-stack platforms.",
      icon: MonitorSmartphone,
      features: ["Custom Web Apps", "Responsive Design", "Performance Optimization"],
      color: "from-blue-500/20 to-cyan-500/20",
      accent: "text-blue-600"
    },
    {
      id: "mobile-dev",
      title: "Mobile App Development",
      description: "Creating seamless cross-platform mobile experiences for iOS and Android using React Native, delivering native performance and high user satisfaction.",
      icon: Smartphone,
      features: ["iOS & Android Apps", "Cross-Platform UI", "App Maintenance & Scaling"],
      color: "from-orange-500/20 to-amber-500/20",
      accent: "text-orange-600"
    },
    {
      id: "product-design",
      title: "Product Banners & UI/UX",
      description: "Designing engaging product banners, intuitive interfaces, and premium user experiences that capture attention, communicate value, and drive conversions.",
      icon: ImageIcon,
      features: ["Product Banners", "Creative UI/UX", "Wireframing & Prototyping"],
      color: "from-purple-500/20 to-pink-500/20",
      accent: "text-purple-600"
    },
    {
      id: "backend-api",
      title: "Backend & APIs",
      description: "Developing robust server-side architectures, RESTful APIs, and database structures using Node.js, Express, and Spring Boot to power your applications.",
      icon: Server,
      features: ["RESTful API Design", "Database Management", "Secure Authentication"],
      color: "from-green-500/20 to-emerald-500/20",
      accent: "text-emerald-600"
    }
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
    <main className="min-h-screen bg-[#f3e4c9] pt-32 pb-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
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
            <Code2 size={16} />
            <span>What I Offer</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Comprehensive <span className="text-gray-600 font-light italic">Services</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            I provide scalable, high-performance solutions tailored to your business needs—spanning digital front-ends, robust back-ends, and captivating design assets.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              variants={itemVariants}
              className="group relative bg-black/2 border border-black/10 rounded-3xl p-8 lg:p-10 hover:bg-black/4 transition-all duration-500 overflow-hidden"
            >
              {/* Card Hover Gradient */}
              <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon & Title */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center ${service.accent} group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                    <service.icon size={28} strokeWidth={1.5} />
                  </div>
                  <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-gray-400 group-hover:text-gray-800 group-hover:bg-black/10 transition-all duration-300">
                    <ArrowRight size={18} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-8 grow">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full bg-current ${service.accent}`} />
                      <span className="text-gray-600 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
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
              className="px-8 py-4 bg-gray-900 backdrop-blur-xl border border-black/10 text-white rounded-full text-base font-semibold flex items-center gap-3 hover:bg-gray-800 transition-colors duration-300 shadow-xl"
            >
              Start a Project Together <ArrowRight size={18} className="text-[#F3E4C9]" />
            </a>
          </div>
        </motion.div>

      </div>
    </main>
  );
}