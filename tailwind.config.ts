/**
 * Tailwind CSS Configuration
 *
 * Defines the design system for KickOff.gg:
 * - Deep burgundy primary (classic gentleman's club aesthetic)
 * - Gold accent colors (brass/premium details)
 * - Warm neutral tones (cream/brown instead of gray)
 * - Inter font family (modern, clean)
 * - Old-school sophistication meets modern betting
 */

import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-questrial)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      colors: {
        // Primary brand colors (deep burgundy - gentleman's club aesthetic)
        primary: {
          50: "#fdf2f4",
          100: "#fce7eb",
          200: "#f9d0d9",
          300: "#f4a8b8",
          400: "#ed7591",
          500: "#e14d6e",
          600: "#cb2d56", // Brighter red for hovers/highlights
          700: "#aa2049",
          800: "#8e1d41",
          900: "#3f0d12", // Main brand color - deep burgundy
          950: "#520a15",
        },
        // Accent colors (gold/brass for premium feel)
        // Accent colors (soft beige for premium feel)
        // Accent colors (soft beige for premium feel)
        accent: {
          50: "#fefbf5",
          100: "#fdf6eb",
          200: "#fcefd6",
          300: "#fae8c2",
          400: "#f9e1ad",
          500: "#e6d4b8", // Main accent - darker beige
          600: "#cfb89a",
          700: "#b89c7d",
          800: "#9d8366",
          900: "#866e52",
        },
        // Neutral colors (warm cream/brown tones)
        neutral: {
          50: "#fafaf9", // Warm off-white
          100: "#f5f5f4", // Cream
          200: "#e7e5e4", // Light beige
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524", // Dark brown
          900: "#1c1917", // Almost black brown
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
