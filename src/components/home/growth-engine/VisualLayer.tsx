"use client";

import { type MotionValue } from "motion/react";
import dynamic from "next/dynamic";
import { SCENES } from "./sceneData";
import SceneVisualGate from "./SceneVisualGate";
import MarketGrid from "./MarketGrid";
import AdsFlow from "./AdsFlow";
import WebsiteWireframe from "./WebsiteWireframe";
import AutomationPipeline from "./AutomationPipeline";
import AuthorityCompound from "./AuthorityCompound";
import SystemDiagram from "./SystemDiagram";

// Heavy R3F bundle — load only on demand
const EngineCore = dynamic(() => import("./EngineCore"), { ssr: false });

interface Props {
  progress: MotionValue<number>;
}

export default function VisualLayer({ progress }: Props) {
  const scene1 = SCENES[0];
  const scene7 = SCENES[6];

  return (
    <div className="growth-engine-visual-host absolute inset-0 z-20">
      {/* EngineCore is special — visible during BOTH scene 1 and scene 7,
          so it manages its own visibility internally rather than going
          through SceneVisualGate. */}
      <EngineCore scene1={scene1} scene7={scene7} progress={progress} />

      <SceneVisualGate index={1} progress={progress}>
        <MarketGrid scene={SCENES[1]} progress={progress} />
      </SceneVisualGate>
      <SceneVisualGate index={2} progress={progress}>
        <AdsFlow scene={SCENES[2]} progress={progress} />
      </SceneVisualGate>
      <SceneVisualGate index={3} progress={progress}>
        <WebsiteWireframe scene={SCENES[3]} progress={progress} />
      </SceneVisualGate>
      <SceneVisualGate index={4} progress={progress}>
        <AutomationPipeline scene={SCENES[4]} progress={progress} />
      </SceneVisualGate>
      <SceneVisualGate index={5} progress={progress}>
        <AuthorityCompound scene={SCENES[5]} progress={progress} />
      </SceneVisualGate>
      <SceneVisualGate index={6} progress={progress}>
        <SystemDiagram scene={SCENES[6]} progress={progress} />
      </SceneVisualGate>
    </div>
  );
}
