"use client";

import { memo } from "react";
import "./particle-field.css";

/**
 * Lightweight CSS-only floating particles for depth behind the laser beam.
 * Uses pseudo-random positioning via CSS custom properties. No JS runtime cost.
 */
const PARTICLE_COUNT = 24;

const ParticleField = memo(function ParticleField() {
  return (
    <div className="pf" aria-hidden="true">
      {Array.from({ length: PARTICLE_COUNT }).map((_, i) => (
        <span
          key={i}
          className="pf-dot"
          style={
            {
              "--pf-x": `${10 + ((i * 37) % 80)}%`,
              "--pf-y": `${5 + ((i * 53) % 90)}%`,
              "--pf-size": `${1 + (i % 3)}px`,
              "--pf-delay": `${(i * 0.4) % 8}s`,
              "--pf-dur": `${4 + (i % 5)}s`,
              "--pf-opacity": `${0.15 + (i % 4) * 0.08}`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
});

export default ParticleField;
