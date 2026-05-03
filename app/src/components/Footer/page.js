"use client";

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

function SocialIcon({ icon }) {
  return (
    <div className="w-10 h-10 bg-white/5 text-white rounded-full flex items-center justify-center hover:bg-[#F3E4C9] hover:text-black transition-all duration-300 cursor-pointer shadow-lg">
      {icon}
    </div>
  );
}

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-black text-gray-300 pt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
        {/* Brand */}
        <div className="space-y-6 md:col-span-1">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#F3E4C9] rounded-full flex items-center justify-center text-black font-bold text-xl shadow-lg">
              PK
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Praveen <span className="font-light">Kumar</span>
            </h2>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Crafting high-performance web & mobile experiences with modern technologies. Let's build something amazing together.
          </p>

          <div className="flex gap-4 pt-2">
            <SocialIcon icon={<FaFacebookF size={18} />} />
            <SocialIcon icon={<FaInstagram size={18} />} />
            <SocialIcon icon={<FaTwitter size={18} />} />
            <SocialIcon icon={<FaYoutube size={18} />} />
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:pl-8">
          <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
          <ul className="space-y-4">
            {[
              { name: "Home", id: "home" },
              { name: "About", id: "about" },
              { name: "Projects", id: "projects" },
              { name: "Skills", id: "skills-experience" },
            ].map((item) => (
              <li
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="group flex items-center cursor-pointer w-fit"
              >
                <span className="w-0 h-px bg-[#F3E4C9] mr-0 transition-all duration-300 group-hover:w-4 group-hover:mr-2"></span>
                <span className="text-gray-400 group-hover:text-[#F3E4C9] transition-colors duration-300">
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">My Expertise</h3>
          <ul className="space-y-4">
            {[
              "Web Development",
              "Mobile App Dev",
              "UI/UX Design",
              "Full Stack Solutions",
            ].map((service) => (
              <li
                key={service}
                className="group flex items-center cursor-pointer w-fit"
              >
                <span className="w-0 h-px bg-[#F3E4C9] mr-0 transition-all duration-300 group-hover:w-4 group-hover:mr-2"></span>
                <span className="text-gray-400 group-hover:text-[#F3E4C9] transition-colors duration-300">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">Contact Info</h3>
          <ul className="space-y-5 text-sm">
            <li className="flex gap-4 items-start group cursor-pointer w-fit">
              <div className="mt-1 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#F3E4C9] group-hover:text-black transition-all duration-300 shrink-0">
                <MdPhone className="text-[#F3E4C9] group-hover:text-black text-lg transition-colors duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 text-xs uppercase tracking-wider mb-1">Phone</span>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">+91 8489242063</span>
              </div>
            </li>
            <li className="flex gap-4 items-start group cursor-pointer w-fit">
              <div className="mt-1 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#F3E4C9] group-hover:text-black transition-all duration-300 shrink-0">
                <MdEmail className="text-[#F3E4C9] group-hover:text-black text-lg transition-colors duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 text-xs uppercase tracking-wider mb-1">Email</span>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">praveenkumar.k.dev@gmail.com</span>
              </div>
            </li>
            <li className="flex gap-4 items-start group cursor-pointer w-fit">
              <div className="mt-1 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#F3E4C9] group-hover:text-black transition-all duration-300 shrink-0">
                <MdLocationOn className="text-[#F3E4C9] group-hover:text-black text-lg transition-colors duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 text-xs uppercase tracking-wider mb-1">Location</span>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Coimbatore, Tamil Nadu</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 mt-16 w-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
        <p>© 2025 Praveen Kumar Kannan. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="hover:text-[#F3E4C9] cursor-pointer transition-colors duration-300">
            Privacy Policy
          </span>
          <span className="hover:text-[#F3E4C9] cursor-pointer transition-colors duration-300">
            Terms of Service
          </span>
        </div>
      </div>
    </footer>
  );
}