
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        background: "#FDFCFB",
        foreground: "#2C2C2C",
        primary: "#E2D1C3",
        secondary: "#8B7355",
        accent: "#C17A5C",
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        muted: {
          DEFAULT: "#F5F5F5",
          foreground: "#757575"
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      keyframes: {
        "fade-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out",
        "fade-in": "fade-in 0.6s ease-out"
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
