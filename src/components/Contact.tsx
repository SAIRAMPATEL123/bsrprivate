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
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Custom Software Engineering",
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
        message: "",
      });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 700);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-white border-b border-slate-100 overflow-hidden">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Info with Scroll Reveal */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded-full overflow-hidden bg-white border border-teal-200 p-0.5 shadow-2xs">
                  <Image src="/logo.png" alt="SERENIQ" width={20} height={20} className="w-full h-full object-contain rounded-full" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-800 font-mono">
                  Initiate Project
                </span>
              </div>
              <h2 className="text-2.5xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950 font-sans leading-tight">
                Start an Architecture Consultation
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                Connect directly with our engineering team to inspect your technical roadmap, evaluate scalability requirements, and define deliverables.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-teal-50/50 border border-teal-100 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-800" />
                <span className="text-xs font-semibold text-teal-950">1 Business Day Response SLA</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every technical inquiry is reviewed and answered directly by an engineering lead.
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-2 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-700 shrink-0" />
                <a href={`mailto:${companyData.email}`} className="text-slate-900 hover:text-teal-700 font-medium transition-colors">
                  {companyData.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-700 shrink-0" />
                <span className="text-slate-900 font-medium">{companyData.phone}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <span>{companyData.address.formatted}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form with Scroll Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 lg:p-9 rounded-xl border border-slate-200/80 bg-white shadow-2xs">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="home-contact-name" className="text-xs font-medium text-slate-700">
                        Full Name *
                      </label>
                      <input
                        id="home-contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="px-3.5 py-2.5 rounded-lg border border-slate-200 text-base sm:text-xs text-slate-900 focus:outline-none focus:border-teal-600 transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="home-contact-email" className="text-xs font-medium text-slate-700">
                        Work Email *
                      </label>
                      <input
                        id="home-contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="px-3.5 py-2.5 rounded-lg border border-slate-200 text-base sm:text-xs text-slate-900 focus:outline-none focus:border-teal-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="home-contact-company" className="text-xs font-medium text-slate-700">
                        Company Name
                      </label>
                      <input
                        id="home-contact-company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Organization Inc."
                        className="px-3.5 py-2.5 rounded-lg border border-slate-200 text-base sm:text-xs text-slate-900 focus:outline-none focus:border-teal-600 transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="home-contact-service" className="text-xs font-medium text-slate-700">
                        Service Focus
                      </label>
                      <select
                        id="home-contact-service"
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
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="home-contact-message" className="text-xs font-medium text-slate-700">
                      Project Overview *
                    </label>
                    <textarea
                      id="home-contact-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your architecture requirements, data volume, or deliverables..."
                      className="px-3.5 py-2.5 rounded-lg border border-slate-200 text-base sm:text-xs text-slate-900 focus:outline-none focus:border-teal-600 resize-none transition-colors"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-teal-700 hover:bg-teal-600 text-white text-xs sm:text-sm font-medium transition-colors disabled:opacity-50 mt-1 shadow-xs"
                  >
                    {isSubmitting ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Submit Architecture Inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </motion.button>
                </form>
              ) : (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-teal-200 shadow-sm flex items-center justify-center p-2 mb-4">
                    <Image src="/logo.png" alt="SERENIQ" width={40} height={40} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-950 mb-1">
                    Inquiry Received
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed">
                    Our engineering leads will evaluate your requirements and reach out within 1 business day.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}