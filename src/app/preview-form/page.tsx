import DiagnosticFormLinear from "@/components/home/DiagnosticFormLinear";

export const metadata = { title: "Preview. Diagnostic Form" };

export default function PreviewFormPage() {
  return (
    <main style={{ background: "#0D0B09", minHeight: "100vh" }}>
      <DiagnosticFormLinear />
    </main>
  );
}
