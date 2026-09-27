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
        name: "Megha",
        role: "President"
      },
      {
        name: "Sutej",
        role: "Vice President"
      },
      {
        name: "Ayush",
        role: "Vice President"
      },
      {
        name: "Sudeep",
        role: "Secretary"
      },
      {
        name: "Rayyan",
        role: "Secretary"
      },
      {
        name: "Harshita",
        role: "Finance & Sponsorship Head"
      },
      {
        name: "Ansh",
        role: "Treasurer"
      },
      {
        name: "Noyonika",
        role: "Design Head"
      },
      {
        name: "Shreyas Kale",
        role: "Media Head"
      },
      {
        name: "Sandesh",
        role: "CP Head"
      },
      {
        name: "Vaibhav Rathod",
        role: "Dev Head"
      },
      {
        name: "Kasvi",
        role: "AIML Head"
      },
      {
        name: "Gurupranesh",
        role: "Cybersecurity Head"
      }
    ]
  }
];
