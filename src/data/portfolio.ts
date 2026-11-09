// Central content configuration. Edit this file to update the site content.
import resumeAsset from "../assets/samyuktha-basam-resume.pdf.asset.json";

export const personal = {
  name: "Samyuktha Basam",
  role: "Full Stack Developer — Java & React",
  location: "Stockholm, Sweden",
  tagline:
    "I build modern, secure and scalable web applications across the frontend and backend.",
  intro:
    "I'm a full stack developer with several years of experience in Java, Spring Boot and REST-based microservices. I build TypeScript and React interfaces and reliable cloud-ready applications, with a strong focus on code quality, documentation and teamwork.",
};

export const social = {
  github: "https://github.com/samyuktha215",
  linkedin: "https://www.linkedin.com/in/samyuktha-basam/",
  email: "samyuktha.basam@gmail.com",
  phone: "+46 76 633 36 47",
};

export const resumePath = resumeAsset.url;

export const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export const terminalLines: { cmd: string; out: string[] }[] = [
  { cmd: "whoami", out: [personal.name, "Full Stack Developer — Java & React"] },
  { cmd: "location", out: [personal.location] },
  { cmd: "backend", out: ["Java", "Spring Boot"] },
  { cmd: "frontend", out: ["React", "TypeScript", "JavaScript"] },
  { cmd: "database", out: ["MySQL"] },
  { cmd: "devops", out: ["Docker", "Kubernetes", "AWS", "CI/CD"] },
  { cmd: "status", out: ["Open to opportunities"] },
];

export const techStrip = [
  "Java",
  "Spring Boot",
  "React",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "MySQL",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
  "Jenkins",
  "GitHub Actions",
  "REST APIs",
  "Microservices",
];

export const aboutParagraphs = [
  "I'm based in Stockholm and have worked as a full stack developer at Chain of Sounds, Swedcon18 AB and WACOCO.",
  "My experience spans Java and Spring Boot microservices, REST API integrations, and frontend development with TypeScript and React.",
  "I work with Docker, Kubernetes and CI/CD pipelines in complex environments with interconnected systems, focusing on maintainability and reliable delivery.",
  "I studied Java Development at IT-Högskolan and AWS Cloud Development at JENSEN, building on my bachelor's degree in Electrical and Electronics Engineering from JNTU-Ananthapur.",
  "I'm structured, responsible and solution-oriented, and enjoy collaborating in agile teams on digital solutions that benefit society. I'm fluent in both Swedish and English.",
];

export const aboutInterests = [
  "Full Stack Development",
  "Backend Development",
  "Frontend Development",
  "Cloud",
  "Security",
  "APIs",
  "Software architecture",
  "Problem solving",
  "Continuous learning",
];

export const aboutClosing =
  "I'm currently looking for opportunities as a Full Stack Developer or Java Developer where I can contribute to a team and continue growing as a software engineer.";

export const skillGroups = [
  { title: "Frontend", items: ["TypeScript", "JavaScript", "React", "HTML5", "CSS3", "Responsive Design"] },
  {
    title: "Backend",
    items: ["Java", "Spring Boot", "REST API Design", "Microservices"],
  },
  { title: "Data & Storage", items: ["MySQL", "SQL", "NoSQL Data Modeling", "Query Optimization"] },
  {
    title: "DevOps & Cloud",
    items: [
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "CI/CD",
      "Jenkins",
      "AWS",
      "Azure",
    ],
  },
  {
    title: "Ways of Working",
    items: [
      "Scrum / Agile",
      "TDD",
      "Code Quality",
      "Operational Documentation",
      "Team Collaboration",
    ],
  },
];

