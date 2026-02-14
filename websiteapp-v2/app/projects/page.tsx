"use client";

import TextReveal from "@/components/ui/TextReveal";
import FadeIn from "@/components/ui/FadeIn";
import StaggerChildren from "@/components/ui/StaggerChildren";
import MagneticButton from "@/components/ui/MagneticButton";

/* ─── DATA ───────────────────────────────────────────── */

const projects = [
  {
    name: "GrayPass",
    description:
      "Building cognitive biometric security infrastructure for identity and authentication in enterprise systems. Backed with $100K in pre-seed funding from the 1517 Fund. Converts user inputs into a privacy-preserving 15-D feature vector, mapped to a stable 64-D embedding space via contrastive learning. Cancelable biometric templates using salted hashes.",
    tech: ["Python", "PyTorch", "JavaScript", "NumPy", "Cryptography", "FastAPI"],
    link: "https://www.graypass.org/",
    funding: "$100K pre-seed from 1517 Fund",
    status: "latest",
  },
  {
    name: "Post-It",
    description:
      "Uses AR through Snap Spectacles to bring digital sticky notes into the real world. Tap a location to anchor a note, add a message, and Gemini AI generates a symbolic 3D icon (a book for a study spot, a cup for a cafe). Nearby users see icons anchored in space and can tap to reveal the full note. Built with Snap's World Query Controller, Physics Colliders for finger-overlap detection, and a Pinch Button + TypeScript toggle system for switching between sticky notes and icons.",
    tech: ["Flask", "Lens Studio", "TypeScript", "Gemini API", "VoiceML", "Connected Lenses"],
    link: "#",
    status: "hack the north top 32",
  },
  {
    name: "TurtleShell",
    description:
      "Gov of Ontario-backed tourist safety startup. Geospatial ETL pipeline ingesting 125K+ unstructured criminology records from global law enforcement portals. Graph Neural Network using PyTorch Geometric to model urban safety as a relational network. Distance-weighted queries across 55+ FBI-standardized crime classifications.",
    tech: ["Python", "PyTorch Geometric", "PostGIS", "PySpark", "Swift", "FastAPI"],
    link: "https://youtu.be/DEJDNSfQB8I",
    funding: "Backed by Gov of Ontario",
    status: "inactive",
  },
  {
    name: "ConnectED",
    description:
      "Scholarship and grant finder with a Scrapy-based pipeline aggregating data from 150+ websites. Tinder-style swipe interface as a binary filter for discovery. OAuth 2.0 auto-sync to Google Calendar. Headless browser automation for auto-filling no-essay applications.",
    tech: ["Python", "JavaScript", "SQL", "NLTK", "Google API", "Scrapy"],
    link: "https://github.com/aravM23/ConnectED",
    funding: "Rideau Hall Foundation's Best Youth Innovation",
  },
  {
    name: "UEFA Champions League Betting Assistant",
    description:
      "Streamlit-powered analytics dashboard tracking Champions League matches with betting insights, live odds movements, and ML predictions.",
    tech: ["Python", "Streamlit", "pandas", "scikit-learn", "BeautifulSoup", "Plotly"],
    link: "https://uclsportsbetting.streamlit.app/",
  },
  {
    name: "Plant Pathogen Detection",
    description:
      "Looks at apple orchards through DJI drones and tells you what diseases can be spotted. Scans for 30+ pathogen types in apple trees, saving orchardists ~20 hours weekly. Deployed as Android companion.",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "DJI SDK", "Kotlin"],
    link: "https://medium.com/@aravmathur23/solving-the-apple-pathology-problem-using-artificial-intelligence-fa373a0f552a",
  },
  {
    name: 'AI Voice Assistant "Ronaldo"',
    description:
      'JARVIS-inspired voice assistant activated by saying "Ronaldo." Uses speech recognition, GPT-3.5, and text-to-speech for natural conversations.',
    tech: ["Python", "PyAudio", "SpeechRecognition", "OpenAI API", "gTTS"],
    link: "https://medium.com/@aravmathur23/meet-ronaldo-my-personal-voice-assistant-here-s-how-i-made-it-58b566bc1fe0",
  },
  {
    name: "Mood Based Sound Generation",
    description:
      "AI music generation based on your mood using Google's SoundStorm architecture. Adjusts frequency, genre, and BPM based on detected mood.",
    tech: ["Python", "PyTorch", "Encodec", "Conformer"],
    link: "https://medium.com/@aravmathur23/how-i-created-an-ai-model-for-sound-generation-using-soundstorm-a31b28fd8c43",
  },
  {
    name: "Facial Emotion Detection",
    description:
      "CNN for detecting seven distinct emotions: Happiness, Anger, Disgust, Fear, Sadness, Surprise, and Neutral. Real-time processing with OpenCV. (my first technical project)",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV"],
    link: "https://medium.com/@aravmathur23/the-path-to-constructing-my-own-cnn-models-effectively-while-learning-creating-and-innovating-all-d02ffafaa1c2",
  },
];

