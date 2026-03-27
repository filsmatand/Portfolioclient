"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail,  } from "lucide-react";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const Links = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#portfolio" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const social = [
    { name: "Linkedin", href: "https://linkedin.com", icon: <Linkedin size={18} /> },
    { name: "Github", href: "https://github.com", icon: <Github size={18} /> },
    { name: "Email", href: "mailto:contact@scofmatanda.com", icon: <Mail size={18} /> },
  ];

  // effet scroll navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-cyan-400/10 shadow-[0_0_25px_rgba(34,211,238,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold tracking-wide">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
            Wonder
          </span>
          
        </h1>

        {/* Menu desktop */}
        <ul className="hidden md:flex items-center gap-10">
          {Links.map((link, i) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <a
                href={link.href}
                className="relative text-gray-300 font-medium hover:text-white transition"
              >
                {link.name}

                {/* underline animation */}
                <span className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-green-400 transition-all duration-300 hover:w-full"></span>
              </a>
            </motion.li>
          ))}

          {/* Réseaux */}
          <div className="flex items-center gap-5 ml-6 border-l border-white/10 pl-6">
            {social.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                className="text-gray-300 hover:text-cyan-400 transition transform hover:scale-110"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </ul>

        {/* Bouton menu mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!isOpen)}
            className="text-gray-200 hover:text-cyan-400 transition"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black/90 backdrop-blur-xl border-t border-cyan-400/10"
        >
          <ul className="flex flex-col items-center gap-8 py-10">
            {Links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-gray-200 hover:text-cyan-400 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}

            {/* réseaux mobile */}
            <div className="flex gap-6 pt-4">
              {social.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="text-gray-200 hover:text-cyan-400 transition transform hover:scale-110"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}