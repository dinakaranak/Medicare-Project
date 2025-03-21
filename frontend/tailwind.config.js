/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor:"#0b67ff",
        yellowColor:"#feb60d",
        purpleBlueColor:"#9771ff",
        irisBlueColor:"01B5C5",
        headingColor:"#181a1e",
        textColor:"#4e545f",
      },

      boxShadow:{
        panelShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;',
      },
    },
  },
  plugins: [],
}

