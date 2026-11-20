import { Metadata } from "next";
import Link from "next/link";
import { servicesData } from "@/data/services";
import {
  Code2,
  Cloud,
  Brain,
  Database,
  Smartphone,
  ShieldCheck,
  ArrowRight,
  Server,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Services | Bespoke Software & Cloud Architectures",
  description:
    "Explore SERENIQ's full spectrum of enterprise software engineering, distributed systems, cloud orchestration, AI integrations, and data engineering capabilities.",
};

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-4 h-4 text-teal-700" />,
  Cloud: <Cloud className="w-4 h-4 text-teal-700" />,
  Brain: <Brain className="w-4 h-4 text-teal-700" />,
  Database: <Database className="w-4 h-4 text-teal-700" />,
  Smartphone: <Smartphone className="w-4 h-4 text-teal-700" />,
  ShieldCheck: <ShieldCheck className="w-4 h-4 text-teal-700" />,
};

const techMatrices = [
  {
    category: "Languages & Frameworks",
    icon: <Code2 className="w-4 h-4 text-teal-700" />,
    items: ["TypeScript / React / Next.js", "Python / FastAPI", "Go (Golang)", "Rust", "Java / Spring Boot"],
  },
  {
    category: "AI & Machine Learning",
    icon: <Brain className="w-4 h-4 text-teal-700" />,
    items: ["PyTorch / Transformers", "Private LLM Inferences (vLLM)", "Vector DBs (pgvector, Pinecone)", "LangChain / RAG Pipelines", "Multimodal OCR"],
  },
  {
    category: "Cloud & DevOps",
    icon: <Server className="w-4 h-4 text-teal-700" />,
    items: ["AWS / Google Cloud / Azure", "Kubernetes (EKS / GKE)", "Terraform & OpenTofu", "CI/CD (GitHub Actions, ArgoCD)", "Prometheus & Grafana"],
  },
  {
    category: "Data & Storage",
    icon: <Database className="w-4 h-4 text-teal-700" />,
    items: ["PostgreSQL 16+", "ClickHouse Columnar OLAP", "Snowflake Warehousing", "Apache Kafka Event Streaming", "Redis Caching"],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="py-14 sm:py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 block mb-3 font-mono">
              Capabilities & Offerings
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-950 font-sans leading-tight">
              Enterprise Software Engineering Services
            </h1>
            <p className="text-slate-600 mt-4 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              We deliver custom software solutions, scalable cloud infrastructure, and intelligent automation systems tailored for mission-critical reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 border-b border-slate-100">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="p-6 sm:p-7 rounded-xl border border-slate-200/80 bg-white hover:border-teal-400 hover:shadow-xs transition-all flex flex-col justify-between group"
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

                  <h2 className="text-base font-semibold text-slate-950 mb-2 group-hover:text-teal-800 transition-colors">
                    {service.title}
                  </h2>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  <div className="border-t border-slate-100 pt-4 mb-6">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block mb-2 font-mono">
                      Deliverables
                    </span>
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
                  <span>Explore Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Matrix Section */}
      <section className="py-16 sm:py-20 bg-slate-50/50 border-b border-slate-100">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 block mb-2 font-mono">
              Technology Stack
            </span>
            <h2 className="text-2.5xl sm:text-3xl lg:text-4xl font-bold font-sans tracking-tight text-slate-950">
              Modern, Battle-Tested Tooling
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-3 font-normal">
              Our engineering stack is chosen for maximum durability, type-safety, and horizontal scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {techMatrices.map((matrix) => (
              <div key={matrix.category} className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200/80 hover:border-teal-400 transition-colors">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-md bg-teal-50 border border-teal-100 flex items-center justify-center">
                    {matrix.icon}
                  </div>
                  <h3 className="text-xs font-semibold text-slate-950">{matrix.category}</h3>
                </div>
                <ul className="flex flex-col gap-2 text-xs text-slate-600 font-mono">
                  {matrix.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-teal-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/technologies"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors"
            >
              <span>View Comprehensive Technology Matrix</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 bg-slate-950 text-white">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 block mb-2 font-mono">
            Engagement Readiness
          </span>
          <h2 className="text-2.5xl sm:text-3xl font-bold tracking-tight text-white mb-3">
            Have a Specific Architectural Challenge?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
            Schedule a technical discovery session directly with one of our principal architects to review your technical requirements.
          </p>
          <Link
            href="/contact"
            className="min-h-[44px] inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-teal-700 hover:bg-teal-600 text-white text-xs sm:text-sm font-medium transition-colors"
          >
            <span>Request Technical Discovery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}