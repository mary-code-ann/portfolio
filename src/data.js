export const profile = {
  name: "Mary Annie Sahaya",
  role: "Software Developer",
  headline: "AI automation, agentic workflows, Voice AI, and Python backend.",
  company: "Sify Technologies",
  location: "Chennai, India",
  tenure: "July 2023 – present",
  years: "3+ years",
  email: "mary.annie2001@gmail.com",
  linkedin: "https://www.linkedin.com/in/mary-annie-s-a685b01a3",
  linkedinLabel: "www.linkedin.com/in/mary-annie-s-a685b01a3",
  resumeHref: "/Mary_Annie_Sahaya_Resume.pdf",
  summary:
    "Software Developer with 3+ years at Sify Technologies (July 2023 – present). The work moved from mobile applications into Python backend, ServiceNow integrations, and AI automation on an internal AI automation platform. Currently working on a SecureCo voice solution, LLM-driven server audits, and data-center checks. Also built a full-stack learning management system with a RAG chatbot, and a personal LangGraph support agent.",
};

export const projects = [
  {
    id: "secureco",
    tags: ["AI", "Voice"],
    index: "01",
    title: "SecureCo IVP Voice AI",
    status: "Currently working on",
    statusTone: "progress",
    outcome:
      "Voice arrives as text webhooks. Workflows validate the caller, route intent, and return an LLM reply.",
    stack: ["SecureCo IVP", "AI automation platform", "Python", "MongoDB", "ServiceNow"],
    points: [
      "Currently working on SecureCo IVP: caller speech arrives as webhooks, and the system returns an LLM response.",
      "Built Python webhook middleware and MongoDB session APIs that route call events and send responses back.",
      "Welcome, user-text, and hangup workflows on an internal AI automation platform: ServiceNow user validation, intent routing, ticket status, and session summaries.",
    ],
  },
  {
    id: "user-report",
    tags: ["AI", "Automation"],
    index: "02",
    title: "Server User Report Generation",
    status: "Built",
    statusTone: "built",
    outcome:
      "A ServiceNow ticket becomes a consolidated user-audit report, emailed to stakeholders. Turnaround moved from hours to minutes.",
    stack: ["AI automation platform", "ServiceNow", "Excel", "HTML", "Email"],
    points: [
      "Parses ticket text with an LLM, extracts server IP and hostname, and audits user accounts across servers in parallel.",
      "Turns free-form ticket descriptions into structured, validated JSON for the rest of the workflow.",
      "Parent and sub-workflows call each other over REST, with retries, error handling, and an audit trail written back to ServiceNow.",
    ],
  },
  {
    id: "dns",
    tags: ["Automation"],
    index: "03",
    title: "DNS and Data Center Checks",
    status: "Built",
    statusTone: "built",
    outcome:
      "Excel-driven checks across servers for DNS, NTP, disk, and process health, with tickets when something fails.",
    stack: [
      "Python",
      "FastAPI",
      "MongoDB",
      "AI automation platform",
      "ServiceNow",
    ],
    points: [
      "Reads a server list, runs connectivity and functional checks, and logs each workflow step in MongoDB.",
      "Sends email and opens a ServiceNow ticket when a check fails.",
      "FastAPI endpoints for reads, status, script execution, and email are wired into the internal AI automation platform.",
    ],
  },
  {
    id: "resolve-bot",
    tags: ["AI"],
    index: "04",
    title: "ResolveBot",
    status: "Personal",
    statusTone: "personal",
    era: "Personal project",
    outcome:
      "A LangGraph support agent that answers from policy, calls order tools, and hands off to a human when it should not guess.",
    stack: ["LangGraph", "LangChain", "ChromaDB", "Python", "Streamlit"],
    points: [
      "Classifies each message, retrieves policy with LangChain and ChromaDB, then answers, calls an order tool, or escalates.",
      "Order lookup and cancellation run as tools. Weak retrieval, low confidence, or a failed tool opens a human ticket with an audit trail. Model and tool errors retry before that handoff.",
      "Personal project, not a Sify production system.",
    ],
  },
  {
    id: "livewire",
    tags: ["Mobile", "AI"],
    index: "05",
    title: "Learning Management System",
    status: "Built",
    statusTone: "built",
    era: "Full-stack LMS",
    outcome:
      "A full frontend and backend for courses, plus a chatbot that answers course questions with RAG, speech-to-text, and text-to-speech.",
    stack: ["Ionic", "Angular", "REST APIs", "SQLite", "RAG", "Speech-to-text", "Text-to-speech"],
    points: [
      "Built the full frontend and backend: course browse and search, downloads, certifications, progress, authentication, REST APIs, and offline course access.",
      "Built an LMS chatbot with speech-to-text, text-to-speech, and RAG so course questions are answered from course content.",
    ],
  },
];

