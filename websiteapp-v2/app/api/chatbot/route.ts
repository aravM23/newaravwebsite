import { NextResponse } from "next/server";

/* ═══════════════════════════════════════════════════════
   COMPREHENSIVE KNOWLEDGE BASE — everything on the site
   ═══════════════════════════════════════════════════════ */

const KB = {
  personal: {
    name: "Arav Mathur",
    age: "18",
    location: "Toronto, Ontario, Canada",
    school: "University of Waterloo",
    program: "Computer Science",
    tagline: "18-year-old super cool guy from Toronto. Studying CS @ Waterloo. Interested in making and shipping cool shit.",
    goal: "I want to make something people use everyday.",
    website_title: "Arav :)",
    website_description: "18-year-old builder from Toronto. CS @ Waterloo. Shipping products people love.",
    hindi_name: "आरव",
    socials: {
      email: "aravmathur23@gmail.com",
      linkedin: "https://www.linkedin.com/in/arav-mathur-0567bb26a/",
      twitter: "https://x.com/aravmathur23",
      github: "https://github.com/aravM23",
      instagram: "https://www.instagram.com/aravmathurr",
      medium: "https://medium.com/@aravmathur23",
      spotify: "https://open.spotify.com/user/h85k4crnf27w61e7wynzb6iti",
    },
    footer_note: "made with love from my waterloo dorm room",
  },

  current_role: {
    title: "Building GrayPass",
    detail: "Currently dialed in on GrayPass — passwordless authentication using behavioral biometrics. $350,000 pre-seed, $3K MRR (afore 26).",
    link: "https://www.graypass.org/",
  },

  projects: [
    {
      name: "Oro",
      short: "Fashion app that analyzes your mood boards, camera roll, and daily fits to build your style profile and generate outfits (300K+ views on IG, 5,000 downloads, featured at Fashion Week, 17 brand partners)",
      detail: "Fashion app that analyzes your mood boards, camera roll, and daily fit pics to build your style profile. Algorithmically generates context-aware outfits from your existing wardrobe and discovers capsule pieces within your budget to purchase. 300K+ views on Instagram, 5,000 downloads, featured at Fashion Week, and 17 brand partners.",
      tech: "",
      link: "",
      status: "",
      keywords: ["oro", "fashion", "ecommerce", "e-commerce", "style", "wear", "clothing", "clothes", "recommend", "shop", "shopping"],
    },
    {
      name: "GrayPass",
      short: "Building cognitive biometric security infrastructure for identity and authentication in enterprise systems. $350,000 pre-seed, $3K MRR (afore 26)",
      detail: "Passwordless authentication protocol using behavioral biometrics (typing rhythm, gaze patterns). Converts user inputs into a privacy-preserving 15-D feature vector, mapped to a stable 64-D embedding space via contrastive learning. Cancelable biometric templates using salted hashes.",
      tech: "Python, PyTorch, JavaScript, NumPy, Cryptography, FastAPI",
      link: "https://www.graypass.org/",
      funding: "$350,000 pre-seed, $3K MRR (afore 26)",
      status: "latest / active",
      keywords: ["graypass", "gray pass", "biometric", "passwordless", "authentication", "1517", "current"],
    },
    {
      name: "Post-It",
      short: "Spatial persistent sticky notes for Snapchat through unreleased Snap Spectacles",
      detail: "Uses AR through Snap Spectacles to bring digital sticky notes into the real world. Tap a location to anchor a note, add a message, and Gemini AI generates a symbolic 3D icon (a book for a study spot, a cup for a cafe). Nearby users see icons anchored in space and can tap to reveal the full note. Built with Snap's World Query Controller, Physics Colliders for finger-overlap detection, and a Pinch Button + TypeScript toggle system.",
      tech: "Flask, Lens Studio, TypeScript, Gemini API, VoiceML, Connected Lenses",
      status: "Hack the North Top 32",
      keywords: ["post-it", "post it", "snap", "spectacle", "snapchat", "ar", "augmented reality", "hack the north", "hackathon", "spatial"],
    },
    {
      name: "TurtleShell",
      short: "Got $30K in VC at 15. Gov of Ontario-backed tourist safety app. Forced shut down due to privacy laws.",
      detail: "Tourist safety startup. Geospatial ETL pipeline ingesting 125K+ unstructured criminology records from global law enforcement portals. Graph Neural Network using PyTorch Geometric to model urban safety as a relational network. Distance-weighted queries across 55+ FBI-standardized crime classifications.",
      tech: "Python, PyTorch Geometric, PostGIS, PySpark, Swift, FastAPI",
      link: "https://youtu.be/DEJDNSfQB8I",
      funding: "$30K VC at 15, plus a $26K Microsoft grant and Government of Ontario backing",
      status: "inactive (shut down due to privacy laws)",
      keywords: ["turtleshell", "turtle shell", "turtle", "safety", "tourist", "ontario", "microsoft"],
    },
    {
      name: "ConnectED",
      short: '"Tinder for Scholarships." Rideau Hall Foundation\'s Best Youth Innovation',
      detail: "Scholarship and grant finder with a Scrapy-based pipeline aggregating data from 150+ websites. Tinder-style swipe interface as a binary filter for discovery. OAuth 2.0 auto-sync to Google Calendar. Headless browser automation for auto-filling no-essay applications.",
      tech: "Python, JavaScript, SQL, NLTK, Google API, Scrapy",
      link: "https://github.com/aravM23/ConnectED",
      funding: "Rideau Hall Foundation's Best Youth Innovation",
      keywords: ["connected", "scholarship", "tinder", "rideau hall"],
    },
    {
      name: "UEFA Champions League Betting Assistant",
      short: "ML-powered UEFA UCL betting analytics dashboard",
      detail: "Streamlit-powered analytics dashboard tracking Champions League matches with betting insights, live odds movements, and ML predictions.",
      tech: "Python, Streamlit, pandas, scikit-learn, BeautifulSoup, Plotly",
      link: "https://uclsportsbetting.streamlit.app/",
      keywords: ["uefa", "ucl", "champions league", "betting", "soccer", "football", "sports"],
    },
    {
      name: "Plant Pathogen Detection",
      short: "DJI drone-based apple orchard disease detection",
      detail: "Looks at apple orchards through DJI drones and tells you what diseases can be spotted. Scans for 30+ pathogen types in apple trees, saving orchardists ~20 hours weekly. Deployed as Android companion.",
      tech: "Python, TensorFlow, Keras, OpenCV, DJI SDK, Kotlin",
      link: "https://medium.com/@aravmathur23/solving-the-apple-pathology-problem-using-artificial-intelligence-fa373a0f552a",
      keywords: ["plant", "pathogen", "drone", "dji", "apple", "orchard", "disease", "agriculture"],
    },
    {
      name: 'AI Voice Assistant "Ronaldo"',
      short: 'JARVIS-inspired voice assistant named "Ronaldo"',
      detail: "JARVIS-inspired voice assistant activated by saying 'Ronaldo.' Uses speech recognition, GPT-3.5, and text-to-speech for natural conversations.",
      tech: "Python, PyAudio, SpeechRecognition, OpenAI API, gTTS",
      link: "https://medium.com/@aravmathur23/meet-ronaldo-my-personal-voice-assistant-here-s-how-i-made-it-58b566bc1fe0",
      keywords: ["ronaldo", "voice", "assistant", "jarvis", "ai assistant"],
    },
    {
      name: "Mood Based Sound Generation",
      short: "AI music generation based on your mood using Google's SoundStorm architecture",
      detail: "AI music generation model. Adjusts frequency, genre, and BPM based on detected mood. Built on Google's SoundStorm architecture.",
      tech: "Python, PyTorch, Encodec, Conformer",
      link: "https://medium.com/@aravmathur23/how-i-created-an-ai-model-for-sound-generation-using-soundstorm-a31b28fd8c43",
      keywords: ["mood", "sound", "music", "generation", "soundstorm"],
    },
    {
      name: "Facial Emotion Detection",
      short: "CNN recognizing 7 emotions in real-time (first technical project)",
      detail: "CNN for detecting seven distinct emotions: Happiness, Anger, Disgust, Fear, Sadness, Surprise, and Neutral. Real-time processing with OpenCV. This was Arav's first technical project.",
      tech: "Python, TensorFlow, Keras, OpenCV",
      link: "https://medium.com/@aravmathur23/the-path-to-constructing-my-own-cnn-models-effectively-while-learning-creating-and-innovating-all-d02ffafaa1c2",
      keywords: ["facial", "emotion", "detection", "cnn", "first project"],
    },
  ],

  experience: [
    {
      role: "Software Engineer",
      company: "Aview International",
      type: "internship",
      detail: "Canada's biggest AI dubbing/translation startup. Built a tool to automatically find and track influencers across 5 social media platforms for client outreach. Scaled MongoDB infra to 50K+ daily data points. Integrated Gemini API for AI-generated outreach reports. Clients included Marvel, Logan Paul, and Mark Rober.",
      keywords: ["aview", "intern", "dubbing", "translation", "marvel", "logan paul"],
    },
    {
      role: "CEO & Founder",
      company: "TurtleShell",
      type: "founder",
      detail: "Got $30K in VC at 15. Got grants, awards, and government backing by 16. Forced to shut it down 6 months after all that. Geospatial ETL pipeline on 125K+ criminology records. GNN with PyTorch Geometric for urban safety modeling.",
      keywords: ["turtleshell", "founder", "ceo"],
    },
    {
      role: "Spring Consultant (ML Engineer)",
      company: "BenchSci",
      type: "consulting",
      detail: "1 of 4 global young engineers selected. Built a burnout monitoring system for 284 engineers cross-referencing JIRA metadata. Ingesting 3,000+ data points per engineer to create a 0-100 stress index. Gemini-powered automated task reassignment.",
      keywords: ["benchsci", "burnout", "jira", "consultant"],
    },
    {
      role: "Research Assistant",
      company: "University of Toronto",
      type: "research",
      detail: "Worked on understanding suicidal ideation in teens through modelling software. Research under Dr. Brad Bass, member of the IPCC Nobel Peace Prize team.",
      keywords: ["uoft", "toronto", "research", "dr. bass", "brad bass"],
    },
    {
      role: "Citizen Scientist",
      company: "NASA",
      type: "volunteer",
      detail: "Contributed to 40+ projects helping NASA scientists with climate research.",
      keywords: ["nasa", "citizen", "climate", "space"],
    },
    {
      role: "Founder",
      company: "Positive Powers",
      type: "nonprofit",
      detail: "Started with the goal of uplifting vulnerable communities during the pandemic. Raised $15K for projects across two continents.",
      keywords: ["positive powers", "nonprofit", "charity"],
    },
    {
      role: "Metaverse Consultant",
      company: "IKEA",
      type: "consulting",
      detail: "Developed a mixed AR metaverse concept for Gen-Z shopping habits. IKEA later launched its virtual store in Roblox.",
      keywords: ["ikea", "metaverse", "ar", "roblox"],
    },
  ],

  awards: [
    {
      name: "1517 Fund / GrayPass",
      detail: "Received $100,000 from 1517 Fund for GrayPass, a passwordless authentication protocol using behavioral biometrics.",
      highlight: "$100K",
      keywords: ["1517", "fund", "100k"],
    },
    {
      name: "Afore VC Portfolio Company",
      detail: "GrayPass was selected as an Afore VC portfolio company (F26 cohort).",
      highlight: "Afore F26",
      keywords: ["afore", "f26", "portfolio", "vc"],
    },
    {
      name: "President's Scholarship of Distinction",
      detail: "Awarded by University of Waterloo for outstanding academic achievement.",
      highlight: "Waterloo",
      keywords: ["president", "scholarship", "waterloo"],
    },
    {
      name: "Hack the North · Top 32 (Semifinalist)",
      detail: "Built Post-It at Hack the North (Canada's largest hackathon). It's an AR experience for Snap Spectacles where you can anchor sticky notes to real-world locations. Friends see them when they visit the spot. Gemini AI turns your message into a 3D icon (a book for a study spot, a cup for a cafe).",
      highlight: "Top 32",
      keywords: ["hack the north", "hackathon", "top 32", "semifinalist"],
    },
    {
      name: "Ingenious+ Best Technology Innovation",
      detail: "$2,000 funding for ConnectED and TurtleShell. Presented at the Legislative Assembly of Ontario.",
      highlight: "Ontario Winner",
      keywords: ["ingenious", "innovation", "ontario", "legislative"],
    },
    {
      name: "Youth Entrepreneur of the Year Finalist",
      detail: "2023 finalist for Canada's youth entrepreneur of the year.",
      highlight: "2023 Finalist",
      keywords: ["entrepreneur", "year", "finalist"],
    },
    {
      name: "Villars Ecopreneurship VIP-e Scholar",
      detail: "3,500 Swiss francs scholarship for stay at Environment conference in Villars, Switzerland.",
      highlight: "CHF 3,500",
      keywords: ["villars", "ecopreneurship", "switzerland", "scholar"],
    },
  ],

  research: [
    { name: "University of Toronto", detail: "Research under Dr. Brad Bass, member of the IPCC Nobel Peace Prize team." },
    { name: "MIT Verified Ocean De-acidification Research", detail: "Research on reversing ocean acidification." },
  ],

  certifications: [
    { name: "Building Cloud Native and Multicloud Applications", issuer: "IBM Skills Network", date: "Aug 2024" },
    { name: "Blockchain Foundations Developer", issuer: "IBM", date: "Dec 2021" },
  ],

  hackathons: [
    { name: "Hack the North", result: "Top 32", detail: "Canada's largest hackathon · 36-hour prototype with live judging", link: "https://www.youtube.com/watch?v=9KyURGKkTMI" },
    { name: "Empower Hacks 2.0", result: "11th Place", detail: "Among 1,885 participants", link: "https://devpost.com/software/connected-ie5ghl" },
  ],

  sideQuests: [
    "Published two books on Kindle (dystopian novels)",
    "Prev. Guitarist for an Indo-Fusion band",
    "Instagram content creator (150K+ views total) — @aravmathurr",
    "Founded nonprofit · raised $15K across two continents",
    "300+ claps as Technical Content Writer on Medium",
    "Flight Corporal in Royal Canadian Air Cadets",
  ],

  spotify: {
    minutes: "77,627 minutes on Spotify this year",
    profile: "https://open.spotify.com/user/h85k4crnf27w61e7wynzb6iti",
  },

  reels: {
    page_desc: "Arav's Instagram reels page. Handle: @aravmathurr",
    instagram: "https://www.instagram.com/aravmathurr",
  },

  website: {
    pages: ["Home", "Projects", "Awards", "Reels"],
    features: ["Live Spotify widget", "Interactive driving game", "AI chatbot", "Custom cursor", "Page transitions", "Animated car in footer"],
    tech_stack: "Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion",
    footer_text: "made with love from my waterloo dorm room",
  },

  skills: {
    languages: "Python, JavaScript, TypeScript, Swift, Kotlin, SQL",
    frameworks: "React, Next.js, FastAPI, Flask, Streamlit",
    ml: "TensorFlow, PyTorch, PyTorch Geometric, Keras, scikit-learn, OpenCV, NLTK",
    tools: "MongoDB, PostGIS, PySpark, DJI SDK, Snap Lens Studio, Google APIs",
    specialties: "AI/ML, Full-stack Development, Computer Vision, NLP, Geospatial ML, Behavioral Biometrics",
  },
};

