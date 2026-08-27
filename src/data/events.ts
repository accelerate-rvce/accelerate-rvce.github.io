export interface ClubEvent {
  id: string;
  year: string;
  date: string;
  title: string;
  type: 'Hackathon' | 'Workshop' | 'Bootcamp' | 'Session' | 'Competition';
  description: string;
  link?: string;
  status: 'upcoming' | 'completed';
}

export const events: ClubEvent[] = [
  {
    id: "hack-rvce-2026",
    year: "2026",
    date: "March 14-15, 2026",
    title: "Accelerate Hackathon 2026",
    type: "Hackathon",
    description: "The flagship annual hackathon of RVCE bringing together 300+ students to build solutions for real-world municipal and enterprise challenges.",
    link: "https://devfolio.co",
    status: "upcoming"
  },
  {
    id: "rust-bootcamp-2026",
    year: "2026",
    date: "February 10-12, 2026",
    title: "Rust Systems Programming Bootcamp",
    type: "Bootcamp",
    description: "A hands-on, deep-dive bootcamp covering ownership, borrowing, concurrency, and WebAssembly compilation in Rust.",
    link: "#",
    status: "upcoming"
  },
  {
    id: "web3-summit-2025",
    year: "2025",
    date: "October 18, 2025",
    title: "Decentralized Systems & Web3 Summit",
    type: "Session",
    description: "A structured masterclass introducing smart contract security auditing, gas optimizations, and decentralized oracle integration.",
    link: "#",
    status: "completed"
  },
  {
    id: "open-source-october-2025",
    year: "2025",
    date: "October 1-31, 2025",
    title: "Open Source October",
    type: "Session",
    description: "A month-long campaign guiding students on git workflows, contributing to public packages, and creating robust PRs.",
    link: "https://github.com/accelerate-rvce",
    status: "completed"
  },
  {
    id: "cloud-native-workshop-2025",
    year: "2025",
    date: "August 24, 2025",
    title: "Cloud Native Deployments with K8s",
    type: "Workshop",
    description: "Hands-on session on container orchestration, service meshes, helm charts, and continuous integration pipelines.",
    link: "#",
    status: "completed"
  },
  {
    id: "competitive-prog-2024",
    year: "2024",
    date: "November 5, 2024",
    title: "Algorithmic Code Sprint",
    type: "Competition",
    description: "Intense competitive programming arena testing dynamic programming, graph traversal, and mathematical optimization algorithms.",
    link: "#",
    status: "completed"
  }
];
