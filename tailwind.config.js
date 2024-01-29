/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily:{
        'jost' : ['Jost']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

