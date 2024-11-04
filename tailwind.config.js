/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#9538E2",
        "gray-1": "#3A3A3A",
        "deep-black": "#0B0B0B",
        "off-white": "#F3F3F3",
        "gray": "#67666A",
        "deep-gray": "#3A393F"
      },
      fontFamily: {
        "sora": "Sora",
      }
    },
  },
  plugins: [],
}