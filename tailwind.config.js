/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      rotate: {
        60: "15deg",
      },
      backgroundImage: {
        firstCard:
          "url('https://speedexind.com/wp-content/uploads/2023/01/studio1.jpg')",
        secondCard:
          "url('https://speedexind.com/wp-content/uploads/2023/03/gift.webp')",
        thirdCard:
          "url('https://speedexind.com/wp-content/uploads/2023/03/access.webp')",
        fourthCard:
          "url('https://speedexind.com/wp-content/uploads/2023/02/shark-bottle-677x1024.png')",
      },
      screens: {
        sm: "300px",

        md: "720px",

        lg: "1040px",
      },
      fontFamily: {
        nunito: ["nunito", "sans-serif"],
        Sans: ["Source Sans Pro", "sans-serif"],
        merri: ["Merriweather", "serif"],
        play: ["Playfair Display", "serif"],
        mon: ["Montserrat", "sans-serif"],
        roboto: ["Roboto Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
