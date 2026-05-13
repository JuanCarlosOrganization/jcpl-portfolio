"use client";

import { type ReactNode } from "react";
import { MotionConfig } from "motion/react";
import { LocaleProvider } from "@/context/LocaleContext";
import SmoothScrollProvider from "@/components/ui/SmoothScrollProvider";
import RouteScrollManager from "@/components/system/RouteScrollManager";
import SiteNav from "@/components/ui/SiteNav";
import Footer from "@/components/Footer";
import SpeedPopup from "@/components/SpeedPopup";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import BackToTop from "@/components/ui/BackToTop";
import SectionLabelAnimator from "@/components/motion/SectionLabelAnimator";
import { useTranslations } from "@/context/LocaleContext";

function SkipToContent() {
  const t = useTranslations();
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--brand-accent)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:outline-none"
    >
      {t<string>("common.skipToContent")}
    </a>
  );
}

export default function ClientAppShell({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      {/* reducedMotion="user" makes every Framer Motion animation respect the
          OS preference, so individual components don't have to check. */}
      <MotionConfig reducedMotion="user">
        <SkipToContent />
        <ScrollProgressBar />
        <SectionLabelAnimator />
        <SmoothScrollProvider>
          <RouteScrollManager />
          <SiteNav />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
          <BackToTop />
          <SpeedPopup />
        </SmoothScrollProvider>
      </MotionConfig>
    </LocaleProvider>
  );
}
