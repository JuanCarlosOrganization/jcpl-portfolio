"use client";

import { motion, useTransform, type MotionValue } from "motion/react";
import type { Scene } from "./types";
import { ACCENT_HEX } from "./types";

interface Props {
  scene: Scene;
  progress: MotionValue<number>;
}

const STAGES = [
  { x: 12, label: "LEAD" },
  { x: 32, label: "QUALIFY" },
  { x: 52, label: "ROUTE" },
  { x: 72, label: "FOLLOW UP" },
];

const CHANNELS = [
  { x: 92, y: 54, label: "SMS" },
  { x: 92, y: 62, label: "EMAIL" },
  { x: 92, y: 70, label: "CALL" },
];

interface StageProps {
  local: MotionValue<number>;
  s: (typeof STAGES)[number];
  i: number;
}

function Stage({ local, s, i }: StageProps) {
  const t = i * 0.12;
  const stageProg = useTransform(local, [t, t + 0.2], [0, 1]);
  const yOff = useTransform(stageProg, [0, 1], [3, 0]);
  return (
    <motion.g style={{ opacity: stageProg, y: yOff }}>
      <rect x={s.x} y="58" width="14" height="8" rx="1" fill="rgba(20,16,14,0.85)" stroke="rgba(90,215,255,0.45)" strokeWidth="0.18" />
      <text x={s.x + 7} y="62.8" fontSize="1.5" fill={ACCENT_HEX.cream} textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontWeight="700" letterSpacing="0.15">
        {s.label}
      </text>
    </motion.g>
  );
}

interface PacketProps {
  local: MotionValue<number>;
  delay: number;
}

function Packet({ local, delay }: PacketProps) {
  const t = 0.4 + delay;
  const xPct = useTransform(local, [t, t + 0.35], [12, 92]);
  const op = useTransform(local, [t - 0.05, t, t + 0.3, t + 0.4], [0, 1, 1, 0]);
  return (
    <motion.g style={{ opacity: op }}>
      <motion.circle cx={xPct} cy="62" r="1.2" fill={ACCENT_HEX.cyan} />
      <motion.circle cx={xPct} cy="62" r="2.6" fill={ACCENT_HEX.cyan} opacity="0.25" />
    </motion.g>
  );
}

interface ChannelProps {
  local: MotionValue<number>;
  c: (typeof CHANNELS)[number];
  i: number;
}

function Channel({ local, c, i }: ChannelProps) {
  const t = 0.55 + i * 0.06;
  const prog = useTransform(local, [t, t + 0.2], [0, 1]);
  const x = useTransform(prog, [0, 1], [4, 0]);
  return (
    <motion.g style={{ opacity: prog, x }}>
      <rect x={c.x - 5} y={c.y - 1.8} width="10" height="3.6" rx="1.2" fill="rgba(212,168,83,0.1)" stroke={ACCENT_HEX.gold} strokeOpacity="0.6" strokeWidth="0.12" />
      <text x={c.x} y={c.y + 0.4} fontSize="1.4" fill={ACCENT_HEX.gold} textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontWeight="700" letterSpacing="0.18">
        {c.label}
      </text>
    </motion.g>
  );
}

export default function AutomationPipeline({ scene, progress }: Props) {
  const local = useTransform(progress, [scene.start, scene.end], [0, 1]);
  const trackDash = useTransform(local, [0, 0.4], [120, 0]);
  const aiHaloOp = useTransform(local, [0.3, 1], [0, 0.7]);
  const aiCoreOp = useTransform(local, [0.3, 1], [0, 1]);
  const aiLabelOp = useTransform(local, [0.5, 1], [0, 1]);

  return (
    <motion.svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 z-30 h-full w-full overflow-hidden"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="ap-ai" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={ACCENT_HEX.gold} stopOpacity="1" />
          <stop offset="60%" stopColor={ACCENT_HEX.cyan} stopOpacity="0.4" />
          <stop offset="100%" stopColor={ACCENT_HEX.cyan} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Pipeline track */}
      <motion.line
        x1="12"
        y1="62"
        x2="92"
        y2="62"
        stroke={ACCENT_HEX.cyan}
        strokeWidth="0.25"
        strokeOpacity="0.5"
        strokeDasharray="120"
        style={{ strokeDashoffset: trackDash }}
      />

      {/* AI receptionist core, behind everything else */}
      <motion.circle cx="52" cy="32" r="11" fill="url(#ap-ai)" style={{ opacity: aiHaloOp }} />
      <motion.circle cx="52" cy="32" r="3" fill={ACCENT_HEX.gold} style={{ opacity: aiCoreOp }} />
      <motion.text
        x="52"
        y="47"
        fontSize="1.8"
        fill={ACCENT_HEX.gold}
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui"
        fontWeight="700"
        letterSpacing="0.25"
        style={{ opacity: aiLabelOp }}
      >
        AI RECEPTIONIST
      </motion.text>

      {/* Stages */}
      {STAGES.map((s, i) => (
        <Stage key={s.label} local={local} s={s} i={i} />
      ))}

      {/* Packets moving along pipeline */}
      <Packet local={local} delay={0} />
      <Packet local={local} delay={0.08} />
      <Packet local={local} delay={0.16} />

      {/* Channels */}
      {CHANNELS.map((c, i) => (
        <Channel key={c.label} local={local} c={c} i={i} />
      ))}

      {/* Connection lines from stages to AI */}
      {STAGES.map((s, i) => {
        const t = 0.18 + i * 0.05;
        return <ConnectorLine key={`conn-${i}`} local={local} sx={s.x + 7} t={t} />;
      })}
    </motion.svg>
  );
}

interface ConnectorProps {
  local: MotionValue<number>;
  sx: number;
  t: number;
}

function ConnectorLine({ local, sx, t }: ConnectorProps) {
  const dash = useTransform(local, [t, t + 0.25], [60, 0]);
  const op = useTransform(local, [t, t + 0.1], [0, 0.55]);
  return (
    <motion.path
      d={`M ${sx} 58 Q ${sx} 44, 52 35`}
      stroke={ACCENT_HEX.gold}
      strokeWidth="0.15"
      fill="none"
      strokeDasharray="60"
      strokeLinecap="round"
      style={{ strokeDashoffset: dash, opacity: op }}
    />
  );
}
