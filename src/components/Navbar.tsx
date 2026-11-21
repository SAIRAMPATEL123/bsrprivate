"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  Home,
  Layers,
  FolderGit2,
  Users,
  Send,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { mainNavLinks, secondaryNavLinks } from "@/data/company";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const pathname = usePathname();

  // Smooth scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setIsScrolled(currentScrollY > 15);

          const diff = currentScrollY - lastScrollY;

          // Smooth directional hysteresis threshold
          if (currentScrollY > 90) {
            if (diff > 8) {
              setIsScrolledDown(true);
            } else if (diff < -16) {
              setIsScrolledDown(false);
            }
          } else {
            setIsScrolledDown(false);
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setSolutionsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.04)] py-3 sm:py-3 lg:py-2.5"
            : "bg-white/70 backdrop-blur-xl border-b border-slate-200/50 shadow-[0_2px_14px_rgba(0,0,0,0.02)] py-3.5 sm:py-4 lg:py-3.5"
        }`}
      >
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex items-center justify-between">
          {/* Brand Logo with Image */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-white border border-slate-200/80 flex items-center justify-center p-0.5 group-hover:border-teal-500 transition-colors shadow-2xs"
            >
              <Image
                src="/logo.png"
                alt="SERENIQ Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain rounded-full"
                priority
              />
            </motion.div>
            <span className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-slate-950">
              SEREN<span className="text-teal-600">IQ</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {mainNavLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs xl:text-sm font-medium transition-colors px-3 py-1.5 rounded-lg relative ${
                    isActive ? "text-teal-700 font-semibold" : "text-slate-600 hover:text-teal-700 hover:bg-slate-50/70"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-tab-pill"
                      className="absolute inset-0 bg-teal-50 border border-teal-200/70 rounded-lg -z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}

            {/* Specialized Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                onMouseEnter={() => setSolutionsOpen(true)}
                className="flex items-center gap-1 text-xs xl:text-sm font-medium text-slate-600 hover:text-teal-700 hover:bg-slate-50/70 px-3 py-1.5 rounded-lg transition-colors"
                aria-expanded={solutionsOpen}
              >
                <span>Specialized</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${solutionsOpen ? "rotate-180 text-teal-600" : ""}`} />
              </button>

              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 4, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.98 }}
                    transition={{ duration: 0.12 }}
                    onMouseLeave={() => setSolutionsOpen(false)}
                    className="absolute top-full right-0 mt-3 w-52 bg-white/90 backdrop-blur-xl rounded-xl border border-slate-200/80 shadow-[0_12px_32px_rgba(0,0,0,0.08)] p-1.5 z-50 flex flex-col gap-0.5"
                  >
                    {secondaryNavLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setSolutionsOpen(false)}
                        className={`px-3 py-2 text-xs rounded-md transition-colors flex items-center justify-between ${
                          pathname === item.href ? "bg-teal-50 text-teal-700 font-semibold" : "text-slate-600 hover:bg-slate-50 hover:text-teal-700"
                        }`}
                      >
                        <span>{item.name}</span>
                        <ArrowUpRight className="w-3 h-3 text-slate-400" />
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right Action (Desktop only; on mobile Contact is in the floating bottom nav) */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 xl:px-4 xl:py-2 rounded-lg bg-slate-950 hover:bg-teal-700 text-xs xl:text-sm font-medium text-white transition-colors duration-200 shadow-2xs"
              >
                <span>Contact</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-teal-300" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Subtle Horizontal Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal-800 via-teal-500 to-emerald-400 origin-left pointer-events-none"
          style={{ scaleX }}
        />
      </header>

      {/* Floating Bottom Navigation Bar (Mobile Only - Ultra-Smooth Spring Dock) */}
      <div className="fixed bottom-4 left-0 right-0 z-40 lg:hidden pointer-events-none flex justify-center px-3">
        <motion.nav
          initial={false}
          animate={{
            width: isScrolledDown ? 136 : "100%",
            maxWidth: isScrolledDown ? 136 : 480,
            borderRadius: isScrolledDown ? 9999 : 20,
            padding: isScrolledDown ? "6px 8px" : "8px 10px",
            borderColor: isScrolledDown
              ? "rgba(13, 148, 136, 0.45)"
              : "rgba(226, 232, 240, 0.9)",
            boxShadow: isScrolledDown
              ? "0 14px 40px rgba(0,0,0,0.18), 0 2px 10px rgba(13,148,136,0.22)"
              : "0 12px 36px rgba(0,0,0,0.14), 0 2px 6px rgba(0,0,0,0.06)",
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 26,
            mass: 0.85,
          }}
          aria-label="Mobile Bottom Navigation"
          className="pointer-events-auto flex items-center justify-between overflow-hidden bg-white/90 backdrop-blur-2xl border"
        >
          {/* Always-Present Home Button */}
          <motion.div
            layout
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 26,
            }}
            className={`flex items-center justify-center ${
              isScrolledDown ? "w-full" : "flex-1"
            }`}
          >
            <Link
              href="/"
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className={`relative flex items-center justify-center transition-all duration-200 ${
                isScrolledDown
                  ? "gap-2 w-full py-2 px-3 rounded-full bg-teal-50/95 text-teal-800 text-xs font-semibold"
                  : `flex-col w-full py-1.5 sm:py-2 px-1 rounded-xl text-[11px] sm:text-xs font-medium ${
                      pathname === "/"
                        ? "text-teal-700 font-semibold"
                        : "text-slate-600 hover:text-slate-950"
                    }`
              }`}
            >
              {pathname === "/" && !isScrolledDown && (
                <motion.span
                  layoutId="mobile-bottom-active-pill"
                  className="absolute inset-0 bg-teal-50/95 border border-teal-200/90 rounded-xl -z-0"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <Home
                className={`w-5 h-5 relative z-10 transition-transform duration-200 ${
                  pathname === "/" || isScrolledDown
                    ? "scale-110 text-teal-700"
                    : "text-slate-500"
                } ${!isScrolledDown ? "mb-1" : ""}`}
              />
              <span className="relative z-10 truncate leading-none">Home</span>
            </Link>
          </motion.div>

          {/* Remaining Navigation Items with Coordinated Width Collapse */}
          {[
            { name: "Services", href: "/services", icon: Layers },
            { name: "Projects", href: "/projects", icon: FolderGit2 },
            { name: "About", href: "/about", icon: Users },
            { name: "Contact", href: "/contact", icon: Send },
          ].map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            const Icon = item.icon;

            return (
              <motion.div
                key={item.name}
                initial={false}
                animate={{
                  width: isScrolledDown ? 0 : "100%",
                  opacity: isScrolledDown ? 0 : 1,
                  scale: isScrolledDown ? 0.7 : 1,
                }}
                transition={{
                  width: { type: "spring", stiffness: 260, damping: 26 },
                  opacity: {
                    duration: isScrolledDown ? 0.15 : 0.25,
                    delay: isScrolledDown ? 0 : 0.05,
                  },
                  scale: { duration: 0.2 },
                }}
                className="overflow-hidden flex items-center justify-center flex-1"
              >
                <Link
                  href={item.href}
                  className={`relative flex flex-col items-center justify-center w-full py-1.5 sm:py-2 px-1 rounded-xl text-[11px] sm:text-xs font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? "text-teal-700 font-semibold"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="mobile-bottom-active-pill"
                      className="absolute inset-0 bg-teal-50/95 border border-teal-200/90 rounded-xl -z-0"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon
                    className={`w-5 h-5 mb-1 relative z-10 transition-transform ${
                      isActive ? "scale-110 text-teal-700" : "text-slate-500"
                    }`}
                  />
                  <span className="relative z-10 truncate leading-none">
                    {item.name}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.nav>
      </div>
    </>
  );
}