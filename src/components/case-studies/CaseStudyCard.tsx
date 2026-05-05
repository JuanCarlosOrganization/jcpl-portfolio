"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CaseStudy } from "@/content/caseStudies";
import FrozenWebsitePreview from "./FrozenWebsitePreview";

function PulseDot({ size = 6 }: { size?: number }) {
  return (
    <span
      className="inline-block rounded-full bg-sv-primary"
      style={{
        width: size,
        height: size,
        animation: "pulseDot 2s ease-in-out infinite",
      }}
    />
  );
}

export default function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/results/${cs.caseStudySlug}`);
  };

  return (
    <div
      className="bg-sv-surface border border-[rgba(212,168,83,0.12)] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-[rgba(212,168,83,0.35)] hover:-translate-y-[2px]"
      onClick={handleCardClick}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") handleCardClick();
      }}
    >
      {/* Preview */}
      <div className="border-b border-[rgba(212,168,83,0.08)]">
        <FrozenWebsitePreview
          logoUrl={cs.logoUrl}
          websiteUrl={cs.websiteUrl}
          title={cs.title}
          metricsImageUrl={cs.metricsImageUrl}
          onClickOverride={handleCardClick}
        />
      </div>

      {/* Card body */}
      <div className="p-6">
        {/* Industry overline */}
        <div className="text-[10px] uppercase tracking-[0.12em] text-sv-text-sub mb-2">
          {cs.industry}
        </div>

        {/* Title */}
        <div className="text-[18px] font-bold text-white mb-2 tracking-[-0.01em]">
          {cs.title}
        </div>

        {/* Outcome */}
        <div className="text-[14px] text-[rgba(255,255,255,0.55)] leading-[1.55] mb-4">
          {cs.outcome}
        </div>

        {/* Result tag. Brand colors */}
        {cs.resultTag && (
          <div className="mb-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[rgba(212,168,83,0.07)] border border-[rgba(212,168,83,0.18)] w-fit">
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4A853]/70" />
            <span className="text-[11px] text-[rgba(212,168,83,0.8)]">{cs.resultTag}</span>
          </div>
        )}

        {/* Live status badge. Active builds */}
        {cs.inProgress && (
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 bg-[rgba(212,168,83,0.08)] border border-[rgba(212,168,83,0.2)] rounded-full px-[14px] py-[5px]">
              <PulseDot />
              <span className="text-[12px] text-sv-primary font-medium">
                System live
              </span>
            </span>
          </div>
        )}

        {/* Metrics pills */}
        {!cs.inProgress && cs.metrics.length > 0 && (
          <div className="flex gap-2 flex-wrap mb-5">
            {cs.metrics.map((m) => (
              <span
                key={m.label}
                className="bg-[rgba(212,168,83,0.08)] border border-[rgba(212,168,83,0.18)] rounded-full px-3 py-[3px] flex items-center"
              >
                <span className="text-[12px] font-bold text-white">
                  {m.value}
                </span>
                <span className="text-[11px] text-sv-text-sub ml-1.5">
                  {m.label}
                </span>
              </span>
            ))}
          </div>
        )}

        {/* CTA row. Clean hierarchy, no button stacking */}
        <div
          className="flex items-center gap-4 pt-4 mt-auto"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <Link
            href={`/results/${cs.caseStudySlug}`}
            className="text-[13px] font-semibold text-[#D4A853] hover:text-[#C49A2A] transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            View case study →
          </Link>

          {cs.id === "triple-w-rentals" ? (
            <span className="text-[13px] text-[rgba(255,255,255,0.25)] ml-auto">
              In progress
            </span>
          ) : cs.websiteUrl ? (
            <a
              href={cs.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-[rgba(255,255,255,0.3)] hover:text-[rgba(255,255,255,0.6)] transition-colors ml-auto"
              onClick={(e) => e.stopPropagation()}
            >
              Live site ↗
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
