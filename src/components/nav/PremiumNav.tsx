"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

const NAV_LINKS = [
  { label: "Results", href: "/#outcomes" },
  { label: "How it works", href: "/#system" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Apply", href: "/apply", isCta: true },
];

export default function PremiumNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        aria-label="Main navigation"
        className="fixed top-0 left-0 w-full z-[100] transition-all duration-300"
        style={{
          background: scrolled ? "rgba(13, 11, 9, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div
          className="flex items-center justify-between mx-auto"
          style={{
            maxWidth: 1280,
            padding: "20px 48px",
          }}
        >
          {/* Logo. Left */}
          <Link href="/" aria-label="Client Growth. Home" className="flex-shrink-0">
            <motion.span
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: 22,
                fontWeight: 400,
                letterSpacing: "0.02em",
                color: "#F0EAD6",
              }}
            >
              Client{" "}
              <span style={{ color: "#D4A853" }}>Growth</span>
            </motion.span>
          </Link>

          {/* Desktop links. Right */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link, i) =>
              link.isCta ? (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * (i + 1) }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Link
                    href={link.href}
                    aria-label={link.label}
                    className="inline-flex items-center justify-center transition-all"
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: 11,
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      background: "#D4A853",
                      color: "#0D0B09",
                      padding: "10px 24px",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = "brightness(1.12)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = "none";
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * (i + 1) }}
                  whileHover={{ scale: 1.04 }}
                >
                  <Link
                    href={link.href}
                    aria-label={link.label}
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: 11,
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "rgba(240,234,214,0.45)",
                      textDecoration: "none",
                      transition: "color 0.25s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(240,234,214,1)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,234,214,0.45)")}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              )
            )}
            <LanguageSwitcher className="ml-2" />
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden flex items-center justify-center"
            onClick={() => setMobileOpen(true)}
            whileTap={{ scale: 0.9 }}
            aria-label="Open menu"
            style={{ color: "#F0EAD6" }}
          >
            <Menu className="h-6 w-6" />
          </motion.button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[200] md:hidden flex flex-col"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            style={{ background: "#0D0B09" }}
          >
            {/* Mobile header */}
            <div className="flex items-center justify-between" style={{ padding: "20px 24px" }}>
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: 20,
                  fontWeight: 400,
                  color: "#F0EAD6",
                  textDecoration: "none",
                }}
              >
                Client <span style={{ color: "#D4A853" }}>Growth</span>
              </Link>
              <motion.button
                onClick={() => setMobileOpen(false)}
                whileTap={{ scale: 0.9 }}
                aria-label="Close menu"
                style={{ color: "#F0EAD6" }}
              >
                <X className="h-6 w-6" />
              </motion.button>
            </div>

            {/* Mobile links */}
            <div className="flex flex-col flex-1 justify-center px-8 gap-3">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.15 }}
                  exit={{ opacity: 0, x: 24 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: 16,
                      fontWeight: 500,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: link.isCta ? "#D4A853" : "#F0EAD6",
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                exit={{ opacity: 0, y: 20 }}
                className="pt-4"
              >
                <Link
                  href="/apply"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center w-full text-center"
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    background: "#D4A853",
                    color: "#0D0B09",
                    padding: "16px 32px",
                    textDecoration: "none",
                  }}
                >
                  Apply to be a Partner
                </Link>
              </motion.div>
            </div>

            {/* Language toggle */}
            <div className="px-8 pt-4" style={{ borderTop: "1px solid rgba(240,234,214,0.08)" }}>
              <LanguageSwitcher />
            </div>

            {/* Mobile footer */}
            <div className="px-8 pb-8">
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 12,
                  color: "#756D63",
                  textAlign: "center",
                }}
              >
                Growth infrastructure for local service businesses.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @media (max-width: 768px) {
          nav[aria-label="Main navigation"] > div {
            padding: 16px 20px !important;
          }
        }
      `}</style>
    </>
  );
}
