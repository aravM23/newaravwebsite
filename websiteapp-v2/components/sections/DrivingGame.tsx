"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import FadeIn from "@/components/ui/FadeIn";

/* ─── PALETTE (matches site) ─── */
const C = {
  bg: "#FAF9F6",
  road: "#E7E5E0",
  roadEdge: "#D6D3CE",
  lane: "#D6D3CE",
  grass: "#E8E4DC",
  grassDark: "#DDD8CE",
  accent: "#B45309",
  accentLight: "#D4A574",
  text: "#1A1715",
  textSec: "#78716C",
  white: "#FAF9F6",
  warm: "#C2956A",
  warmDark: "#A07850",
  tire: "#3A3530",
  tireMid: "#5C5550",
  star: "#D4A060",
  starGlow: "#E8C99040",
};

/* ─── CONSTANTS ─── */
const WIDTH = 420;
const HEIGHT = 520;
const LANES = 3;
const LANE_W = 80;
const ROAD_W = LANES * LANE_W;
const ROAD_L = (WIDTH - ROAD_W) / 2;
const ROAD_R = ROAD_L + ROAD_W;
const CAR_W = 34;
const CAR_H = 56;

/* ─── TYPES ─── */
interface Obstacle {
  x: number;
  y: number;
  type: "rock" | "cone" | "bush";
  w: number;
  h: number;
  scored?: boolean;
}

interface Star {
  x: number;
  y: number;
  collected?: boolean;
  pulse: number;
}

/* ─── DRAW HELPERS ─── */

function drawRoad(ctx: CanvasRenderingContext2D, scrollY: number) {
  // Background
  ctx.fillStyle = C.grass;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Subtle grass texture stripes
  ctx.fillStyle = C.grassDark;
  for (let y = -20 + (scrollY % 60); y < HEIGHT + 20; y += 60) {
    ctx.fillRect(0, y, ROAD_L - 4, 2);
    ctx.fillRect(ROAD_R + 4, y, WIDTH - ROAD_R - 4, 2);
  }

  // Road surface
  ctx.fillStyle = C.road;
  ctx.fillRect(ROAD_L, 0, ROAD_W, HEIGHT);

  // Road edge lines (solid, subtle)
  ctx.strokeStyle = C.roadEdge;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(ROAD_L, 0);
  ctx.lineTo(ROAD_L, HEIGHT);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(ROAD_R, 0);
  ctx.lineTo(ROAD_R, HEIGHT);
  ctx.stroke();

  // Lane dividers (dashed, very soft)
  ctx.strokeStyle = C.lane;
  ctx.lineWidth = 1;
  ctx.setLineDash([16, 16]);
  const dashOffset = scrollY % 32;
  for (let i = 1; i < LANES; i++) {
    const lx = ROAD_L + i * LANE_W;
    ctx.beginPath();
    ctx.moveTo(lx, -16 + dashOffset);
    ctx.lineTo(lx, HEIGHT + 16);
    ctx.stroke();
  }
  ctx.setLineDash([]);

  // Soft shoulder accents
  ctx.fillStyle = C.accentLight + "15";
  ctx.fillRect(ROAD_L, 0, 3, HEIGHT);
  ctx.fillRect(ROAD_R - 3, 0, 3, HEIGHT);
}

