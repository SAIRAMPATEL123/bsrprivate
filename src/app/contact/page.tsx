"use client";

import { useState } from "react";
import Image from "next/image";
import { companyData } from "@/data/company";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  ShieldCheck,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Custom Software Engineering",
    budget: "$25,000 - $50,000",
    timeline: "1 - 3 Months",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "Custom Software Engineering",
        budget: "$25,000 - $50,000",
        timeline: "1 - 3 Months",
        message: "",
      });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 700);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="py-14 sm:py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 block mb-3 font-mono">
              Direct Contact
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-950 font-sans leading-tight">
              Initiate a Technical Consultation
            </h1>
            <p className="text-slate-600 mt-4 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              Speak directly with an enterprise software architect. We review your requirements and provide an initial architectural assessment within 1 business day.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-14 sm:py-20 border-b border-slate-100">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 lg:p-9 rounded-xl border border-slate-200/80 bg-white shadow-2xs">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-xs font-medium text-slate-700">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Alex Mercer"
                          className="px-3.5 py-2.5 rounded-lg border border-slate-200 text-base sm:text-xs text-slate-900 focus:outline-none focus:border-teal-600 transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-xs font-medium text-slate-700">
                          Work Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="px-3.5 py-2.5 rounded-lg border border-slate-200 text-base sm:text-xs text-slate-900 focus:outline-none focus:border-teal-600 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="company" className="text-xs font-medium text-slate-700">
                          Company Name
                        </label>
                        <input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Corp"
                          className="px-3.5 py-2.5 rounded-lg border border-slate-200 text-base sm:text-xs text-slate-900 focus:outline-none focus:border-teal-600 transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="service" className="text-xs font-medium text-slate-700">
                          Service of Interest
                        </label>
                        <select
                          id="service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="px-3.5 py-2.5 rounded-lg border border-slate-200 text-base sm:text-xs text-slate-900 focus:outline-none focus:border-teal-600 bg-white transition-colors"
                        >
                          <option>Custom Software Engineering</option>
                          <option>Cloud & DevOps Orchestration</option>
                          <option>AI & Machine Learning Solutions</option>
                          <option>Data Engineering & Analytics</option>
                          <option>Mobile & Web Applications</option>
                          <option>Cybersecurity & Compliance</option>
                          <option>Dedicated Engineering Team (Outsourcing)</option>
                        </select>
                      </div>
                    </div>

                    {/* Budget Tabs with Animated Pill */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-slate-700">
                        Budget Range
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 bg-slate-50 border border-slate-200 rounded-lg">
                        {["< $25,000", "$25k - $50k", "$50k - $100k", "$100,000+"].map((b) => {
                          const isSelected = formData.budget === b || (b === "< $25,000" && formData.budget === "< $25,000") || (b === "$25k - $50k" && formData.budget === "$25,000 - $50,000");
                          return (
                            <button
                              key={b}
                              type="button"
                              onClick={() => setFormData({ ...formData, budget: b })}
                              className={`relative py-1.5 px-2 rounded-md text-[11px] font-medium transition-colors text-center ${isSelected
                                ? "text-teal-900 font-semibold"
                                : "text-slate-600 hover:text-slate-950"
                                }`}
                            >
                              <span className="relative z-10">{b}</span>
                              {isSelected && (
                                <motion.span
                                  layoutId="active-budget-pill"
                                  className="absolute inset-0 bg-white border border-teal-200/80 rounded-md shadow-2xs -z-0"
                                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                                />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Timeline Tabs with Animated Pill */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-slate-700">
                        Target Timeline
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 bg-slate-50 border border-slate-200 rounded-lg">
                        {["< 1 Month", "1 - 3 Months", "3 - 6 Months", "Ongoing Support"].map((t) => {
                          const isSelected = formData.timeline === t || (t === "1 - 3 Months" && formData.timeline === "1 - 3 Months");
                          return (
                            <button
                              key={t}
                              type="button"
                              onClick={() => setFormData({ ...formData, timeline: t })}
                              className={`relative py-1.5 px-2 rounded-md text-[11px] font-medium transition-colors text-center ${isSelected
                                ? "text-teal-900 font-semibold"
                                : "text-slate-600 hover:text-slate-950"
                                }`}
                            >
                              <span className="relative z-10">{t}</span>
                              {isSelected && (
                                <motion.span
                                  layoutId="active-timeline-pill"
                                  className="absolute inset-0 bg-white border border-teal-200/80 rounded-md shadow-2xs -z-0"
                                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                                />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-xs font-medium text-slate-700">
                        Technical Scope & Objectives *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Provide details about your current architecture, throughput requirements, or deliverables..."
                        className="px-3.5 py-2.5 rounded-lg border border-slate-200 text-base sm:text-xs text-slate-900 focus:outline-none focus:border-teal-600 resize-none transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-teal-700 hover:bg-teal-600 text-white text-xs sm:text-sm font-medium transition-colors disabled:opacity-50 mt-1 shadow-xs"
                    >
                      {isSubmitting ? (
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Send Scoping Request</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="py-12 text-center flex flex-col items-center">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-teal-200 shadow-sm flex items-center justify-center p-2 mb-4">
                      <Image src="/logo.png" alt="SERENIQ" width={40} height={40} className="w-full h-full object-contain" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-950 mb-1">
                      Inquiry Dispatched
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed">
                      Thank you for reaching out. One of our lead architects will evaluate your project scope and respond within 1 business day.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar Details */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="p-6 rounded-xl bg-teal-50/50 border border-teal-100 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-teal-800" />
                  <span className="text-xs font-semibold text-teal-950">1 Business Day Response SLA</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every submission is evaluated directly by senior technical staff. No marketing intermediaries.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-slate-200/80 bg-white flex flex-col gap-4 text-xs sm:text-sm shadow-2xs">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                  <div className="w-6 h-6 rounded-md bg-white border border-teal-200 p-0.5 shadow-2xs">
                    <Image src="/logo.png" alt="SERENIQ" width={24} height={24} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="font-mono uppercase text-teal-800 font-semibold text-xs">
                    Direct Communications
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-teal-700 shrink-0" />
                  <a href={`mailto:${companyData.email}`} className="text-slate-900 hover:text-teal-700 font-medium transition-colors">
                    {companyData.email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-teal-700 shrink-0" />
                  <a href={`tel:${companyData.phone}`} className="text-slate-900 hover:text-teal-700 font-medium transition-colors">
                    {companyData.phone}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <span className="text-slate-600 leading-relaxed">{companyData.address.formatted}</span>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-slate-200/80 bg-white flex items-start gap-3 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-900 mb-0.5">Mutual NDA Protection</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    We routinely execute mutual non-disclosure agreements prior to reviewing proprietary source code or architecture specifications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}