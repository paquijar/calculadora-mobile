/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/screens/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'button-primary': {
          100: '#dcdcdc',
          200: '#b9b9b9',
          300: '#969696',
          400: '#737373',
          500: '#505050',
          600: '#404040',
          700: '#303030',
          800: '#202020',
          900: '#101010',
        },
        'button-primary-light': '#7A7A7A',
        'button-secondary': '#D4D4D2',
        'button-secondary-light': '#ABABAB',
        'button-orange': '#FF9500',
        'button-orange-light': '#FFA43D',
      },
    },
  },
  plugins: [],
};
