import { Metadata } from "next";
import { notFound } from "next/navigation";
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
  ArrowLeft,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamic = "force-static";

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | SERENIQ Services`,
    description: service.shortDesc,
  };
}

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-teal-700" />,
  Cloud: <Cloud className="w-5 h-5 text-teal-700" />,
  Brain: <Brain className="w-5 h-5 text-teal-700" />,
  Database: <Database className="w-5 h-5 text-teal-700" />,
  Smartphone: <Smartphone className="w-5 h-5 text-teal-700" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-teal-700" />,
};

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white border-b border-slate-100">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-500 hover:text-teal-700 transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Services</span>
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center">
                {iconMap[service.iconName]}
              </div>
              <span className="text-[11px] font-mono text-teal-700">
                {service.badge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 font-sans leading-tight">
              {service.title}
            </h1>
            <p className="text-slate-600 mt-4 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              {service.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 sm:py-20 border-b border-slate-100">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Left Column */}
            <div className="lg:col-span-8 flex flex-col gap-10 sm:gap-12">
              {/* Overview */}
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-950 mb-3 font-sans">
                  Architectural Overview
                </h2>
                <div className="flex flex-col gap-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.overview.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Capabilities */}
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-950 mb-5 font-sans">
                  Core Capabilities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {service.capabilities.map((cap) => (
                    <div
                      key={cap.name}
                      className="p-5 rounded-xl border border-slate-200/80 bg-white hover:border-teal-400 transition-colors flex flex-col gap-1.5"
                    >
                      <h3 className="text-sm font-semibold text-slate-950">
                        {cap.name}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-950 mb-5 font-sans">
                  Production Deliverables
                </h2>
                <div className="p-5 sm:p-6 rounded-xl border border-teal-100 bg-teal-50/40">
                  <ul className="flex flex-col gap-3">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-950 mb-5 font-sans">
                  Engineering Lifecycle
                </h2>
                <div className="flex flex-col gap-3">
                  {service.process.map((stage) => (
                    <div
                      key={stage.phase}
                      className="p-5 rounded-xl border border-slate-200/80 bg-white flex flex-col sm:flex-row gap-3 items-start"
                    >
                      <span className="w-7 h-7 rounded-md bg-teal-50 text-teal-800 border border-teal-100 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                        {stage.phase}
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-slate-950 mb-0.5">
                          {stage.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {stage.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-950 mb-5 font-sans">
                  Frequently Asked Questions
                </h2>
                <div className="flex flex-col gap-3">
                  {service.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl border border-slate-200/80 bg-white flex flex-col gap-1.5"
                    >
                      <h3 className="text-sm font-semibold text-slate-950 flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-teal-600 shrink-0" />
                        <span>{faq.question}</span>
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed pl-6">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar - Sticky only on Desktop (lg:) */}
            <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-24">
              <div className="p-6 rounded-xl border border-slate-200/80 bg-white flex flex-col gap-3 shadow-2xs">
                <h3 className="text-xs font-mono uppercase text-teal-700">
                  Primary Tech Stack
                </h3>
                <div className="flex flex-wrap gap-1.5 font-mono">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded text-xs bg-slate-100 text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl bg-slate-950 text-white flex flex-col gap-3 shadow-sm">
                <span className="text-[10px] font-mono uppercase text-teal-400">
                  Advisory
                </span>
                <h3 className="text-base font-semibold font-sans">
                  Ready to Build or Scale?
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Our technical leads will evaluate your existing architecture and outline a clear implementation roadmap.
                </p>
                <Link
                  href="/contact"
                  className="w-full min-h-[44px] inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-teal-700 hover:bg-teal-600 text-white text-xs sm:text-sm font-medium transition-colors"
                >
                  <span>Schedule Review</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}