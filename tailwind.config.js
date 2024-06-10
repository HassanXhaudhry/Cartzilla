/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      blur: {
        'gradient': '',
        'blurright':''
      },
    },
    fontFamily:{
      Montserrat:['Montserrat', 'sans-serif'],
      Inter:['Inter', 'sans-serif'],
      Poppins:['Poppins', 'sans-serif']
    },
    colors:{
      'dark':'#1B273A',
      'silver': '#F5F7FA',
      'darksilver':'#dadada',
      'black': '#000000',
      'gray': '#A9A9A9',
      'white': '#FFFFFF',
      'lightblack': '#4F4F4F',
      'gradient1': '#ACCBEE',
      'gradient2': '#E7F0FD'
    },
   
  },
  plugins: [
    require('flowbite/plugin'),
],
darkMode:"class",
}

