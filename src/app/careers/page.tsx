"use client";

import { useState } from "react";
import Image from "next/image";
import { jobOpeningsData, culturePrinciples, benefitsData, JobOpening } from "@/data/careers";
import {
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  X,
  Send,
} from "lucide-react";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    coverNote: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setSelectedJob(null);
        setFormData({
          name: "",
          email: "",
          phone: "",
          linkedin: "",
          github: "",
          coverNote: "",
        });
      }, 2500);
    }, 700);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="py-14 sm:py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 block mb-3 font-mono">
              Careers at SERENIQ
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-950 font-sans leading-tight">
              Build Systems for Critical Infrastructure
            </h1>
            <p className="text-slate-600 mt-4 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              We are a remote-first engineering organization dedicated to technical excellence, zero micromanagement, and craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-14 sm:py-20 border-b border-slate-100" id="open-roles">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 block mb-1 font-mono">
                Openings
              </span>
              <h2 className="text-2.5xl sm:text-3xl font-bold font-sans tracking-tight text-slate-950">
                Engineering Roles
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-2 sm:mt-0 font-mono">
              {jobOpeningsData.length} Roles • Remote
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {jobOpeningsData.map((job) => (
              <div
                key={job.id}
                className="p-6 sm:p-7 rounded-xl border border-slate-200/80 bg-white hover:border-teal-400 hover:shadow-xs transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-xs text-slate-500">
                    <span className="text-teal-700 font-semibold uppercase">{job.department}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {job.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {job.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-slate-950 mb-2 font-sans">
                    {job.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 font-mono">
                    {job.requirements.slice(0, 3).map((req, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded text-[11px] bg-slate-50 text-slate-600 border border-slate-200/60"
                      >
                        {req.split(",")[0]}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedJob(job)}
                  className="min-h-[44px] inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg bg-teal-700 hover:bg-teal-600 text-white text-xs sm:text-sm font-medium transition-colors shrink-0"
                >
                  <span>Apply for Role</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-14 sm:py-20 lg:py-28 bg-slate-50/50 border-b border-slate-100">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-2xl mb-12 sm:mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 block mb-2 font-mono">
              Engineering Culture
            </span>
            <h2 className="text-2.5xl sm:text-3xl font-bold font-sans tracking-tight text-slate-950">
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {culturePrinciples.map((principle) => (
              <div
                key={principle.title}
                className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200/80 hover:border-teal-400 transition-colors flex flex-col gap-2"
              >
                <h3 className="text-sm font-semibold text-slate-950">
                  {principle.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-14 sm:py-20 border-b border-slate-100">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-2xl mb-12 sm:mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 block mb-2 font-mono">
              Perks & Support
            </span>
            <h2 className="text-2.5xl sm:text-3xl font-bold font-sans tracking-tight text-slate-950">
              Support for High Performers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {benefitsData.map((benefit) => (
              <div
                key={benefit.title}
                className="p-5 sm:p-6 rounded-xl border border-slate-200/80 bg-white hover:border-teal-400 transition-colors flex flex-col gap-1.5"
              >
                <h3 className="text-sm font-semibold text-slate-950">
                  {benefit.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-xs">
          <div className="bg-white rounded-xl border border-slate-200 shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-5 sm:p-8 relative">
            <button
              type="button"
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 text-slate-400 hover:text-slate-950 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSuccess ? (
              <form onSubmit={handleApplySubmit} className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white border border-teal-200/80 p-1 shadow-2xs shrink-0 mt-0.5 overflow-hidden">
                    <Image src="/logo.png" alt="SERENIQ" width={36} height={36} className="w-full h-full object-contain rounded-full" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-teal-700 block mb-0.5">
                      Application Form
                    </span>
                    <h3 className="text-lg font-semibold text-slate-950">
                      Apply: {selectedJob.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {selectedJob.department} • {selectedJob.location}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-slate-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Developer"
                      className="px-3.5 py-2.5 rounded-lg border border-slate-200 text-base sm:text-xs text-slate-900 focus:outline-none focus:border-teal-600 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-slate-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="px-3.5 py-2.5 rounded-lg border border-slate-200 text-base sm:text-xs text-slate-900 focus:outline-none focus:border-teal-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-slate-700">
                      GitHub URL
                    </label>
                    <input
                      type="url"
                      value={formData.github}
                      onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                      placeholder="https://github.com/..."
                      className="px-3.5 py-2.5 rounded-lg border border-slate-200 text-base sm:text-xs text-slate-900 focus:outline-none focus:border-teal-600 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-slate-700">
                      LinkedIn URL
                    </label>
                    <input
                      type="url"
                      value={formData.linkedin}
                      onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                      placeholder="https://linkedin.com/in/..."
                      className="px-3.5 py-2.5 rounded-lg border border-slate-200 text-base sm:text-xs text-slate-900 focus:outline-none focus:border-teal-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-slate-700">
                    Portfolio or Projects
                  </label>
                  <textarea
                    rows={4}
                    value={formData.coverNote}
                    onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                    placeholder="Tell us about complex systems or projects you have built..."
                    className="px-3.5 py-2.5 rounded-lg border border-slate-200 text-base sm:text-xs text-slate-900 focus:outline-none focus:border-teal-600 resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-teal-700 hover:bg-teal-600 text-white text-xs sm:text-sm font-medium transition-colors disabled:opacity-50 mt-1 shadow-xs"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-semibold text-slate-950 mb-1">
                  Application Received
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 max-w-xs leading-relaxed">
                  Thank you for applying for {selectedJob.title}. Our technical recruitment team will review your credentials and contact you within 3 business days.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}