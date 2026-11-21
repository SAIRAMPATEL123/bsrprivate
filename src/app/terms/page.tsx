import { Metadata } from "next";
import { companyData } from "@/data/company";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | SERENIQ Technologies",
  description:
    "Review the terms, conditions, intellectual property transfer standards, and service agreements governing engagements with SERENIQ Technologies.",
};

export default function TermsPage() {
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
            Terms of Service
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 font-sans">
            Terms and Conditions
          </h1>
          <p className="text-xs text-slate-500 mt-2 font-mono">
            Last Updated: {lastUpdated} • Governing Software Engagements With {companyData.legalName}
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 leading-relaxed flex flex-col gap-8">
          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-950 mb-2">1. Agreement to Terms</h2>
            <p>
              These Terms and Conditions (&quot;Terms&quot;) constitute a legally binding agreement between you or the entity you represent (&quot;Client&quot;) and {companyData.legalName} (&quot;SERENIQ&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;us&quot;). By browsing this website, submitting an inquiry, or entering into an engineering Statement of Work (SOW), you acknowledge and agree to be bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-950 mb-2">2. Engineering Services & Statements of Work</h2>
            <p>
              Specific technical consulting deliverables, architectural scopes, milestone schedules, and fee arrangements are governed by individual Statements of Work executed between the parties. In the event of a conflict between these Terms and an executed SOW, the terms of the specific SOW shall prevail.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-950 mb-2">3. Intellectual Property (IP) Ownership</h2>
            <p className="mb-2">
              We operate under a complete intellectual property transfer philosophy for bespoke client software:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5">
              <li>
                <strong>Client Deliverables:</strong> Upon full payment of agreed-upon milestone invoices, 100% of the custom source code, documentation, schemas, and configurations created specifically for Client under an active SOW are transferred exclusively to the Client.
              </li>
              <li>
                <strong>Pre-Existing Tools:</strong> SERENIQ retains ownership of standard open-source libraries, general developer utilities, and reusable boilerplate code incorporated into deliverables, granting Client a perpetual, royalty-free, non-exclusive license to use and modify such tools within the deliverable.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-950 mb-2">4. Mutual Confidentiality</h2>
            <p>
              Both parties agree to hold in strict confidence all proprietary technical data, business logic, customer records, and trade secrets disclosed during the engagement. Confidential Information shall not be disclosed to third parties without prior written consent, except to employees, contractors, and legal advisors bound by equivalent non-disclosure obligations.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-950 mb-2">5. Warranties & Quality Assurance</h2>
            <p>
              SERENIQ warrants that all software services will be performed in a professional, workmanlike manner adhering to modern software engineering standards. Unless otherwise stipulated in an SOW, custom code deliverables include a thirty (30) day warranty period following production handover during which reproducible defects will be remediated at zero additional fee.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-950 mb-2">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, in no event shall either party be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data loss, or business interruption, arising out of or in connection with these Terms or the services provided.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-950 mb-2">7. Governing Law & Jurisdiction</h2>
            <p>
              These Terms and any dispute arising out of or related to our services shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-950 mb-2">8. Contact Legal Department</h2>
            <p>
              For legal inquiries or notices regarding these Terms, contact our legal counsel at:
            </p>
            <div className="mt-3 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs flex flex-col gap-1 font-mono">
              <span className="font-bold text-slate-950">{companyData.legalName}</span>
              <span>Attn: Legal Department</span>
              <span>{companyData.address.formatted}</span>
              <span>Email: {companyData.email}</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}