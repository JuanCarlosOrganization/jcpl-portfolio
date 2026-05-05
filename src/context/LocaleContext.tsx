"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  type ReactNode,
} from "react";
import { translations, type Locale } from "@/lib/translations";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: <T = string>(path: string) => T;
  lp: (path: string) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function getByPath(obj: unknown, path: string): unknown {
  const parts = path.split(".");
  let current: unknown = obj;
  for (const part of parts) {
    if (current == null || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[part];
  }
  return current;
}

const FIXED_LOCALE: Locale = "en";

export function LocaleProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = FIXED_LOCALE;
    }
  }, []);

  const setLocale = useCallback((_next: Locale) => {
    // English-only site. Locale switching is intentionally a no-op.
  }, []);

  const t = useCallback(
    <T = string>(path: string): T => {
      const obj = translations[FIXED_LOCALE];
      const value = getByPath(obj, path);
      return (value ?? "") as T;
    },
    []
  );

  const lp = useCallback((path: string): string => path, []);

  const value: LocaleContextValue = {
    locale: FIXED_LOCALE,
    setLocale,
    t,
    lp,
  };

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}

export function useTranslations() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useTranslations must be used within LocaleProvider");
  return ctx.t;
}
