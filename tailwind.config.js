/** @type {import('tailwindcss').Config} */
const config = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#012060", // Hauptfarbe
          light: "#0141a0", // Hellerer Ton (optional)
          dark: "#011437", // Dunklerer Ton (optional)
        },
        secondary: {
          DEFAULT: "#F2A900", // Sekundärfarbe (z. B. Gelb)
          light: "#FFD666", // Hellerer Ton (optional)
          dark: "#B97A00", // Dunklerer Ton (optional)
        },
      },
    },
  },
  plugins: [],
};

module.exports = config;
