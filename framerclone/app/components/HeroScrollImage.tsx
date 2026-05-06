"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const MIN_SCALE = 1;
const SCALE_CAP = 1.32;

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function getMaxScaleForViewport() {
  if (typeof window === "undefined") return 1.22;
  const vw = window.innerWidth;
  const base = Math.min(1120, vw * 0.92);
  const target = vw * 0.96;
  if (base <= 0) return SCALE_CAP;
  return clamp(target / base, 1.12, SCALE_CAP);
}

export function HeroScrollImage() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const rafRef = useRef<number>(0);

  const updateScale = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setScale(1);
      return;
    }

    const rect = track.getBoundingClientRect();
    const scrollY = window.scrollY;
    const trackTop = scrollY + rect.top;
    const trackH = track.offsetHeight;
    const vh = window.innerHeight;
    const scrollable = Math.max(1, trackH - vh);
    const progress = clamp((scrollY - trackTop) / scrollable, 0, 1);

    const maxScale = getMaxScaleForViewport();
    let s = MIN_SCALE;
    if (progress <= 0.5) {
      s = MIN_SCALE + (maxScale - MIN_SCALE) * (progress * 2);
    } else {
      s = maxScale - (maxScale - MIN_SCALE) * ((progress - 0.5) * 2);
    }
    setScale(s);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateScale);
    };

    updateScale();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateScale]);

  return (
    <div ref={trackRef} className="hero-scroll-track">
      <div className="hero-scroll-sticky">
        <div
          className="hero-scroll-frame"
          style={{
            transform: `scale(${scale})`,
          }}
        >
          <div className="hero-scroll-media">
            <Image
              src="/salixss.avif"
              alt="Salix dashboard preview"
              fill
              className="hero-scroll-img"
              sizes="(max-width: 1200px) 92vw, 1120px"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
