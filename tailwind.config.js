/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      borderColor:{
        'primary':'',
        'secondary':'#2b2d77',
      }
    },
    fontFamily:{
      "font-sriracha":"Sriracha",
      "font-poppins":"Poppins",
    },
  },
  plugins: [],
}

