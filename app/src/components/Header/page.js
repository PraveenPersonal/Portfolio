"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/pages/Aboutus" },
    { name: "Service", href: "/pages/Service" },
    { name: "Praveen Kannan", href: "/" },
    { name: "Resume", href: "/pages/Resume" },
    { name: "Project", href: "/pages/Project" },
    { name: "Contact", href: "/pages/Contact" },
  ];

  return (
    <>
      {/* Desktop Floating Navbar */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:flex w-full justify-center">
        <div className="flex items-center gap-20 px-10 py-6 rounded-full 
        bg-[#F3E4C9]/80 backdrop-blur-xl border border-white/20 shadow-lg">

          {/* Nav */}
          <nav className="flex gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return item.href === "/" ? (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition relative ${isActive
                    ? "text-black"
                    : "text-black/70 hover:text-white"
                    }`}
                >
                  {item.name}

                  {/* Active underline */}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white rounded-full" />
                  )}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition relative ${isActive
                    ? "text-black"
                    : "text-black/70 hover:text-white"
                    }`}
                >
                  {item.name}

                  {/* Active underline */}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 flex items-center justify-between z-50 p-4 md:hidden 
      bg-black/40 backdrop-blur-md border-b border-white/10">
        <a href="/" className="text-lg font-semibold text-white">
          P.K.
        </a>
        <button onClick={() => setIsOpen(true)}>
          <Menu size={26} className="text-white" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-lg z-100"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="w-[75%] h-full bg-black/90 p-8 relative"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-white"
              >
                <X size={26} />
              </button>

              <div className="mt-20 flex flex-col gap-6">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      {item.href === "/" ? (
                        <a
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`text-lg ${isActive
                            ? "text-white"
                            : "text-white/70"
                            }`}
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`text-lg ${isActive
                            ? "text-white"
                            : "text-white/70"
                            }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}