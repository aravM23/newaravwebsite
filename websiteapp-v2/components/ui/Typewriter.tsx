"use client";

import { useState, useEffect } from "react";
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
  const [displayed, setDisplayed] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let cancelled = false;

    // Reset on mount to prevent double-render duplication
    setDisplayed("");

    const sleep = (ms: number) =>
      new Promise((res) => setTimeout(res, ms));

    const run = async () => {
      // Small delay to ensure clean state after reset
      await sleep(50);
      if (cancelled) return;

      // Build the full string character by character
      const fullParts: string[] = [];
      for (let i = 0; i < sequences.length; i++) {
        if (i > 0) fullParts.push(separator);
        fullParts.push(sequences[i]);
      }
      const fullText = fullParts.join("");

      for (let j = 0; j < fullText.length; j++) {
        if (cancelled) return;
        const char = fullText[j];
        setDisplayed(fullText.slice(0, j + 1));
        await sleep(typingSpeed);
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

  return (
    <span className={className}>
      {displayed}
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
