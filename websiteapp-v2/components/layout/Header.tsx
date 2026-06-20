"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MagneticButton from "@/components/ui/MagneticButton";

const navLinks = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/awards", label: "awards" },
  { href: "/reels", label: "reels" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-bg/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Name / Logo */}
          <MagneticButton as="a" href="/" strength={0.2}>
            <span className="font-serif text-lg tracking-tight text-text-primary hover:text-accent transition-colors duration-300">
              Arav Mathur
            </span>
          </MagneticButton>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.slice(1).map((link) => (
              <MagneticButton
                key={link.href}
                as="a"
                href={link.href}
                strength={0.15}
              >
                <span
                  className={`text-sm font-mono tracking-wide transition-colors duration-300 ${
                    pathname === link.href
                      ? "text-accent"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </span>
              </MagneticButton>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-3 -mr-1"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 6 : 0,
              }}
              className="block w-5 h-[1.5px] bg-text-primary origin-center"
            />
            <motion.span
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              className="block w-5 h-[1.5px] bg-text-primary"
            />
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -6 : 0,
              }}
              className="block w-5 h-[1.5px] bg-text-primary origin-center"
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-serif text-3xl tracking-tight transition-colors duration-300 ${
                      pathname === link.href
                        ? "text-accent"
                        : "text-text-primary hover:text-accent"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
