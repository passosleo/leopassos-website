/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screen: {
      sm: '30em',
      md: '48em',
      lg: '62em',
      xl: '80em',
      '2xl': '96em',
    },
    extend: {
      colors: {
        yellow: '#FFB442',
        white: '#FBFBFB',
        black: '#111111',
        grey: {
          light: '#AAAAAA',
          dark: '#222222',
        },
      },
    },
  },
  plugins: [],
};
