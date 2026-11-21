"use client";

import { useState } from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { ArrowRight, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Software", "Cloud", "AI & ML", "Data Systems"] as const;

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techUsed.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="py-14 sm:py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 block mb-3 font-mono">
              Case Studies & Portfolio
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-950 font-sans leading-tight">
              Engineered Systems in Production
            </h1>
            <p className="text-slate-600 mt-4 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              Explore in-depth architectural case studies detailing how we resolve high-concurrency bottlenecks, secure patient telemetry, and deploy autonomous AI engines.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar with Sliding Tab Pill */}
      <section className="py-4 sm:py-5 border-b border-slate-100 bg-white sticky top-[56px] z-20 backdrop-blur-md bg-white/95">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Tabs with Animated Tab Indicator */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative min-h-[36px] px-4 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                    isSelected
                      ? "text-white font-semibold"
                      : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
                  }`}
                >
                  <span className="relative z-10">{cat}</span>
                  {isSelected && (
                    <motion.span
                      layoutId="active-project-category-tab"
                      className="absolute inset-0 bg-teal-700 rounded-lg -z-0 shadow-2xs"
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech or keyword..."
              className="w-full pl-8 pr-3 py-2 rounded-lg border border-slate-200 text-base sm:text-xs focus:outline-none focus:border-teal-600 transition-colors text-slate-900 placeholder-slate-400"
            />
          </div>
        </div>
      </section>

      {/* Projects Grid with Smooth Tab Reflow Animation */}
      <section className="py-14 sm:py-16 border-b border-slate-100">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <p className="text-xs sm:text-sm text-slate-500">No project case studies match your search criteria.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-3 text-xs sm:text-sm font-medium text-teal-700 hover:underline"
              >
                Reset filters
              </button>
            </motion.div>
          ) : (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.96, y: 14 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: -14 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    className="p-6 sm:p-7 rounded-xl border border-slate-200/80 bg-white hover:border-teal-400 hover:shadow-xs transition-colors flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-mono text-teal-700 uppercase tracking-wide px-2 py-0.5 rounded bg-teal-50 border border-teal-100">
                          {project.category}
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono">
                          {project.timeline}
                        </span>
                      </div>

                      <h2 className="text-base sm:text-lg font-semibold text-slate-950 mb-1 leading-snug group-hover:text-teal-800 transition-colors">
                        {project.title}
                      </h2>

                      <span className="text-xs text-slate-500 block mb-4">
                        Client Domain: {project.clientType}
                      </span>

                      <p className="text-xs text-slate-600 leading-relaxed mb-6">
                        {project.summary}
                      </p>

                      {/* Metrics Strip */}
                      <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-teal-50/50 border border-teal-100 mb-6 font-mono">
                        {project.metrics.slice(0, 2).map((m) => (
                          <div key={m.label} className="flex flex-col">
                            <span className="text-lg sm:text-xl font-bold text-slate-950">
                              {m.value}
                            </span>
                            <span className="text-[10px] uppercase text-teal-700">
                              {m.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-1 mb-6">
                        {project.techUsed.slice(0, 5).map((tech) => (
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
                      <span>Read Architectural Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 bg-slate-950 text-white">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 block mb-2 font-mono">
            Custom Engineering
          </span>
          <h2 className="text-2.5xl sm:text-3xl font-bold tracking-tight text-white mb-3">
            Require a Similar High-Throughput Architecture?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
            Consult with our engineering team to inspect your current tech stack, review performance bottlenecks, and design a scalable blueprint.
          </p>
          <Link
            href="/contact"
            className="min-h-[44px] inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-teal-700 hover:bg-teal-600 text-white text-xs sm:text-sm font-medium transition-colors"
          >
            <span>Consult With An Architect</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}