/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    // ...
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",'./public/index.html'
  ],
  // mode: "jit",
  theme: {
    extend: {
       
      colors: {
        "deep-blue": "#010026",
        blue: "#2CBCE9",
        red: "#DC4492",
        yellow: "#FDCC49",
        grey: "#ededed",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",

        gray:{
          0: "#FFFFFF",
          50: "#F9FAFB",
          100: "#F3F4F6",
          300: "#D1D5DB",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
          1000: "#000000",
          },
         
          primary:{
          50: "#E6FBFF",
          100: "#CCF7FE",
          200: "#99EEFD",
          300: "#66E6FC",
          400: "#33DDFB",
          500: "#00D5FA",
          600: "#00A0BC",
          700: "#006B7D",
          800: "#00353F",
          900: "#001519",
  
          }
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush:   "url('./assets/Brush Stroke-blue.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    require('flowbite/plugin')
],
};