export const earlier = [
  {
    title: "VideoMaker",
    tag: "Mobile",
    stack: "React Native, Redux-Saga, Vision Camera",
    text: "Records video, uploads it for 3D model generation, and displays USDZ, OBJ, and GLTF models beside the clip.",
  },
  {
    title: "Unity in React Native",
    tag: "Mobile",
    stack: "React Native, Unity, Android, iOS",
    text: "Embedded a Unity view so 3D content renders inside the app on Android and iOS.",
  },
  {
    title: "Speech & TTS App",
    tag: "Voice",
    stack: "Ionic Angular, Cordova, PWA",
    text: "Real-time speech-to-text and text-to-speech on iOS, Android, and the web.",
  },
  {
    title: "Food Donation Chatbot",
    tag: "Mobile",
    stack: "Ionic Angular, Zoho SalesIQ",
    text: "Guided donors through food quality, quantity, and pickup time. Built for CliqTrix 2022.",
  },
  {
    title: "Online Banking System",
    tag: "College",
    stack: "Core Java, NetBeans",
    text: "A small college system for basic banking flows.",
  },
];

export const aboutCards = [
  {
    title: "AI automation",
    text: "LLM workflows on an internal AI automation platform: intent, structured extraction, and parent and sub-workflow orchestration.",
  },
  {
    title: "Voice AI",
    text: "SecureCo call flows that take voice-to-text webhooks, validate the caller, and return an LLM reply.",
  },
  {
    title: "Python backend",
    text: "FastAPI services, MongoDB session data, webhooks, retries, and ServiceNow REST integrations.",
  },
  {
    title: "RAG & agents",
    text: "ResolveBot uses LangGraph, LangChain, and ChromaDB so answers come from policy, order tools run when needed, and unsure cases go to a human.",
  },
];

export const filters = ["All", "AI", "Voice", "Automation", "Mobile"];

export const skillGroups = [
  {
    label: "AI / GenAI",
    items: [
      "LLM workflows",
      "AI agents",
      "Intent classification",
      "Structured JSON extraction",
      "Prompt engineering",
      "RAG",
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "MCP",
      "Vector databases (ChromaDB)",
      "Tool calling",
    ],
  },
  {
    label: "AI platforms",
    items: [
      "No-code AI platform",
      "Low-code AI workflow platform",
      "Parent / sub-workflow orchestration",
    ],
  },
  {
    label: "Voice / IVP",
    items: [
      "SecureCo IVP",
      "Voice-to-text webhooks",
      "Event-driven call flows",
      "Webhook middleware",
      "Speech-to-text",
      "Text-to-speech",
      "Intent Agent",
      "Summarize Agent",
    ],
  },
  {
    label: "Backend",
    items: [
      "Python",
      "FastAPI",
      "REST APIs",
      "JSON",
      "Webhooks",
      "MongoDB",
      "API authentication",
      "Postman",
    ],
  },
  {
    label: "Automation / ITOM",
    items: [
      "SecureCo",
      "DNS functional checks",
      "ServiceNow REST",
      "ServiceNow ITSM",
      "Excel / HTML reports",
    ],
  },
  {
    label: "Frontend / Mobile",
    items: [
      "Ionic",
      "Angular",
      "TypeScript",
      "React Native",
      "Capacitor",
      "SQLite",
      "HTML",
      "SCSS",
    ],
  },
  {
    label: "Tools",
    items: [
      "Git",
      "VS Code",
      "Cursor",
      "Claude Code",
      "npm",
      "Excel",
      "GPT",
      "Claude",
      "Gemini",
      "Google AI Studio",
      "NotebookLM",
      "Lovable",
      "Stitch",
    ],
  },
];

export const experience = {
  title: "Software Developer",
  company: "Sify Technologies",
  place: "Chennai, India",
  dates: "July 2023 – present",
  note: "3+ years. Joined in July 2023.",
  arc: [
    "Mobile application development",
    "Python backend and automation",
    "AI workflows on an internal automation platform",
    "Voice AI on SecureCo IVP",
  ],
};

export const education = {
  degree: "B.E. Computer Science Engineering",
  school: "Velammal Institute of Technology, Chennai",
  dates: "July 2019 – May 2023",
  score: "CGPA 9.03 / 10",
  earlier: [
    "HSC, Chettinad Vidhyashram, Chennai — 74.4% (2019)",
    "SSLC, Chettinad Vidhyashram, Chennai — 8.2 / 10 (2017)",
  ],
};

export const credentials = [
  "AWS Certified Developer – Associate (2023)",
  "Claude Code 101 — Claude (October 2026)",
  "Production AI Agent Deployment, Scaling, Eval & Cost Control — Edureka (October 2026)",
  "AI Tools Workshop — be10x (October 2026)",
  "AWS Machine Learning — Coursera",
  "Web Development — Internshala",
  "Industrial IoT on Google Cloud Platform — Coursera",
];

export const training = [
  "Python internship — Global Techno Solutions (August 2021 – October 2021)",
  "Java application development — Uniq Technologies (August 2021 – September 2021)",
  "Java workshop — Uniq Technologies (September 2021)",
  "Web development workshop — Vellore Institute of Technology (July 2021)",
];

export const languages = ["English", "Hindi", "Tamil"];
