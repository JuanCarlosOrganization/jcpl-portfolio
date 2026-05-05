import Script from "next/script";

/**
 * ClarityScript. Mounts the Microsoft Clarity session recording and
 * heatmapping SDK globally.
 *
 * Configuration: set NEXT_PUBLIC_CLARITY_PROJECT_ID in your environment.
 * The component renders nothing if the env var is absent, so it is
 * safe in all environments where Clarity is not configured.
 *
 * Loading strategy: lazyOnload. Defers until the page is idle so it
 * does not affect LCP, FID, or any critical rendering path.
 */
export default function ClarityScript() {
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

  // Bail silently. No crash, no console noise in environments without Clarity
  if (!clarityId) return null;

  // Project IDs are alphanumeric. Strip anything else as a safety guard
  const safeId = clarityId.replace(/[^a-zA-Z0-9]/g, "");
  if (!safeId) return null;

  return (
    <Script id="microsoft-clarity" strategy="lazyOnload">
      {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window,document,"clarity","script","${safeId}");`}
    </Script>
  );
}
