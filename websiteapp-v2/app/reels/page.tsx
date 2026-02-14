"use client";

import { useEffect } from "react";
import TextReveal from "@/components/ui/TextReveal";
import FadeIn from "@/components/ui/FadeIn";
import StaggerChildren from "@/components/ui/StaggerChildren";
import MagneticButton from "@/components/ui/MagneticButton";

const reelUrls = [
  "https://www.instagram.com/p/DUrPJiqkasV/",
  "https://www.instagram.com/p/DUGdk7AkQcd/",
  "https://www.instagram.com/p/DTv5k6SDycT/",
  "https://www.instagram.com/p/DTjg_W9EXp9/",
  "https://www.instagram.com/p/DTeMt6FkSHA/",
  "https://www.instagram.com/reel/DRwCYR_jhOm/",
];

export default function ReelsPage() {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    };

    return () => {
      const existingScript = document.querySelector(
        'script[src="//www.instagram.com/embed.js"]'
      );
      if (existingScript) existingScript.remove();
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6">
      {/* ─── HERO ─── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <TextReveal
          as="h1"
          className="font-serif text-display text-text-primary mb-4"
          splitBy="words"
        >
          Reels
        </TextReveal>
        <FadeIn delay={0.3}>
          <p className="text-lg text-text-secondary max-w-xl">
            sometimes i post.{" "}
            <a
              href="https://www.instagram.com/aravmathurr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline underline-offset-4"
            >
              @aravmathurr
            </a>
          </p>
        </FadeIn>
      </section>

      <div className="section-divider" />

      {/* ─── REELS GRID ─── */}
      <section className="py-20 md:py-28">
        <StaggerChildren
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          staggerDelay={0.1}
        >
          {reelUrls.map((url, i) => (
            <div
              key={url}
              className="relative bg-bg-secondary rounded-xl p-4 flex items-center justify-center"
            >
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                  background: "#FAF9F6",
                  border: 0,
                  borderRadius: "12px",
                  margin: 0,
                  maxWidth: "100%",
                  minWidth: "280px",
                  padding: 0,
                  width: "100%",
                }}
              />
            </div>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.3} className="mt-12 text-center">
          <MagneticButton
            as="a"
            href="https://www.instagram.com/aravmathurr"
            target="_blank"
            strength={0.3}
          >
            <span className="inline-block px-6 py-3 border border-border rounded-full text-sm font-medium text-text-secondary hover:text-accent hover:border-accent transition-colors duration-300">
              Follow on Instagram ↗
            </span>
          </MagneticButton>
        </FadeIn>
      </section>
    </div>
  );
}
