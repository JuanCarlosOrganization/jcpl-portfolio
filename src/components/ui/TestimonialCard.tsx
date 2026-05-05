"use client";

interface TestimonialCardProps {
  quote: string;
  name: string;
  business: string;
  city: string;
}

export default function TestimonialCard({ quote, name, business, city }: TestimonialCardProps) {
  return (
    <div
      className="rounded-lg p-5"
      style={{
        background: "rgba(212,168,83,0.04)",
        borderLeft: "2px solid #D4A853",
      }}
    >
      <p
        className="text-[14px] italic leading-[1.65]"
        style={{ color: "#D2C9B8" }}
      >
        &ldquo;{quote}&rdquo;
      </p>
      <p className="text-[12px] mt-3" style={{ color: "#756D63" }}>
       . {name}, {business} · {city}
      </p>
    </div>
  );
}
