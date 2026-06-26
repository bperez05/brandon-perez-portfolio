export interface Experience {
  role: string
  company: string
  location: string
  start: string
  end: string
  bullets: string[]
}

export interface Education {
  degree: string
  institution: string
  location: string
  date: string
}

export interface Skills {
  analysis: string[]
  platforms: string[]
  development: string[]
  tools: string[]
  soft: string[]
}

export interface ResumeData {
  name: string
  title: string
  company: string
  location: string
  email: string
  phone: string
  languages: string[]
  summary: string
  experience: Experience[]
  education: Education[]
  skills: Skills
}

export const resume: ResumeData = {
  name: "Brandon P. Perez",
  title: "Senior Technical Analyst",
  company: "Apple",
  location: "Dallas, TX",
  email: "brand.paul.perez@gmail.com",
  phone: "214-914-8599",
  languages: ["English", "Spanish"],
  summary:
    "Technology analyst with 6+ years at Apple identifying root causes, evaluating solutions, and translating complex technical findings into clear recommendations for diverse audiences. Experienced in structured diagnostics, cross-functional collaboration, enterprise MDM consultation, and driving process improvements in high-volume, fast-paced environments. Full-stack development background with a track record of mentoring peers and communicating technical insights to both technical and non-technical stakeholders. Bilingual (English/Spanish).",
  experience: [
    {
      role: "Genius — Senior Technical Analyst",
      company: "Apple",
      location: "Dallas, TX",
      start: "Jan 2025",
      end: "Present",
      bullets: [
        "Lead structured technology evaluations across hardware, software, and OS platforms — identifying root causes, assessing solution alternatives, and recommending optimal resolutions to reduce downtime and improve outcomes.",
        "Consult with the in-house business team on MDM configuration strategies tailored to each enterprise's unique operational needs while assessing requirements, evaluating deployment options, and recommending solutions that align with organizational scale and security standards.",
        "Analyze trends across 20+ daily cases to surface recurring issues, translating findings into process improvements and preventative guidance adopted across the team.",
        "Partner with engineering and senior technical teams on complex escalations, synthesizing diagnostic data into actionable insights that inform decisions on tooling, configuration, and system architecture.",
        "Mentor team members on troubleshooting methodologies, diagnostic frameworks, and documentation best practices — accelerating ramp time and raising team-wide quality standards.",
        "Maintain accurate service documentation and repair records, ensuring traceability and supporting knowledge management across the support organization.",
      ],
    },
    {
      role: "Technical Support Analyst",
      company: "Apple",
      location: "Dallas, TX",
      start: "Aug 2019",
      end: "Dec 2024",
      bullets: [
        "Conducted systematic software and hardware diagnostics across multi-platform environments (macOS, iOS, Windows, Android), applying structured methodologies to isolate root causes and implement effective solutions.",
        "Evaluated and compared alternative technical approaches to problem resolution, weighing tradeoffs in efficiency, risk, and customer impact before recommending a path forward.",
        "Built strong cross-functional relationships with operations, engineering, and logistics teams to coordinate complex repairs and reduce resolution time.",
        "Earned two IT certifications demonstrating proficiency in technical standards and support methodologies.",
        "Navigated ambiguous and high-pressure customer situations using active listening and structured problem-solving, consistently maintaining high satisfaction scores.",
      ],
    },
    {
      role: "Network Wireline Engineering & Operations Intern",
      company: "Verizon",
      location: "Irving, TX",
      start: "Jul 2015",
      end: "Aug 2015",
      bullets: [
        "Analyzed network infrastructure data at local Central Offices to identify operational flaws and recommend improvements, contributing to reliability and efficiency.",
        "Supported escalation tracking and problem resolution workflows in coordination with the Wireline and Operations Project Management Team.",
        "Processed geophysical wireline data and generated field and final reports adhering to industry standards.",
      ],
    },
  ],
  education: [
    {
      degree: "Full Stack Web Development Certification",
      institution: "Southern Methodist University",
      location: "Dallas, TX",
      date: "January 2022",
    },
  ],
  skills: {
    analysis: [
      "Root Cause Analysis",
      "Structured Diagnostics",
      "Solution Evaluation",
      "Process Modeling",
      "Requirements Documentation",
      "Pilot Design & Assessment",
    ],
    platforms: [
      "macOS",
      "iOS",
      "Windows",
      "Linux",
      "Android",
      "MDM Configuration",
      "System Recovery",
      "OS Reinstallation",
      "Hardware Diagnostics & Repair",
    ],
    development: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "MySQL",
    ],
    tools: [
      "ServiceNow",
      "GitHub",
      "Firebase",
      "Bootstrap",
      "Heroku",
    ],
    soft: [
      "Cross-functional Stakeholder Communication",
      "Mentorship",
      "Technical Writing",
      "Senior Leadership Presentations",
      "Bilingual (English / Spanish)",
    ],
  },
}
