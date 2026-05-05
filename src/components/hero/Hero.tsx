"use client";

import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import HeroWebGLBackground from "./HeroWebGLBackground";
import { DemoCallButton } from "@/components/DemoCallButton";
import { prefersReducedMotion } from "@/lib/motion";
import styles from "./HeroAvatarFrame.module.css";
import "./hero.css";

export default function Hero() {
	const sectionRef = useRef<HTMLElement>(null);
	const frameRef = useRef<HTMLDivElement>(null);
	const headlineRef = useRef<HTMLDivElement>(null);
	const ctaRef = useRef<HTMLDivElement>(null);
	const bgLayerRef = useRef<HTMLDivElement>(null);
	const contentLayerRef = useRef<HTMLDivElement>(null);

	const handleMouseMove = useCallback((e: MouseEvent) => {
		if (prefersReducedMotion()) return;
		const cx = (e.clientX / window.innerWidth - 0.5) * 2;
		const cy = (e.clientY / window.innerHeight - 0.5) * 2;
		const meshX = (e.clientX / window.innerWidth - 0.5) * -18;
		const meshY = (e.clientY / window.innerHeight - 0.5) * -18;

		const mesh = document.querySelector(".gradient-mesh");
		if (mesh) {
			gsap.to(mesh, { x: meshX, y: meshY, duration: 1.2, ease: "power1.out", overwrite: "auto" });
		}

		if (bgLayerRef.current) {
			gsap.to(bgLayerRef.current, {
				x: cx * 6,
				y: cy * 6,
				duration: 1.2,
				ease: "power2.out",
				overwrite: "auto",
			});
		}
		if (contentLayerRef.current) {
			gsap.to(contentLayerRef.current, {
				x: cx * 3,
				y: cy * 3,
				duration: 1.4,
				ease: "power2.out",
				overwrite: "auto",
			});
		}
	}, []);

	useEffect(() => {
		// Skip parallax on touch devices. No mousemove events + saves battery
		if (window.matchMedia("(pointer: coarse)").matches) return;
		window.addEventListener("mousemove", handleMouseMove, { passive: true });
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, [handleMouseMove]);

	useEffect(() => {
		const reduced = prefersReducedMotion();
		if (reduced) {
			document.querySelectorAll(".hero-bridge, .hero-label, .hero-word, .hero-subheadline, .hero-cta-wrapper").forEach((el) => {
				gsap.set(el as HTMLElement, { opacity: 1, y: 0 });
			});
			return;
		}

		const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
		const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

		if (frameRef.current) gsap.set(frameRef.current, { opacity: 1 });

		if (isMobile) {
			// Stagger each element in clearly so the animation reads on mobile
			tl.from(".hero-label", { opacity: 0, y: 6, duration: 0.5, delay: 0.15 })
				.from(".hero-word", { opacity: 0, y: 12, stagger: 0.04, duration: 0.5 }, "-=0.15")
				.from(".hero-subheadline", { opacity: 0, y: 8, duration: 0.5 }, "-=0.15")
				.from(".hero-cta-wrapper", { opacity: 0, y: 8, duration: 0.45 }, "-=0.1")
				.from(".hero-risk-reversal", { opacity: 0, duration: 0.35 }, "-=0.05");
		} else {
			tl.from(".hero-bridge", { opacity: 0, y: 8, duration: 0.5 })
				.from(".hero-label", { opacity: 0, duration: 0.4 }, "-=0.2")
				.from(".hero-word", { opacity: 0, y: 28, stagger: 0.035, duration: 0.55 }, "-=0.1")
				.from(".hero-subheadline", { opacity: 0, y: 10, duration: 0.5 }, "-=0.2")
				.from(".hero-cta-wrapper", { opacity: 0, y: 10, duration: 0.4 }, "-=0.2")
				.from(".hero-risk-reversal", { opacity: 0, duration: 0.3 }, "-=0.1");
		}

		return () => { tl.kill(); };
	}, []);

	return (
		<section
			ref={sectionRef}
			className="cb"
			aria-label="Hero - Growth Infrastructure"
			style={{ minHeight: "90vh", background: "#0D0B09" }}
		>
			<div className="cb-ambient gradient-mesh" aria-hidden="true" />

			<div ref={frameRef} className={`cb-frame ${styles.frame}`}>
				<div ref={bgLayerRef} className="cb-layer cb-layer--bg" aria-hidden="true">
					<HeroWebGLBackground />
				</div>
				<div className="cb-layer cb-overlay-top" aria-hidden="true" />
				<div className="cb-layer cb-overlay-vignette" aria-hidden="true" />
				<div className="cb-layer cb-grain" aria-hidden="true" />

				<div ref={contentLayerRef} className="cb-content-wrap">
					<div className="cb-content" style={{ maxWidth: 720 }}>
						<p
							className="hero-label"
							style={{
								fontSize: "0.7rem",
								letterSpacing: "0.15em",
								textTransform: "uppercase",
								color: "#D4A853",
								margin: 0,
								marginBottom: 12,
								marginTop: -24,
							}}
						>
							GROWTH INFRASTRUCTURE FOR LOCAL SERVICE BUSINESSES
						</p>

						<p
							className="hero-bridge"
							style={{
								fontSize: "0.95rem",
								color: "#756D63",
								fontStyle: "italic",
								margin: "0 0 28px",
							}}
						>
							You got my email. Here is the proof behind it.
						</p>

						<h1
							ref={headlineRef}
							className="cb-headline hero-headline"
							style={{
								fontSize: "clamp(2rem, 5vw, 3rem)",
								color: "#F5F0E8",
								lineHeight: 1.2,
								marginBottom: 8,
							}}
						>
							{["$41,085", "in", "revenue", "from", "$900", "in", "ad", "spend."].map((word, i) => (
								<span key={i} className="hero-word" style={{ display: "inline-block", marginRight: "0.25em", fontWeight: 800 }}>
									{word}
								</span>
							))}
							<span className="hero-word" style={{ display: "inline-block", marginRight: "0.25em", fontFamily: "var(--font-playfair), DM Serif Display, Georgia, serif", fontStyle: "italic", fontWeight: 400 }}>
								In 30 days.
							</span>
						</h1>

						<p
							className="hero-subheadline"
							style={{
								fontSize: "1.125rem",
								color: "#A69D8D",
								maxWidth: 640,
								margin: "0 auto 40px",
								textAlign: "center",
								lineHeight: 1.6,
							}}
						>
							I build the full growth system: site, ads, SEO, call tracking. So
							local service businesses stop paying for clicks and start getting
							booked calls. One person. One pipeline.
						</p>

						<div ref={ctaRef} className="cb-cta-wrap hero-cta-wrapper" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
							<DemoCallButton
								label="Apply to be a Partner"
								href="/apply"
							/>
							<span className="demo-cta-risk">
								If I cannot produce a return, I will tell you on the call. Before you pay anything.
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
