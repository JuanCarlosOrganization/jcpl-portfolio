"use client";

import { ReactNode, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  /** Additional classes */
  className?: string;
  /** Section ID for anchor links */
  id?: string;
  /** Background variant */
  variant?: "default" | "alt" | "surface" | "elevated";
}

/**
 * SectionWrapper. Unified section container with consistent
 * vertical rhythm, scroll-margin, and container width.
 */
const SectionWrapper = forwardRef<HTMLElement, Props>(
  ({ children, className = "", id, variant = "default", style, ...rest }, ref) => {
    const bgClass = {
      default: "bg-sv-base",
      alt: "bg-sv-surface",
      surface: "bg-sv-surface",
      elevated: "bg-sv-elevated",
    }[variant];

    return (
      <section
        ref={ref}
        id={id}
        className={cn("section", bgClass, className)}
        style={style}
        {...rest}
      >
        <div className="container">{children}</div>
      </section>
    );
  }
);

SectionWrapper.displayName = "SectionWrapper";
export default SectionWrapper;
