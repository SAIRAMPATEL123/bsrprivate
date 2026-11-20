"use client";

import {
  ShieldCheck,
  Zap,
  Code2,
  Server,
  Layers,
  Clock,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "Strict Type Safety",
    description: "Every module enforces end-to-end typing in TypeScript, Go, or Python. Runtime undefined errors and unexpected data shapes are caught at compile time.",
    icon: <Code2 className="w-4 h-4 text-teal-700" />,
  },
  {
    title: "Zero-Downtime Releases",
    description: "Multi-region Kubernetes clusters and automated canary deployments ensure your end-users never experience maintenance screens during updates.",
    icon: <Server className="w-4 h-4 text-teal-700" />,
  },
  {
    title: "Defense-in-Depth Security",
    description: "Automated vulnerability scanning, SAST/DAST in CI/CD, mutual TLS, and KMS encrypted data layers that pass SOC2 Type II and HIPAA audits.",
    icon: <ShieldCheck className="w-4 h-4 text-teal-700" />,
  },
  {
    title: "100% IP Ownership",
    description: "All custom source code, documentation, and architecture blueprints are transferred exclusively to your organization upon milestone sign-offs.",
    icon: <Zap className="w-4 h-4 text-teal-700" />,
  },
  {
    title: "Scalable Domain Architecture",
    description: "We apply domain-driven design principles to ensure services remain loosely coupled, allowing independent squad ownership and easy refactoring.",
    icon: <Layers className="w-4 h-4 text-teal-700" />,
  },
  {
    title: "Tight SLA Commitments",
    description: "Guaranteed incident response times, direct communication in shared Slack/Teams channels, and transparent sprint delivery metrics.",
    icon: <Clock className="w-4 h-4 text-teal-700" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white border-b border-slate-100 overflow-hidden">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Heading & Mission */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 font-mono">
              Methodology
            </span>
            <h2 className="text-2.5xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950 font-sans leading-tight">
              Software Engineered for Long-Term Durability
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
              Most software debt is created during early architectural shortcuts. We eliminate technical debt before it starts by pairing strict typing with declarative infrastructure and continuous automated verification.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
              Our teams consist exclusively of senior systems engineers, data architects, and machine learning practitioners who have led production platforms at scale.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors group"
              >
                <span>Read About Our Engineering Standards</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Pillars Grid with Staggered Reveals */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-5 sm:p-6 rounded-xl border border-slate-200/80 bg-white hover:border-teal-400 hover:shadow-2xs transition-colors flex flex-col gap-2 group"
              >
                <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="text-sm font-semibold text-slate-950 group-hover:text-teal-900 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}