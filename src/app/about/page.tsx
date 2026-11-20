import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { companyData } from "@/data/company";
import {
  Code2,
  ShieldCheck,
  Layers,
  ArrowRight,
  CheckCircle2,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Architecture-Led Software Engineering",
  description:
    "Learn about SERENIQ's engineering principles, distributed systems background, and commitment to building zero-compromise software for global organizations.",
};

const standards = [
  {
    title: "100% Type-Safe Architectures",
    desc: "Every line of code authored across frontend and backend services enforces strict TypeScript, Go, or Python static typing to eliminate runtime exceptions.",
    icon: <Code2 className="w-4 h-4 text-teal-700" />,
  },
  {
    title: "Automated Verification Gates",
    desc: "No code reaches staging without automated linters, unit tests, integration benchmarks, and container image security vulnerability scans passing.",
    icon: <ShieldCheck className="w-4 h-4 text-teal-700" />,
  },
  {
    title: "Domain-Driven Design",
    desc: "We align code modules directly with real-world business domains, preventing bloated monoliths and allowing microservices to evolve independently.",
    icon: <Layers className="w-4 h-4 text-teal-700" />,
  },
  {
    title: "Pragmatic Tool Selection",
    desc: "We reject technology for technology's sake. Every database, framework, and messaging queue is chosen based on proven durability and operational simplicity.",
    icon: <Zap className="w-4 h-4 text-teal-700" />,
  },
];

const teamLeadership = [
  {
    name: "Systems & Distributed Systems",
    role: "Core Architecture Practice",
    focus: "Distributed systems design, high-throughput database partitioning, and fault-tolerant cloud backbones across AWS and GCP.",
  },
  {
    name: "Intelligent Systems Lab",
    role: "Machine Learning & RAG",
    focus: "Private enterprise LLM fine-tuning, dense vector embeddings, multimodal OCR, and automated evaluation frameworks.",
  },
  {
    name: "Cloud & Reliability Group",
    role: "DevOps & Infrastructure-as-Code",
    focus: "Multi-region Kubernetes clustering, zero-downtime deployment pipelines, and 24/7 observability monitoring.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-14 sm:py-20 lg:py-28 border-b border-slate-100 bg-white">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 block mb-3 font-mono">
              About SERENIQ
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-950 font-sans leading-tight">
              Software Engineered for Long-Term Scale
            </h1>
            <p className="text-slate-600 mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              {companyData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-10 sm:py-12 border-b border-slate-100 bg-slate-50/50">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {companyData.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight font-sans">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-medium text-teal-700 mt-1">
                  {stat.label}
                </span>
                <span className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  {stat.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Mission & Philosophy */}
      <section className="py-16 sm:py-20 lg:py-28 border-b border-slate-100">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 font-mono">
                Philosophy
              </span>
              <h2 className="text-2.5xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950 font-sans leading-tight">
                Architecture First. Zero Technical Debt.
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Most software problems do not stem from bad coders; they stem from fragmented architectural decisions made without clear foresight. When systems grow without structure, technical debt compounds until releases grind to a halt.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                At SERENIQ, our senior engineers design software architectures that cleanly separate concerns, enforce contract-driven interfaces, and scale horizontally on demand.
              </p>

              <div className="pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors"
                >
                  <span>Explore Engineering Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {companyData.corePillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-5 sm:p-6 rounded-xl border border-slate-200/80 bg-white hover:border-teal-400 hover:shadow-xs transition-all flex flex-col gap-2"
                >
                  <h3 className="text-sm font-semibold text-slate-950">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Standards */}
      <section className="py-16 sm:py-20 lg:py-28 bg-slate-50/50 border-b border-slate-100">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 block mb-2 font-mono">
              Engineering Rigor
            </span>
            <h2 className="text-2.5xl sm:text-3xl lg:text-4xl font-bold font-sans tracking-tight text-slate-950">
              Foundational Standards
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-3 font-normal">
              Every client project, regardless of scope or scale, is governed by these foundational engineering requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {standards.map((std) => (
              <div
                key={std.title}
                className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200/80 hover:border-teal-400 hover:shadow-xs transition-all flex flex-col gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center">
                  {std.icon}
                </div>
                <h3 className="text-sm font-semibold text-slate-950">
                  {std.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {std.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Groups */}
      <section className="py-16 sm:py-20 lg:py-28 border-b border-slate-100">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 block mb-2 font-mono">
              Capabilities
            </span>
            <h2 className="text-2.5xl sm:text-3xl lg:text-4xl font-bold font-sans tracking-tight text-slate-950">
              Specialized Practices
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {teamLeadership.map((group) => (
              <div
                key={group.name}
                className="p-6 sm:p-7 rounded-xl border border-slate-200/80 bg-white flex flex-col justify-between hover:border-teal-400 transition-all"
              >
                <div>
                  <span className="text-[11px] font-mono text-teal-700 block mb-1">
                    {group.role}
                  </span>
                  <h3 className="text-base font-semibold text-slate-950 mb-3">
                    {group.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {group.focus}
                  </p>
                </div>
                <div className="pt-5 border-t border-slate-100 mt-6 flex items-center gap-2 text-xs font-medium text-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                  <span>Senior Specialists Only</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Delivery */}
      <section className="py-16 sm:py-20 bg-slate-950 text-white">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 font-mono">
                Global Operations
              </span>
              <h2 className="text-2.5xl sm:text-3xl lg:text-4xl font-bold font-sans tracking-tight text-white leading-tight">
                Distributed Execution. Uninterrupted Sprint Cadence.
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Headquartered with dedicated engineering hubs, we support seamless daily overlap with your internal product teams.
              </p>
              <ul className="flex flex-col gap-2.5 text-xs text-slate-300 mt-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                  <span>Guaranteed minimum 4 hours daily live sprint collaboration overlap</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                  <span>Asynchronous standups, transparent GitHub PR reviews, and detailed Jira boards</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                  <span>Enterprise IP protection contracts under strict legal governance</span>
                </li>
              </ul>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="min-h-[44px] inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-teal-700 hover:bg-teal-600 text-white text-xs sm:text-sm font-medium transition-colors"
                >
                  <span>Connect With Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-7 rounded-xl bg-slate-900 border border-slate-800">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800 mb-4">
                <div className="relative w-8 h-8 rounded-full overflow-hidden bg-white p-0.5 shadow-sm border border-teal-500/30 shrink-0">
                  <Image src="/logo.png" alt="SERENIQ" width={32} height={32} className="w-full h-full object-contain rounded-full" />
                </div>
                <div>
                  <div className="text-white font-sans font-bold text-sm">SEREN<span className="text-teal-400">IQ</span> Technologies</div>
                  <div className="text-slate-400 font-mono text-[11px]">Corporate Governance & Practice</div>
                </div>
              </div>
              <div className="flex flex-col gap-4 font-mono text-xs">
                <div>
                  <div className="text-slate-400">Registered Office</div>
                  <div className="text-white mt-1 leading-relaxed">{companyData.address.formatted}</div>
                </div>
                <div className="border-t border-slate-800 pt-3 flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-slate-400">Direct Contact:</span>
                  <a href={`mailto:${companyData.email}`} className="text-teal-300 hover:underline">{companyData.email}</a>
                </div>
                <div className="border-t border-slate-800 pt-3 flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-slate-400">Phone:</span>
                  <a href={`tel:${companyData.phone}`} className="text-teal-300 hover:underline">{companyData.phone}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}