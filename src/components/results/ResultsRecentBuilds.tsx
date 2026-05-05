"use client";

import { useRouter } from "next/navigation";
import { CaseStudy } from "@/content/caseStudies";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";

export default function ResultsRecentBuilds({ studies }: { studies: CaseStudy[] }) {
  return (
    <section
      className="py-16 md:py-20"
      style={{ background: "#0D0B09" }}
    >
      <div className="max-w-[1120px] mx-auto px-6">
        <h3 className="text-[13px] uppercase tracking-[0.14em] text-[#D4A853] text-center mb-10">
          Recently delivered. Performance tracking in progress
        </h3>

        <div className="grid gap-5 md:gap-7 grid-cols-1 md:grid-cols-3">
          {studies.map((cs) => (
            <CaseStudyCard key={cs.id} cs={cs} />
          ))}
        </div>
      </div>
    </section>
  );
}
