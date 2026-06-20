"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  once?: boolean;
  duration?: number;
}

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
  duration = 0.8,
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-12% 0px" });

  const directionOffset = {
    up: { y: 28 },
    down: { y: -28 },
    left: { x: 28 },
    right: { x: -28 },
    none: {},
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ willChange: "opacity, transform, filter" }}
      initial={{
        opacity: 0,
        filter: "blur(6px)",
        ...directionOffset[direction],
      }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0, filter: "blur(0px)" }
          : { opacity: 0, filter: "blur(6px)", ...directionOffset[direction] }
      }
      transition={{
        duration,
        delay,
        // calm ease-out (quint) — settles softly without bounce
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
