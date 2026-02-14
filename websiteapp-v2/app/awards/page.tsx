"use client";

import TextReveal from "@/components/ui/TextReveal";
import FadeIn from "@/components/ui/FadeIn";
import StaggerChildren from "@/components/ui/StaggerChildren";

/* ─── DATA ───────────────────────────────────────────── */

const awards = [
  {
    title: "1517 Fund / GrayPass",
    description:
      "Received $100,000 from 1517 Fund for GrayPass, a passwordless authentication protocol using behavioral biometrics.",
    highlight: "$100K",
  },
  {
    title: "President's Scholarship of Distinction",
    description:
      "Awarded by the University of Waterloo for outstanding academic achievement.",
    highlight: "Waterloo",
  },
  {
    title: "Hack the North · Top 32 (Semifinalist)",
    description:
      'Built Post-It at Canada\'s largest hackathon. Spatial computing lens for Snap Spectacles enabling shared 3D sticky notes.',
    highlight: "Top 32",
  },
  {
    title: "Ingenious+ Best Technology Innovation",
    description:
      "$2,000 funding for ConnectED and TurtleShell. Presented at the Legislative Assembly of Ontario.",
    highlight: "Ontario Winner",
  },
  {
    title: "Youth Entrepreneur of the Year Finalist",
    description:
      "2023 finalist for Canada's youth entrepreneur of the year.",
    highlight: "2023 Finalist",
  },
  {
    title: "Villars Ecopreneurship VIP-e Scholar",
    description:
      "3,500 Swiss francs scholarship for my stay at an Environment conference in Villars, Switzerland.",
    highlight: "CHF 3,500",
  },
];

const certifications = [
  {
    name: "Building Cloud Native and Multicloud Applications",
    issuer: "IBM Skills Network",
    date: "Aug 2024",
  },
  {
    name: "Blockchain Foundations Developer",
    issuer: "IBM",
    date: "Dec 2021",
  },
];

const research = [
  {
    title: "University of Toronto",
    description:
      "Research under Dr. Brad Bass, member of the IPCC Nobel Peace Prize team.",
  },
  {
    title: "MIT Verified Ocean De-acidification Research",
    description:
      "Research on reversing ocean acidification.",
  },
  {
    title: "Ontario Youth Environment Council",
    description:
      "Environmental advisory for the province. Directly advised environment legislature to Ontario's Minister of Environment, David Piccini.",
  },
  {
    title: "Peel District School Board Equity Lead Council",
    description: "On the student council in highschool as an equity lead.",
  },
];

/* ─── PAGE ───────────────────────────────────────────── */

export default function AwardsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      {/* ─── HERO ─── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <TextReveal
          as="h1"
          className="font-serif text-display text-text-primary mb-4 whitespace-nowrap"
          splitBy="words"
        >
          Moments where im up 📈
        </TextReveal>
        <FadeIn delay={0.3}>
          <p className="text-lg text-text-secondary whitespace-nowrap">
            Put in the work for years for this, this ain&apos;t no coincidence - Central Cee 🐐
          </p>
        </FadeIn>
      </section>

      <div className="section-divider" />

      {/* ─── AWARDS ─── */}
      <section className="py-20 md:py-28">
        <FadeIn>
          <h2 className="font-serif text-heading text-text-primary mb-12">
            Awards
          </h2>
        </FadeIn>

        <StaggerChildren className="flex flex-col gap-8" staggerDelay={0.1}>
          {awards.map((award) => (
            <div
              key={award.title}
              className="group p-6 -mx-6 rounded-xl border border-transparent hover:border-border hover:bg-bg-secondary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-medium text-text-primary mb-2">
                    {award.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {award.description}
                  </p>
                </div>
                <span className="text-xs font-mono text-accent bg-accent/5 px-3 py-1 rounded-full border border-accent/10 shrink-0 whitespace-nowrap">
                  {award.highlight}
                </span>
              </div>
            </div>
          ))}
        </StaggerChildren>
      </section>

      <div className="section-divider" />

      {/* ─── RESEARCH & ADVISORY ─── */}
      <section className="py-20 md:py-28">
        <FadeIn>
          <h2 className="font-serif text-heading text-text-primary mb-12">
            Research & Advisory
          </h2>
        </FadeIn>

        <StaggerChildren className="flex flex-col gap-6" staggerDelay={0.08}>
          {research.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="mt-1.5 w-2 h-2 rounded-full bg-accent/40 shrink-0" />
              <div>
                <p className="text-text-primary font-medium">{item.title}</p>
                <p className="text-sm text-text-secondary mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </StaggerChildren>
      </section>

      <div className="section-divider" />

      {/* ─── CERTIFICATIONS ─── */}
      <section className="py-20 md:py-28">
        <FadeIn>
          <h2 className="font-serif text-heading text-text-primary mb-12">
            Certifications
          </h2>
        </FadeIn>

        <StaggerChildren className="flex flex-col gap-6" staggerDelay={0.1}>
          {certifications.map((cert) => (
            <div key={cert.name} className="flex items-start gap-4">
              <span className="text-text-secondary/50 font-mono text-sm mt-0.5 shrink-0">
                &rarr;
              </span>
              <div>
                <p className="text-text-primary font-medium">{cert.name}</p>
                <p className="text-sm text-text-secondary mt-1">
                  {cert.issuer} · {cert.date}
                </p>
              </div>
            </div>
          ))}
        </StaggerChildren>
      </section>
    </div>
  );
}
