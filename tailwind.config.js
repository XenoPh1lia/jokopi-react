/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        history: "url('/public/assets/images/cold-brew.webp')",
        main: "url('/public/assets/images/bg-main-coffee.webp')",
        profile: "url('/public/assets/images/bg-profile.webp')",
      },
      spacing: {
        22: "7rem",
      },
      colors: {
        secondary: "#ffba33",
        tertiary: "#6A4029",
        quartenary: "#0b132a",
      },
    },
  },
  plugins: [],
};
