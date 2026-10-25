/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        night: {
          DEFAULT: "#0F172A",
          indigo: "#1E1B4B",
          surface: "#1E293B",
        },
        parchment: {
          DEFAULT: "#FFFBEB",
          ink: "#1E293B",
        },
        amber: {
          DEFAULT: "#F59E0B",
        },
        emerald: {
          DEFAULT: "#10B981",
        },
        coral: {
          DEFAULT: "#F43F5E",
        },
        sky: {
          DEFAULT: "#06B6D4",
        },
      },
    },
  },
  plugins: [],
};
