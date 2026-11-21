"use client";

import { useState } from "react";
import { ArrowUp, Send, CheckCircle2, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { companyData, mainNavLinks, secondaryNavLinks } from "@/data/company";
import { servicesData } from "@/data/services";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 5000);
    }, 500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-900">
          {/* Brand Info with Logo */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="relative w-8 h-8 rounded-full overflow-hidden bg-white p-0.5 shadow-sm border border-teal-500/30">
                <Image
                  src="/logo.png"
                  alt="SERENIQ Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <span className="font-sans text-lg font-bold tracking-tight text-white">
                SEREN<span className="text-teal-400">IQ</span>
              </span>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {companyData.description}
            </p>

            <div className="flex flex-col gap-2 text-xs text-slate-400 mt-2 font-mono">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span>{companyData.address.formatted}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <a href={`mailto:${companyData.email}`} className="hover:text-teal-300 transition-colors">{companyData.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <a href={`tel:${companyData.phone}`} className="hover:text-teal-300 transition-colors">{companyData.phone}</a>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-teal-300 transition-colors block text-slate-400"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs">
              {mainNavLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-teal-300 transition-colors block text-slate-400">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="hover:text-teal-300 transition-colors block text-slate-400">
                  Contact
                </Link>
              </li>
              {secondaryNavLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-teal-300 transition-colors block text-slate-400">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="sm:col-span-2 lg:col-span-3 flex flex-col gap-3">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              Engineering Dispatch
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Quarterly technical briefings on distributed systems, AI architectures, and cloud optimization.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col gap-2 mt-1">
              <div className="flex items-center gap-1.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  required
                  aria-label="Email address for engineering newsletter"
                  className="w-full px-3 py-2 rounded-md bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-base sm:text-xs focus:outline-none focus:border-teal-500 transition-colors"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-label="Subscribe"
                  className="min-h-[38px] px-3.5 py-2 bg-teal-600 hover:bg-teal-500 text-white text-xs font-medium rounded-md transition-colors shrink-0 disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {isSubscribed && (
                <div className="flex items-center gap-1.5 text-xs text-teal-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                  <span>Subscribed successfully.</span>
                </div>
              )}
            </form>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-500">
              <a href={companyData.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 transition-colors py-1">
                GitHub
              </a>
              <span>•</span>
              <a href={companyData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 transition-colors py-1">
                LinkedIn
              </a>
              <span>•</span>
              <a href={companyData.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 transition-colors py-1">
                X / Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} {companyData.legalName}. All rights reserved.
          </div>

          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors py-1">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors py-1">
              Terms of Service
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors py-1"
              aria-label="Scroll to top of page"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}