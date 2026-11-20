"use client";

import { useState } from "react";
import Link from "next/link";
import { techStackData } from "@/data/technologies";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TechnologiesPage() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", ...techStackData.map((c) => c.name)];

  const displayedCategories =
    activeTab === "All"
      ? techStackData
      : techStackData.filter((c) => c.name === activeTab);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="py-14 sm:py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 block mb-3 font-mono">
              Technical Standards
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-950 font-sans leading-tight">
              Curated, Battle-Tested Engineering Tools
            </h1>
            <p className="text-slate-600 mt-4 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              We select languages, runtimes, and distributed infrastructure based on strict operational criteria: compile-time type safety, memory efficiency, and proven high-concurrency resilience.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs with Sliding Tab Indicator */}
      <section className="py-4 sm:py-5 border-b border-slate-100 bg-white sticky top-[56px] z-20 backdrop-blur-md bg-white/95">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = activeTab === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveTab(cat)}
                  className={`relative min-h-[36px] px-4 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                    isSelected
                      ? "text-white font-semibold"
                      : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
                  }`}
                >
                  <span className="relative z-10">{cat}</span>
                  {isSelected && (
                    <motion.span
                      layoutId="active-tech-category-tab"
                      className="absolute inset-0 bg-teal-700 rounded-lg -z-0 shadow-2xs"
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack List with Animated Tab Transition */}
      <section className="py-14 sm:py-16 border-b border-slate-100 min-h-[500px]">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-12 sm:gap-14"
            >
              {displayedCategories.map((category) => (
                <div key={category.name} className="flex flex-col gap-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-100 pb-3">
                    <h2 className="text-lg sm:text-xl font-bold text-slate-950 font-sans">
                      {category.name}
                    </h2>
                    <p className="text-xs text-slate-500 max-w-md sm:text-right">
                      {category.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                    {category.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="p-5 sm:p-6 rounded-xl border border-slate-200/80 bg-white hover:border-teal-400 hover:shadow-xs transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-sm font-semibold text-slate-950">
                              {tech.name}
                            </h3>
                            <span className="text-[10px] font-mono uppercase text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                              {tech.tier}
                            </span>
                          </div>

                          <p className="text-xs text-slate-600 leading-relaxed mb-4">
                            {tech.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-1 pt-3 border-t border-slate-100 font-mono">
                          {tech.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded text-[10px] bg-slate-50 text-slate-600 border border-slate-200/60"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 bg-slate-950 text-white">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 block mb-2 font-mono">
            Tooling & Stacks
          </span>
          <h2 className="text-2.5xl sm:text-3xl font-bold tracking-tight text-white mb-3">
            Need Guidance on Your Stack Migration?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
            Whether you are evaluating a migration to Go microservices, modernizing to Next.js edge caching, or implementing ClickHouse analytics, our architects can assist.
          </p>
          <Link
            href="/contact"
            className="min-h-[44px] inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-teal-700 hover:bg-teal-600 text-white text-xs sm:text-sm font-medium transition-colors"
          >
            <span>Request Technology Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}