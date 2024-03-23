/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: [
      '*.html',
      './assets/js/main.js',
      "./src/**/*{js,jsx,ts,tsx}",
      './public/index.html'
    ]
  },


  darkMode: true, // or 'media' or 'class'
  theme: {
    screens: {
      'ssm': '320px',
      // => @media (min-width: 320px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
  
    },
    //colors: {
    //  'green': '#13ce66',
    //  'gray-dark': '#273444',
    //  'gray': '#8492a6',
    //  'gray-light': '#d3dce6',
    //},
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      theme: {  
      },
      screens: {
        '3xl': '1920px',
        
      },
    inset: {
        '100': '100%',
      },
      padding: {
        '120': '120px',
      }
    },

  },
  
  darkMode: false,
  theme:{
    'green': '#13ce66',
    'gray-dark': '#273444',
    'gray': '#8492a6',
    'gray-light': '#d3dce6',
    extend: {
      inset: {
          '100': '100%',
        },
        padding: {
          '120': '120px',
        }
      },
  },

  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
