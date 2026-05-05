"use client";

export default function Mock3ConvertingSite() {
  return (
    <div
      className="absolute inset-0 rounded-[12px] overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, rgba(30,26,20,0.94) 0%, rgba(40,33,22,0.94) 100%)",
        border: "1px solid rgba(212, 168, 83, 0.12)",
      }}
    >
      <div className="absolute inset-0 flex flex-col">
        <div
          className="flex items-center gap-1.5 px-3 py-2"
          style={{ borderBottom: "1px solid rgba(212, 168, 83, 0.08)" }}
        >
          <span className="w-2 h-2 rounded-full" style={{ background: "rgba(212,168,83,0.35)" }} />
          <span className="w-2 h-2 rounded-full" style={{ background: "rgba(212,168,83,0.22)" }} />
          <span className="w-2 h-2 rounded-full" style={{ background: "rgba(212,168,83,0.14)" }} />
          <div
            className="ml-3 flex-1 rounded-full px-3 py-1 text-[10px]"
            style={{
              background: "rgba(13,11,9,0.6)",
              color: "var(--text-muted, #A69D8D)",
              border: "1px solid rgba(212, 168, 83, 0.08)",
            }}
          >
            clientgrowth.ca
          </div>
        </div>

        <div className="flex-1 p-5 flex flex-col gap-4">
          <div
            className="text-[9px] font-medium tracking-[0.18em] uppercase"
            style={{ color: "var(--brand-accent)" }}
          >
            Above the fold
          </div>

          <div className="space-y-1.5">
            <div
              className="h-2.5 rounded-full"
              style={{ background: "rgba(245, 240, 232, 0.55)", width: "85%" }}
            />
            <div
              className="h-2.5 rounded-full"
              style={{ background: "rgba(245, 240, 232, 0.35)", width: "65%" }}
            />
          </div>

          <div className="space-y-1">
            <div
              className="h-1.5 rounded-full"
              style={{ background: "rgba(210, 201, 184, 0.25)", width: "92%" }}
            />
            <div
              className="h-1.5 rounded-full"
              style={{ background: "rgba(210, 201, 184, 0.22)", width: "78%" }}
            />
          </div>

          <div className="flex items-center gap-2 mt-auto">
            <div
              className="px-3 py-1.5 rounded-[8px] text-[10px] font-semibold"
              style={{
                background: "var(--brand-accent)",
                color: "#1E1A14",
                boxShadow: "0 4px 16px rgba(212, 168, 83, 0.3)",
              }}
            >
              Book a call
            </div>
            <div
              className="text-[10px]"
              style={{ color: "var(--text-muted, #A69D8D)" }}
            >
              No obligation
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <StatChip label="Conv. Rate" value="4.8%" />
            <StatChip label="Book rate" value="38%" />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatChip({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="rounded-[8px] px-2.5 py-1.5"
      style={{
        background: "rgba(13, 11, 9, 0.55)",
        border: "1px solid rgba(212, 168, 83, 0.10)",
      }}
    >
      <div
        className="text-[9px] tracking-wide uppercase mb-0.5"
        style={{ color: "var(--text-muted, #A69D8D)" }}
      >
        {label}
      </div>
      <div
        className="font-serif text-[16px] leading-none"
        style={{ color: "var(--text-primary)" }}
      >
        {value}
      </div>
    </div>
  );
}
