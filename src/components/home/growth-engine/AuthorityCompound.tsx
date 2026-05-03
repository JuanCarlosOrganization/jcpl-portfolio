"use client";

import { motion, useTransform, type MotionValue } from "motion/react";
import type { Scene } from "./types";
import { ACCENT_HEX } from "./types";

interface Props {
  scene: Scene;
  progress: MotionValue<number>;
}

const KEYWORDS = [
  { label: "dentist montreal", base: 75, peak: 18 },
  { label: "ac repair", base: 78, peak: 25 },
  { label: "rv rental laval", base: 82, peak: 32 },
  { label: "hvac contractor", base: 85, peak: 38 },
];

const ORBIT_NODES = [
  { angle: 30, label: "GBP" },
  { angle: 90, label: "SCHEMA" },
  { angle: 150, label: "REVIEWS" },
  { angle: 210, label: "CITATIONS" },
  { angle: 270, label: "CONTENT" },
  { angle: 330, label: "BACKLINKS" },
];

interface KeywordLineProps {
  local: MotionValue<number>;
  k: (typeof KEYWORDS)[number];
  i: number;
}

function KeywordLine({ local, k, i }: KeywordLineProps) {
  const t = 0.1 + i * 0.08;
  const lineProg = useTransform(local, [t, t + 0.5], [0, 1]);
  // Path: from x=58 (left edge of chart) at base y, rising to x=98 at peak y
  const dash = useTransform(lineProg, [0, 1], [200, 0]);
  const op = useTransform(lineProg, [0, 0.2, 1], [0, 1, 0.85]);
  const labelOp = useTransform(lineProg, [0.3, 1], [0, 1]);

  return (
    <motion.g style={{ opacity: op }}>
      <motion.path
        d={`M 58 ${k.base} Q 75 ${k.base - (k.base - k.peak) * 0.15}, 88 ${k.peak + (k.base - k.peak) * 0.35} T 98 ${k.peak}`}
        stroke={ACCENT_HEX.gold}
        strokeWidth="0.4"
        fill="none"
        strokeDasharray="200"
        strokeLinecap="round"
        style={{ strokeDashoffset: dash }}
      />
      <motion.circle cx="98" cy={k.peak} r="0.9" fill={ACCENT_HEX.gold} />
      <motion.text
        x="60"
        y={k.base - 0.8}
        fontSize="1.3"
        fill="rgba(245,240,232,0.7)"
        fontFamily="ui-monospace, monospace"
        style={{ opacity: labelOp }}
      >
        {k.label}
      </motion.text>
    </motion.g>
  );
}

interface OrbitNodeProps {
  local: MotionValue<number>;
  n: (typeof ORBIT_NODES)[number];
  i: number;
}

function OrbitNode({ local, n, i }: OrbitNodeProps) {
  const cx = 50;
  const cy = 50;
  const r = 18;
  const rad = (n.angle * Math.PI) / 180;
  const x = cx + r * Math.cos(rad);
  const y = cy + r * Math.sin(rad);

  const t = 0.25 + i * 0.05;
  const prog = useTransform(local, [t, t + 0.2], [0, 1]);
  const scale = useTransform(prog, [0, 1], [0, 1]);

  return (
    <motion.g style={{ opacity: prog }}>
      <motion.circle cx={x} cy={y} r="2.2" fill="rgba(212,168,83,0.18)" stroke={ACCENT_HEX.gold} strokeWidth="0.15" style={{ scale, originX: `${x}%`, originY: `${y}%` }} />
      <motion.text
        x={x}
        y={y + 0.4}
        fontSize="0.95"
        fill={ACCENT_HEX.gold}
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui"
        fontWeight="700"
        letterSpacing="0.12"
      >
        {n.label}
      </motion.text>
    </motion.g>
  );
}

