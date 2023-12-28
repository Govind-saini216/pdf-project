/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'hero-pattern': "src/images/background.png",
  
      }
,
      backgroundColor:{
        primary:"#121211",
        secondry:"#bb6b29",
      },


    },
    
  },
  plugins: [],
}