function drawCar(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  tilt: number
) {
  ctx.save();
  const mid = x + CAR_W / 2;
  const cmid = y + CAR_H / 2;
  ctx.translate(mid, cmid);
  ctx.rotate(tilt * 0.04);
  ctx.translate(-mid, -cmid);

  // Shorthand center
  const mx = x + CAR_W / 2;

  // Shadow
  ctx.fillStyle = "rgba(26, 23, 21, 0.08)";
  ctx.beginPath();
  ctx.ellipse(mx, y + CAR_H + 2, CAR_W / 2 + 4, 4, 0, 0, Math.PI * 2);
  ctx.fill();

  // ── REAR WING (drawn first, behind body) ──
  // Two thin pillars
  ctx.fillStyle = C.tireMid;
  ctx.fillRect(mx - 8, y + CAR_H - 3, 2, 4);
  ctx.fillRect(mx + 6, y + CAR_H - 3, 2, 4);
  // Wing plate — wide
  ctx.fillStyle = C.warm;
  ctx.beginPath();
  ctx.roundRect(mx - 14, y + CAR_H - 6, 28, 4, 1);
  ctx.fill();
  ctx.strokeStyle = C.warmDark;
  ctx.lineWidth = 0.5;
  ctx.stroke();

  // ── REAR WHEELS (exposed, round) ──
  const rwy = y + CAR_H * 0.72;
  // Left
  ctx.fillStyle = C.tire;
  ctx.beginPath();
  ctx.ellipse(x - 3, rwy, 5, 8, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = C.tireMid;
  ctx.beginPath();
  ctx.ellipse(x - 3, rwy, 3, 5, 0, 0, Math.PI * 2);
  ctx.fill();
  // Right
  ctx.fillStyle = C.tire;
  ctx.beginPath();
  ctx.ellipse(x + CAR_W + 3, rwy, 5, 8, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = C.tireMid;
  ctx.beginPath();
  ctx.ellipse(x + CAR_W + 3, rwy, 3, 5, 0, 0, Math.PI * 2);
  ctx.fill();

  // ── MAIN BODY — narrow-waisted F1 silhouette ──
  ctx.fillStyle = C.warm;
  ctx.beginPath();
  // Nose tip (top)
  ctx.moveTo(mx, y);
  // Widen to front wing area
  ctx.bezierCurveTo(mx + 6, y + 4, mx + 10, y + 8, mx + 10, y + CAR_H * 0.15);
  // Narrow waist before sidepods
  ctx.bezierCurveTo(mx + 8, y + CAR_H * 0.22, mx + 6, y + CAR_H * 0.28, mx + 6, y + CAR_H * 0.32);
  // Sidepods — widen out
  ctx.bezierCurveTo(mx + 9, y + CAR_H * 0.38, mx + 14, y + CAR_H * 0.45, mx + 14, y + CAR_H * 0.55);
  // Taper to rear
  ctx.bezierCurveTo(mx + 13, y + CAR_H * 0.7, mx + 10, y + CAR_H * 0.82, mx + 8, y + CAR_H * 0.92);
  // Rear end
  ctx.lineTo(mx + 6, y + CAR_H);
  ctx.lineTo(mx - 6, y + CAR_H);
  // Mirror left side
  ctx.lineTo(mx - 8, y + CAR_H * 0.92);
  ctx.bezierCurveTo(mx - 10, y + CAR_H * 0.82, mx - 13, y + CAR_H * 0.7, mx - 14, y + CAR_H * 0.55);
  ctx.bezierCurveTo(mx - 14, y + CAR_H * 0.45, mx - 9, y + CAR_H * 0.38, mx - 6, y + CAR_H * 0.32);
  ctx.bezierCurveTo(mx - 6, y + CAR_H * 0.28, mx - 8, y + CAR_H * 0.22, mx - 10, y + CAR_H * 0.15);
  ctx.bezierCurveTo(mx - 10, y + 8, mx - 6, y + 4, mx, y);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = C.warmDark;
  ctx.lineWidth = 0.6;
  ctx.stroke();

  // ── Body highlight (subtle shine down center-left) ──
  ctx.strokeStyle = C.accentLight + "40";
  ctx.lineWidth = 0.8;
  ctx.beginPath();
  ctx.moveTo(mx - 2, y + 6);
  ctx.bezierCurveTo(mx - 4, y + CAR_H * 0.2, mx - 5, y + CAR_H * 0.4, mx - 4, y + CAR_H * 0.7);
  ctx.stroke();

  // ── FRONT WING ──
  // Endplates
  ctx.fillStyle = C.warm;
  ctx.beginPath();
  ctx.roundRect(x - 6, y + 2, 6, 5, 1);
  ctx.fill();
  ctx.beginPath();
  ctx.roundRect(x + CAR_W, y + 2, 6, 5, 1);
  ctx.fill();
  // Wing elements
  ctx.fillStyle = C.warmDark;
  ctx.beginPath();
  ctx.roundRect(x - 6, y + 7, CAR_W + 12, 1.5, 0.5);
  ctx.fill();
  ctx.fillStyle = C.warm;
  ctx.beginPath();
  ctx.roundRect(x - 4, y + 4, CAR_W + 8, 1.5, 0.5);
  ctx.fill();

  // ── FRONT WHEELS (exposed, round) ──
  const fwy = y + CAR_H * 0.16;
  ctx.fillStyle = C.tire;
  ctx.beginPath();
  ctx.ellipse(x - 3, fwy, 5, 7, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = C.tireMid;
  ctx.beginPath();
  ctx.ellipse(x - 3, fwy, 3, 4.5, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = C.tire;
  ctx.beginPath();
  ctx.ellipse(x + CAR_W + 3, fwy, 5, 7, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = C.tireMid;
  ctx.beginPath();
  ctx.ellipse(x + CAR_W + 3, fwy, 3, 4.5, 0, 0, Math.PI * 2);
  ctx.fill();

  // ── COCKPIT ──
  ctx.fillStyle = C.tire;
  ctx.beginPath();
  ctx.ellipse(mx, y + CAR_H * 0.4, 6, 8, 0, 0, Math.PI * 2);
  ctx.fill();

  // ── HALO ──
  ctx.strokeStyle = C.tireMid;
  ctx.lineWidth = 1.8;
  ctx.beginPath();
  ctx.moveTo(mx - 5, y + CAR_H * 0.33);
  ctx.quadraticCurveTo(mx, y + CAR_H * 0.27, mx + 5, y + CAR_H * 0.33);
  ctx.stroke();

  // ── DRIVER HELMET ──
  ctx.fillStyle = C.accent;
  ctx.beginPath();
  ctx.arc(mx, y + CAR_H * 0.38, 3.8, 0, Math.PI * 2);
  ctx.fill();
  // Visor
  ctx.fillStyle = C.star;
  ctx.fillRect(mx - 3, y + CAR_H * 0.365, 6, 1.8);

  // ── AIR INTAKE (above driver head) ──
  ctx.fillStyle = C.tire;
  ctx.beginPath();
  ctx.moveTo(mx - 2.5, y + CAR_H * 0.3);
  ctx.lineTo(mx, y + CAR_H * 0.26);
  ctx.lineTo(mx + 2.5, y + CAR_H * 0.3);
  ctx.closePath();
  ctx.fill();

  // ── RACING STRIPE ──
  ctx.fillStyle = C.white;
  ctx.globalAlpha = 0.3;
  ctx.fillRect(mx - 1, y + 4, 2, CAR_H * 0.18);
  ctx.fillRect(mx - 1, y + CAR_H * 0.55, 2, CAR_H * 0.3);
  ctx.globalAlpha = 1;

  // ── NUMBER ──
  ctx.fillStyle = C.white;
  ctx.globalAlpha = 0.6;
  ctx.font = "bold 7px system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("1", mx, y + CAR_H * 0.62);
  ctx.globalAlpha = 1;

  // ── SIDEPOD ACCENT ──
  ctx.strokeStyle = C.accent + "40";
  ctx.lineWidth = 0.5;
  // Left
  ctx.beginPath();
  ctx.moveTo(mx - 10, y + CAR_H * 0.42);
  ctx.quadraticCurveTo(mx - 12, y + CAR_H * 0.52, mx - 10, y + CAR_H * 0.65);
  ctx.stroke();
  // Right
  ctx.beginPath();
  ctx.moveTo(mx + 10, y + CAR_H * 0.42);
  ctx.quadraticCurveTo(mx + 12, y + CAR_H * 0.52, mx + 10, y + CAR_H * 0.65);
  ctx.stroke();

  ctx.restore();
}

function drawObstacle(
  ctx: CanvasRenderingContext2D,
  obs: Obstacle
) {
  const { x, y, type, w, h } = obs;
  if (type === "rock") {
    // Soft rounded stone
    ctx.fillStyle = "#B8B5B0";
    ctx.beginPath();
    ctx.ellipse(x + w / 2, y + h / 2 + 2, w / 2, h / 2.5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#A8A5A0";
    ctx.beginPath();
    ctx.ellipse(x + w / 2, y + h / 2, w / 2.2, h / 2.8, -0.2, 0, Math.PI * 2);
    ctx.fill();
    // Highlight
    ctx.fillStyle = "#C8C5C0";
    ctx.beginPath();
    ctx.ellipse(x + w / 2 - 3, y + h / 2 - 3, w / 5, h / 6, 0, 0, Math.PI * 2);
    ctx.fill();
  } else if (type === "cone") {
    // Warm-toned traffic cone
    ctx.fillStyle = C.accent;
    ctx.beginPath();
    ctx.moveTo(x + w / 2, y);
    ctx.lineTo(x + w - 2, y + h);
    ctx.lineTo(x + 2, y + h);
    ctx.closePath();
    ctx.fill();
    // Cream stripe
    ctx.fillStyle = C.white;
    ctx.fillRect(x + w * 0.22, y + h * 0.4, w * 0.56, 3);
    // Base
    ctx.fillStyle = C.warmDark;
    ctx.fillRect(x, y + h - 4, w, 4);
  } else {
    // Bush — green-brown organic blob
    ctx.fillStyle = "#9B9480";
    ctx.beginPath();
    ctx.ellipse(x + w / 2, y + h * 0.65, w / 2, h / 2.5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#8A8575";
    ctx.beginPath();
    ctx.ellipse(x + w / 2 + 4, y + h * 0.45, w / 3, h / 3, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#A49E8E";
    ctx.beginPath();
    ctx.ellipse(x + w / 2 - 3, y + h * 0.4, w / 3.5, h / 3.5, 0, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawStar(ctx: CanvasRenderingContext2D, star: Star) {
  if (star.collected) return;
  const { x, y, pulse } = star;
  const r = 8 + Math.sin(pulse) * 1.5;

  // Glow
  ctx.fillStyle = C.starGlow;
  ctx.beginPath();
  ctx.arc(x, y, r + 6, 0, Math.PI * 2);
  ctx.fill();

  // Star shape
  ctx.fillStyle = C.star;
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
    const sx = x + r * Math.cos(angle);
    const sy = y + r * Math.sin(angle);
    if (i === 0) ctx.moveTo(sx, sy);
    else ctx.lineTo(sx, sy);
  }
  ctx.closePath();
  ctx.fill();

  // Center dot
  ctx.fillStyle = C.accent;
  ctx.beginPath();
  ctx.arc(x, y, 2, 0, Math.PI * 2);
  ctx.fill();
}

/* ─── COMPONENT ─── */
export default function DrivingGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameStatus, setGameStatus] = useState<"idle" | "playing" | "gameover">("idle");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [combo, setCombo] = useState(0);

  const carX = useRef(ROAD_L + LANE_W * 1 + LANE_W / 2 - CAR_W / 2);
  const carTilt = useRef(0);
  const obstacles = useRef<Obstacle[]>([]);
  const stars = useRef<Star[]>([]);
  const scrollY = useRef(0);
  const frameCount = useRef(0);
  const currentScore = useRef(0);
  const currentCombo = useRef(0);
  const gameRunning = useRef(false);
  const animFrame = useRef(0);
  const keys = useRef({ left: false, right: false });
  const dodgesSinceHit = useRef(0);

  // Load high score from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("drivingGameHighScore");
    if (saved) setHighScore(parseInt(saved, 10));
  }, []);

  const drawIdleScreen = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    drawRoad(ctx, 0);
    drawCar(ctx, ROAD_L + LANE_W + LANE_W / 2 - CAR_W / 2, HEIGHT - CAR_H - 50, 0);
  }, []);

  useEffect(() => {
    drawIdleScreen();
    return () => {
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, [drawIdleScreen]);

  const startGame = useCallback(() => {
    carX.current = ROAD_L + LANE_W + LANE_W / 2 - CAR_W / 2;
    carTilt.current = 0;
    obstacles.current = [];
    stars.current = [];
    scrollY.current = 0;
    frameCount.current = 0;
    currentScore.current = 0;
    currentCombo.current = 0;
    dodgesSinceHit.current = 0;
    gameRunning.current = true;
    keys.current = { left: false, right: false };
    setScore(0);
    setCombo(0);
    setGameStatus("playing");

    if (animFrame.current) cancelAnimationFrame(animFrame.current);
    runGameLoop();
  }, []);

  const runGameLoop = () => {
    if (!gameRunning.current) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    frameCount.current++;

    // Car movement — smooth
    const speed = 5;
    if (keys.current.left) {
      carX.current = Math.max(ROAD_L + 6, carX.current - speed);
      carTilt.current = Math.max(-1, carTilt.current - 0.15);
    } else if (keys.current.right) {
      carX.current = Math.min(ROAD_R - CAR_W - 6, carX.current + speed);
      carTilt.current = Math.min(1, carTilt.current + 0.15);
    } else {
      // Return tilt to center
      carTilt.current *= 0.85;
    }

    // Scroll
    const gameSpeed = 3.5 + Math.floor(currentScore.current / 150) * 0.4;
    scrollY.current += gameSpeed;

    // Spawn obstacles
    const spawnRate = Math.max(40, 70 - Math.floor(currentScore.current / 80));
    if (frameCount.current % spawnRate === 0) {
      const types: Obstacle["type"][] = ["rock", "cone", "bush"];
      const type = types[Math.floor(Math.random() * types.length)];
      const lane = Math.floor(Math.random() * LANES);
      const w = type === "rock" ? 28 : type === "cone" ? 22 : 32;
      const h = type === "rock" ? 24 : type === "cone" ? 34 : 28;
      obstacles.current.push({
        x: ROAD_L + lane * LANE_W + (LANE_W - w) / 2,
        y: -h - 10,
        type,
        w,
        h,
      });
    }

    // Spawn stars (less frequently)
    if (frameCount.current % 120 === 0 && Math.random() > 0.35) {
      const lane = Math.floor(Math.random() * LANES);
      stars.current.push({
        x: ROAD_L + lane * LANE_W + LANE_W / 2,
        y: -20,
        pulse: 0,
      });
    }

    // Update
    const carY = HEIGHT - CAR_H - 50;
    let hit = false;

    // Update obstacles
    obstacles.current = obstacles.current.filter((obs) => {
      obs.y += gameSpeed;

      // Collision (slightly forgiving hitbox)
      const cl = carX.current + 6;
      const cr = carX.current + CAR_W - 6;
      const ct = carY + 8;
      const cb = carY + CAR_H - 8;

      if (
        cl < obs.x + obs.w - 4 &&
        cr > obs.x + 4 &&
        ct < obs.y + obs.h - 4 &&
        cb > obs.y + 4
      ) {
        hit = true;
      }

      // Score for dodging
      if (obs.y > carY + CAR_H && !obs.scored) {
        obs.scored = true;
        dodgesSinceHit.current++;
        const comboBonus = Math.min(dodgesSinceHit.current, 10);
        currentScore.current += 10 + comboBonus;
        currentCombo.current = dodgesSinceHit.current;
        setScore(currentScore.current);
        setCombo(currentCombo.current);
      }

      return obs.y < HEIGHT + 50;
    });

    // Update stars
    stars.current = stars.current.filter((star) => {
      star.y += gameSpeed;
      star.pulse += 0.1;

      if (!star.collected) {
        const dist = Math.hypot(
          carX.current + CAR_W / 2 - star.x,
          carY + CAR_H / 2 - star.y
        );
        if (dist < 22) {
          star.collected = true;
          currentScore.current += 25;
          setScore(currentScore.current);
        }
      }

      return star.y < HEIGHT + 30;
    });

    if (hit) {
      gameRunning.current = false;
      setGameStatus("gameover");
      if (currentScore.current > highScore) {
        setHighScore(currentScore.current);
        localStorage.setItem(
          "drivingGameHighScore",
          String(currentScore.current)
        );
      }
      return;
    }

    // ─── DRAW ───
    drawRoad(ctx, scrollY.current);

    // Draw stars
    stars.current.forEach((star) => drawStar(ctx, star));

    // Draw obstacles
    obstacles.current.forEach((obs) => drawObstacle(ctx, obs));

    // Draw car
    drawCar(ctx, carX.current, carY, carTilt.current);

    // HUD — score (top left)
    ctx.fillStyle = C.text;
    ctx.font = '500 13px "JetBrains Mono", monospace';
    ctx.textAlign = "left";
    ctx.fillText(`Score  ${currentScore.current}`, ROAD_L + 8, 24);

    // Combo indicator
    if (currentCombo.current >= 3) {
      ctx.fillStyle = C.accent;
      ctx.font = '600 11px "JetBrains Mono", monospace';
      ctx.fillText(`x${currentCombo.current} combo`, ROAD_L + 8, 40);
    }

    // Speed indicator (top right)
    const speedLabel = Math.round(gameSpeed * 18);
    ctx.fillStyle = C.textSec;
    ctx.font = '400 11px "JetBrains Mono", monospace';
    ctx.textAlign = "right";
    ctx.fillText(`${speedLabel} km/h`, ROAD_R - 8, 24);

    animFrame.current = requestAnimationFrame(runGameLoop);
  };

  // Keyboard
  useEffect(() => {
    const isTyping = () => {
      const tag = document.activeElement?.tagName.toLowerCase();
      return tag === "input" || tag === "textarea" || (document.activeElement as HTMLElement)?.isContentEditable;
    };
    const onDown = (e: KeyboardEvent) => {
      if (isTyping()) return;
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
        e.preventDefault();
        keys.current.left = true;
      }
      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
        e.preventDefault();
        keys.current.right = true;
      }
      if (e.key === " ") {
        e.preventDefault();
        if (gameStatus !== "playing") startGame();
      }
    };
    const onUp = (e: KeyboardEvent) => {
      if (isTyping()) return;
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A")
        keys.current.left = false;
      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D")
        keys.current.right = false;
    };
    window.addEventListener("keydown", onDown);
    window.addEventListener("keyup", onUp);
    return () => {
      window.removeEventListener("keydown", onDown);
      window.removeEventListener("keyup", onUp);
    };
  }, [gameStatus, startGame]);

  // Touch
  const handleTouch = (e: React.TouchEvent, isStart: boolean) => {
    if (!isStart) {
      keys.current.left = false;
      keys.current.right = false;
      return;
    }
    if (gameStatus !== "playing") {
      startGame();
      return;
    }
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.touches[0].clientX - rect.left;
    if (x < rect.width / 2) keys.current.left = true;
    else keys.current.right = true;
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <FadeIn>
        <h2 className="font-serif text-heading text-text-primary text-center">
          Take a break (if ur bored)
        </h2>
        <p className="text-sm text-text-secondary font-mono text-center mt-2">
          dodge the obstacles, collect the stars
        </p>
      </FadeIn>

      <FadeIn delay={0.15}>
        <p className="text-xs text-text-secondary/60 font-mono text-center">
          <span className="hidden md:inline">
            arrow keys or A / D to steer &middot; space to start
          </span>
          <span className="md:hidden">tap left or right to steer</span>
        </p>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div
          className="relative overflow-hidden"
          style={{
            borderRadius: "12px",
            border: "1px solid #E7E5E0",
            boxShadow: "0 4px 24px rgba(26, 23, 21, 0.06)",
            maxWidth: "100%",
            width: "min(420px, calc(100vw - 48px))",
          }}
        >
          <canvas
            ref={canvasRef}
            width={WIDTH}
            height={HEIGHT}
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              touchAction: "none",
            }}
            onTouchStart={(e) => handleTouch(e, true)}
            onTouchEnd={(e) => handleTouch(e, false)}
          />

          {/* Idle overlay */}
          {gameStatus === "idle" && (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-4"
              style={{ background: "rgba(250, 249, 246, 0.88)", backdropFilter: "blur(2px)" }}
            >
              <span className="text-4xl">🚗</span>
              <button
                onClick={startGame}
                className="px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                style={{
                  background: C.text,
                  color: C.white,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = C.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = C.text;
                }}
              >
                Start Driving
              </button>
              <span className="text-xs font-mono text-text-secondary/50">
                or press space
              </span>
            </div>
          )}

          {/* Game over overlay */}
          {gameStatus === "gameover" && (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-3"
              style={{ background: "rgba(250, 249, 246, 0.92)", backdropFilter: "blur(3px)" }}
            >
              <p className="font-serif text-xl text-text-primary">
                Crashed!
              </p>
              <p className="font-mono text-xs text-text-secondary/70 -mt-1 italic">
                (u were probably in a ferrari)
              </p>
              <p className="font-mono text-sm text-text-secondary">
                score:{" "}
                <span className="text-accent font-semibold">{score}</span>
              </p>
              {highScore > 0 && (
                <p className="font-mono text-xs text-text-secondary/50">
                  best: {highScore}
                </p>
              )}
              <button
                onClick={startGame}
                className="mt-2 px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                style={{
                  background: C.text,
                  color: C.white,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = C.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = C.text;
                }}
              >
                Try Again
              </button>
              <span className="text-xs font-mono text-text-secondary/50">
                or press space
              </span>
            </div>
          )}
        </div>
      </FadeIn>

      {/* Mobile touch buttons */}
      {gameStatus === "playing" && (
        <div className="flex md:hidden w-full gap-3" style={{ maxWidth: "min(420px, calc(100vw - 48px))" }}>
          <button
            onTouchStart={() => {
              keys.current.left = true;
            }}
            onTouchEnd={() => {
              keys.current.left = false;
            }}
            onMouseDown={() => {
              keys.current.left = true;
            }}
            onMouseUp={() => {
              keys.current.left = false;
            }}
            onMouseLeave={() => {
              keys.current.left = false;
            }}
            className="flex-1 h-14 rounded-lg border border-border flex items-center justify-center text-text-secondary text-lg select-none active:bg-bg-secondary transition-colors"
            style={{ touchAction: "manipulation" }}
          >
            ←
          </button>
          <button
            onTouchStart={() => {
              keys.current.right = true;
            }}
            onTouchEnd={() => {
              keys.current.right = false;
            }}
            onMouseDown={() => {
              keys.current.right = true;
            }}
            onMouseUp={() => {
              keys.current.right = false;
            }}
            onMouseLeave={() => {
              keys.current.right = false;
            }}
            className="flex-1 h-14 rounded-lg border border-border flex items-center justify-center text-text-secondary text-lg select-none active:bg-bg-secondary transition-colors"
            style={{ touchAction: "manipulation" }}
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}
