"use client";

import dynamic from "next/dynamic";

const SystemPerspectiveCarousel = dynamic(
  () => import("@/components/home/SystemPerspectiveCarousel"),
  { ssr: false },
);

export default function Preview3DPage() {
  return (
    <main style={{ background: "#0A0907", minHeight: "100vh" }}>
      <div style={{ height: "20vh" }} />
      <SystemPerspectiveCarousel />
      <div style={{ height: "20vh" }} />
    </main>
  );
}
