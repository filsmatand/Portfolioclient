"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12 px-6 md:px-12 lg:px-20 xl:px-40">
      {/* Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo / Nom */}
        <motion.div
          className="text-white text-2xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Wonder
        </motion.div>

        {/* Liens */}
        <motion.ul
          className="flex gap-6 text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <li>
            <a href="#service" className="hover:text-cyan-400 transition">
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-cyan-400 transition">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </li>
        </motion.ul>

        {/* Réseaux sociaux */}
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <Github size={24} />
          </a>
          <a
            href="mailto:scofmatanda@gmail.com"
            className="hover:text-cyan-400 transition"
          >
            <Mail size={24} />
          </a>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        className="mt-10 text-center text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        © {new Date().getFullYear()} Wonder Pro. Tous droits réservés.
      </motion.div>
    </footer>
  );
}
