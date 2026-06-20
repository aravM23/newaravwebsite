"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  sequences: string[];
  separator?: string;
  className?: string;
  typingSpeed?: number;
  pauseBetween?: number;
}

export default function Typewriter({
  sequences,
  separator = " | ",
  className = "",
  typingSpeed = 80,
  pauseBetween = 400,
}: TypewriterProps) {
  const [parts, setParts] = useState<string[]>(sequences.map(() => ""));
  const [cursorVisible, setCursorVisible] = useState(true);
  const [fitsOneLine, setFitsOneLine] = useState(true);
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);

  // Measure whether the full text (with separator) fits on one line
  useEffect(() => {
    const check = () => {
      if (!measureRef.current || !wrapperRef.current) return;
      const parent = wrapperRef.current.closest("h1, h2, h3, h4, p, div");
      if (!parent) return;
      const availableWidth = (parent as HTMLElement).clientWidth;
      const textWidth = measureRef.current.offsetWidth;
      setFitsOneLine(textWidth <= availableWidth);
    };

    check();
    // Re-check after fonts load (important for custom/web fonts)
    document.fonts?.ready?.then(check);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [sequences, separator]);

  // Typewriter animation
  useEffect(() => {
    let cancelled = false;

    setParts(sequences.map(() => ""));

    const sleep = (ms: number) =>
      new Promise((res) => setTimeout(res, ms));

    const run = async () => {
      await sleep(50);
      if (cancelled) return;

      for (let seqIdx = 0; seqIdx < sequences.length; seqIdx++) {
        const seq = sequences[seqIdx];

        if (seqIdx > 0) {
          await sleep(pauseBetween);
          if (cancelled) return;
        }

        for (let charIdx = 0; charIdx < seq.length; charIdx++) {
          if (cancelled) return;
          setParts((prev) => {
            const next = [...prev];
            next[seqIdx] = seq.slice(0, charIdx + 1);
            return next;
          });
          await sleep(typingSpeed);
        }
      }
    };

    run();

    return () => {
      cancelled = true;
    };
  }, [sequences, separator, typingSpeed, pauseBetween]);

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  const showSeparator = parts.length > 1 && parts[1].length > 0;

  return (
    <span className={className} ref={wrapperRef}>
      {/* Hidden measurement span: full text on one line to check width */}
      <span
        ref={measureRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          visibility: "hidden",
          whiteSpace: "nowrap",
          pointerEvents: "none",
        }}
      >
        {sequences.join(separator)}
      </span>

      {parts.map((part, i) => (
        <span key={i}>
          {i > 0 && showSeparator && fitsOneLine && separator}
          {i > 0 && showSeparator && !fitsOneLine && <br />}
          {part}
        </span>
      ))}
      <motion.span
        animate={{ opacity: cursorVisible ? 1 : 0 }}
        transition={{ duration: 0.1 }}
        className="inline-block ml-[2px] text-accent"
      >
        |
      </motion.span>
    </span>
  );
}
