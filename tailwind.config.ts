import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // <--- Eiti oboshoy thakte hobe
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-purple": "#8B5CF6", // Apnar code-e thaka brand color-ti eikhane define kora bhalo
      },
    },
  },
  plugins: [],
};
export default config;