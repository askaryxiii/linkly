/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        swirl: "url('../public/Swirl.webp')",
      },
      colors: {
        backgroundBg: "#0B101B",
        brandPrimary: "#144EE3",
        mainGrey: "#181E29",
        paragraphGrey: "#C9CED6",
        bgGrey: "#353C4A",
      },
    },
  },
  plugins: [],
};
