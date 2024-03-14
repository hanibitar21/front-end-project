/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        'red': '#e60012',
        'accent-blue':'#0b2b6b',
        'accent-lightblue':'#d6f0fa',
        'accent-white': '#ffffff',
        'accent-black': '#434242',
        'accent-gray': '#efefef',
        'dark-red': '#8B0000'

      },
    },
  },
  plugins: [],
}

