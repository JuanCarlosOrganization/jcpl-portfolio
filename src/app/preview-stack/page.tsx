import CaseStudyStackScroll from "@/components/home/CaseStudyStackScroll";

export const metadata = { title: "Preview — Stack Scroll" };

export default function PreviewStackPage() {
  return (
    <main style={{ background: "#0D0B09", minHeight: "100vh" }}>
      <div style={{ height: "20vh" }} />
      <CaseStudyStackScroll />
      <div style={{ height: "30vh" }} />
    </main>
  );
}
