"use client";

import { motion } from "framer-motion";
import img from "../images/prod-1.png";





export default function Hero() {
  return (
    <>
      {/* SECTION HERO */}
      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-10 lg:px-16 xl:px-20 bg-black text-white py-14">

        {/* TEXTE */}
        <motion.div
          className="flex-1 max-w-lg lg:max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold">
            Les idées inspirent. Le design les rend
          </h1>

          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-400">
            inoubliables.
          </h2>

          <p className="mt-4 text-gray-300 leading-relaxed">
            Salut, je suis <span className="text-cyan-400 font-semibold">Wonder</span>,
            designer graphique spécialisé dans la création d’identités visuelles modernes,
            épurées et puissantes. Je transforme les idées en designs qui communiquent,
            attirent l’attention et laissent une impression durable.
          </p>

          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-cyan-500 to-green-400 text-black px-4 py-2 mt-5 rounded-lg font-semibold text-sm shadow-md hover:scale-105 transition-transform"
          >
            Contactez moi
          </a>

          {/* BADGES */}
          <div className="mt-5 flex flex-wrap gap-3 items-center">
            {[
              
              { name: "Meta", src: "/logos/meta.png" },
              { name: "LinkedIn", src: "/logos/linkedin.png" },
            ].map((l) => (
              <div
                key={l.name}
                className="flex items-center gap-2 px-3 py-1 bg-slate-800/60 rounded-lg border border-cyan-400/10 backdrop-blur-sm"
              >
                {/* <Image src={l.src} alt={l.name} width={20} height={20} /> */}
                <span className="text-sm font-medium text-gray-200">{l.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className="relative w-[140%] lg:w-[55%] flex items-center justify-center mt-5 lg:mt-0"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute w-72 h-72 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] bg-cyan-500/25 rounded-full blur-3xl animate-pulse" />

          <img
            src={img}
            alt="wonder"

            className="relative z-20 shadow-2xl rounded-3xl  w-[100%] sm:w-[75%] md:w-[70%] lg:w-[650px] xl:w-[750px]"
          />

          {/* PETITES BULLES */}
          <div className="absolute top-16 left-8 w-14 h-14 sm:w-16 sm:h-16 bg-slate-800 rounded-full flex items-center justify-center border border-cyan-400/25 shadow">
            {/* <Image src="/logos/tpe.png" alt="tool" width={26} height={26} /> */}
          </div>

          <div className="absolute bottom-12 left-6 w-14 h-14 sm:w-16 sm:h-16 bg-slate-800 rounded-full flex items-center justify-center border border-green-400/25 shadow">
            {/* <Image src="/logos/adobe.png" alt="tool" width={26} height={26} /> */}
          </div>

          <div className="absolute bottom-14 right-10 w-14 h-14 sm:w-16 sm:h-16 bg-slate-800 rounded-full flex items-center justify-center border border-cyan-400/25 shadow">
            {/* <Image src="/logos/google.png" alt="tool" width={26} height={26} /> */}
          </div>
        </motion.div>
      </section>

      {/* SECTION EXPERTISE */}
      <section className="bg-slate-950 py-20 px-6 md:px-10 lg:px-16 xl:px-20 text-white">
        <h3 className="text-center text-3xl md:text-4xl font-bold mb-12">
          Mes domaines d’expertise 💼
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Développement Web",
              desc: "Création d’interfaces rapides, modernes et performantes avec React, Next.js & Tailwind.",
              color: "from-cyan-400 to-blue-500",
            },
            {
              title: "Design UI/UX",
              desc: "Expériences visuelles élégantes et intuitives qui donnent vie à votre marque.",
              color: "from-green-400 to-lime-400",
            },
            {
              title: "Branding & Identité",
              desc: "Conception d’univers visuels cohérents pour renforcer votre image digitale.",
              color: "from-yellow-400 to-orange-500",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-6 rounded-2xl bg-slate-800/40 border border-cyan-400/10 backdrop-blur-sm hover:scale-105 transition-transform hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${card.color} mb-4`} />
              <h4 className="text-xl font-semibold mb-2">{card.title}</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}