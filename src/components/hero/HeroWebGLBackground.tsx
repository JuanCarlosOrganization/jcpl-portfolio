"use client";

import { useEffect, useRef } from "react";

const SDK_URL =
	"/unicornStudio.umd.js";
const SCRIPT_ID = "unicornstudio-embed";
const PROJECT_ID = "UykNLkYklTyqyIZODvIi";

/**
 * Renders a Unicorn Studio WebGL scene as a full-bleed cover background.
 *
 * - Client-only: no `window` usage outside useEffect
 * - Init logic mirrors the official embed snippet exactly
 * - Script dedup: checks window.UnicornStudio sentinel + DOM script id
 * - Cover behavior: CSS forces canvas to fill container; scale(1.06) on project div
 * - Non-blocking: script loads after hydration
 * - Reduced motion: skips WebGL init; CSS shows static gradient fallback
 */
export default function HeroWebGLBackground() {
	const wrapRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (typeof window === "undefined") return;

		// Skip WebGL for users who prefer reduced motion (fallback gradient shown via CSS)
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		const w = window as any;

		// Mirror the official Unicorn Studio embed snippet
		const u = w.UnicornStudio;
		if (u && u.init) {
			// SDK already loaded. Call init immediately or after DOM ready
			if (document.readyState === "loading") {
				document.addEventListener("DOMContentLoaded", () => u.init(), { once: true });
			} else {
				u.init();
			}
			return;
		}

		// SDK not yet loaded. Set sentinel and inject script once
		if (!document.getElementById(SCRIPT_ID)) {
			w.UnicornStudio = { isInitialized: false };
			const script = document.createElement("script");
			script.id = SCRIPT_ID;
			script.src = SDK_URL;
			script.onload = () => {
				if (document.readyState === "loading") {
					document.addEventListener(
						"DOMContentLoaded",
						() => w.UnicornStudio.init(),
						{ once: true }
					);
				} else {
					w.UnicornStudio.init();
				}
			};
			(document.head || document.body).appendChild(script);
		}
	}, []);

	return (
		<div ref={wrapRef} className="hero-webgl-wrap" aria-hidden="true">
			{/* Scale(1.06) ensures no letterboxing. Canvas cover via CSS */}
			<div
				data-us-project={PROJECT_ID}
				style={{
					position: "absolute",
					inset: 0,
					width: "100%",
					height: "100%",
					transform: "scale(1.06)",
					transformOrigin: "center center",
				}}
			/>
		</div>
	);
}
