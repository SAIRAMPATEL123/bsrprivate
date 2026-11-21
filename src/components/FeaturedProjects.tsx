"use client";

import Link from "next/link";
import { projectsData } from "@/data/projects";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FeaturedProjects() {
  const featured = projectsData.slice(0, 3);

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-slate-50/50 border-b border-slate-100 overflow-hidden" id="projects">
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
              Case Studies
            </span>
            <h2 className="text-2.5xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950 font-sans">
              Production Architecture
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
              Explore how our engineers resolve transaction throughput limits, clinical data fragmentation, and high-concurrency retail loads.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors shrink-0 group"
          >
            <span>All Case Studies ({projectsData.length})</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Case Studies with Staggered Viewport Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 sm:p-7 rounded-xl border border-slate-200/80 bg-white hover:border-teal-400 hover:shadow-sm transition-colors flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-teal-700 uppercase tracking-wide px-2 py-0.5 rounded bg-teal-50 border border-teal-100">
                    {project.category}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {project.timeline}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-slate-950 mb-1 leading-snug group-hover:text-teal-800 transition-colors">
                  {project.title}
                </h3>

                <span className="text-xs text-slate-500 block mb-4">
                  {project.clientType}
                </span>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Metric Box with Teal Accent */}
                <div className="p-3.5 rounded-lg bg-teal-50/50 border border-teal-100 mb-6 group-hover:border-teal-200 transition-colors">
                  <span className="text-xl font-bold text-slate-950 font-sans tracking-tight block">
                    {project.metrics[0].value}
                  </span>
                  <span className="text-[10px] uppercase font-mono text-teal-700">
                    {project.metrics[0].label}
                  </span>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {project.techUsed.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-medium text-slate-950 group-hover:text-teal-700 transition-colors"
              >
                <span>Read Architectural Case</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}