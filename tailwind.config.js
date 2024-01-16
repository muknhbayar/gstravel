/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",

  theme: {
    screens: {
      sm: "600px",
      md: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      fontFamily: {
        poppins: "poppins",
        questrial: "Questrial",
      },
      colors: {
        primary: "#138672",
        secondaryRed: "#f65d01",
        secondaryYellow: "#ff970f",
        secondaryIndigo: "#8de920",
        secondaryBlue: "#3b71fe",
        "main-bg": "#f5f5f9",
        "main-dark": "#1d232d",
        "card-dark": "#ы",
        "dark-light": "#414355",
        "hover-color-dark": "#353745",
        dark: "#353745",
      },
      gridTemplateColumns: {
        "16-auto": "250px auto",
      },
    },
  },

  plugins: [],

  // plugins: [
  //   plugin(function ({ addUtilities }) {
  //     const newUtilities = {
  //       ".text-muted": {
  //         opacity: 1,
  //       },
  //       ".transition-a": {
  //         transition: "all 0.3s ease-in-out",
  //       },
  //       ".card-shadow": {
  //         boxShadow: " 0 0 0.375rem 0.25rem rgb(161 172 184 / 15%)",
  //       },
  //       ".shadow-light": {
  //         boxShadow: "0 0.3rem 0.6rem .2rem rgba(0, 0, 0, 0.1)",
  //       },
  //       ".border-light": {
  //         border: "1px solid rgba(46, 46, 46, 0.1)",
  //       },
  //       ".shadow-light-2": {
  //         boxShadow: "0.1rem 0.1rem 0.3rem .1rem rgba(0, 0, 0, 0.1)",
  //       },
  //       ".input-shadow": {
  //         boxShadow: "0 0 0 1000px #f5f5f9 inset !important",
  //       },
  //       ".input-dark-shadow": {
  //         boxShadow: "0 0 0 1000px #13131A inset !important",
  //       },
  //       ".inputAutofillColor": {
  //         "-webkit-text-fill-color": "#ccc",
  //       },
  //       ".flex-center-center": {
  //         display: "flex",
  //         alignItems: "center",
  //         justifyContent: "center",
  //       },
  //       ".flex-center-between": {
  //         display: "flex",
  //         alignItems: "center",
  //         justifyContent: "space-between",
  //       },
  //       ".flex-align-center": {
  //         display: "flex",
  //         alignItems: "center",
  //       },
  //     };
  //     addUtilities(newUtilities);
  //   }),
  // ],
};
