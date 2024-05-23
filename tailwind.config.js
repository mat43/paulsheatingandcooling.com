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
        },
        colors: {
          primary: {
            50: '#c70039',
            100: '#ab0031',
          },
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
  