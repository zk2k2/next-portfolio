import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "dark-blue": "#201E43",
        "light-blue": "#96C9F4",
      },
      keyframes: {
        "fade-in-slide-left": {
          "0%": { opacity: "0", transform: "translateX(-100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-slide-bottom": {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-slide-left": "fade-in-slide-left 0.5s ease-out forwards",
        "fade-in-slide-bottom": "fade-in-slide-bottom 0.5s ease-out forwards",
      },
      screens: {
        xl: "1281px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".css-debug": {
          border: "3px solid red",
        },
      });
    },
  ],
};

export default config;
