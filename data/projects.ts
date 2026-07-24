// data/projects.ts

export interface Project {
  id: string; // Dynamic route এর জন্য আইডি
  title: string;
  category: string;
  image: string;
  description: string; // Details পেজের জন্য
  features?: string[];
  tags: string[];
  liveLink: string;
  githubLink: string;
}

export const projects: Project[] = [
  {
    id: "recipe-hub",
    title: "RecipeHub — Recipe Sharing Platform",
    category: "Fullstack • 2026",
    image: "/RecipeHub.png",
    description: "A comprehensive recipe sharing application built with Next.js and Node.js backend. Features full user authentication, recipe management, and payment integration.",
    features: [
      "User Authentication with Better-Auth",
      "Stripe payment gateway for premium recipes",
      "Interactive UI with Framer Motion animations",
      "Responsive design built with Tailwind CSS"
    ],
    tags: ["Next.js", "Node.js", "Express.js", "Better-Auth", "MongoDB", "Stripe", "Tailwind CSS"],
    liveLink: "https://recipe-hub-one-peach.vercel.app",
    githubLink: "https://github.com/Nishitasarker/RecipeHub"
  },
  {
    id: "qurbani-nexus",
    title: "Qurbani Nexus App",
    category: "Fullstack • 2026",
    image: "/AnimalsProject.png",
    description: "An online marketplace for Qurbani animals facilitating seamless connection between buyers and livestock sellers.",
    features: [
      "Google OAuth integration",
      "Filter animals by weight and price",
      "Real-time database updates with MongoDB"
    ],
    tags: ["Next.js", "JavaScript (ES6+)", "Tailwind CSS", "Better-Auth", "Google OAuth", "MongoDB"],
    liveLink: "https://qurbani-haat-two.vercel.app",
    githubLink: "https://github.com/Nishitasarker/QurbaniHaat"
  },
  {
    id: "keen-keeper",
    title: "KeenKeeper: Personal Relationship Manager",
    category: "Social CRM Platform • 2026",
    image: "/KeenKeeper.png",
    description: "A personal social CRM tool to help manage personal network and relationship metrics effectively.",
    features: [
      "Data visualization with Recharts",
      "Custom analytics dashboard",
      "Sleek UI components with DaisyUI"
    ],
    tags: ["Next.js", "JavaScript (ES6+)", "DaisyUI", "Tailwind CSS", "Recharts"],
    liveLink: "https://effervescent-jalebi-e2c324.netlify.app",
    githubLink: "https://github.com/Nishitasarker/Next-Js-Project"
  },
  {
    id: "omni-desk",
    title: "OmniDesk Tools",
    category: "All-in-One Digital Tool Suite",
    image: "/Digitools.png",
    description: "A fast and lightweight web app offering multiple everyday digital conversion and utility tools.",
    tags: ["React.js", "Vite", "Tailwind CSS", "DaisyUI", "JavaScript (ES6+)"],
    liveLink: "https://fancy-tiramisu-290684.netlify.app",
    githubLink: "https://github.com/Nishitasarker/Digitools-platform"
  },
  {
    id: "devflow-tracker",
    title: "DevFlow Tracker",
    category: "Project Management Tool",
    image: "/Github.png",
    description: "A sleek task tracking application designed for developer workflow management.",
    tags: ["HTML5 & CSS3", "Tailwind CSS", "JavaScript", "DaisyUI"],
    liveLink: "https://nishitasarker.github.io/json-assignment/",
    githubLink: "https://github.com/Nishitasarker/json-assignment"
  }
];