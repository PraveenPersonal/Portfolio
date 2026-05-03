"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Dribbble, Twitter, Github, Instagram } from "lucide-react";

import img1 from "../../src/assets/1.jpg";
import img2 from "../../src/assets/2.jpg";
import img3 from "../../src/assets/3.jpg";
import img4 from "../../src/assets/4.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Team() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(leftRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
      });

      tl.from(
        rightRef.current,
        {
          opacity: 0,
          x: 120,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.7"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const team = [
    { img: img1, name: "Anna Oldman", role: "Art Director" },
    { img: img2, name: "Sophia Carter", role: "Lead Designer" },
    { img: img3, name: "Michael Harris", role: "Brand Strategist" },
    { img: img4, name: "Emily Walker", role: "UI/UX Designer" },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white min-h-screen flex items-center justify-center px-10 py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
        
        {/* LEFT SECTION */}
        <div ref={leftRef} className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black">
            Meet <br /> Our Team
          </h2>

          <p className="text-gray-600 leading-relaxed max-w-md mt-6">
            We are talented individuals who are passionate about bringing ideas to life.
          </p>

          <p className="text-gray-600 leading-relaxed max-w-md mt-4">
            Together, our creative team is committed to delivering impactful work.
          </p>

          <button className="mt-6 bg-[#F5A623] text-black px-6 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-black hover:text-white transition-all">
            Read More{" "}
            <span className="inline-block bg-black text-white w-6 h-6 rounded-full flex items-center justify-center">
              →
            </span>
          </button>
        </div>

        {/* RIGHT SECTION – TEAM GRID */}
        <div ref={rightRef} className="grid grid-cols-2 gap-4">
          {team.map((person, idx) => (
            <div
              key={idx}
              className="relative w-[160px] h-[220px] rounded-lg overflow-hidden group cursor-pointer"
            >
              <Image
                src={person.img}
                width={260}
                height={320}
                className="rounded-lg object-cover w-full h-full"
                alt={person.name}
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 flex flex-col justify-end p-4 group-hover:bg-black/70 transition-all">
                <h3 className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  {person.name}
                </h3>
                <p className="text-gray-300 text-xs mb-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  {person.role}
                </p>
                <div className="flex items-center gap-3 text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <Dribbble size={16} />
                  <Twitter size={16} />
                  <Github size={16} />
                  <Instagram size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