export default function AuthorityCompound({ scene, progress }: Props) {
  const local = useTransform(progress, [scene.start, scene.end], [0, 1]);
  const ringOp = useTransform(local, [0.05, 0.4], [0, 0.5]);
  const coreOp = useTransform(local, [0.05, 0.3], [0, 1]);
  const coreLabelOp = useTransform(local, [0.15, 0.5], [0, 1]);

  return (
    <motion.svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 z-30 h-full w-full overflow-x-hidden"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="auth-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={ACCENT_HEX.gold} stopOpacity="0.95" />
          <stop offset="100%" stopColor={ACCENT_HEX.gold} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Authority core (centered) */}
      <motion.circle cx="50" cy="50" r="9" fill="url(#auth-core)" style={{ opacity: coreOp }} />
      <motion.circle cx="50" cy="50" r="2.8" fill={ACCENT_HEX.gold} style={{ opacity: coreOp }} />

      {/* Orbital ring */}
      <motion.circle cx="50" cy="50" r="18" fill="none" stroke={ACCENT_HEX.gold} strokeWidth="0.1" strokeDasharray="0.6 1.4" style={{ opacity: ringOp }} />

      <motion.text
        x="50"
        y="78"
        fontSize="1.6"
        fill={ACCENT_HEX.gold}
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui"
        fontWeight="700"
        letterSpacing="0.25"
        style={{ opacity: coreLabelOp }}
      >
        BRAND AUTHORITY
      </motion.text>

      {/* Orbit nodes */}
      {ORBIT_NODES.map((n, i) => (
        <OrbitNode key={n.label} local={local} n={n} i={i} />
      ))}

      {/* Chart axes (right side) */}
      <line x1="58" y1="14" x2="58" y2="90" stroke="rgba(245,240,232,0.15)" strokeWidth="0.1" />
      <line x1="58" y1="90" x2="98" y2="90" stroke="rgba(245,240,232,0.15)" strokeWidth="0.1" />
      <text x="58" y="11" fontSize="1.2" fill="rgba(245,240,232,0.4)" fontFamily="ui-monospace, monospace" letterSpacing="0.15">
        RANK ↑
      </text>
      <text x="78" y="94" fontSize="1.2" fill="rgba(245,240,232,0.4)" fontFamily="ui-monospace, monospace" textAnchor="middle" letterSpacing="0.15">
        TIME →
      </text>

      {/* Rising rank lines */}
      {KEYWORDS.map((k, i) => (
        <KeywordLine key={k.label} local={local} k={k} i={i} />
      ))}

      {/* Map pin cluster (small accent at top right) */}
      <motion.g style={{ opacity: useTransform(local, [0.55, 1], [0, 1]) }}>
        <text x="78" y="22" fontSize="1.1" fill="rgba(245,240,232,0.5)" fontFamily="ui-monospace, monospace" letterSpacing="0.15" textAnchor="middle">
          LOCAL PACK
        </text>
        <g transform="translate(72,16)">
          <path d="M 0 0 C -1.5 0, -2.5 1.2, -2.5 2.5 C -2.5 4.5, 0 7, 0 7 C 0 7, 2.5 4.5, 2.5 2.5 C 2.5 1.2, 1.5 0, 0 0 Z" fill={ACCENT_HEX.gold} />
        </g>
        <g transform="translate(78,15)">
          <path d="M 0 0 C -1.5 0, -2.5 1.2, -2.5 2.5 C -2.5 4.5, 0 7, 0 7 C 0 7, 2.5 4.5, 2.5 2.5 C 2.5 1.2, 1.5 0, 0 0 Z" fill={ACCENT_HEX.gold} />
        </g>
        <g transform="translate(84,16)">
          <path d="M 0 0 C -1.5 0, -2.5 1.2, -2.5 2.5 C -2.5 4.5, 0 7, 0 7 C 0 7, 2.5 4.5, 2.5 2.5 C 2.5 1.2, 1.5 0, 0 0 Z" fill={ACCENT_HEX.gold} />
        </g>
      </motion.g>
    </motion.svg>
  );
}
