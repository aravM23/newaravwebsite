"use client";

import TextReveal from "@/components/ui/TextReveal";
import FadeIn from "@/components/ui/FadeIn";
import MagneticButton from "@/components/ui/MagneticButton";
import StaggerChildren from "@/components/ui/StaggerChildren";
import SpotifyWidget from "@/components/sections/SpotifyWidget";
import DrivingGame from "@/components/sections/DrivingGame";
import Typewriter from "@/components/ui/Typewriter";
import { motion } from "framer-motion";

/* ─── DATA ───────────────────────────────────────────── */

const thingsBuilt = [
  {
    name: "GrayPass",
    desc: "Building cognitive biometric security infrastructure for identity and authentication in enterprise systems. $100K pre-seed from 1517 Fund",
    link: "https://www.graypass.org/",
    tag: "latest",
  },
  {
    name: "Post-It",
    desc: "Place spatially persistent sticky notes for your friends on Snapchat to see when they visit the actual location through the unreleased Snap Spectacles",
    link: "#",
    tag: "hack the north top 32",
  },
  {
    name: "TurtleShell",
    desc: "Got my first VC cheque for this at 15. Gov of Ontario-backed tourist safety app. Forced shut down due to privacy laws.",
    link: "https://youtu.be/DEJDNSfQB8I",
    tag: "inactive",
  },
  {
    name: "ConnectED",
    desc: '"Tinder for Scholarships." Rideau Hall Foundation\'s Best Youth Innovation',
    link: "https://github.com/aravM23/ConnectED",
  },
  {
    name: "UEFA Betting Assistant",
    desc: "ML-powered UEFA UCL betting analytics dashboard",
    link: "https://uclsportsbetting.streamlit.app/",
  },
  {
    name: "Plant Pathogen Detection",
    desc: "Looks at apple orchards through DJI drones and tells you what diseases can be spotted",
    link: "https://medium.com/@aravmathur23/solving-the-apple-pathology-problem-using-artificial-intelligence-fa373a0f552a",
  },
  {
    name: "AI Voice Assistant",
    desc: 'JARVIS-inspired assistant named "Ronaldo"',
    link: "https://medium.com/@aravmathur23/meet-ronaldo-my-personal-voice-assistant-here-s-how-i-made-it-58b566bc1fe0",
  },
  {
    name: "Mood Sound Generation",
    desc: "AI music generation based on your mood using Google's SoundStorm architecture",
    link: "https://medium.com/@aravmathur23/how-i-created-an-ai-model-for-sound-generation-using-soundstorm-a31b28fd8c43",
  },
  {
    name: "Facial Emotion Detection",
    desc: "CNN recognizing 7 emotions in real-time (my first technical project)",
    link: "https://medium.com/@aravmathur23/the-path-to-constructing-my-own-cnn-models-effectively-while-learning-creating-and-innovating-all-d02ffafaa1c2",
  },
];

const experience = [
  {
    role: "Software Engineer",
    company: "Aview International",
    note: "AI dubbing/translation startup. Built a tool to automatically find and track influencers across 5 social platforms for client outreach",
  },
  {
    role: "CEO & Founder",
    company: "TurtleShell",
    note: "Got my first VC cheque for this at 15. Got some grants and awards and government backing by 16. Forced to shut it down 6 months after all that (lol)",
  },
  {
    role: "ML Engineer Consultant",
    company: "BenchSci",
    note: "Built a burnout monitoring system for 284 engineers via JIRA metadata",
  },
  {
    role: "Research Assistant",
    company: "University of Toronto",
    note: "Worked on understanding suicidal ideation in teens through modelling software",
  },
  {
    role: "Citizen Scientist",
    company: "NASA",
    note: "Contributed to 40+ projects helping NASA scientists with climate research",
  },
];

const sideQuests = [
  "Published two books on Kindle",
  "Prev. Guitarist for an Indo-Fusion band",
  "Instagram content creator (150K+ views total)",
  "Founded nonprofit · raised $15K across two continents",
  "300+ claps as Technical Content Writer on Medium",
];