/* ═══════════════════════════════════════════════
   SMART SEARCH — fuzzy keyword + category matching
   ═══════════════════════════════════════════════ */

async function fetchSpotifyData(type: "recent" | "top" = "recent") {
  try {
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";
    const endpoint =
      type === "top" ? `${baseUrl}/api/spotify?type=top` : `${baseUrl}/api/spotify`;
    const res = await fetch(endpoint);
    const data = await res.json();
    return data.tracks || [];
  } catch {
    return [];
  }
}

function words(s: string): string[] {
  return s.toLowerCase().replace(/[^a-z0-9\s]/g, "").split(/\s+/).filter(Boolean);
}

function matchScore(query: string, keywords: string[]): number {
  const q = query.toLowerCase();
  let score = 0;
  for (const kw of keywords) {
    if (q.includes(kw)) score += kw.length; // longer keyword matches = higher score
  }
  return score;
}

// Whole-word matcher so short terms like "ai", "ml", "age", "vc" don't
// accidentally match inside words like "email", "language" or "service".
function has(text: string, ...terms: string[]): boolean {
  return terms.some((t) => {
    const escaped = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`(^|[^a-z0-9])${escaped}([^a-z0-9]|$)`, "i").test(text);
  });
}

function searchKnowledgeBase(q: string): string | Promise<string> {
  const l = q.toLowerCase().trim();

  // ─── GREETINGS ───
  if (/^(hi|hey|hello|sup|yo|wassup|what'?s up|howdy|hola|hiya|heya|good (morning|afternoon|evening))\b/.test(l)) {
    return "Hey! 👋 I'm Arav's chatbot. Ask me anything — his projects, experience, awards, skills, what he's listening to, side quests, contact info, or anything else on the site.";
  }
  if (/^(thanks|thank you|thx|ty|appreciate|cheers)\b/.test(l)) {
    return "No problem! Let me know if you want to know anything else about Arav.";
  }
  if (/^(bye|goodbye|see ya|see you|cya|later|peace|gtg)\b/.test(l)) {
    return `Catch you later! 👋 You can always reach Arav at ${KB.personal.socials.email}.`;
  }

  // ─── SPOTIFY / MUSIC ───
  if (/top (song|track|music)/.test(l) || l.includes("favorite song") || l.includes("favourite song") || l.includes("best song")) {
    return fetchSpotifyData("top").then((tracks) => {
      if (!tracks.length)
        return "Couldn't fetch top songs right now. Check the Spotify widget on the homepage!";
      return (
        "Arav's top songs this month:\n\n" +
        tracks
          .slice(0, 5)
          .map((t: any, i: number) => `${i + 1}. "${t.title}" by ${t.artist}`)
          .join("\n") +
        `\n\nFollow him: ${KB.spotify.profile}`
      );
    });
  }
  if (l.includes("recently played") || l.includes("listening to") || l.includes("what is he listening") || l.includes("recent track") || l.includes("last played")) {
    return fetchSpotifyData("recent").then((tracks) => {
      if (!tracks.length)
        return "Couldn't fetch recent tracks. Check the Spotify widget on the homepage!";
      return (
        "Recently played:\n\n" +
        tracks
          .slice(0, 5)
          .map((t: any, i: number) => `${i + 1}. "${t.title}" by ${t.artist}`)
          .join("\n")
      );
    });
  }
  if (l.includes("spotify") || (l.includes("music") && !l.includes("mood") && !l.includes("sound"))) {
    return `Arav has ${KB.spotify.minutes}! There's a live Spotify widget on the homepage showing his recently played tracks. Follow him: ${KB.spotify.profile}`;
  }

  // ─── IDENTITY ───
  if (l.includes("who is") || l.includes("who are") || l.includes("tell me about arav") || l.includes("about yourself") || l.includes("introduce")) {
    return `Arav Mathur is an 18-year-old CS student at the University of Waterloo from Toronto. ${KB.personal.tagline}\n\nHe's currently building GrayPass (passwordless auth via behavioral biometrics, $350,000 pre-seed, $3K MRR (afore 26)). Previously founded TurtleShell ($30K VC at 15, plus a $26K Microsoft grant + Gov of Ontario backing), worked at Aview International, consulted for BenchSci and IKEA, and did research at UofT.\n\nSide quests: published two novels, played guitar in an Indo-Fusion band, 150K+ Instagram views, Flight Corporal in Air Cadets.`;
  }
  if (has(l, "how old", "age", "birthday", "born", "years old")) return `Arav is ${KB.personal.age} years old.`;
  if ((l.includes("where") && (l.includes("from") || l.includes("live") || l.includes("based"))) || l.includes("location") || l.includes("city") || l.includes("toronto")) {
    return `Arav is from ${KB.personal.location}. Currently studying CS at Waterloo. ${KB.personal.footer_note}.`;
  }
  if (l.includes("school") || l.includes("university") || l.includes("waterloo") || l.includes("education") || l.includes("studying") || l.includes("college") || l.includes("degree")) {
    return `Arav studies ${KB.personal.program} at the ${KB.personal.school}. He also received the President's Scholarship of Distinction from Waterloo.`;
  }
  if (l.includes("hindi") || l.includes("indian") || l.includes("nazar") || l.includes("🧿") || l.includes("आरव")) {
    return `Arav's name in Hindi is ${KB.personal.hindi_name} 🧿. He's of Indian heritage, from Toronto.`;
  }

  // ─── SPECIFIC PROJECTS (check each one) ───
  for (const proj of KB.projects) {
    const score = matchScore(l, proj.keywords || []);
    if (score > 0) {
      let answer = `${proj.name}: ${proj.detail}`;
      if (proj.tech) answer += `\n\nTech: ${proj.tech}`;
      if (proj.funding) answer += `\nFunding: ${proj.funding}`;
      if (proj.status) answer += `\nStatus: ${proj.status}`;
      if (proj.link) answer += `\nLink: ${proj.link}`;
      return answer;
    }
  }

  // ─── ALL PROJECTS ───
  if (l.includes("project") || l.includes("built") || l.includes("made") || l.includes("portfolio") || l.includes("things") || l.includes("what has he built") || l.includes("what did he make") || l.includes("how many projects")) {
    return (
      `Arav has built 10 projects:\n\n` +
      KB.projects.map((p) => `• ${p.name} — ${p.short}`).join("\n") +
      `\n\nCheck them all out at /projects`
    );
  }

  // ─── SPECIFIC EXPERIENCE ───
  for (const exp of KB.experience) {
    const score = matchScore(l, exp.keywords || []);
    if (score > 0) {
      return `${exp.role} @ ${exp.company} (${exp.type})\n\n${exp.detail}`;
    }
  }

  // ─── ALL EXPERIENCE ───
  if (l.includes("experience") || l.includes("work") || l.includes("job") || l.includes("intern") || l.includes("career") || l.includes("resume") || l.includes("cv") || l.includes("employment")) {
    return (
      `Arav's experience:\n\n` +
      KB.experience.map((e) => `• ${e.role} @ ${e.company} — ${e.detail.split(".")[0]}.`).join("\n")
    );
  }

  // ─── AWARDS ───
  if (l.includes("award") || l.includes("achievement") || l.includes("recognition") || l.includes("prize") || l.includes("honour") || l.includes("honor") || l.includes("won")) {
    return (
      `Arav's awards & recognition:\n\n` +
      KB.awards.map((a) => `• ${a.name} — ${a.detail}`).join("\n") +
      `\n\nSee them all at /awards`
    );
  }
  // Individual awards
  for (const award of KB.awards) {
    if (matchScore(l, award.keywords || []) > 0) {
      return `${award.name}: ${award.detail}`;
    }
  }

  // ─── HACKATHONS ───
  if (l.includes("hackathon") || l.includes("hack the north") || l.includes("hacking") || l.includes("empower hack")) {
    return KB.hackathons.map((h) => `• ${h.name} — ${h.result}. ${h.detail} (${h.link})`).join("\n\n");
  }

  // ─── RESEARCH ───
  if (l.includes("research") || l.includes("academic") || l.includes("paper") || l.includes("ipcc") || l.includes("ocean") || l.includes("environment")) {
    return (
      "Arav's research & advisory work:\n\n" +
      KB.research.map((r) => `• ${r.name} — ${r.detail}`).join("\n")
    );
  }

  // ─── CERTIFICATIONS ───
  if (l.includes("certification") || l.includes("certificate") || l.includes("certified") || l.includes("ibm") || l.includes("blockchain")) {
    return (
      "Certifications:\n\n" +
      KB.certifications.map((c) => `• ${c.name} — ${c.issuer}, ${c.date}`).join("\n")
    );
  }

  // ─── SKILLS / TECH ───
  if (l.includes("skill") || l.includes("tech stack") || l.includes("technology") || l.includes("language") || l.includes("framework") || l.includes("tool") || l.includes("what does he know") || l.includes("programming")) {
    return `Languages: ${KB.skills.languages}\n\nFrameworks: ${KB.skills.frameworks}\n\nML/AI: ${KB.skills.ml}\n\nTools: ${KB.skills.tools}\n\nSpecialties: ${KB.skills.specialties}`;
  }
  if (l.includes("python") || l.includes("javascript") || l.includes("typescript") || l.includes("swift") || l.includes("kotlin") || l.includes("sql")) {
    return `Yes! Arav works with: ${KB.skills.languages}. He also uses frameworks like ${KB.skills.frameworks} and ML tools like ${KB.skills.ml}.`;
  }
  if (has(l, "machine learning", "deep learning", "neural network", "neural networks", "artificial intelligence", "ai", "ml", "computer vision", "nlp")) {
    return `Arav works extensively in AI/ML. Tools: ${KB.skills.ml}. Projects include GrayPass (behavioral biometrics), Plant Pathogen Detection (CNNs), Facial Emotion Detection, TurtleShell (GNNs), Mood Sound Generation, and more.`;
  }

  // ─── CONTACT ───
  if (l.includes("contact") || l.includes("email") || l.includes("reach") || l.includes("get in touch") || l.includes("hire") || l.includes("connect") || l.includes("message")) {
    return `Here's how to reach Arav:\n\nEmail: ${KB.personal.socials.email}\nLinkedIn: ${KB.personal.socials.linkedin}\nTwitter: ${KB.personal.socials.twitter}\nInstagram: ${KB.personal.socials.instagram}\nGitHub: ${KB.personal.socials.github}`;
  }
  if (l.includes("linkedin")) return `Arav's LinkedIn: ${KB.personal.socials.linkedin}`;
  if (l.includes("twitter") || l.includes("x.com")) return `Arav's Twitter/X: ${KB.personal.socials.twitter}`;
  if (l.includes("github")) return `Arav's GitHub: ${KB.personal.socials.github}`;
  if (l.includes("instagram") || l.includes("insta") || l.includes("reels")) {
    return `Arav's Instagram: ${KB.personal.socials.instagram}\n\nHe posts reels and content — 150K+ total views. Check out his reels page at /reels.`;
  }
  if (l.includes("medium") || l.includes("blog") || l.includes("article") || l.includes("writing") || l.includes("writer")) {
    return `Arav is a Technical Content Writer on Medium with 300+ claps. Check his articles: ${KB.personal.socials.medium}`;
  }

  // ─── SIDE QUESTS / FUN FACTS ───
  if (l.includes("fun fact") || l.includes("interesting") || l.includes("random") || l.includes("cool fact") || l.includes("did you know")) {
    const fact = KB.sideQuests[Math.floor(Math.random() * KB.sideQuests.length)];
    return `Fun fact about Arav: ${fact}`;
  }
  if (l.includes("side quest") || l.includes("hobby") || l.includes("hobbies") || l.includes("free time") || l.includes("outside") || l.includes("for fun") || l.includes("extracurricular")) {
    return "Arav's side quests:\n\n" + KB.sideQuests.map((s) => `• ${s}`).join("\n");
  }
  if (l.includes("book") || l.includes("novel") || l.includes("author") || l.includes("kindle") || l.includes("publish")) {
    return "Arav has published two dystopian novels on Kindle!";
  }
  if (l.includes("guitar") || l.includes("band") || l.includes("musician") || l.includes("indo-fusion") || l.includes("fusion")) {
    return "Arav was previously a guitarist in an Indo-Fusion band.";
  }
  if (l.includes("cadet") || l.includes("air cadet") || l.includes("military") || l.includes("flight corporal")) {
    return "Arav held the rank of Flight Corporal in the Royal Canadian Air Cadets.";
  }
  if (l.includes("nonprofit") || l.includes("charity") || l.includes("positive powers") || l.includes("volunteer")) {
    return "Arav founded Positive Powers, a nonprofit that raised $15K for projects across two continents, uplifting vulnerable communities during the pandemic.";
  }

  // ─── CURRENT / LATEST ───
  if (l.includes("latest") || l.includes("current") || l.includes("working on") || l.includes("right now") || l.includes("nowadays") || l.includes("these days") || l.includes("what is he doing")) {
    return `${KB.current_role.detail}\n\nCheck it out: ${KB.current_role.link}`;
  }

  // ─── WEBSITE / META ───
  if (l.includes("website") || l.includes("this site") || l.includes("how was this") || l.includes("built with") || l.includes("tech stack of") || l.includes("what is this")) {
    return `This website is built with ${KB.website.tech_stack}. It features: ${KB.website.features.join(", ")}. Pages: ${KB.website.pages.join(", ")}.\n\n${KB.personal.footer_note} 🙂`;
  }
  if (l.includes("game") || l.includes("driving") || l.includes("play")) {
    return "There's an interactive driving game on the homepage! Scroll down past the Spotify section — dodge obstacles, collect stars, and try to beat your high score. Arrow keys or A/D to steer.";
  }
  if (l.includes("chatbot") || l.includes("chat bot") || has(l, "you", "you're", "ur a") || l.includes("are you real") || l.includes("are you ai")) {
    return "I'm Arav's AI chatbot! I know everything that's on this website — projects, experience, awards, skills, side quests, contact info, Spotify stats, and more. Ask me anything!";
  }

  // ─── PERSONALITY / NEGATIVE (placed late so "is GrayPass good?" hits the project first) ───
  if (/\b(rude|mean|bad|ugly|stupid|dumb|annoying|boring|lazy|terrible|awful|worst|hate|sucks?|trash|toxic|arrogant|selfish|fake|lame|jerk|creepy)\b/.test(l)) {
    return "Haha, no — Arav's a genuinely nice, kind and fun person to be around (say all his friends 😎).";
  }
  if (
    /\b(nice|kind|cool|funny|smart|intelligent|friendly|chill|sweet|genuine|humble|talented|amazing|awesome|incredible|personality|vibes?)\b/.test(l) ||
    /(what.*(he|arav).*like|how is he|what kind of person|type of person|as a person)/.test(l)
  ) {
    return "Arav is a really nice, kind and fun person to be around (say all his friends 😎).";
  }

  // ─── FUNDING / MONEY ───
  if (l.includes("funding") || l.includes("money") || l.includes("investment") || l.includes("raised") || l.includes("investor") || has(l, "vc") || l.includes("venture") || l.includes("pre-seed") || l.includes("preseed")) {
    return "Arav's funding history:\n\n• GrayPass — $350,000 pre-seed, $3K MRR (afore 26)\n• TurtleShell — $30K VC at 15, plus a $26K Microsoft grant + Government of Ontario backing\n• ConnectED — Rideau Hall Foundation's Best Youth Innovation\n• Ingenious+ — $2K for technology innovation\n• Villars — CHF 3,500 ecopreneurship scholarship";
  }

  // ─── NUMBER / COUNT QUESTIONS ───
  if (l.includes("how many") && l.includes("project")) return `Arav has built ${KB.projects.length} projects listed on the site.`;
  if (l.includes("how many") && (l.includes("award") || l.includes("recognition"))) return `Arav has ${KB.awards.length} awards and recognitions listed on the site.`;
  if (l.includes("how many") && l.includes("experience")) return `Arav has ${KB.experience.length} professional experiences listed.`;

  // ─── FALLBACK — try fuzzy matching across all content ───
  const queryWords = words(l);
  let bestMatch = "";
  let bestScore = 0;

  // Search projects
  for (const p of KB.projects) {
    const allText = `${p.name} ${p.short} ${p.detail} ${p.tech || ""} ${(p.keywords || []).join(" ")}`;
    let score = 0;
    for (const w of queryWords) {
      if (allText.toLowerCase().includes(w) && w.length > 2) score += w.length;
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = `${p.name}: ${p.short}${p.link ? `\nLink: ${p.link}` : ""}`;
    }
  }

  // Search experience
  for (const e of KB.experience) {
    const allText = `${e.role} ${e.company} ${e.detail} ${(e.keywords || []).join(" ")}`;
    let score = 0;
    for (const w of queryWords) {
      if (allText.toLowerCase().includes(w) && w.length > 2) score += w.length;
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = `${e.role} @ ${e.company}: ${e.detail}`;
    }
  }

  // Search awards
  for (const a of KB.awards) {
    const allText = `${a.name} ${a.detail} ${(a.keywords || []).join(" ")}`;
    let score = 0;
    for (const w of queryWords) {
      if (allText.toLowerCase().includes(w) && w.length > 2) score += w.length;
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = `${a.name}: ${a.detail}`;
    }
  }

  if (bestScore >= 5 && bestMatch) {
    return bestMatch;
  }

  // ─── TRULY UNKNOWN ───
  return `Hmm, I don't have specific info about that. Here's what I can help with:\n\n• Projects (GrayPass, Post-It, TurtleShell, ConnectED, etc.)\n• Experience (Aview, BenchSci, IKEA, NASA, UofT)\n• Awards & hackathons\n• Skills & tech stack\n• Side quests & fun facts\n• Contact info & socials\n• Spotify stats & music\n• This website itself\n\nOr just say hi! 🙂`;
}

/* ═══════════ HANDLER ═══════════ */

export async function POST(request: Request) {
  try {
    const { question } = await request.json();
    if (!question || typeof question !== "string") {
      return NextResponse.json(
        { answer: "Please provide a valid question." },
        { status: 400 }
      );
    }
    const answer = await searchKnowledgeBase(question);
    return NextResponse.json({ answer });
  } catch (error) {
    console.error("Chatbot API error:", error);
    return NextResponse.json(
      {
        answer: `Sorry, I'm having trouble right now. Reach Arav at ${KB.personal.socials.email}.`,
      },
      { status: 500 }
    );
  }
}
