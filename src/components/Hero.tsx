"use client";

import { motion } from "framer-motion";
import { companyData } from "@/data/company";

export default function Hero() {
  return (
    <section className="relative pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-28 lg:pb-32 bg-white border-b border-slate-100 overflow-hidden">
      {/* Subtle Ambient Background Beam Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-teal-50/70 via-teal-50/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Headline with Staggered Entrance */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="text-3.5xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[74px] font-bold tracking-tight text-slate-950 leading-[1.08] mb-5 sm:mb-6 font-sans"
          >
            Engineering Systems for{" "}
            <span className="text-brand-gradient">
              Critical Scale
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl sm:max-w-3xl"
          >
            {companyData.description}
          </motion.p>
        </div>

        {/* Clean Hairline Metrics Strip with Staggered Viewport Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mt-14 sm:mt-20 pt-10 sm:pt-12 border-t border-slate-100"
        >
          {companyData.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 * i }}
              className="flex flex-col"
            >
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight font-sans">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-teal-700 mt-1">
                {stat.label}
              </span>
              <span className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                {stat.description}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}