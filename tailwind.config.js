/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        backgroundImage: {
          'header': "url('/assets/bg.jpg')",
          'secondary': "url('/assets/secondary.jpg')",
          'specials': "url('/assets/specials.jpg')",
          'first': "url('/assets/temp.jpg')",
        },
        colors: {
          primary: {
            50: '#c70039',
            100: '#ab0031',
            200: '#bf3030'
          },
          secondary: {
            50: '#fff399',
          }
        },
      },
      fontFamily: {
        headings: [
          'Libre Franklin',
        ],
        body: [
          'Verdana',
        ],
        subheadings: [
          'Varela',
          'sans-serif'
        ],
      },
    },
  }
  