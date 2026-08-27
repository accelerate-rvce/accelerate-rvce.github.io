export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Accelerate Portal",
    description: "The core platform hosting resource archives, student achievements, and workshop registrations for club members.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/accelerate-rvce/accelerate-portal",
    featured: true
  },
  {
    title: "RVCE Placement Observatory",
    description: "An automated web scraper and data aggregator summarizing historical company hiring statistics, interview workflows, and salaries.",
    tags: ["Python", "Selenium", "Pandas", "FastAPI"],
    github: "https://github.com/accelerate-rvce/placement-observatory",
    featured: true
  },
  {
    title: "Aura Audio Engine",
    description: "A zero-latency, cloud-fallback audio synchronization layer designed to enable real-time music sharing across low-bandwidth environments.",
    tags: ["Go", "WebRTC", "React", "Rust"],
    github: "https://github.com/accelerate-rvce/aura-audio",
    featured: true
  },
  {
    title: "GitSec CI/CD Guardian",
    description: "A GitHub Action that automatically scans commits for API credentials, hardcoded keys, and dependency vulnerabilities in real-time.",
    tags: ["TypeScript", "GitHub Actions", "Docker", "Security"],
    github: "https://github.com/accelerate-rvce/gitsec-guardian",
    featured: false
  },
  {
    title: "DevQuest Hackathon Engine",
    description: "An open-source custom hackathon portal with team matching, project submissions, and automatic judge-allocation algorithms.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    github: "https://github.com/accelerate-rvce/devquest-engine",
    featured: false
  },
  {
    title: "EdgeCompute-IoT",
    description: "A lightweight message-broker protocol client built to handle lossy sensor data transmissions on Edge and IoT devices.",
    tags: ["C++", "MQTT", "ESP32", "IoT"],
    github: "https://github.com/accelerate-rvce/edgecompute-iot",
    featured: false
  }
];