/* ─── PAGE ───────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      {/* ─── HERO ─── */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <h1 className="font-serif text-display text-text-primary mb-6">
          <Typewriter
            sequences={["Hey, I'm Arav.", "अरव 🧿"]}
            separator=" | "
            typingSpeed={70}
            pauseBetween={500}
          />
        </h1>

        <FadeIn delay={0.4}>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed">
            18-year-old super cool guy from Toronto. Studying{" "}
            <span className="text-text-primary font-medium">CS @ Waterloo</span>.
            Interested in making and shipping cool shit.
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="mt-4 text-base text-text-secondary/80 max-w-xl leading-relaxed">
            I want to make something people use everyday.
          </p>
        </FadeIn>

        <FadeIn delay={0.8}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2 text-sm font-mono text-accent">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Currently building GrayPass · backed with $100K pre-seed from 1517 Fund
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={1.0}>
          <div className="mt-8 flex flex-wrap gap-4">
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/in/arav-mathur-0567bb26a/" },
              { label: "Twitter", href: "https://x.com/aravmathur23" },
              { label: "GitHub", href: "https://github.com/aravM23" },
              { label: "Instagram", href: "https://www.instagram.com/aravmathurr" },
            ].map((s) => (
              <MagneticButton key={s.label} as="a" href={s.href} target="_blank" strength={0.2}>
                <span className="text-sm font-mono text-text-secondary hover:text-accent transition-colors duration-300 underline underline-offset-4 decoration-border hover:decoration-accent">
                  {s.label}
                </span>
              </MagneticButton>
            ))}
          </div>
        </FadeIn>
      </section>

      <div className="section-divider" />

      {/* ─── THINGS I'VE BUILT ─── */}
      <section className="py-20 md:py-28">
        <FadeIn>
          <h2 className="font-serif text-heading text-text-primary mb-12">
            Things I&apos;ve Built
          </h2>
        </FadeIn>

        <StaggerChildren className="flex flex-col" staggerDelay={0.06}>
          {thingsBuilt.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 py-4 border-b border-border/60 last:border-b-0 hover:bg-bg-secondary/50 -mx-4 px-4 rounded-lg transition-all duration-300"
            >
              <span className="text-text-secondary/50 font-mono text-sm mt-0.5 shrink-0">
                &rarr;
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="font-medium text-text-primary group-hover:text-accent transition-colors duration-300">
                    {project.name}
                  </span>
                  {project.tag && (
                    <span className="text-[10px] font-mono uppercase tracking-widest text-accent/80 bg-accent/5 px-2 py-0.5 rounded-full border border-accent/10">
                      {project.tag}
                    </span>
                  )}
                </div>
                <p className="text-sm text-text-secondary mt-1 leading-relaxed">
                  {project.desc}
                </p>
              </div>
              <span className="text-text-secondary/30 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 mt-1 shrink-0">
                ↗
              </span>
            </a>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.2} className="mt-8">
          <MagneticButton as="a" href="/projects" strength={0.2}>
            <span className="text-sm font-mono text-text-secondary hover:text-accent transition-colors duration-300 underline underline-offset-4 decoration-border hover:decoration-accent">
              View all projects &rarr;
            </span>
          </MagneticButton>
        </FadeIn>
      </section>

      <div className="section-divider" />

      {/* ─── CURRENT ROLE ─── */}
      <section className="py-20 md:py-28">
        <FadeIn>
          <h2 className="font-serif text-heading text-text-primary mb-8">
            Current Role
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="p-6 rounded-xl border border-accent/15 bg-accent/[0.03]">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-mono text-accent">Now</span>
            </div>
            <p className="text-lg text-text-primary font-medium">
              Dialed in on GrayPass
            </p>
            <a
              href="https://www.graypass.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary hover:text-accent transition-colors duration-300 font-mono mt-1 inline-block"
            >
              www.graypass.org
            </a>
          </div>
        </FadeIn>
      </section>

      <div className="section-divider" />

      {/* ─── PAST EXPERIENCES ─── */}
      <section className="py-20 md:py-28">
        <FadeIn>
          <h2 className="font-serif text-heading text-text-primary mb-12">
            Past Experiences
          </h2>
        </FadeIn>

        <StaggerChildren className="flex flex-col gap-6" staggerDelay={0.08}>
          {experience.map((exp) => (
            <div key={exp.company} className="flex items-start gap-4">
              <span className="text-text-secondary/50 font-mono text-sm mt-0.5 shrink-0">
                &rarr;
              </span>
              <div>
                <p className="text-text-primary">
                  <span className="font-medium">{exp.role}</span>
                  <span className="text-text-secondary"> @ </span>
                  <span className="font-medium">{exp.company}</span>
                </p>
                <p className="text-sm text-text-secondary mt-1 leading-relaxed">
                  {exp.note}
                </p>
              </div>
            </div>
          ))}
        </StaggerChildren>
      </section>

      <div className="section-divider" />

      {/* ─── SIDE QUESTS ─── */}
      <section className="py-20 md:py-28">
        <FadeIn>
          <h2 className="font-serif text-heading text-text-primary mb-12">
            Side Quests
          </h2>
        </FadeIn>

        <StaggerChildren className="flex flex-col gap-4" staggerDelay={0.06}>
          {sideQuests.map((quest) => (
            <div key={quest} className="flex items-start gap-4">
              <span className="text-accent/60 font-mono text-sm mt-0.5 shrink-0">
                *
              </span>
              <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                {quest}
              </p>
            </div>
          ))}
        </StaggerChildren>
      </section>

      <div className="section-divider" />

      {/* ─── SPOTIFY ─── */}
      <section className="py-20 md:py-28">
        <FadeIn>
          <h2 className="font-serif text-heading text-text-primary mb-2">
            What I&apos;m listening to rn
          </h2>
          <p className="text-sm text-text-secondary mb-10 font-mono">
            77,627 minutes on Spotify this year
          </p>
        </FadeIn>
        <SpotifyWidget />
      </section>

      <div className="section-divider" />

      {/* ─── DRIVING GAME ─── */}
      <section className="py-20 md:py-28">
        <DrivingGame />
      </section>

      <div className="section-divider" />

      {/* ─── CTA ─── */}
      <section className="py-20 md:py-28 text-center">
        <FadeIn>
          <h2 className="font-serif text-heading italic text-text-primary mb-4">
            Want to build something tg?
          </h2>
          <p className="text-text-secondary mb-8 max-w-md mx-auto">
            hit me up.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <MagneticButton
              as="a"
              href="mailto:aravmathur23@gmail.com"
              strength={0.3}
            >
              <span className="inline-block px-6 py-3 bg-text-primary text-bg rounded-full text-sm font-medium hover:bg-accent transition-colors duration-300">
                aravmathur23@gmail.com
              </span>
            </MagneticButton>

            <MagneticButton
              as="a"
              href="https://www.linkedin.com/in/arav-mathur-0567bb26a/"
              target="_blank"
              strength={0.3}
            >
              <span className="inline-block px-6 py-3 border border-border rounded-full text-sm font-medium text-text-secondary hover:text-accent hover:border-accent transition-colors duration-300">
                LinkedIn
              </span>
            </MagneticButton>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
