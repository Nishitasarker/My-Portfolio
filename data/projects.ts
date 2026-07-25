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
  challenges?: string[];   
  futurePlans?: string[];
}

export const projects: Project[] = [
 {
  id: "recipe-hub",
  title: "RecipeHub — Recipe Sharing & Monetization Platform",
  category: "Fullstack • Role-Based App",
  image: "/RecipeHub.png", // public ফোল্ডারে ছবিটি RecipeHub.png নামে সেভ রাখুন
  description: "A feature-rich recipe sharing ecosystem built with Next.js and Node.js. It features distinct role-based dashboards for Users and Admins, premium content monetization, and full user authentication.",
  features: [
    "Dedicated User Dashboard (Overview, My Recipes, Add Recipe, Favorites, Purchased Recipes, Profile)",
    "Comprehensive Admin Dashboard (Platform overview, Manage Users, Manage Recipes, Reports, Transactions)",
    "Secure User Authentication using Better-Auth & Google OAuth",
    "Stripe Payment Gateway integration for unlocking premium recipes",
    " Admin Login Demo: nishi@gmail.com | Pass: 123456Jn",
    " User Login Demo: nirmol@gmail.com | Pass: 123456Jn"
  ],
  tags: [
    "Next.js",
    "Node.js",
    "Express.js",
    "Better-Auth",
    "MongoDB",
    "Stripe",
    "Tailwind CSS"
  ],
  liveLink: "https://recipe-hub-one-peach.vercel.app",
  githubLink: "https://github.com/Nishitasarker/RecipeHub",
  challenges: [
    "Architecting secure role-based access control (RBAC) to render distinct UI layouts and navigation panels for Admin and regular User roles.",
    "Handling Stripe payment webhooks to grant recipe access dynamically upon transaction verification."
  ],
  futurePlans: [
    "Implement real-time notification alerts for recipe likes, comments, and transaction reports.",
    "Add printable PDF exports for saved and purchased recipe cards."
  ]
},
  {
  id: "furns-furniture",
  title: "FURNS — Modern Furniture E-Commerce",
  category: "Fullstack • TypeScript",
  image: "/Furns.png", // public ফোল্ডারে ছবিটি Furns.png নামে সেভ করে রাখুন
  description: "A full-featured modern furniture e-commerce platform built as my first major milestone using TypeScript. It seamlessly connects a unified single-repository frontend and backend with MongoDB to deliver real-time product management and dynamic shopping experiences.",
  features: [
    "Dynamic product catalog and interactive shopping cart functionality",
    "Unified single-repository architecture combining API routes and UI components",
    "Full-stack end-to-end TypeScript implementation for type safety",
    "Responsive and minimalist UI design optimized for high-end furniture display",
    " User Login Demo: nishita@gmail.com | Pass: 123456Jn"
  ],
  tags: [
    "TypeScript",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Tailwind CSS"
  ],
  liveLink: "https://e-commerce-app-seven-rho-12.vercel.app/",
  githubLink: "https://github.com/Nishitasarker/Furniture-Website",
  challenges: [
    "First time implementing TypeScript across both frontend and backend within a single codebase structure.",
    "Configuring seamless MongoDB database connectivity and managing dynamic data fetching with static type definitions."
  ],
  futurePlans: [
    "Integrate dynamic payment gateways like Stripe for complete order checkout.",
    "Add user review/rating systems and interactive wishlist functionality for furniture items."
  ]
},

  {
  id: "style-era",
  title: "Style Era — Agentic AI Powered Fashion Advisor",
  category: "Fullstack & AI • 2026",
  image: "/StyleEra.png", // public ফোল্ডারে আপনার ইমেজের নাম নিশ্চিত করুন
  description: "An innovative fashion curation platform built within a 1-day sprint using Agentic AI capabilities. It demonstrates rapid AI-assisted development along with personalized conversational styling recommendations.",
  features: [
    "Conversational Agentic AI Style Advisor for personalized outfit recommendations",
    "Interactive product collection and catalogue exploration",
    "Ultra-fast development cycle built using modern AI workflows",
    "Fully responsive dynamic interface with Next.js and Tailwind CSS",
    " User Login Demo: nishi@gmail.com | Pass: 123456Jn"
  ],
  tags: [
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Agentic AI",
    "Tailwind CSS"
  ],
  liveLink: "https://style-era-nine.vercel.app/",
  githubLink: "https://github.com/Nishitasarker/Style-Era",
  challenges: [
    "Integrating and orchestrating Agentic AI logic efficiently within a tight 1-day timeline.",
    "Ensuring precise prompt grounding to deliver relevant and high-end fashion advice without hallucination."
  ],
  futurePlans: [
    "Implement multi-modal AI inputs so users can upload photos of their own wardrobe for analysis.",
    "Integrate dynamic e-commerce checkout and direct brand inventory API integrations."
  ]
},

{
  id: "drive-fleet",
  title: "DRIVEFLEET — Premium Car Rental Platform",
  category: "Fullstack • Car Rental",
  image: "/DriveFleet.png", // public ফোল্ডারে ছবিটি DriveFleet.png নামে রাখুন
  description: "A comprehensive car rental application where users can explore dynamic vehicle listings, add their own cars for rental, manage active bookings, and seamlessly remove their listed cars from the platform.",
  features: [
    "Car listing management allowing users to easily add, view, and remove their registered vehicles",
    "Interactive booking system for seamless rental management (My Bookings)",
    "Clean REST API backend connecting client frontend with custom database logic",
    "Fully responsive and dynamic UI designed for intuitive car browsing",
    " User Login Demo: puja@gmail.com | Pass: 123456Jn"
  ],
  tags: [
    "JavaScript (ES6+)",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS"
  ],
  liveLink: "https://car-app-tawny.vercel.app",
  githubLink: "https://github.com/Nishitasarker/DriveFleet", // Client side repository link
  challenges: [
    "Separating architecture into distinct Client and Server repositories while maintaining smooth CORS and state synchronization.",
    "Implementing secure user authentication logic for managing personal vehicle listings and booking cancellations."
  ],
  futurePlans: [
    "Integrate advanced date-range picker for real-time car availability checks.",
    "Add payment gateway support for instant online booking confirmation."
    ]
},

  {
  id: "qurbani-nexus",
  title: "Qurbani Nexus — Online Livestock Marketplace",
  category: "Fullstack • Next.js Architecture",
  image: "/AnimalsProject.png", // public ফোল্ডারে ছবিটি AnimalsProject.png নামে রাখুন
  description: "An online marketplace for Qurbani animals connecting buyers and livestock sellers directly. Built as a unified full-stack application using Next.js Server Features to interact directly with MongoDB without needing a separate backend server.",
  features: [
    "Authentication (Login/Register) integrated with Better-Auth and Google OAuth",
    "Direct MongoDB connection for updating user profiles (Name & Profile Image) in real-time",
    "Dynamic filtering system to search livestock by weight, price, and category",
    "Seamless seller management and dynamic product catalog updates",
    " User Login Demo: nishitajui@gmail.com | Pass: 123456Jn"
  ],
  tags: [
    "Next.js",
    "JavaScript (ES6+)",
    "Better-Auth",
    "Google OAuth",
    "MongoDB",
    "Tailwind CSS"
  ],
  liveLink: "https://qurbani-haat-two.vercel.app",
  githubLink: "https://github.com/Nishitasarker/QurbaniHaat",
  challenges: [
    "Connecting and handling MongoDB database logic directly within Next.js without an external Express backend server.",
    "Synchronizing user authentication state and updating user profile data (Name & Image) smoothly in MongoDB."
  ],
  futurePlans: [
    "Integrate direct messaging/chat system between sellers and buyers.",
    "Add location-based filtering to help users discover nearby livestock farms easily."
  ]
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