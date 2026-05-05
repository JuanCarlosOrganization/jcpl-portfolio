"use client";

import { ReactNode, forwardRef } from "react";
import { cn } from "@/lib/utils";

/**
 * PremiumFrame. Unified premium surface system
 * 
 * Replaces inconsistent card styling with a cohesive premium look:
 * - Subtle gradient surface
 * - 1px border with low-opacity cool tint
 * - Inner highlight on top edge
 * - Very soft shadow for depth
 * - Controlled corner radius
 * - Hover: tiny elevation + border contrast (desktop only)
 */

interface PremiumFrameProps {
  children: ReactNode;
  className?: string;
  /** Visual variant */
  variant?: "default" | "elevated" | "accent" | "ghost";
  /** Enable hover effects (desktop only) */
  hover?: boolean;
  /** Corner radius size */
  radius?: "sm" | "md" | "lg" | "xl";
  /** Padding preset */
  padding?: "none" | "sm" | "md" | "lg";
  /** Element type */
  as?: "div" | "article" | "section" | "aside";
}

const PremiumFrame = forwardRef<HTMLDivElement, PremiumFrameProps>(
  (
    {
      children,
      className = "",
      variant = "default",
      hover = true,
      radius = "lg",
      padding = "md",
      as: Component = "div",
    },
    ref
  ) => {
    const radiusClasses = {
      sm: "rounded-[10px]",
      md: "rounded-[14px]",
      lg: "rounded-[18px]",
      xl: "rounded-[24px]",
    };

    const paddingClasses = {
      none: "",
      sm: "p-4 md:p-5",
      md: "p-5 md:p-6 lg:p-8",
      lg: "p-6 md:p-8 lg:p-10",
    };

    const variantClasses = {
      default: `
        bg-[var(--bg-surface)]
        border border-[rgba(200,200,224,0.08)]
        shadow-[0_2px_8px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.03)]
      `,
      elevated: `
        bg-[var(--bg-elevated)]
        border border-[rgba(200,200,224,0.10)]
        shadow-[0_4px_20px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.04)]
      `,
      accent: `
        bg-[var(--bg-surface)]
        border border-[rgba(37,99,235,0.15)]
        shadow-[0_4px_24px_rgba(37,99,235,0.08),inset_0_1px_0_rgba(255,255,255,0.03)]
      `,
      ghost: `
        bg-transparent
        border border-[rgba(200,200,224,0.06)]
        shadow-none
      `,
    };

    const hoverClasses = hover
      ? `
          transition-all duration-300 ease-out
          hover:border-[rgba(200,200,224,0.15)]
          hover:shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]
          hover:-translate-y-0.5
        `
      : "";

    return (
      <Component
        ref={ref as React.Ref<HTMLDivElement>}
        className={cn(
          "relative overflow-hidden",
          radiusClasses[radius],
          paddingClasses[padding],
          variantClasses[variant],
          hoverClasses,
          className
        )}
      >
        {children}
      </Component>
    );
  }
);

PremiumFrame.displayName = "PremiumFrame";
export default PremiumFrame;

/**
 * PremiumFrameGlow. Optional inner glow overlay for featured cards
 */
export function PremiumFrameGlow({
  color = "accent",
  position = "top",
}: {
  color?: "accent" | "alt";
  position?: "top" | "center";
}) {
  const colorValue = color === "accent" ? "37,99,235" : "37,99,235";
  const positionClass = position === "top" ? "top-0" : "top-1/2 -translate-y-1/2";

  return (
    <div
      className={cn(
        "absolute left-1/2 -translate-x-1/2 w-[80%] h-32 pointer-events-none blur-[80px]",
        positionClass
      )}
      style={{
        background: `radial-gradient(ellipse at center, rgba(${colorValue}, 0.12) 0%, transparent 70%)`,
      }}
      aria-hidden="true"
    />
  );
}
