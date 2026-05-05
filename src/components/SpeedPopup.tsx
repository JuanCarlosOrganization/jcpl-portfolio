"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";
import { useLenis } from "@/context/LenisContext";

/**
 * SpeedPopup. Premium informational modal.
 * Appears after 45s, once per session.
 * On close: stays on current scroll position (no jump).
 */
export default function SpeedPopup() {
  const { locale } = useLocale();
  const sp = translations[locale].speedPopup;
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const backdropRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lenisRef = useLenis();

  /* Show after 45s, once per session */
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("speed-popup-shown")) return;

    const timer = setTimeout(() => {
      setVisible(true);
      sessionStorage.setItem("speed-popup-shown", "1");
      // preventScroll: true keeps the user where they are, no jump-to-popup
      requestAnimationFrame(() =>
        closeBtnRef.current?.focus({ preventScroll: true }),
      );
    }, 45000);

    return () => clearTimeout(timer);
  }, []);

  /* Close handler. Simple hide, no scroll manipulation */
  const close = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      setClosing(false);
    }, 300);
  }, []);

  /* Pause Lenis + lock the page at its CURRENT scroll position so the
     popup never yanks the user back up. We snapshot scrollY, fix the
     body in place via translate (preserving paint), then restore on close. */
  useEffect(() => {
    const lenis = lenisRef.current;
    const html = document.documentElement;
    const body = document.body;

    if (visible && !closing) {
      const scrollY = window.scrollY;
      lenis?.stop();
      // Lock without changing visual scroll position.
      // Using `overflow: hidden` + `top: -scrollY` keeps the page exactly where it was.
      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.left = "0";
      body.style.right = "0";
      body.style.width = "100%";
      body.dataset.lockedScrollY = String(scrollY);
      html.style.scrollBehavior = "auto";
    } else if (!visible) {
      const saved = parseInt(body.dataset.lockedScrollY || "0", 10);
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      delete body.dataset.lockedScrollY;
      if (saved > 0) {
        window.scrollTo(0, saved);
      }
      html.style.scrollBehavior = "";
      lenis?.start();
    }
    return () => {
      // Defensive cleanup if component unmounts mid-popup
      const saved = parseInt(body.dataset.lockedScrollY || "0", 10);
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      delete body.dataset.lockedScrollY;
      if (saved > 0) window.scrollTo(0, saved);
      html.style.scrollBehavior = "";
      lenisRef.current?.start();
    };
  }, [visible, closing, lenisRef]);

  /* ESC key closes */
  useEffect(() => {
    if (!visible) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [visible, close]);

  /* Click outside panel closes */
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === backdropRef.current) close();
    },
    [close]
  );

  if (!visible) return null;

  return (
    <div
      ref={backdropRef}
      className={`speed-popup-backdrop ${closing ? "speed-popup-closing" : ""}`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="speed-popup-title"
    >
      <div className="speed-popup-panel">
        {/* Animated border glow */}
        <div className="speed-popup-glow" aria-hidden="true" />

        {/* Close button */}
        <button
          ref={closeBtnRef}
          className="speed-popup-close"
          onClick={close}
          aria-label={sp.closeLabel}
          type="button"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Eyebrow */}
        <p className="speed-popup-eyebrow">{sp.eyebrow}</p>

        {/* Title */}
        <h2 id="speed-popup-title" className="speed-popup-title">
          {sp.title}
        </h2>

        {/* Accent line */}
        <div className="speed-popup-accent" aria-hidden="true" />

        {/* Body text */}
        <p className="speed-popup-body">
          {sp.body}<strong className="speed-popup-highlight">{sp.highlight}</strong>
        </p>
      </div>
    </div>
  );
}
