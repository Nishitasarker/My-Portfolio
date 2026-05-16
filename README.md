# 🌐 Modern Full-Stack Portfolio Website

Welcome to my personal portfolio repository! This is a cutting-edge, high-performance web application designed to showcase my skills, projects, and expertise as a **Full-Stack Web Developer** and **Data Analyst**. Built with modern technologies like **Next.js**, **React**, and **MongoDB**, it features premium UI/UX designs, fluid physics-based animations, and smooth responsiveness.

Live Demo: [your-portfolio-link.vercel.app](https://my-portfolio-six-ashen-rohyxjkk3k.vercel.app) *(Replace with your actual live link)*

---

## 🚀 Key Focus Areas

- **Frontend Excellence:** Specialized in crafting pixel-perfect, highly responsive User Interfaces (UI) using Next.js and Tailwind CSS, enriched with framer-motion physics for a tactile desktop experience.
- **Robust Backend & Databases:** Experienced in building secure, structured, and fast APIs, integrating database management systems like MongoDB, and keeping security at the forefront.
- **Data-Driven Approach:** Combining full-stack engineering with data analysis to bridge the gap between elegant interface design and clean, statistical backend modeling.

---

## 🛠️ Tech Stack & Features

### **Frontend & UI/UX**
* **Framework:** Next.js (App Router, Server Components)
* **Library:** React.js
* **Styling:** Tailwind CSS (Modern Dark-Neutral Palette)
* **Animations:** Framer Motion (Fluid custom transitions & Staggered layouts)
* **Interactions:** Custom `Magnetic` effects for icons and interactive call-to-actions
* **Icons:** Lucide React & React Icons

### **Backend & Data**
* **Database:** MongoDB (Efficient schema design and management)
* **API Routing:** Next.js Serverless Route Handlers
* **Optimization:** SEO friendly architecture, semantic HTML, and smart image caching

---

## 📂 Project Structure Highlights

A look into how the project is organized to remain scalable and modular:

```text
├── components/
│   ├── animations/     # Custom animation hooks like Magnetic.tsx
│   ├── ui/             # Reusable UI component elements
│   └── Footer.tsx      # Optimized modern footer with smooth interactions
├── app/
│   ├── layout.tsx      # Main wrapper & global styling configs
│   ├── page.tsx        # Main homepage landing screen
│   └── globals.css     # Centralized Tailwind CSS declarations
├── public/             # Static assets (images, custom SVGs)
└── package.json        # Dependencies & script setups

🏎️ Getting Started Locally
Follow these steps to set up and run the portfolio website on your local machine:

1. Prerequisites
Ensure you have Node.js (v18.x or later) and npm/yarn installed.

2. Clone the Repository
Bash
git clone [https://github.com/Nishitasarker/My-Portfolio.git](https://github.com/Nishitasarker/My-Portfolio.git)
cd My-Portfolio
3. Install Dependencies
Bash
npm install
# or
yarn install
4. Setup Environment Variables
Create a .env.local file in the root directory and add your secret keys (e.g., MongoDB URI, Email Service configurations):

Code snippet
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_APP_URL=http://localhost:3000
5. Run the Development Server
Bash
npm run dev
# or
yarn dev
Open http://localhost:3000 in your browser to see your local instance up and running.

📈 Optimization & Bug Fixes Included
Cubic Bezier Custom Easing: Fully optimized animations by switching invalid easing properties to raw bezier vectors [0.16, 1, 0.3, 1] for ultra-smooth performance.

Scroll Offset Calculations: Enhanced layout wrappers using relative bounding boxes to eliminate browser console scroll calculation warnings.

Type Inference: Code rewritten cleanly without intrusive : any typings to assure smooth compilation during production deployments on platforms like Vercel.

📬 Connect With Me
Let's collaborate on building innovative web solutions or analyzing complex data patterns!

LinkedIn: @NishitaSarker

GitHub: @Nishitasarker

WhatsApp: +8801750691825

Email: nishitasarkerjui@gmail.com

Developed with 💜 by Nishi.