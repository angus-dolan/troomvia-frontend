const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class', // 'media' or 'class'
  theme: { 
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: "#23262F",
      white: colors.white,
      tint: 'rgba(24, 24, 25, 0.6)', // gray.900 @ 60%
      red: "#EB5757",
      green: {
        '1': '#219653',
        '2': '#27AE60',
        '3': '#6FCF97',
      },
      gray: {
        '1': '#333',
        '2': '#4F4F4F',
        '3': '#828282',
        '4': '#BDBDBD',
        '5': '#E0E0E0',
        '6': '#F2F2F2',
        '7': '#E5E7EB',
      },
      blue: {
        '1': '#3e3bcc',
        '2': '#3b60ec',
        '3': '#3773ff',
        '4': '#3087ff',
        '5': '#2196ff',
        '6': '#39a7ff',
        '7': '#5fb8ff',
        '8': '#90ccff',
        '9': '#bddfff',
        '10': '#e3f3ff',
      }
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
      'xl': '1rem'
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',  
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    fontWeight: {
     light: 300,
     regular: 400,
     medium: 500,
     semibold: 600,
     bold: 700
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700')
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.500'),
            h1: {
              color: theme('colors.light.high-emphasis')
            },
            h2: {
              color: theme('colors.light.high-emphasis')
            },
            h3: {
              color: theme('colors.light.high-emphasis')
            },
            h4: {
              color: theme('colors.light.high-emphasis')
            },
            h5: {
              color: theme('colors.light.high-emphasis')
            },
          }
        }
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
