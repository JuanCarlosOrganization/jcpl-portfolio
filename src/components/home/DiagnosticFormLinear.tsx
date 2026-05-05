"use client";

import { useState, FormEvent, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { trackEvent } from "@/lib/analytics";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";
import { useLayout } from "@/components/motion/useViewportSize";

type FormStatus = "idle" | "submitting" | "success" | "error";

type StepDef = {
  id: string;
  label: string;
  title: string;
  hint: string;
  fields: FieldDef[];
};

type FieldDef = {
  name: "fullName" | "email" | "businessName" | "website";
  label: string;
  type: "text" | "email" | "url";
  placeholder: string;
  required: boolean;
  autoComplete?: string;
  validate?: (v: string) => string | null;
};

const isValidEmail = (v: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

const isValidWebsite = (v: string) => {
  if (!v.trim()) return true; // optional
  return /^(https?:\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*)$/.test(
    v.trim(),
  );
};

export default function DiagnosticFormLinear() {
  const { locale } = useLocale();
  const t = translations[locale].homepage.diagnosticForm;
  const layout = useLayout();
  const isMobile = layout === "mobile";

  const steps: StepDef[] = [
    {
      id: "you",
      label: locale === "fr" ? "Vous" : "You",
      title: locale === "fr" ? "Parlons de vous." : "Let's start with you.",
      hint:
        locale === "fr"
          ? "Je réponds personnellement à chaque candidature."
          : "I personally review every application.",
      fields: [
        {
          name: "fullName",
          label: locale === "fr" ? "Nom complet" : "Full name",
          type: "text",
          placeholder: t.placeholderName,
          required: true,
          autoComplete: "name",
        },
        {
          name: "email",
          label: locale === "fr" ? "Adresse email" : "Email address",
          type: "email",
          placeholder: t.placeholderEmail,
          required: true,
          autoComplete: "email",
          validate: (v) =>
            isValidEmail(v)
              ? null
              : locale === "fr"
                ? "Email invalide"
                : "Please enter a valid email",
        },
      ],
    },
    {
      id: "business",
      label: locale === "fr" ? "Entreprise" : "Business",
      title:
        locale === "fr"
          ? "Maintenant, votre entreprise."
          : "Now, about your business.",
      hint:
        locale === "fr"
          ? "Je l'audite avant qu'on parle."
          : "I audit it before we speak.",
      fields: [
        {
          name: "businessName",
          label: locale === "fr" ? "Nom de l'entreprise" : "Business name",
          type: "text",
          placeholder: t.placeholderBusiness,
          required: true,
          autoComplete: "organization",
        },
        {
          name: "website",
          label:
            locale === "fr"
              ? "Site web (optionnel)"
              : "Website (optional)",
          type: "url",
          placeholder: t.placeholderWebsite,
          required: false,
          autoComplete: "url",
          validate: (v) =>
            isValidWebsite(v)
              ? null
              : locale === "fr"
                ? "URL invalide"
                : "Please enter a valid URL",
        },
      ],
    },
    {
      id: "review",
      label: locale === "fr" ? "Confirmation" : "Review",
      title:
        locale === "fr"
          ? "Tout est bon ?"
          : "Does this look right?",
      hint:
        locale === "fr"
          ? "Je reviens vers vous sous 24 h."
          : "I'll get back to you within 24 hours.",
      fields: [],
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [data, setData] = useState({
    fullName: "",
    email: "",
    businessName: "",
    website: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof data, string>>>({});
  const [touched, setTouched] = useState<Set<string>>(new Set());
  const [status, setStatus] = useState<FormStatus>("idle");
  const [started, setStarted] = useState(false);

  const firstInputRef = useRef<HTMLInputElement>(null);

  // Auto-focus the first input each step
  useEffect(() => {
    if (status !== "idle") return;
    const t = setTimeout(() => firstInputRef.current?.focus(), 280);
    return () => clearTimeout(t);
  }, [currentStep, status]);

  function update(name: keyof typeof data, value: string) {
    if (!started) {
      setStarted(true);
      trackEvent("apply_form_start");
    }
    setData((d) => ({ ...d, [name]: value }));
    setErrors((e) => {
      const next = { ...e };
      delete next[name];
      return next;
    });
  }

  function validateStep(): boolean {
    const step = steps[currentStep];
    const newErrors: typeof errors = {};
    for (const field of step.fields) {
      const value = data[field.name] || "";
      if (field.required && !value.trim()) {
        newErrors[field.name] =
          locale === "fr" ? "Champ requis" : "Required";
        continue;
      }
      if (field.validate) {
        const msg = field.validate(value);
        if (msg) newErrors[field.name] = msg;
      }
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setTouched(new Set([...touched, ...step.fields.map((f) => f.name)]));
    }
    return Object.keys(newErrors).length === 0;
  }

  function next(e?: FormEvent) {
    if (e) e.preventDefault();
    if (!validateStep()) return;
    trackEvent("form_step_complete", {
      data: {
        step: steps[currentStep].id,
        stepNumber: currentStep + 1,
      },
    });
    setDirection(1);
    if (currentStep < steps.length - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      submit();
    }
  }

  function back() {
    if (currentStep === 0) return;
    setDirection(-1);
    setCurrentStep((s) => s - 1);
  }

  async function submit() {
    setStatus("submitting");
    trackEvent("apply_form_submit");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.fullName,
          email: data.email,
          businessType: data.businessName,
          monthlyRevenue: data.website,
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      trackEvent("form_submit");
    } catch {
      setStatus("error");
    }
  }

  const step = steps[currentStep];
  const progress = ((currentStep + (status === "success" ? 1 : 0)) / steps.length) * 100;

  return (
    <section
      id="book-call"
      style={{
        background: "#0D0B09",
        padding: isMobile
          ? "72px 16px 80px"
          : "clamp(80px, 12vh, 160px) clamp(20px, 4vw, 64px)",
      }}
    >
      <div
        style={{
          maxWidth: 980,
          margin: "0 auto",
        }}
      >
        {/* Section preamble — Stripe-style: bold direct, no eyebrow */}
        <div
          style={{
            maxWidth: 760,
            marginBottom: isMobile ? 32 : "clamp(40px, 6vh, 72px)",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: isMobile
                ? "clamp(28px, 9vw, 38px)"
                : "clamp(36px, 5vw, 64px)",
              fontWeight: 300,
              lineHeight: isMobile ? 1.1 : 1.02,
              color: "#F5F0E8",
              letterSpacing: "-0.025em",
              margin: 0,
            }}
          >
            {locale === "fr" ? "Réservez votre " : "Book your "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #D4A853 0%, #E8C97A 50%, #C49A2A 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontStyle: "italic",
              }}
            >
              {locale === "fr" ? "diagnostic" : "diagnostic"}
            </span>
            .
            <br />
            {locale === "fr"
              ? "Je vous dis si je peux aider."
              : "I'll tell you if I can help."}
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: isMobile ? 14 : "clamp(15px, 1.15vw, 17px)",
              lineHeight: 1.55,
              color: "rgba(245,240,232,0.62)",
              maxWidth: 580,
              margin: isMobile ? "16px 0 0" : "24px 0 0",
            }}
          >
            {t.body}
          </p>
        </div>

        {/* Card container */}
        <div
          style={{
            position: "relative",
            background: "#13100B",
            border: "1px solid rgba(212,168,83,0.15)",
            borderRadius: 16,
            overflow: "hidden",
            boxShadow:
              "0 30px 60px -20px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,0,0,0.4)",
          }}
        >
          {/* Progress line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 2,
              background: "rgba(212,168,83,0.08)",
            }}
          >
            <motion.div
              style={{
                height: "100%",
                background:
                  "linear-gradient(90deg, #C49A2A 0%, #D4A853 50%, #E8C97A 100%)",
                transformOrigin: "left",
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: progress / 100 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {/* Stepper header */}
          {status === "idle" && (
            <div
              style={{
                padding: isMobile
                  ? "20px 18px 0"
                  : "28px clamp(24px, 4vw, 48px) 0",
                display: "flex",
                alignItems: "center",
                gap: isMobile ? 6 : 8,
              }}
            >
              {steps.map((s, i) => {
                const isActive = i === currentStep;
                const isDone = i < currentStep;
                const isClickable = i < currentStep;
                return (
                  <div
                    key={s.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: isMobile ? 6 : 8,
                      flex: i < steps.length - 1 ? 1 : "0 0 auto",
                      minWidth: 0,
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => isClickable && setCurrentStep(i)}
                      disabled={!isClickable}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: isMobile ? 7 : 10,
                        padding: "8px 4px",
                        background: "transparent",
                        border: "none",
                        cursor: isClickable ? "pointer" : "default",
                        color:
                          isActive || isDone
                            ? "#F5F0E8"
                            : "rgba(245,240,232,0.4)",
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: isMobile ? 12 : 13,
                        fontWeight: 500,
                        minWidth: 0,
                      }}
                    >
                      <span
                        style={{
                          width: isMobile ? 20 : 22,
                          height: isMobile ? 20 : 22,
                          borderRadius: "50%",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: isMobile ? 10 : 11,
                          fontWeight: 600,
                          flexShrink: 0,
                          background: isDone
                            ? "#D4A853"
                            : isActive
                              ? "rgba(212,168,83,0.15)"
                              : "transparent",
                          border: isActive
                            ? "1px solid rgba(212,168,83,0.55)"
                            : isDone
                              ? "1px solid #D4A853"
                              : "1px solid rgba(245,240,232,0.18)",
                          color: isDone
                            ? "#13100B"
                            : isActive
                              ? "#D4A853"
                              : "rgba(245,240,232,0.45)",
                          transition: "all 240ms ease",
                        }}
                      >
                        {isDone ? "✓" : i + 1}
                      </span>
                      {/* Hide labels on mobile when not active to save horizontal space */}
                      {(!isMobile || isActive) && (
                        <span
                          style={{
                            letterSpacing: "-0.005em",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {s.label}
                        </span>
                      )}
                    </button>
                    {i < steps.length - 1 && (
                      <span
                        style={{
                          flex: 1,
                          height: 1,
                          background:
                            i < currentStep
                              ? "rgba(212,168,83,0.5)"
                              : "rgba(245,240,232,0.08)",
                          transition: "background 240ms ease",
                          minWidth: isMobile ? 12 : 0,
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Step content */}
          <div
            style={{
              padding: isMobile
                ? "20px 18px 24px"
                : "clamp(24px, 4vh, 48px) clamp(24px, 4vw, 48px) clamp(28px, 4vh, 48px)",
              minHeight: isMobile ? 340 : 380,
            }}
          >
            <AnimatePresence mode="wait">
              {status === "idle" && (
                <motion.form
                  key={step.id}
                  onSubmit={next}
                  initial={{ opacity: 0, x: direction * 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -30 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: isMobile ? 22 : 28,
                    height: "100%",
                  }}
                >
                  {/* Step header */}
                  <div>
                    <h3
                      style={{
                        fontFamily:
                          "var(--font-cormorant), Georgia, serif",
                        fontSize: isMobile
                          ? 22
                          : "clamp(26px, 3vw, 38px)",
                        fontWeight: 300,
                        lineHeight: 1.15,
                        color: "#F5F0E8",
                        letterSpacing: "-0.02em",
                        margin: 0,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: isMobile ? 13 : 14,
                        color: "rgba(245,240,232,0.5)",
                        margin: isMobile ? "8px 0 0" : "10px 0 0",
                        lineHeight: 1.55,
                      }}
                    >
                      {step.hint}
                    </p>
                  </div>

                  {/* Fields */}
                  {step.fields.length > 0 && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 22,
                      }}
                    >
                      {step.fields.map((field, idx) => (
                        <FieldRow
                          key={field.name}
                          field={field}
                          value={data[field.name]}
                          error={errors[field.name]}
                          touched={touched.has(field.name)}
                          onChange={(v) => update(field.name, v)}
                          onBlur={() =>
                            setTouched(new Set([...touched, field.name]))
                          }
                          inputRef={idx === 0 ? firstInputRef : undefined}
                        />
                      ))}
                    </div>
                  )}

                  {/* Review summary on last step */}
                  {step.id === "review" && (
                    <ReviewSummary data={data} locale={locale} isMobile={isMobile} />
                  )}

                  {/* Footer actions */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 16,
                      paddingTop: 8,
                      marginTop: "auto",
                    }}
                  >
                    <button
                      type="button"
                      onClick={back}
                      disabled={currentStep === 0}
                      style={{
                        background: "transparent",
                        border: "none",
                        color:
                          currentStep === 0
                            ? "rgba(245,240,232,0.2)"
                            : "rgba(245,240,232,0.7)",
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: 14,
                        fontWeight: 500,
                        cursor:
                          currentStep === 0 ? "default" : "pointer",
                        padding: "10px 4px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        transition: "color 200ms ease",
                      }}
                      onMouseEnter={(e) => {
                        if (currentStep > 0)
                          e.currentTarget.style.color = "#F5F0E8";
                      }}
                      onMouseLeave={(e) => {
                        if (currentStep > 0)
                          e.currentTarget.style.color =
                            "rgba(245,240,232,0.7)";
                      }}
                    >
                      <span aria-hidden>←</span>
                      {locale === "fr" ? "Retour" : "Back"}
                    </button>

                    <button
                      type="submit"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "13px 24px",
                        background:
                          "linear-gradient(135deg, #D4A853 0%, #C49A2A 100%)",
                        color: "#13100B",
                        border: "none",
                        borderRadius: 10,
                        fontFamily:
                          "var(--font-dm-sans), sans-serif",
                        fontSize: 14,
                        fontWeight: 700,
                        letterSpacing: "-0.005em",
                        cursor: "pointer",
                        transition:
                          "transform 180ms ease, box-shadow 240ms ease, filter 180ms ease",
                        boxShadow:
                          "0 8px 24px -8px rgba(212,168,83,0.45)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-1px)";
                        e.currentTarget.style.filter = "brightness(1.06)";
                        e.currentTarget.style.boxShadow =
                          "0 14px 32px -8px rgba(212,168,83,0.6)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "";
                        e.currentTarget.style.filter = "";
                        e.currentTarget.style.boxShadow =
                          "0 8px 24px -8px rgba(212,168,83,0.45)";
                      }}
                    >
                      {currentStep < steps.length - 1
                        ? locale === "fr"
                          ? "Continuer"
                          : "Continue"
                        : t.submitText.replace(" →", "")}
                      <span aria-hidden>→</span>
                    </button>
                  </div>

                  {/* Footer microcopy */}
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: 11,
                      color: "rgba(245,240,232,0.35)",
                      lineHeight: 1.55,
                      textAlign: "center",
                      margin: 0,
                      paddingTop: 6,
                      borderTop: "1px solid rgba(245,240,232,0.05)",
                    }}
                  >
                    {t.microcopy}
                  </p>
                </motion.form>
              )}

              {status === "submitting" && (
                <motion.div
                  key="submitting"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 18,
                    padding: "60px 20px",
                  }}
                >
                  <span
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      border: "2px solid rgba(212,168,83,0.18)",
                      borderTopColor: "#D4A853",
                      animation: "spin 0.9s linear infinite",
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: 14,
                      color: "rgba(245,240,232,0.6)",
                      margin: 0,
                    }}
                  >
                    {t.submittingText}
                  </p>
                  <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                </motion.div>
              )}

              {status === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    gap: 18,
                    padding: "60px 20px 40px",
                  }}
                >
                  <motion.span
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, #D4A853 0%, #C49A2A 100%)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#13100B",
                      fontSize: 24,
                      fontWeight: 700,
                      boxShadow:
                        "0 12px 32px -8px rgba(212,168,83,0.55)",
                    }}
                  >
                    ✓
                  </motion.span>
                  <h3
                    style={{
                      fontFamily:
                        "var(--font-cormorant), Georgia, serif",
                      fontSize: "clamp(26px, 3vw, 36px)",
                      fontWeight: 300,
                      color: "#F5F0E8",
                      margin: 0,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {t.successTitle}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: 15,
                      color: "rgba(245,240,232,0.6)",
                      maxWidth: 420,
                      lineHeight: 1.55,
                      margin: 0,
                    }}
                  >
                    {t.successBody}
                  </p>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  style={{
                    textAlign: "center",
                    padding: "48px 20px",
                  }}
                >
                  <h3
                    style={{
                      fontFamily:
                        "var(--font-cormorant), Georgia, serif",
                      fontSize: "clamp(24px, 3vw, 32px)",
                      fontWeight: 300,
                      color: "#F5F0E8",
                      margin: "0 0 12px",
                    }}
                  >
                    {t.errorTitle}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: 14,
                      color: "rgba(245,240,232,0.6)",
                      margin: "0 0 24px",
                      lineHeight: 1.55,
                    }}
                  >
                    {t.errorBody}{" "}
                    <a
                      href="mailto:juan@clientgrowth.ca"
                      style={{ color: "#D4A853", textDecoration: "underline" }}
                    >
                      juan@clientgrowth.ca
                    </a>
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    style={{
                      padding: "10px 20px",
                      background: "rgba(245,240,232,0.06)",
                      border: "1px solid rgba(245,240,232,0.18)",
                      borderRadius: 10,
                      color: "#F5F0E8",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: 13,
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    {t.tryAgain}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

type FieldRowProps = {
  field: FieldDef;
  value: string;
  error?: string;
  touched: boolean;
  onChange: (v: string) => void;
  onBlur: () => void;
  inputRef?: React.RefObject<HTMLInputElement | null>;
};

function FieldRow({
  field,
  value,
  error,
  touched,
  onChange,
  onBlur,
  inputRef,
}: FieldRowProps) {
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;
  const showError = touched && !!error;

  return (
    <div>
      <label
        htmlFor={field.name}
        style={{
          display: "block",
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: "0.01em",
          color: showError
            ? "#E5826A"
            : focused
              ? "#D4A853"
              : "rgba(245,240,232,0.55)",
          marginBottom: 8,
          transition: "color 200ms ease",
        }}
      >
        {field.label}
        {field.required && (
          <span style={{ marginLeft: 4, color: "rgba(212,168,83,0.7)" }}>
            *
          </span>
        )}
      </label>
      <div style={{ position: "relative" }}>
        <input
          id={field.name}
          ref={inputRef}
          type={field.type}
          value={value}
          autoComplete={field.autoComplete}
          placeholder={field.placeholder}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setFocused(false);
            onBlur();
          }}
          style={{
            width: "100%",
            padding: "14px 16px",
            background: "rgba(245,240,232,0.03)",
            border: showError
              ? "1px solid rgba(229,130,106,0.55)"
              : focused
                ? "1px solid rgba(212,168,83,0.55)"
                : hasValue
                  ? "1px solid rgba(245,240,232,0.16)"
                  : "1px solid rgba(245,240,232,0.1)",
            borderRadius: 10,
            color: "#F5F0E8",
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 15,
            outline: "none",
            transition:
              "border-color 200ms ease, box-shadow 240ms ease, background 200ms ease",
            boxShadow: focused
              ? "0 0 0 4px rgba(212,168,83,0.08)"
              : "none",
          }}
        />
      </div>
      {showError && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 12,
            color: "#E5826A",
            margin: "8px 0 0",
          }}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}

