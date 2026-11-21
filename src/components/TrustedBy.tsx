"use client";

import { motion } from "framer-motion";

export default function TrustedBy() {
  const domains = [
    { name: "Financial Ledger Systems", spec: "12,000+ tx/sec" },
    { name: "Clinical Data Pipelines", spec: "HIPAA Compliant" },
    { name: "Autonomous AI RAG Engines", spec: "Private VPC Inferences" },
    { name: "Headless Global Commerce", spec: "Edge Distributed" },
    { name: "Industrial IoT Streaming", spec: "40M+ Daily Pings" },
    { name: "Zero-Trust Service Meshes", spec: "SOC2 Type II" },
  ];

  return (
    <section className="py-8 sm:py-10 bg-slate-50/60 border-b border-slate-100 select-none overflow-hidden">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-wider text-slate-400 shrink-0 font-mono"
          >
            Engineered Domains
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 w-full">
            {domains.map((d, index) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="flex flex-col group cursor-default"
              >
                <span className="text-xs sm:text-sm font-medium text-slate-900 truncate group-hover:text-teal-700 transition-colors">
                  {d.name}
                </span>
                <span className="text-[11px] font-mono text-slate-400 mt-0.5 group-hover:text-teal-600 transition-colors">
                  {d.spec}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}