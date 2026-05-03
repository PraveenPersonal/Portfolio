"use client";
import React, { useEffect, useState, useRef } from "react";
import HeroSection from "./pages/Herosection/page";
import Discover from "./pages/Aboutus/page";
import Unique from "./pages/UniqueIdea/page";
import Team from "./pages/Team/page";
import SkillsExperience from "./pages/SkillsExperience/page";

export default function Home() {
  const [headerColor, setHeaderColor] = useState("white");
  const canvasRef = useRef(null);

  // Refs for each section
  const heroRef = useRef(null);
  const discoverRef = useRef(null);
  const uniqueRef = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const heroBottom =
        heroRef.current?.offsetTop + heroRef.current?.offsetHeight || 0;
      const discoverBottom =
        discoverRef.current?.offsetTop + discoverRef.current?.offsetHeight || 0;
      const uniqueBottom =
        uniqueRef.current?.offsetTop + uniqueRef.current?.offsetHeight || 0;
      const teamTop = teamRef.current?.offsetTop || 0;

      // Change header text color based on background
      if (scrollY < heroBottom) setHeaderColor("white"); // Hero (Black)
      else if (scrollY < discoverBottom) setHeaderColor("black"); // Discover (White)
      else if (scrollY < uniqueBottom) setHeaderColor("white"); // Unique (Black)
      else if (scrollY >= teamTop) setHeaderColor("black"); // Team (White)
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{ opacity: 0.85 }}
      />
      {/* HERO */}
      <div ref={heroRef}>
        <HeroSection headerColor={headerColor} />
      </div>

      {/* ---- WAVE: Hero → Discover ---- */}
      <div className="bg-black">
        <svg
          className="w-full h-[140px] "
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#F3E4C9"
            d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,144C1120,139,1280,181,1360,202.7L1440,224V320H0Z"
          ></path>
        </svg>
      </div>

      {/* DISCOVER */}
      <div ref={discoverRef}>
        <Discover />
      </div>

      {/* ---- WAVE: Discover → Unique ---- */}
      <div className="bg-[#F3E4C9]">
        <svg
          className="w-full h-[140px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#000000"
            d="M0,160L80,144C160,128,320,96,480,112C640,128,800,192,960,197.3C1120,203,1280,149,1360,122.7L1440,96V320H0Z"
          ></path>
        </svg>
      </div>

      {/* UNIQUE */}
      <div ref={uniqueRef}>
        <Unique />
      </div>

      {/* ---- WAVE: Unique → Team ---- */}
      <div className="bg-black">
        <svg
          className="w-full h-[140px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#F3E4C9"
            d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,144C1120,139,1280,181,1360,202.7L1440,224V320H0Z"
          ></path>
        </svg>
      </div>

      {/* TEAM */}
      <div ref={teamRef}>
        <SkillsExperience />
      </div>
    </div>
  );
}
