/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    listStyleType: {
      none: 'none',
       disc: 'disc',
       decimal: 'decimal',
       square: 'square',
       roman: 'upper-roman',
    },
    extend: {
     colors:{
       'creame':"#FFEADD",
       'dustyellow':"#FFE4C9",
       'mediumpink':'#FF6666'
     },
    },
  },
  plugins: [],
}

