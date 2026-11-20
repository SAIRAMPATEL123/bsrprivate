"use client";

import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Link from "next/link";
import { ArrowRight, Users, Sparkles, Building2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const deliveryModels = [
    {
      title: "Software Outsourcing",
      description: "Pre-vetted autonomous product squads and staff augmentation ready to integrate into your sprint cycles in under 5 days.",
      href: "/outsourcing",
      label: "Outsourcing Models",
      icon: <Sparkles className="w-4 h-4 text-teal-700" />,
    },
    {
      title: "Technical Recruiters",
      description: "Dedicated technical talent acquisition specialists to hire senior AI, DevOps, and backend developers for your permanent staff.",
      href: "/hire-recruiter",
      label: "Recruiter Services",
      icon: <Users className="w-4 h-4 text-teal-700" />,
    },
    {
      title: "Industry Verticals",
      description: "Engineered compliance standards for Healthcare (HIPAA), Financial Services (SOC2, PCI), and Retail inventory systems.",
      href: "/industries",
      label: "Domain Focus",
      icon: <Building2 className="w-4 h-4 text-teal-700" />,
    },
  ];

  return (
    <main className="flex-grow flex flex-col">
      <Hero />
      <TrustedBy />
      <Services />
      <FeaturedProjects />
      <WhyChooseUs />

      {/* Specialized Engagements Teaser with Viewport Reveal */}
      <section className="py-20 lg:py-28 bg-slate-50/50 border-b border-slate-100 overflow-hidden">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6"
          >
            <div className="max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 block mb-2 font-mono">
                Flexible Frameworks
              </span>
              <h2 className="text-2.5xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950 font-sans">
                Tailored Delivery Models
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                Whether you require end-to-end milestone execution, autonomous co-development squads, or dedicated talent sourcing.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {deliveryModels.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 sm:p-7 rounded-xl bg-white border border-slate-200/80 hover:border-teal-400 hover:shadow-sm transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-semibold text-slate-950 mb-2 group-hover:text-teal-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-950 group-hover:text-teal-700 transition-colors"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}