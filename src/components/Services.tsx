"use client";

import Link from "next/link";
import { servicesData } from "@/data/services";
import { motion } from "framer-motion";
import {
  Code2,
  Cloud,
  Brain,
  Database,
  Smartphone,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-4 h-4 text-teal-700" />,
  Cloud: <Cloud className="w-4 h-4 text-teal-700" />,
  Brain: <Brain className="w-4 h-4 text-teal-700" />,
  Database: <Database className="w-4 h-4 text-teal-700" />,
  Smartphone: <Smartphone className="w-4 h-4 text-teal-700" />,
  ShieldCheck: <ShieldCheck className="w-4 h-4 text-teal-700" />,
};

export default function Services() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white border-b border-slate-100 overflow-hidden" id="services">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 block mb-2 font-mono">
              Capabilities
            </span>
            <h2 className="text-2.5xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950 font-sans">
              Engineering Disciplines
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
              We design and build bespoke software tailored strictly to your operational goals, eliminating off-the-shelf software constraints.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors shrink-0 group"
          >
            <span>All Services & Blueprints</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Services Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 sm:p-7 rounded-xl border border-slate-200/80 bg-white hover:border-teal-400 hover:shadow-sm transition-colors flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    {iconMap[service.iconName]}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-slate-950 mb-2 group-hover:text-teal-800 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                <div className="border-t border-slate-100 pt-4 mb-6">
                  <ul className="flex flex-col gap-2 text-xs text-slate-600">
                    {service.capabilities.slice(0, 3).map((cap) => (
                      <li key={cap.name} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-teal-500 shrink-0" />
                        <span className="truncate">{cap.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-medium text-slate-950 group-hover:text-teal-700 transition-colors"
              >
                <span>Read Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}