export const experience = [
  {
    role: "Full Stack Developer",
    place: "Chain of Sounds — Stockholm",
    dates: "Nov 2025 – May 2026",
    points: [
      "Developed and maintained Java / Spring Boot REST microservices supporting core application features and internal and external API integrations.",
      "Built TypeScript and React components with designers, focusing on usability, responsive interfaces and stable workflows.",
      "Containerized applications with Docker and contributed to staging and production deployment, maintenance and operational documentation.",
      "Collaborated in a Scrum team on backlog refinement, sprint planning and continuous process improvement.",
    ],
    tech: ["Java", "Spring Boot", "TypeScript", "React", "Docker", "REST APIs", "Scrum"],
  },
  {
    role: "Full Stack Developer",
    place: "Swedcon18 AB — Stockholm",
    dates: "Sep 2024 – Dec 2024",
    points: [
      "Led development of customer-facing features with TypeScript, React and modern CSS to improve engagement and usability.",
      "Integrated the frontend with backend services through well-defined REST API contracts for effective communication between system components.",
    ],
    tech: ["TypeScript", "React", "CSS", "REST APIs"],
  },
  {
    role: "Full Stack Developer",
    place: "WACOCO — Stockholm",
    dates: "Nov 2023 – Jun 2024",
    points: [
      "Developed Java applications with MySQL for data management, file operations and reliable storage.",
      "Designed and implemented Java REST microservices for core product features and API integrations.",
      "Designed AWS microservices on EC2 and ECS and built Jenkins / Docker CI/CD pipelines for automated builds, tests and deployment.",
      "Worked in an agile team, adapting to changing requirements and continuously delivering high-quality software.",
    ],
    tech: ["Java", "MySQL", "REST APIs", "AWS EC2", "AWS ECS", "Jenkins", "Docker", "CI/CD"],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  features: string[];
  diagrams: { label: string; steps: string[] }[];
  github: string;
  demo: string;
};

export const projects: Project[] = [
  {
    id: "auth",
    title: "Secure Authentication & Authorization System",
    description:
      "A secure authentication and authorization system designed for a web application, allowing users to authenticate securely and access functionality based on roles and permissions.",
    tech: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "React",
      "JSX",
      "JavaScript",
      "MySQL",
      "Docker",
      "JWT",
      "OAuth",
      "GitHub Actions",
    ],
    features: [
      "JWT authentication",
      "OAuth login",
      "Role-based authorization",
      "Permission management",
      "Secure APIs",
      "CORS configuration",
      "Admin functionality",
      "Frontend role-based visibility",
      "Database integration",
      "Docker deployment",
      "CI/CD",
    ],
    diagrams: [
      {
        label: "Request flow",
        steps: [
          "Frontend — React + JSX",
          "REST API",
          "Spring Boot",
          "Spring Security",
          "JWT / OAuth",
          "MySQL",
        ],
      },
      {
        label: "CI/CD",
        steps: [
          "GitHub",
          "GitHub Actions",
          "Build + Test",
          "Docker",
          "Deployment",
        ],
      },
    ],
    github: "[GITHUB URL]",
    demo: "[PROJECT URL]",
  },
  {
    id: "weather",
    title: "Optimal Liljeholmen Weather",
    description:
      "A Spring Boot application that integrates multiple weather forecast services and determines the most suitable forecast according to defined criteria.",
    tech: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Web Services",
      "Thymeleaf",
      "JSON",
      "WebClient",
    ],
    features: [
      "Multiple weather API integrations",
      "Forecast comparison",
      "Weather optimization",
      "REST endpoint",
      "Web interface",
      "Temperature",
      "Humidity",
      "Forecast timestamp",
    ],
    diagrams: [
      {
        label: "Architecture",
        steps: [
          "Weather APIs",
          "Spring Boot",
          "Weather Processing",
          "Forecast Selection",
          "REST API / UI",
        ],
      },
    ],
    github: "[GITHUB URL]",
    demo: "[PROJECT URL]",
  },
];

export const processSteps = [
  { no: "01", title: "Understand", text: "Understand the problem and requirements." },
  { no: "02", title: "Design", text: "Think about architecture, APIs, data and security." },
  { no: "03", title: "Build", text: "Create clean and maintainable software." },
  { no: "04", title: "Test", text: "Validate functionality and handle edge cases." },
  { no: "05", title: "Improve", text: "Use feedback and continuous learning." },
];

export const education = [
  {
    title: "Java Development",
    place: "IT-Högskolan — Stockholm",
    dates: "Aug 2024 – May 2026",
  },
  { title: "Cloud Development (AWS)", place: "JENSEN — Stockholm", dates: "Aug 2022 – Jun 2024" },
  { title: "Bachelor's Degree — Electrical and Electronics Engineering", place: "JNTU-Ananthapur — India", dates: "Jun 2009 – May 2013" },
];
