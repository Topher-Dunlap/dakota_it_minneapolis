import type { Config } from "tailwindcss";

import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import {default as flattenColorPalette} from "tailwindcss/lib/util/flattenColorPalette";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {'cityOutline': "url('../../public/msp_outline_4.png')"},
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        'gradient': {
          to: { 'background-position': '200% center' },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'text-slide': {
          '0%, 10%': {
            transform: 'translateY(0%)',
          },
          '12.5%, 22.5%': {
            transform: 'translateY(-11.11%)',
          },
          '25%, 35%': {
            transform: 'translateY(-22.22%)',
          },
          '37.5%, 47.5%': {
            transform: 'translateY(-33.33%)',
          },
          '50%, 60%': {
            transform: 'translateY(-44.44%)',
          },
          '62.5%, 72.5%': {
            transform: 'translateY(-55.55%)',
          },
          '75%, 85%': {
            transform: 'translateY(-66.66%)',
          },
          '87.5%, 97.5%': {
            transform: 'translateY(-77.77%)',
          },
          '100%': {
            transform: 'translateY(-88.88%)',
          },
        },
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'text-slide': 'text-slide 20s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'gradient': 'gradient 8s linear infinite',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwind-gradient-mask-image"), addVariablesForColors, require("tailwindcss-animate"), require("@designbycode/tailwindcss-conic-gradient"),]
} satisfies Config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}