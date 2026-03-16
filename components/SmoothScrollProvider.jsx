"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 0.85,
      smoothTouch: false,
      wheelMultiplier: 0.95,
      autoRaf: true
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return children;
}
