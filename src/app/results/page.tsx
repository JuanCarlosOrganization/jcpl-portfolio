import type { Metadata } from "next";
import ResultsPageContent from "@/components/results/ResultsPageContent";

export const metadata: Metadata = {
  title: "Results. Client Growth",
  description: "Verified results from real client accounts. $41,085 in revenue from $900 in ad spend. See what the acquisition system produces.",
};

export default function ResultsPage() {
  return <ResultsPageContent />;
}
