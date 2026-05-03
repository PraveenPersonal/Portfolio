"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(headerRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      })
      .from(
        infoRef.current,
        {
          opacity: 0,
          x: -50,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .from(
        formRef.current,
        {
          opacity: 0,
          x: 50,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.8"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      alert("Message sent successfully!");
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-gray-900" size={24} />,
      title: "Email",
      details: "praveenkannan@example.com",
      link: "mailto:praveenkannan@example.com",
    },
    {
      icon: <Phone className="text-gray-900" size={24} />,
      title: "Phone",
      details: "+91 9876543210",
      link: "tel:+919876543210",
    },
    {
      icon: <MapPin className="text-gray-900" size={24} />,
      title: "Location",
      details: "Chennai, Tamil Nadu, India",
      link: null,
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full bg-[#F3E4C9] min-h-screen py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-black/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-black/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-gray-900 text-sm font-medium">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
            Let's Work <span className="font-light text-gray-600">Together</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg pt-2">
            Have a project in mind or looking to collaborate? Feel free to reach out. I'm currently open for new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/40 border border-black/5 p-8 rounded-3xl backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center shrink-0 border border-black/5">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm mb-1">{info.title}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-900 text-lg hover:text-black transition-colors"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-gray-900 text-lg">{info.details}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links Placeholder */}
              <div className="mt-12 pt-8 border-t border-black/5">
                <p className="text-gray-500 text-sm mb-4">Follow Me</p>
                <div className="flex gap-4">
                  {["GitHub", "LinkedIn", "Twitter"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="px-4 py-2 bg-black/5 border border-black/10 rounded-full text-gray-900 text-sm hover:bg-gray-900 hover:text-white transition-all duration-300"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef}>
            <form onSubmit={handleSubmit} className="bg-white/40 border border-black/5 p-8 rounded-3xl backdrop-blur-sm space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/50 border border-black/10 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/10 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/50 border border-black/10 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/10 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/50 border border-black/10 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/10 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-white/50 border border-black/10 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/10 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group px-8 py-4 bg-[#F3E4C9] text-black font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-[#F3E4C9]/90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </span>
                ) : (
                  <>
                    SEND MESSAGE <Send size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}