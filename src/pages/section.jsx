"use client";

import { Code, Monitor } from "lucide-react";
import { motion } from "framer-motion";




export default function Section2() {
  const services = [
    {
      title: "Design Web",
      description: "Création de designs modernes, responsives et esthétiques.",
      projects: "20+ projets",
      icon: <Monitor className="text-cyan-400 w-8 h-8" />,
    },
    {
      title: "Développement Front-End",
      description:
        "Interfaces interactives et performantes avec React, Next.js et Tailwind CSS.",
      projects: "15+ projets",
      icon: <Code className="text-green-400 w-8 h-8" />,
    },
    {
      title: "SEO & Performance",
      description:
        "Optimisation SEO et performance web pour un impact maximum.",
      projects: "10+ projets",
      icon: <Code className="text-purple-400 w-8 h-8" />,
    },
  ];

  return (
    <section className="min-h-screen bg-slate-900 text-white py-20 px-6 md:px-12 lg:px-20 xl:px-40">
      {/* Titre de section */}
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold">
          Mes Services
        </h2>
        <p className="text-gray-300 mt-3">
          Des solutions complètes pour vos projets web, du design au code.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex items-center gap-4 mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2">
              {service.title}
            </h3>
            <p className="text-gray-300 mb-4">
              {service.description}
            </p>
            <span className="text-cyan-400 font-semibold">{service.projects}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
