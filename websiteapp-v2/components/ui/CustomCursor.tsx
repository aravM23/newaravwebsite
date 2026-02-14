"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  // Trail dots — progressively laggier springs
  const trail1X = useSpring(cursorX, { damping: 20, stiffness: 150, mass: 0.8 });
  const trail1Y = useSpring(cursorY, { damping: 20, stiffness: 150, mass: 0.8 });
  const trail2X = useSpring(cursorX, { damping: 18, stiffness: 100, mass: 1.0 });
  const trail2Y = useSpring(cursorY, { damping: 18, stiffness: 100, mass: 1.0 });
  const trail3X = useSpring(cursorX, { damping: 16, stiffness: 70, mass: 1.2 });
  const trail3Y = useSpring(cursorY, { damping: 16, stiffness: 70, mass: 1.2 });

  useEffect(() => {
    // Check if mobile/touch device
    const checkMobile = () => {
      setIsMobile(
        window.matchMedia("(hover: none) and (pointer: coarse)").matches
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.dataset.cursor === "pointer"
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.dataset.cursor === "pointer"
      ) {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
      document.documentElement.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );
      window.removeEventListener("resize", checkMobile);
    };
  }, [cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="pointer-events-none fixed z-[10000] mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 48 : 8,
          height: isHovering ? 48 : 8,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{
          width: { type: "spring", damping: 20, stiffness: 300 },
          height: { type: "spring", damping: 20, stiffness: 300 },
          opacity: { duration: 0.15 },
        }}
      >
        <div
          className="w-full h-full rounded-full bg-text-primary"
          style={{
            backgroundColor: isHovering
              ? "rgba(26, 23, 21, 0.15)"
              : "#1A1715",
            border: isHovering ? "1.5px solid #1A1715" : "none",
            transition: "background-color 0.2s ease, border 0.2s ease",
          }}
        />
      </motion.div>

      {/* Trail dots */}
      {[
        { x: trail1X, y: trail1Y, size: 5, opacity: 0.25 },
        { x: trail2X, y: trail2Y, size: 3.5, opacity: 0.15 },
        { x: trail3X, y: trail3Y, size: 2.5, opacity: 0.08 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className="pointer-events-none fixed z-[9999]"
          style={{
            x: dot.x,
            y: dot.y,
            translateX: "-50%",
            translateY: "-50%",
            width: dot.size,
            height: dot.size,
          }}
          animate={{
            opacity: isHidden || isHovering ? 0 : dot.opacity,
          }}
          transition={{ opacity: { duration: 0.15 } }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{ backgroundColor: "#1A1715" }}
          />
        </motion.div>
      ))}
    </>
  );
}
