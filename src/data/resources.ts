export interface Resource {
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: 'Beginner' | 'Web Development' | 'AI / ML' | 'Cybersecurity' | 'Competitive Programming' | 'GitHub & Open Source' | 'Hackathons';
  link: string;
}

export const resources: Resource[] = [
  {
    title: "Missing Semester of Your CS Education",
    description: "MIT's legendary course covering command-line proficiency, vim, shell scripting, and developer tools you aren't taught in classes.",
    level: "Beginner",
    category: "Beginner",
    link: "https://missing.csail.mit.edu/"
  },
  {
    title: "Accelerate Git & GitHub Playbook",
    description: "Our student-written guide to mastering branching models, cherry-picks, rebasing, and collaborating on pull requests.",
    level: "Beginner",
    category: "GitHub & Open Source",
    link: "https://github.com/accelerate-rvce"
  },
  {
    title: "Full Stack Open",
    description: "University of Helsinki's premium React, Redux, Node.js, GraphQL, TypeScript, and Docker roadmap.",
    level: "Intermediate",
    category: "Web Development",
    link: "https://fullstackopen.com/en/"
  },
  {
    title: "Fast.ai — Practical Deep Learning for Coders",
    description: "A top-tier hands-on course covering neural networks, transfer learning, NLP, and model optimization using PyTorch.",
    level: "Intermediate",
    category: "AI / ML",
    link: "https://course.fast.ai/"
  },
  {
    title: "PortSwigger Web Security Academy",
    description: "Free, interactive labs teaching XSS, SQLi, CSRF, server-side request forgery, and vulnerability scanning techniques.",
    level: "Intermediate",
    category: "Cybersecurity",
    link: "https://portswigger.net/web-security"
  },
  {
    title: "USACO Guide",
    description: "Highly structured preparation platform for competitive programming algorithms, data structures, and optimization techniques.",
    level: "Advanced",
    category: "Competitive Programming",
    link: "https://usaco.guide/"
  },
  {
    title: "Devfolio Hackathon Playbook",
    description: "Tips, tricks, templates, and best practices for ideating, prototyping, pitching, and winning tech hackathons.",
    level: "Beginner",
    category: "Hackathons",
    link: "https://devfolio.co/"
  },
  {
    title: "Linux Kernel Development",
    description: "Deep dive into process management, interrupt handlers, memory allocation, virtual filesystems, and device drivers.",
    level: "Advanced",
    category: "Beginner",
    link: "https://github.com/torvalds/linux"
  }
];
