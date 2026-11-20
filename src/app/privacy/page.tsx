import { Metadata } from "next";
import { companyData } from "@/data/company";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | SERENIQ Technologies",
  description:
    "Learn how SERENIQ collects, safeguards, and processes personal and organizational data in compliance with GDPR and CCPA standards.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 24, 2026";

  return (
    <div className="bg-white min-h-screen py-14 sm:py-16 lg:py-20">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-teal-700 transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return Home</span>
        </Link>

        <div className="border-b border-slate-200 pb-8 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-700 block mb-2 font-mono">
            Legal & Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 font-sans">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 mt-2 font-mono">
            Last Updated: {lastUpdated} • Applicable to {companyData.legalName}
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 leading-relaxed flex flex-col gap-8">
          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-950 mb-2">1. Overview & Commitment</h2>
            <p>
              At {companyData.legalName} (&quot;SERENIQ&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), we respect the privacy of our website visitors, clients, and partners. This Privacy Policy outlines our practices regarding the collection, use, disclosure, and protection of information obtained through our website, software consulting engagements, and communications.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-950 mb-2">2. Information We Collect</h2>
            <p className="mb-2">We collect information in the following circumstances:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5">
              <li>
                <strong>Direct Communications:</strong> When you complete our contact or scoping inquiry forms, subscribe to our technical newsletter, or email us, we collect your name, work email address, company name, phone number, and any project requirements you provide.
              </li>
              <li>
                <strong>Careers Applications:</strong> When applying for engineering openings, we collect your resume, portfolio links (such as GitHub or LinkedIn), contact details, and work authorization status.
              </li>
              <li>
                <strong>Technical Telemetry:</strong> Like most online services, we collect non-identifiable technical data including IP addresses, browser types, operating systems, and page visit metrics to monitor server reliability and site performance.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-950 mb-2">3. How We Use Your Information</h2>
            <p className="mb-2">We utilize collected information exclusively for legitimate business purposes:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5">
              <li>To evaluate and respond to technical consulting and project scoping inquiries;</li>
              <li>To perform obligations arising from engineering agreements and Statements of Work (SOW);</li>
              <li>To process employment applications and conduct technical interviews;</li>
              <li>To detect, prevent, and remediate technical glitches or security incidents;</li>
              <li>To dispatch quarterly engineering briefings, subject to your opt-in consent.</li>
            </ul>
            <p className="mt-2 font-medium text-slate-800">
              We never sell, rent, or monetize your personal or business data to third-party data brokers or advertisers.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-950 mb-2">4. Data Security & Storage Standards</h2>
            <p>
              We implement industry-standard administrative, physical, and technical safeguards. All data in transit is encrypted using modern TLS 1.3 cryptographic protocols, and stored records are protected with AES-256 encryption. Our engineers follow strict least-privilege access controls and multi-factor authentication (MFA) across all internal systems.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-950 mb-2">5. Your Data Protection Rights</h2>
            <p className="mb-2">
              Depending on your jurisdiction (including the European Union under GDPR and California under CCPA/CPRA), you possess specific rights regarding your personal records:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5">
              <li>The right to access and receive a portable copy of personal information we maintain about you;</li>
              <li>The right to rectify inaccurate or incomplete records;</li>
              <li>The right to request permanent deletion of your personal records (&quot;Right to be Forgotten&quot;);</li>
              <li>The right to withdraw marketing consent at any time without penalty.</li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, contact our Data Protection Officer at <a href={`mailto:${companyData.email}`} className="text-teal-700 underline font-medium">{companyData.email}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-950 mb-2">6. Contact Information</h2>
            <p>
              If you have inquiries or concerns regarding this policy, please direct correspondence to:
            </p>
            <div className="mt-3 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs flex flex-col gap-1 font-mono">
              <span className="font-bold text-slate-950">{companyData.legalName}</span>
              <span>Attn: Privacy & Compliance Office</span>
              <span>{companyData.address.formatted}</span>
              <span>Email: {companyData.email}</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}