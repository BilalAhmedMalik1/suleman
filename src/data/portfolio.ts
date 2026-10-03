// ============================================================
//  PORTFOLIO DATA — Edit everything here to customize your site
// ============================================================

export const personalInfo = {
  name: "Suleman",
  role: "Computer Science Student",
  heroHeading: "Hi, I'm Suleman.",
  heroSubheading:
    "Building my skills. Creating real solutions. Preparing for what's next.",
  heroIntro:
    "I'm a Computer Science student passionate about software development, technology, problem solving, and continuously learning new technologies. I enjoy turning ideas into practical, well-built software.",
  statusBadge: "Available for Internships & Opportunities",
  resumeUrl: "/resume.pdf", // ← replace with your resume file in /public
};

export const aboutContent = {
  heading: "About Me",
  paragraphs: [
    "I'm a Computer Science student who enjoys understanding how technology works and turning ideas into practical software. My focus is on building a strong foundation in problem solving, programming, and modern software development.",
    "I believe in learning by doing. Whether it's writing clean code, exploring a new framework, or breaking down a complex problem, I'm always looking for ways to improve and grow as a developer.",
  ],
  highlights: [
    "Problem Solving",
    "Programming",
    "Software Development",
    "Learning New Technologies",
    "Building Projects",
    "Continuous Improvement",
  ],
  currentlyLearning: [
    "React & TypeScript",
    "Node.js",
    "Database Design",
    // Add more technologies here as you learn them
  ],
};

// ---- Social Links ----
// Replace with your real URLs
export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  email: "youremail@example.com",
};

// ---- Navigation ----
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

// ---- Skills ----
export interface SkillCategory {
  title: string;
  icon: string; // lucide icon name
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: "Code2",
    skills: ["C++", "Java", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Web Development",
    icon: "Globe",
    skills: ["HTML5", "CSS3", "React", "Tailwind CSS", "Node.js"],
  },
  {
    title: "Tools & Technologies",
    icon: "Wrench",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Docker"],
  },
  {
    title: "Concepts",
    icon: "Brain",
    skills: [
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
      "Database Fundamentals",
      "Software Engineering",
    ],
  },
];

// ---- Projects ----
export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Project One",
    description:
      "A practical software project demonstrating problem solving and modern development practices.",
    technologies: ["Technology 1", "Technology 2", "Technology 3"],
    image: "",
    githubUrl: "https://github.com/yourusername/project-one",
    liveUrl: "#",
  },
  {
    id: 2,
    name: "Project Two",
    description:
      "A responsive application focused on creating a clean and useful user experience.",
    technologies: ["Technology 1", "Technology 2", "Technology 3"],
    image: "",
    githubUrl: "https://github.com/yourusername/project-two",
    liveUrl: "#",
  },
  {
    id: 3,
    name: "Project Three",
    description:
      "An academic/personal project built to strengthen my software development skills.",
    technologies: ["Technology 1", "Technology 2", "Technology 3"],
    image: "",
    githubUrl: "https://github.com/yourusername/project-three",
    liveUrl: "#",
  },
];

export const allProjectsUrl = "https://github.com/yourusername";

// ---- Education ----
export interface EducationEntry {
  degree: string;
  institution: string;
  startYear: string;
  endYear: string;
  current: boolean;
  coursework: string[];
}

export const education: EducationEntry[] = [
  {
    degree: "Computer Science",
    institution: "University / Institution Name",
    startYear: "2023",
    endYear: "2027",
    current: true,
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Systems",
      "Operating Systems",
      "Software Engineering",
      "Computer Networks",
    ],
  },
];

// ---- Journey ----
export interface JourneyMilestone {
  title: string;
  description: string;
  year: string;
}

export const journey: JourneyMilestone[] = [
  {
    title: "Started Computer Science",
    description:
      "Began my formal education in Computer Science, diving into programming fundamentals and computational thinking.",
    year: "2023",
  },
  {
    title: "Built My First Projects",
    description:
      "Applied classroom concepts to build small projects, learning the value of hands-on practice and problem solving.",
    year: "2024",
  },
  {
    title: "Started Exploring Web Development",
    description:
      "Expanded into modern web development with React, TypeScript, and frontend tooling.",
    year: "2025",
  },
  {
    title: "Currently Learning & Building",
    description:
      "Continuously improving my skills, building real projects, and preparing for internship opportunities.",
    year: "Now",
  },
];

// ---- Contact ----
export const contactContent = {
  heading: "Let's Connect",
  text: "Have an opportunity, project idea, or just want to connect? Feel free to reach out.",
};

// ---- Footer ----
export const footerText = "© 2026 Suleman. Built with curiosity and code.";
