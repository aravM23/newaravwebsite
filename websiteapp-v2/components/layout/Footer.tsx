"use client";

import { useState, useEffect } from "react";
import FadeIn from "@/components/ui/FadeIn";
import MagneticButton from "@/components/ui/MagneticButton";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arav-mathur-0567bb26a/",
  },
  { label: "Twitter", href: "https://x.com/aravmathur23" },
  { label: "GitHub", href: "https://github.com/aravM23" },
  { label: "Medium", href: "https://medium.com/@aravmathur23" },
  { label: "Instagram", href: "https://www.instagram.com/aravmathurr" },
];

function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      const s = String(now.getSeconds()).padStart(2, "0");
      setTime(`${h}:${m}:${s}`);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return <span className="tabular-nums">{time}</span>;
}

function FooterCar() {
  return (
    <div className="footer-car-track">
      <div className="footer-car">
        <svg
          width="44"
          height="20"
          viewBox="0 0 132 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ── Cute VW Beetle facing right ── */}

          {/* Soft ground shadow */}
          <ellipse cx="66" cy="48" rx="44" ry="2.5" fill="#1A1715" opacity="0.04" />

          {/* Lower body — plump, rounded beetle shape */}
          <path
            d="M16 36 C16 30, 20 26, 28 24 L44 22 L88 22 C100 22, 110 25, 114 28 C118 32, 118 36, 116 38 L16 38 Z"
            fill="#D4A574"
          />
          {/* Body outline for definition */}
          <path
            d="M16 36 C16 30, 20 26, 28 24 L44 22 L88 22 C100 22, 110 25, 114 28 C118 32, 118 36, 116 38"
            fill="none"
            stroke="#B8895A"
            strokeWidth="0.6"
          />

          {/* Upper cabin — tall, round beetle dome */}
          <path
            d="M38 22 C40 14, 48 6, 60 4 C72 2, 84 4, 90 8 C96 14, 96 20, 94 22"
            fill="#D4A574"
          />
          <path
            d="M38 22 C40 14, 48 6, 60 4 C72 2, 84 4, 90 8 C96 14, 96 20, 94 22"
            fill="none"
            stroke="#B8895A"
            strokeWidth="0.6"
          />

          {/* Roof highlight — gentle shine */}
          <path
            d="M50 6 C58 4, 72 3.5, 82 6"
            fill="none"
            stroke="#E8C9A4"
            strokeWidth="0.8"
            opacity="0.5"
          />
          {/* Hood highlight */}
          <path
            d="M94 24 C102 23, 110 25, 114 28"
            fill="none"
            stroke="#E8C9A4"
            strokeWidth="0.5"
            opacity="0.4"
          />

          {/* Windshield (front — right side) */}
          <path
            d="M82 22 C84 16, 88 10, 90 8 L94 22 Z"
            fill="#F5F2ED"
            stroke="#D6D3CE"
            strokeWidth="0.5"
          />
          {/* Rear window (left side) */}
          <path
            d="M38 22 C40 14, 46 8, 54 5 L44 22 Z"
            fill="#F5F2ED"
            stroke="#D6D3CE"
            strokeWidth="0.5"
          />
          {/* Side windows */}
          <path
            d="M54 5 C62 3, 76 4, 82 6 L90 8 C88 10, 84 16, 82 22 L44 22 Z"
            fill="#EBE8E3"
            stroke="#D6D3CE"
            strokeWidth="0.3"
            opacity="0.8"
          />
          {/* B-pillar divider */}
          <line x1="66" y1="3.5" x2="64" y2="22" stroke="#C4A882" strokeWidth="1" />

          {/* ── Round beetle headlight (front right) ── */}
          <circle cx="116" cy="30" r="3" fill="#FFF8E7" stroke="#D4B896" strokeWidth="0.5" />
          <circle cx="116" cy="30" r="1.5" fill="#FFFDF5" />

          {/* ── Rounded taillight (rear left) ── */}
          <ellipse cx="17" cy="32" rx="2" ry="2.5" fill="#C97B5A" opacity="0.6" />
          <ellipse cx="17" cy="32" rx="1" ry="1.5" fill="#D99570" opacity="0.4" />

          {/* Front bumper — chrome-ish rounded */}
          <path
            d="M114 34 C118 34, 120 36, 120 38 L116 38"
            fill="#C4A882"
            stroke="#B8895A"
            strokeWidth="0.4"
          />
          {/* Rear bumper */}
          <path
            d="M16 38 L12 38 C12 36, 14 34, 16 34"
            fill="#C4A882"
            stroke="#B8895A"
            strokeWidth="0.4"
          />

          {/* Side body crease */}
          <path
            d="M24 30 C40 28, 80 28, 110 30"
            fill="none"
            stroke="#C4A882"
            strokeWidth="0.4"
            opacity="0.5"
          />

          {/* Door seam */}
          <line x1="64" y1="22" x2="62" y2="36" stroke="#C4A882" strokeWidth="0.3" opacity="0.4" />
          {/* Door handle */}
          <rect x="68" y="26" width="3.5" height="1.2" rx="0.6" fill="#C4A882" opacity="0.5" />

          {/* ── Rear fender arch ── */}
          <path
            d="M22 38 C22 31, 28 27, 34 27 C40 27, 46 31, 46 38"
            fill="none"
            stroke="#B8895A"
            strokeWidth="0.6"
          />
          {/* ── Front fender arch ── */}
          <path
            d="M86 38 C86 31, 92 27, 98 27 C104 27, 110 31, 110 38"
            fill="none"
            stroke="#B8895A"
            strokeWidth="0.6"
          />

          {/* ── Rear wheel ── */}
          <circle cx="34" cy="38" r="8.5" fill="#3A3530" />
          <circle cx="34" cy="38" r="6.5" fill="#4D4845" />
          <circle cx="34" cy="38" r="3.2" fill="#6B6560" />
          <circle cx="34" cy="38" r="1.4" fill="#C4A882" />
          {/* Hubcap cross */}
          <line x1="34" y1="35" x2="34" y2="41" stroke="#7A756F" strokeWidth="0.4" />
          <line x1="31" y1="38" x2="37" y2="38" stroke="#7A756F" strokeWidth="0.4" />

          {/* ── Front wheel ── */}
          <circle cx="98" cy="38" r="8.5" fill="#3A3530" />
          <circle cx="98" cy="38" r="6.5" fill="#4D4845" />
          <circle cx="98" cy="38" r="3.2" fill="#6B6560" />
          <circle cx="98" cy="38" r="1.4" fill="#C4A882" />
          {/* Hubcap cross */}
          <line x1="98" y1="35" x2="98" y2="41" stroke="#7A756F" strokeWidth="0.4" />
          <line x1="95" y1="38" x2="101" y2="38" stroke="#7A756F" strokeWidth="0.4" />
        </svg>
      </div>

      <style jsx>{`
        .footer-car-track {
          position: absolute;
          left: 0;
          right: 0;
          top: -10px;
          height: 20px;
          overflow: hidden;
          pointer-events: none;
        }
        .footer-car {
          position: absolute;
          top: 0;
          animation: cruise 7s linear infinite;
          will-change: transform;
        }

        @keyframes cruise {
          0% {
            transform: translateX(-60px);
            opacity: 0;
          }
          3% {
            opacity: 0.55;
          }
          50% {
            opacity: 0.55;
          }
          97% {
            opacity: 0.55;
          }
          100% {
            transform: translateX(calc(100vw + 20px));
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <FadeIn>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="font-serif text-lg text-text-primary mb-2">
                Arav Mathur
              </p>
              <p className="text-sm text-text-secondary">
                made with love from my waterloo dorm room
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              {socials.map((social) => (
                <MagneticButton
                  key={social.label}
                  as="a"
                  href={social.href}
                  target="_blank"
                  strength={0.2}
                >
                  <span className="text-sm text-text-secondary hover:text-accent transition-colors duration-300 font-mono">
                    {social.label}
                  </span>
                </MagneticButton>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Divider with cruising car */}
        <div className="relative mt-8 mb-6">
          <div className="section-divider" />
          <FooterCar />
        </div>

        <div className="flex items-center justify-between text-xs text-text-secondary/60">
          <span className="font-mono">&copy; {new Date().getFullYear()}</span>
          <div className="flex items-center gap-3 font-mono">
            <span>Toronto, ON</span>
            <LiveClock />
          </div>
        </div>
      </div>
    </footer>
  );
}
