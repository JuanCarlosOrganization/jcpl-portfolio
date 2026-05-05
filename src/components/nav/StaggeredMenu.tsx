'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from "next/image";
import { gsap } from 'gsap';
import { useLenis } from '@/context/LenisContext';
import './StaggeredMenu.css';

export interface StaggeredMenuItem {
  label: string;
  ariaLabel: string;
  link: string;
  onClick?: () => void;
  isCta?: boolean;
}

export interface StaggeredMenuProps {
  position?: 'left' | 'right';
  colors?: string[];
  items?: StaggeredMenuItem[];
  displayItemNumbering?: boolean;
  className?: string;
  logoUrl?: string;
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  accentColor?: string;
  changeMenuColorOnOpen?: boolean;
  closeOnClickAway?: boolean;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
  isFixed?: boolean;
  languageSwitcher?: React.ReactNode;
  languageSwitcherPanel?: React.ReactNode;
  menuLabel?: string;
  closeLabel?: string;
}

export const StaggeredMenu: React.FC<StaggeredMenuProps> = ({
  position = 'right',
  colors = ['#B19EEF', '#5227FF'],
  items = [],
  displayItemNumbering = true,
  className,
  logoUrl,
  menuButtonColor = '#fff',
  openMenuButtonColor = '#fff',
  accentColor = '#5227FF',
  changeMenuColorOnOpen = true,
  isFixed = false,
  closeOnClickAway: closeOnClickAwayProp = true,
  onMenuOpen,
  onMenuClose,
  languageSwitcher,
  languageSwitcherPanel = languageSwitcher,
  menuLabel = 'Menu',
  closeLabel = 'Close',
}) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const openRef = useRef(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const preLayersRef = useRef<HTMLDivElement | null>(null);
  const preLayerElsRef = useRef<HTMLElement[]>([]);
  const plusHRef = useRef<HTMLSpanElement | null>(null);
  const plusVRef = useRef<HTMLSpanElement | null>(null);
  const iconRef = useRef<HTMLSpanElement | null>(null);
  const textInnerRef = useRef<HTMLSpanElement | null>(null);
  const textWrapRef = useRef<HTMLSpanElement | null>(null);
  const [textLines, setTextLines] = useState<string[]>([menuLabel]);

  const openTlRef = useRef<gsap.core.Timeline | null>(null);
  const closeTweenRef = useRef<gsap.core.Tween | null>(null);
  const spinTweenRef = useRef<gsap.core.Tween | null>(null);
  const textCycleAnimRef = useRef<gsap.core.Tween | null>(null);
  const colorTweenRef = useRef<gsap.core.Tween | null>(null);
  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);
  const busyRef = useRef(false);
  const initDone = useRef(false);
  const scrollLockRef = useRef<{ y: number; active: boolean }>({ y: 0, active: false });

  const lenisRef = useLenis();
  const headerRef = useRef<HTMLElement | null>(null);

  const offscreen = position === 'left' ? -100 : 100;

  /* ─── Sticky scroll effect ─── */
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.85) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ─── iOS-safe scroll lock helpers ─── */
  const lockScroll = useCallback(() => {
    if (scrollLockRef.current.active) return;
    const lenis = lenisRef.current;
    const y = lenis ? lenis.scroll : window.scrollY;
    scrollLockRef.current = { y, active: true };
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${y}px`;
    document.body.style.width = '100%';
    lenis?.stop();
  }, [lenisRef]);

  const unlockScroll = useCallback(() => {
    if (!scrollLockRef.current.active) return;
    const { y } = scrollLockRef.current;
    scrollLockRef.current.active = false;
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    const lenis = lenisRef.current;
    if (lenis) {
      lenis.scrollTo(y, { immediate: true });
      lenis.start();
    } else {
      window.scrollTo(0, y);
    }
  }, [lenisRef]);

  /* ─── Helper: get prelayer elements ─── */
  const getPrelayers = useCallback((): HTMLElement[] => {
    const container = preLayersRef.current;
    if (!container) return [];
    return Array.from(container.querySelectorAll('.sm-prelayer')) as HTMLElement[];
  }, []);

  /* ─── Initialize GSAP state on mount (no gsap.context!) ─── */
  useEffect(() => {
    if (!panelRef.current || !preLayersRef.current) return;

    const panel = panelRef.current;
    const preContainer = preLayersRef.current;
    const plusH = plusHRef.current;
    const plusV = plusVRef.current;
    const icon = iconRef.current;
    const textInner = textInnerRef.current;
    if (!panel || !plusH || !plusV || !icon || !textInner) return;

    let preLayers: HTMLElement[] = [];
    if (preContainer) {
      preLayers = Array.from(preContainer.querySelectorAll('.sm-prelayer')) as HTMLElement[];
    }
    preLayerElsRef.current = preLayers;

    const offscreen = position === 'left' ? -100 : 100;
    gsap.set([panel, ...preLayers], { xPercent: offscreen });
    gsap.set(plusH, { transformOrigin: '50% 50%', rotate: 0 });
    gsap.set(plusV, { transformOrigin: '50% 50%', rotate: 90 });
    gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' });
    gsap.set(textInner, { yPercent: 0 });
    if (toggleBtnRef.current) gsap.set(toggleBtnRef.current, { color: menuButtonColor });

    initDone.current = true; // Mark as initialized
  }, [menuButtonColor, position]);

  /* ─── Build open timeline ─── */
  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current;
    if (!panel) return null;

    // Kill any existing animations
    openTlRef.current?.kill();
    closeTweenRef.current?.kill();
    closeTweenRef.current = null;

    const layers = getPrelayers();
    const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel')) as HTMLElement[];
    const numberEls = Array.from(
      panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item')
    ) as HTMLElement[];

    // Ensure everything starts offscreen (critical for reliability)
    gsap.set([panel, ...layers], { xPercent: offscreen, force3D: true });

    // Reset items to pre-animation state
    if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });
    if (numberEls.length) gsap.set(numberEls, { '--sm-num-opacity': 0 } as gsap.TweenVars);

    const tl = gsap.timeline({ paused: true });

    // Slide prelayers in with stagger
    layers.forEach((el, i) => {
      tl.fromTo(
        el,
        { xPercent: offscreen },
        { xPercent: 0, duration: 0.5, ease: 'power4.out' },
        i * 0.07
      );
    });

    // Slide main panel in
    const lastLayerTime = layers.length ? (layers.length - 1) * 0.07 : 0;
    const panelInsertTime = lastLayerTime + (layers.length ? 0.08 : 0);
    const panelDuration = 0.65;
    tl.fromTo(
      panel,
      { xPercent: offscreen },
      { xPercent: 0, duration: panelDuration, ease: 'power4.out' },
      panelInsertTime
    );

    // Stagger item label entrances
    if (itemEls.length) {
      const itemsStart = panelInsertTime + panelDuration * 0.15;
      tl.to(
        itemEls,
        {
          yPercent: 0,
          rotate: 0,
          duration: 1,
          ease: 'power4.out',
          stagger: { each: 0.1, from: 'start' },
        },
        itemsStart
      );
      if (numberEls.length) {
        tl.to(
          numberEls,
          {
            duration: 0.6,
            ease: 'power2.out',
            '--sm-num-opacity': 1,
            stagger: { each: 0.08, from: 'start' },
          } as gsap.TweenVars,
          itemsStart + 0.1
        );
      }
    }

    openTlRef.current = tl;
    return tl;
  }, [offscreen, getPrelayers]);

  /* ─── Play open ─── */
  const playOpen = useCallback(() => {
    busyRef.current = true;
    lockScroll();
    const tl = buildOpenTimeline();
    if (tl) {
      tl.eventCallback('onComplete', () => {
        busyRef.current = false;
      });
      tl.play(0);
    } else {
      busyRef.current = false;
    }
  }, [buildOpenTimeline, lockScroll]);

  /* ─── Play close ─── */
  const playClose = useCallback(() => {
    openTlRef.current?.kill();
    openTlRef.current = null;

    const panel = panelRef.current;
    if (!panel) return;

    const layers = getPrelayers();
    const all = [...layers, panel];

    closeTweenRef.current?.kill();
    closeTweenRef.current = gsap.to(all, {
      xPercent: offscreen,
      duration: 0.32,
      ease: 'power3.in',
      overwrite: 'auto',
      onComplete: () => {
        // Reset inner elements for next open
        const itemEls = panel.querySelectorAll('.sm-panel-itemLabel');
        if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });
        const nums = panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item');
        if (nums.length) gsap.set(nums, { '--sm-num-opacity': 0 } as gsap.TweenVars);
        // Unlock scroll AFTER animation completes. Prevents iOS scroll position jump
        unlockScroll();
        busyRef.current = false;
      },
    });
  }, [offscreen, getPrelayers, unlockScroll]);

  /* ─── Animate icon (plus → X) ─── */
  const animateIcon = useCallback((opening: boolean) => {
    const icon = iconRef.current;
    if (!icon) return;
    spinTweenRef.current?.kill();
    spinTweenRef.current = gsap.to(icon, {
      rotate: opening ? 225 : 0,
      duration: opening ? 0.8 : 0.35,
      ease: opening ? 'power4.out' : 'power3.inOut',
      overwrite: 'auto',
    });
  }, []);

  /* ─── Animate button color ─── */
  const animateColor = useCallback(
    (opening: boolean) => {
      const btn = toggleBtnRef.current;
      if (!btn) return;
      colorTweenRef.current?.kill();
      if (changeMenuColorOnOpen) {
        colorTweenRef.current = gsap.to(btn, {
          color: opening ? openMenuButtonColor : menuButtonColor,
          delay: 0.18,
          duration: 0.3,
          ease: 'power2.out',
        });
      } else {
        gsap.set(btn, { color: menuButtonColor });
      }
    },
    [openMenuButtonColor, menuButtonColor, changeMenuColorOnOpen]
  );

  /* ─── Animate text cycling ─── */
  const animateText = useCallback((opening: boolean) => {
    const inner = textInnerRef.current;
    if (!inner) return;
    textCycleAnimRef.current?.kill();

    const currentLabel = opening ? menuLabel : closeLabel;
    const targetLabel = opening ? closeLabel : menuLabel;
    const seq = [currentLabel, targetLabel, currentLabel, targetLabel];

    setTextLines(seq);
    gsap.set(inner, { yPercent: 0 });

    const finalShift = ((seq.length - 1) / seq.length) * 100;
    textCycleAnimRef.current = gsap.to(inner, {
      yPercent: -finalShift,
      duration: 0.45,
      ease: 'power4.out',
      onComplete: () => {
        setTextLines([targetLabel]);
        gsap.set(inner, { yPercent: 0 });
      },
    });
  }, [menuLabel, closeLabel]);

  /* ─── Toggle menu ─── */
  const toggleMenu = useCallback(() => {
    if (busyRef.current) return;
    const target = !openRef.current;
    openRef.current = target;
    setOpen(target);

    if (target) {
      onMenuOpen?.();
      playOpen();
    } else {
      onMenuClose?.();
      playClose();
    }

    animateIcon(target);
    animateColor(target);
    animateText(target);
  }, [playOpen, playClose, animateIcon, animateColor, animateText, onMenuOpen, onMenuClose]);

  /* ─── Close menu (used by links, ESC, click-away) ─── */
  const closeMenu = useCallback(() => {
    if (!openRef.current) return;
    openRef.current = false;
    setOpen(false);
    onMenuClose?.();
    playClose();
    animateIcon(false);
    animateColor(false);
    animateText(false);
  }, [playClose, animateIcon, animateColor, animateText, onMenuClose]);

  /* ─── ESC key closes ─── */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && openRef.current) closeMenu();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [closeMenu]);

  /* ─── Close on click away ─── */
  useEffect(() => {
    if (!closeOnClickAwayProp || !open) return;
    const handler = (e: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(e.target as Node)
      ) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [closeOnClickAwayProp, open, closeMenu]);

  /* ─── Ensure scroll is unlocked on unmount (safety net) ─── */
  useEffect(() => {
    return () => {
      unlockScroll();
    };
  }, [unlockScroll]);

  /* ═══════════════════════════════════════════════
     RENDER
     ═══════════════════════════════════════════════ */
  return (
    <div
      className={
        (className ? className + ' ' : '') +
        'staggered-menu-wrapper' +
        (isFixed ? ' fixed-wrapper' : '')
      }
      style={accentColor ? ({ '--sm-accent': accentColor } as React.CSSProperties) : undefined}
      data-position={position}
      data-open={open || undefined}
    >
      {/* Prelayers. Always in DOM so GSAP can animate them */}
      <div ref={preLayersRef} className="sm-prelayers" aria-hidden="true">
        {(() => {
          const raw = colors && colors.length ? colors.slice(0, 4) : ['#1e1e22', '#35353c'];
          const arr = [...raw];
          if (arr.length >= 3) arr.splice(Math.floor(arr.length / 2), 1);
          return arr.map((c, i) => (
            <div key={i} className="sm-prelayer" style={{ background: c }} />
          ));
        })()}
      </div>

      {/* Panel. Always in DOM so GSAP can animate slide in/out */}
      <aside
        id="staggered-menu-panel"
        ref={panelRef}
        className="staggered-menu-panel"
        aria-hidden={!open}
      >
        <div className="sm-panel-inner">
          <ul
            className="sm-panel-list"
            role="list"
            data-numbering={displayItemNumbering || undefined}
          >
            {items && items.length ? (
              items.map((it, idx) => {
                const isActive = pathname === it.link;
                return (
                  <li className="sm-panel-itemWrap" key={it.label + idx}>
                    <a
                      className={`sm-panel-item${it.isCta ? ' sm-panel-item-cta' : ''}`}
                      href={it.link}
                      aria-label={it.ariaLabel}
                      data-index={idx + 1}
                      onClick={() => { closeMenu(); it.onClick?.(); }}
                      style={isActive ? {
                        color: 'var(--brand-accent)',
                        borderBottom: '2px solid var(--brand-accent)',
                      } : it.isCta ? {
                        background: '#D4A853',
                        color: '#0D0B09',
                        fontWeight: 600,
                        padding: '10px 22px',
                        borderRadius: '6px',
                        display: 'inline-flex',
                        width: 'fit-content',
                      } : undefined}
                    >
                      <span className="sm-panel-itemLabel">{it.label}</span>
                    </a>
                  </li>
                );
              })
            ) : (
              <li className="sm-panel-itemWrap" aria-hidden="true">
                <span className="sm-panel-item">
                  <span className="sm-panel-itemLabel">No items</span>
                </span>
              </li>
            )}
          </ul>
          {languageSwitcherPanel && (
            <footer className="sm-panel-footer">
              <div className="sm-lang">{languageSwitcherPanel}</div>
            </footer>
          )}
        </div>
      </aside>

      {/* Header bar with logo + language switcher + toggle */}
      <header ref={headerRef} className="staggered-menu-header" aria-label="Main navigation header">
        <div className="sm-logo" aria-label="Logo">
          {logoUrl ? (
            <a href="/" tabIndex={0} aria-label="Home" style={{ display: 'inline-block' }}>
              <Image
                src={logoUrl}
                alt="Logo"
                width={400}
                height={120}
                priority
                className="sm-logo-img"
                draggable={false}
                style={{ cursor: 'pointer', maxHeight: 120, maxWidth: 400, width: '100%', height: 'auto', display: 'block' }}
              />
            </a>
          ) : (
            <a href="/" tabIndex={0} aria-label="Home" style={{ display: 'inline-block' }}>
              <span className="sm-logo-text">Client Growth</span>
            </a>
          )}
        </div>
        {languageSwitcher && <div className="sm-lang sm-lang-header">{languageSwitcher}</div>}
        <button
          ref={toggleBtnRef}
          className="sm-toggle"
          aria-label={open ? `${closeLabel} menu` : `${menuLabel} menu`}
          aria-expanded={open}
          aria-controls="staggered-menu-panel"
          onClick={toggleMenu}
          type="button"
        >
          <span ref={textWrapRef} className="sm-toggle-textWrap" aria-hidden="true">
            <span ref={textInnerRef} className="sm-toggle-textInner">
              {textLines.map((l, i) => (
                <span className="sm-toggle-line" key={i}>
                  {l}
                </span>
              ))}
            </span>
          </span>
          <span ref={iconRef} className="sm-icon" aria-hidden="true">
            <span ref={plusHRef} className="sm-icon-line" />
            <span ref={plusVRef} className="sm-icon-line sm-icon-line-v" />
          </span>
        </button>
      </header>
    </div>
  );
};

export default StaggeredMenu;