type ReviewSummaryProps = {
  data: {
    fullName: string;
    email: string;
    businessName: string;
    website: string;
  };
  locale: "en" | "fr";
  isMobile?: boolean;
};

function ReviewSummary({ data, locale, isMobile = false }: ReviewSummaryProps) {
  const labels =
    locale === "fr"
      ? {
          name: "Nom",
          email: "Email",
          business: "Entreprise",
          website: "Site web",
          empty: "—",
        }
      : {
          name: "Name",
          email: "Email",
          business: "Business",
          website: "Website",
          empty: "—",
        };

  const rows = [
    { label: labels.name, value: data.fullName },
    { label: labels.email, value: data.email },
    { label: labels.business, value: data.businessName },
    { label: labels.website, value: data.website || labels.empty },
  ];

  return (
    <div
      style={{
        background: "rgba(245,240,232,0.03)",
        border: "1px solid rgba(245,240,232,0.08)",
        borderRadius: 12,
        padding: isMobile ? "16px 16px" : "20px 22px",
        display: "flex",
        flexDirection: "column",
        gap: isMobile ? 14 : 12,
      }}
    >
      {rows.map((row) => (
        <div
          key={row.label}
          style={{
            display: isMobile ? "flex" : "grid",
            flexDirection: isMobile ? "column" : undefined,
            gridTemplateColumns: isMobile ? undefined : "100px 1fr",
            gap: isMobile ? 4 : 16,
            alignItems: isMobile ? "stretch" : "baseline",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(245,240,232,0.4)",
            }}
          >
            {row.label}
          </span>
          <span
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: isMobile ? 14 : 15,
              color: "#F5F0E8",
              fontWeight: 500,
              wordBreak: "break-word",
              minWidth: 0,
            }}
          >
            {row.value || "—"}
          </span>
        </div>
      ))}
    </div>
  );
}
