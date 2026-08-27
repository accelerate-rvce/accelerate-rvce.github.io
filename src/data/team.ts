export interface TeamMember {
  name: string;
  role: string;
  github?: string;
  linkedin?: string;
}

export interface TeamGroup {
  category: string;
  members: TeamMember[];
}

export const teamGroups: TeamGroup[] = [
  {
    category: "Faculty Advisors",
    members: [
      {
        name: "Dr. G. Shobha",
        role: "Professor & Head of Dept, CSE",
        linkedin: "https://linkedin.com"
      },
      {
        name: "Dr. K. G. Srinivasa",
        role: "Faculty Coordinator, Accelerate",
        linkedin: "https://linkedin.com"
      }
    ]
  },
  {
    category: "Core Team",
    members: [
      {
        name: "Siddharth Mehta",
        role: "Club President",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      },
      {
        name: "Ananya Sharma",
        role: "Vice President",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      },
      {
        name: "Rohan Kulkarni",
        role: "General Secretary",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    ]
  },
  {
    category: "Technical Leads",
    members: [
      {
        name: "Kabir Sen",
        role: "Systems & Cloud Lead",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      },
      {
        name: "Neha Murthy",
        role: "AI/ML Lead",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      },
      {
        name: "Vikram Adve",
        role: "Cybersecurity Lead",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      },
      {
        name: "Divya Nambiar",
        role: "Frontend & UI Design Lead",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    ]
  },
  {
    category: "Club Alumni & Mentors",
    members: [
      {
        name: "Amit Rao",
        role: "Software Engineer @ Vercel (Class of '24)",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      },
      {
        name: "Priyanka Gowda",
        role: "Systems Engineer @ Cloudflare (Class of '23)",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    ]
  }
];
