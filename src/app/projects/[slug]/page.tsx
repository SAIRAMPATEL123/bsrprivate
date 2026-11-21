import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamic = "force-static";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white border-b border-slate-100">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-500 hover:text-teal-700 transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Case Studies</span>
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4 text-xs font-mono text-slate-500">
              <span className="uppercase text-teal-700 font-semibold">{project.category}</span>
              <span>•</span>
              <span>{project.clientType}</span>
              <span>•</span>
              <span>{project.timeline}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 font-sans leading-tight">
              {project.title}
            </h1>
            <p className="text-slate-600 mt-4 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              {project.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="py-8 sm:py-10 border-b border-slate-100 bg-slate-50/50">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {project.metrics.map((m) => (
              <div key={m.label} className="flex flex-col font-mono">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight">
                  {m.value}
                </span>
                <span className="text-xs uppercase text-teal-700 mt-0.5">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Case Content */}
      <section className="py-14 sm:py-20 border-b border-slate-100">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column */}
            <div className="lg:col-span-8 flex flex-col gap-10 sm:gap-12">
              {/* Challenge */}
              <div>
                <span className="text-xs font-mono uppercase text-teal-700 block mb-2">
                  The Problem
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-950 mb-3 font-sans">
                  The Technical Challenge
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <span className="text-xs font-mono uppercase text-teal-700 block mb-2">
                  The Architecture
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-950 mb-3 font-sans">
                  Architectural Solution & Design
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {project.solution}
                </p>
              </div>

              {/* Architecture Highlights */}
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-950 mb-5 font-sans">
                  System Architecture Highlights
                </h2>
                <div className="grid grid-cols-1 gap-3">
                  {project.architectureHighlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl border border-slate-200/80 bg-white flex items-start gap-3.5 hover:border-teal-400 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-md bg-teal-50 border border-teal-100 flex items-center justify-center font-mono text-xs font-bold text-teal-800 shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-950 mb-5 font-sans">
                  Verified Production Outcomes
                </h2>
                <div className="p-5 sm:p-6 rounded-xl border border-teal-100 bg-teal-50/40">
                  <ul className="flex flex-col gap-3">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Sticky on Desktop only */}
            <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-24">
              <div className="p-6 rounded-xl border border-slate-200/80 bg-white flex flex-col gap-3 shadow-2xs">
                <h3 className="text-xs font-mono uppercase text-teal-700">
                  Technologies Deployed
                </h3>
                <div className="flex flex-wrap gap-1.5 font-mono">
                  {project.techUsed.map((tech) => (
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
                  Solve Similar Bottlenecks
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Our systems engineers can evaluate your data throughput, concurrency locks, and latency limits.
                </p>
                <Link
                  href="/contact"
                  className="w-full min-h-[44px] inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-teal-700 hover:bg-teal-600 text-white text-xs sm:text-sm font-medium transition-colors"
                >
                  <span>Request Engineering Review</span>
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