const workExperience = [
  {
    role: "Software Engineer",
    company: "Aview International",
    description:
      "Canada's biggest AI dubbing/translation startup. Built a tool to automatically find and track influencers across 5 social media platforms for client outreach. Scaled MongoDB infra to 50K+ daily data points. Integrated Gemini API for AI-generated outreach reports.",
    type: "internship",
  },
  {
    role: "CEO & Founder",
    company: "TurtleShell",
    description:
      "Got my first VC cheque for this at 15. Got some grants and awards and government backing by 16. Forced to shut it down 6 months after all that (lol). Geospatial ETL pipeline on 125K+ criminology records. GNN with PyTorch Geometric for urban safety modeling.",
    type: "founder",
  },
  {
    role: "Spring Consultant (ML Engineer)",
    company: "BenchSci",
    description:
      "1 of 4 global young engineers selected to build a burnout monitoring system for 284 engineers cross-referencing JIRA metadata. Ingesting 3,000+ data points per engineer to create a 0-100 stress index. Gemini-powered automated task reassignment if need be.",
    type: "consulting",
  },
  {
    role: "Research Assistant",
    company: "University of Toronto",
    description:
      "Worked on understanding suicidal ideation in teens through modelling software.",
    type: "research",
  },
  {
    role: "Citizen Scientist",
    company: "NASA",
    description:
      "Contributed to 40+ projects helping NASA scientists with climate research.",
    type: "volunteer",
  },
  {
    role: "Founder",
    company: "Positive Powers",
    description:
      "I started with the goal of uplifting vulnerable communities during the pandemic. Raised $15K for projects across two continents.",
    type: "nonprofit",
  },
];

/* ─── PAGE ───────────────────────────────────────────── */

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      {/* ─── HERO ─── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <TextReveal
          as="h1"
          className="font-serif text-display text-text-primary mb-4"
          splitBy="words"
        >
          Projects n that 🍳
        </TextReveal>
        <FadeIn delay={0.3}>
          <p className="text-lg text-text-secondary max-w-xl">
            kewl things i made
          </p>
        </FadeIn>
      </section>

      <div className="section-divider" />

      {/* ─── PROJECTS ─── */}
      <section className="py-20 md:py-28">
        <FadeIn>
          <h2 className="font-serif text-heading text-text-primary mb-12">
            Projects
          </h2>
        </FadeIn>

        <StaggerChildren className="flex flex-col gap-10" staggerDelay={0.08}>
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 -mx-6 rounded-xl hover:bg-bg-secondary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap mb-2">
                    <h3 className="text-lg font-medium text-text-primary group-hover:text-accent transition-colors duration-300">
                      {project.name}
                    </h3>
                    {project.status && (
                      <span className="text-[10px] font-mono uppercase tracking-widest text-accent/80 bg-accent/5 px-2 py-0.5 rounded-full border border-accent/10">
                        {project.status}
                      </span>
                    )}
                    {project.funding && (
                      <span className="text-[10px] font-mono text-text-secondary bg-bg-secondary px-2 py-0.5 rounded-full">
                        {project.funding}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-text-secondary leading-relaxed mb-4 max-w-2xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono text-text-secondary/70 bg-bg-secondary px-2 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <span className="text-text-secondary/30 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0 text-lg">
                  ↗
                </span>
              </div>
            </a>
          ))}
        </StaggerChildren>
      </section>

      <div className="section-divider" />

      {/* ─── WORK EXPERIENCE ─── */}
      <section className="py-20 md:py-28">
        <FadeIn>
          <h2 className="font-serif text-heading text-text-primary mb-12">
            Experience
          </h2>
        </FadeIn>

        <StaggerChildren className="flex flex-col gap-8" staggerDelay={0.08}>
          {workExperience.map((exp) => (
            <div key={exp.company} className="flex items-start gap-4">
              <div className="mt-1.5 w-2 h-2 rounded-full bg-border shrink-0" />
              <div>
                <p className="text-text-primary font-medium">
                  {exp.role}
                  <span className="text-text-secondary font-normal">
                    {" "}
                    @ {exp.company}
                  </span>
                </p>
                <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-text-secondary/60 mt-1 mb-2">
                  {exp.type}
                </span>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </StaggerChildren>
      </section>

      {/* ─── HACKATHONS ─── */}
      <div className="section-divider" />
      <section className="py-20 md:py-28">
        <FadeIn>
          <h2 className="font-serif text-heading text-text-primary mb-12">
            Hackathons
          </h2>
        </FadeIn>

        <StaggerChildren className="flex flex-col gap-4" staggerDelay={0.08}>
          <div className="flex items-start gap-4">
            <span className="text-accent/60 font-mono text-sm mt-0.5 shrink-0">
              *
            </span>
            <div>
              <a
                href="https://www.youtube.com/watch?v=9KyURGKkTMI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary hover:text-accent transition-colors duration-300 font-medium"
              >
                Top 32 @ Hack the North
              </a>
              <p className="text-sm text-text-secondary mt-1">
                Canada&apos;s largest hackathon · 36-hour prototype with live judging
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-accent/60 font-mono text-sm mt-0.5 shrink-0">
              *
            </span>
            <div>
              <a
                href="https://devpost.com/software/connected-ie5ghl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary hover:text-accent transition-colors duration-300 font-medium"
              >
                11th Place @ Empower Hacks 2.0
              </a>
              <p className="text-sm text-text-secondary mt-1">
                Among 1,885 participants
              </p>
            </div>
          </div>
        </StaggerChildren>
      </section>
    </div>
  );
}
