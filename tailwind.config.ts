import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : '#F1F1F1',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xs: "360px",
        xsm: "420px",
        smx: "550px",
        sm: "640px",
        sml: "680px",
        md: "768px",
        mdl:'820px',
        mdll: "920px",
        lg: "1024px",
        lgl: "1100px",
        lgll: "1190px",
        xl: "1250px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
} satisfies Config;
