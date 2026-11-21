import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Home } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you requested could not be located on the SERENIQ platform.",
};

export default function NotFound() {
  return (
    <div className="flex-grow flex items-center justify-center py-24 px-6 bg-white">
      <div className="max-w-md w-full text-center flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center p-3 mb-6 shadow-sm">
          <Image
            src="/logo.png"
            alt="SERENIQ Logo"
            width={48}
            height={48}
            className="w-full h-full object-contain rounded-full"
          />
        </div>

        <span className="text-xs font-mono uppercase tracking-widest text-teal-700 mb-2">
          Error 404
        </span>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 mb-3 font-sans">
          Page Not Found
        </h1>

        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-8">
          The requested route does not exist or may have been relocated.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-teal-700 hover:bg-teal-600 text-white text-xs font-medium shadow-xs transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-medium hover:bg-slate-50 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Browse Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
