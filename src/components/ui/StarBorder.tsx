"use client";

import { ReactNode } from "react";
import "./StarBorder.css";

/* ─── Variant presets ─── */
type StarBorderVariant = "accent" | "alt" | "subtle" | "impact";

interface StarBorderProps {
  /** Visual variant */
  variant?: StarBorderVariant;
  /** Border colour override (CSS colour value) */
  color?: string;
  /** Animation cycle duration, e.g. "6s" */
  speed?: string;
  /** Travelling-light thickness in px */
  thickness?: number;
  /** Extra class names */
  className?: string;
  /** Optional inline style */
  style?: React.CSSProperties;
  children?: ReactNode;
}

/**
 * StarBorder. Premium animated border container.
 *
 * Usage:
 *   <StarBorder variant="accent" className="rounded-2xl">
 *     <div className="p-8 bg-[var(--bg-surface)]">Card content</div>
 *   </StarBorder>
 */
export default function StarBorder({
  variant = "accent",
  color,
  speed,
  thickness,
  className = "",
  style: externalStyle,
  children,
}: StarBorderProps) {
  const cssVars: Record<string, string> = {};
  if (color) cssVars["--sb-color"] = color;
  if (speed) cssVars["--sb-speed"] = speed;
  if (thickness) cssVars["--sb-thickness"] = `${thickness}px`;

  return (
    <div
      className={`star-border star-border--${variant} ${className}`}
      style={{ ...cssVars, ...externalStyle } as React.CSSProperties}
    >
      {/* Static border (always visible, accessibility fallback) */}
      <span className="star-border__static" aria-hidden="true" />

      {/* Travelling light rays */}
      <span
        className="star-border__ray star-border__ray--top"
        aria-hidden="true"
        style={speed ? { animationDuration: speed } : undefined}
      />
      <span
        className="star-border__ray star-border__ray--bottom"
        aria-hidden="true"
        style={speed ? { animationDuration: speed } : undefined}
      />
      <span
        className="star-border__ray star-border__ray--left"
        aria-hidden="true"
        style={speed ? { animationDuration: speed } : undefined}
      />
      <span
        className="star-border__ray star-border__ray--right"
        aria-hidden="true"
        style={speed ? { animationDuration: speed } : undefined}
      />

      {/* Content */}
      <div className="star-border__content">{children}</div>
    </div>
  );
}
