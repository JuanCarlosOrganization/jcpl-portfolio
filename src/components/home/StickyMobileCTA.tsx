"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

export default function StickyMobileCTA() {
  const { locale } = useLocale();
  const t = translations[locale].homepage;
  const [visible, setVisible] = useState(false);
  const [nearForm, setNearForm] = useState(false);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      setVisible(window.scrollY > 600);
      const formEl = document.getElementById("book-call");
      if (formEl) {
        const rect = formEl.getBoundingClientRect();
        setNearForm(rect.top < window.innerHeight + 100);
      } else {
        setNearForm(false);
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const show = visible && !nearForm;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[999] md:hidden flex items-center px-5 transition-all duration-300"
      style={{
        background: "rgba(13, 11, 9, 0.96)",
        backdropFilter: "blur(8px)",
        borderTop: "1px solid rgba(212,168,83,0.12)",
        padding: "12px 16px calc(12px + env(safe-area-inset-bottom)) 16px",
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(100%)",
        pointerEvents: show ? "auto" : "none",
        willChange: "transform, opacity",
      }}
    >
      <Link
        href="/apply"
        className="text-[13px] font-semibold"
        style={{
          background: "var(--brand-accent, #D4A853)",
          color: "#0D0B09",
          borderRadius: 6,
          padding: "10px 20px",
          textDecoration: "none",
          flex: 1,
          textAlign: "center",
        }}
      >
        {t.stickyMobileCta}
      </Link>
    </div>
  );
}
