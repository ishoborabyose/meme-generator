/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        bg1: "linear-gradient(90deg, #672280 1.18%, #A626D3 100%);",
        bg2: " linear-gradient(90.41deg, #711F8D 1.14%, #A818DA 100%);",
      },

      gridTemplateColumns: {
        template: "40px 40px / 1fr 1fr",
      },

      gridColumn: {
        colmn: "1 / -1",
      },
      colors: {
        lightGray: "#d5d4d8",
        darkPurple: "#672280",
      },
      width: {
        "3/6": "80%",
      },
    },
  },
  plugins: [],
};
