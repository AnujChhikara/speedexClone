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
          "url('https://res.cloudinary.com/dmurcewte/image/upload/v1682944738/Card1.jpg')",
        secondCard:
          "url('https://res.cloudinary.com/dmurcewte/image/upload/v1682944753/Card2.webp')",
        thirdCard:
          "url('https://res.cloudinary.com/dmurcewte/image/upload/v1682944768/Card3.webp')",
        fourthCard:
          "url('https://res.cloudinary.com/dmurcewte/image/upload/v1682944788/Card4.webp')",
        fifthCard:
          "url('https://res.cloudinary.com/dmurcewte/image/upload/c_scale,w_336/v1682944738/Card1.jpg')",

        sixCard:
          "url('https://res.cloudinary.com/dmurcewte/image/upload/c_scale,w_336/v1682944753/Card2.webp')",

        sevenCard:
          "url('https://res.cloudinary.com/dmurcewte/image/upload/c_scale,w_336/v1682944768/Card3.webp')",

        eightCard:
          "url('https://res.cloudinary.com/dmurcewte/image/upload/c_scale,w_336/v1682944788/Card4.webp')",
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
