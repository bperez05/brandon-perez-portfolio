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
  technical: string[]
  operatingSystems: string[]
  development: string[]
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
  title: "Senior Technical Support Specialist",
  company: "Apple",
  location: "Dallas, TX",
  email: "brand.paul.perez@gmail.com",
  phone: "214-914-8599",
  languages: ["English", "Spanish"],
  summary:
    "Technical support professional with 6+ years of experience at Apple specializing in hardware, software, and mobile device troubleshooting.",
  experience: [
    {
      role: "Genius – Senior Technical Support Specialist",
      company: "Apple",
      location: "Dallas, TX",
      start: "Jan 2025",
      end: "Present",
      bullets: [
        "Diagnose and resolve hardware, software, and OS issues across laptops, mobile devices, and peripherals.",
        "Perform advanced troubleshooting: OS recovery, system restores, software reinstallation, device diagnostics.",
        "Manage 20+ cases per day with high customer satisfaction and rapid issue resolution.",
        "Mentor team members on troubleshooting workflows and best practices.",
        "Maintain accurate service documentation and repair records for each case.",
      ],
    },
    {
      role: "Technical Support Specialist",
      company: "Apple",
      location: "Dallas, TX",
      start: "Aug 2019",
      end: "Dec 2024",
      bullets: [
        "In-store software and hardware troubleshooting for all Apple products.",
        "Multi-platform diagnostics ensuring prompt resolution of technical issues.",
        "Demonstrated proficiency through two IT certifications.",
        "Navigated complex customer situations using strong interpersonal and active-listening skills.",
      ],
    },
    {
      role: "Network Wireline Engineering & Operations Intern",
      company: "Verizon",
      location: "Irving, TX",
      start: "Jul 2015",
      end: "Aug 2015",
      bullets: [
        "Identified and addressed flaws in local Central Offices.",
        "Conducted wireline logging data acquisitions and generated field reports.",
        "Collaborated with Wireline and Operations Project Management Team.",
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
    technical: [
      "Mobile Device Management (MDM)",
      "Hardware Diagnostics & Repair",
      "macOS / iOS Troubleshooting",
      "System Recovery & OS Reinstallation",
      "Device Configuration & Setup",
      "Customer Relationship Management",
    ],
    operatingSystems: ["macOS", "iOS", "Windows", "Linux", "Android"],
    development: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "MySQL",
      "GitHub",
      "Bootstrap",
      "Firebase",
      "ServiceNow",
      "Heroku",
    ],
  },
}
