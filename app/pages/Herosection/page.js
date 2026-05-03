"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function Hero() {
  const heroRef = useRef(null);
  const textBlocksRef = useRef([]);
  const canvasRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  // --- Particle Network Background Animation ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    let mouseX = 0, mouseY = 0;
    const mouseRadius = 150;

    const PARTICLE_COUNT = 100;
    const MAX_DISTANCE = 130;
    const PARTICLE_RADIUS = 1.8;
    const PARTICLE_COLOR = "rgba(243, 228, 201, 0.7)";
    const SPEED_FACTOR = 0.25;

    class Particle {
      constructor(x, y, vx, vy) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.radius = PARTICLE_RADIUS;
      }

      update(width, height, mouseX, mouseY) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const dist = Math.hypot(dx, dy);
        if (dist < mouseRadius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouseRadius - dist) / mouseRadius;
          const pushX = Math.cos(angle) * force * 1.2;
          const pushY = Math.sin(angle) * force * 1.2;
          this.x += pushX;
          this.y += pushY;

          if (this.x < 0) this.x = width;
          if (this.x > width) this.x = 0;
          if (this.y < 0) this.y = height;
          if (this.y > height) this.y = 0;
        }
      }

      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = PARTICLE_COLOR;
        ctx.fill();
      }
    }

    function initParticles(width, height) {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const vx = (Math.random() - 0.5) * SPEED_FACTOR;
        const vy = (Math.random() - 0.5) * SPEED_FACTOR;
        particles.push(new Particle(x, y, vx, vy));
      }
    }

    function drawLines(ctx, width, height) {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.hypot(dx, dy);
          if (distance < MAX_DISTANCE) {
            const opacity = (1 - distance / MAX_DISTANCE) * 0.35;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(243, 228, 201, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      if (!canvas || !ctx) return;
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      for (let p of particles) {
        p.update(width, height, mouseX, mouseY);
      }

      drawLines(ctx, width, height);

      for (let p of particles) {
        p.draw(ctx);
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    function handleResize() {
      if (!canvas) return;
      const container = canvas.parentElement;
      if (container) {
        const { width, height } = container.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
        initParticles(width, height);
      }
    }

    function handleMouseMove(e) {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // --- GSAP Text Animations ---
  useEffect(() => {
    if (!heroRef.current) return;

    gsap.from(textBlocksRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.1,
      stagger: 0.18,
      ease: "power3.out",
    });

    gsap.from(heroRef.current, {
      opacity: 0,
      y: 40,
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 85%",
      },
    });
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="home" className="relative w-full bg-black overflow-hidden pt-20">
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center lg:justify-start bg-black px-6 md:px-12 lg:px-24"
      >
        {/* Particle Background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          style={{ opacity: 0.85 }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent pointer-events-none z-1" />

        {/* Main Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1
              ref={(el) => (textBlocksRef.current[0] = el)}
              className="text-white font-bold text-5xl md:text-6xl lg:text-[72px] leading-[1.1] tracking-tight"
            >
              Praveen <span className="font-light">Kumar</span>
              <br />
              <span className="font-extrabold">Kannan</span>
            </h1>

            <p
              ref={(el) => (textBlocksRef.current[1] = el)}
              className="text-[#F3E4C9] text-xl md:text-2xl font-medium"
            >
              Software Developer
            </p>

            <p
              ref={(el) => (textBlocksRef.current[2] = el)}
              className="text-gray-300 max-w-lg text-base leading-relaxed"
            >
              Crafting high-performance web & mobile experiences with React, React Native, and modern full-stack technologies.
            </p>

            <div
              ref={(el) => (textBlocksRef.current[3] = el)}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <button
                onClick={scrollToProjects}
                className="group px-8 py-3 bg-[#F3E4C9] text-black font-semibold rounded-full text-sm flex items-center gap-2 hover:bg-[#F3E4C9]/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                VIEW PROJECTS <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={scrollToContact}
                className="group px-8 py-3 bg-transparent border border-white/40 text-white rounded-full text-sm flex items-center gap-2 hover:border-white/80 hover:bg-white/10 transition-all duration-300"
              >
                CONTACT ME <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]"
            >
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full bg-linear-to-tr from-[#F3E4C9]/30 to-transparent blur-2xl animate-pulse"></div>

              {/* Image container */}
              <div className="relative w-full h-full rounded-full  overflow-hidden border-4 border-[#F3E4C9]/30 shadow-2xl transform transition-all duration-500 hover:scale-105">
                <Image
                  src="/images/praveen.jpeg"
                  alt="Praveen Kumar Kannan"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 18rem, 25rem"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Cue */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-[80px] h-[80px] border border-white/20 rounded-full flex items-center justify-center cursor-pointer"
          onClick={scrollToProjects}
        >
          <div className="w-12 h-12 bg-[#F3E4C9] rounded-full flex items-center justify-center shadow-lg">
            <ArrowDown className="text-black" size={20} />
          </div>
        </motion.div>
      </section>
    </div>
  );
}