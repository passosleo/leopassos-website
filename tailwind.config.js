/** @type {import('tailwindcss').Config} */
import { colors, sizes } from './src/theme';
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screen: {
      xs: '20em',
      sm: '30em',
      md: '48em',
      lg: '62em',
      xl: '80em',
      '2xl': '96em',
    },
    extend: {
      colors,
      width: sizes,
      height: sizes,
      minWidth: sizes,
      minHeight: sizes,
      keyframes: {
        heightModalAnimation: {
          '0%': {
            maxHeight: '0px',

            opacity: 0,
          },

          '100%': {
            maxHeight: '1080px',

            opacity: 1,
          },
        },
        fadeInAnimation: {
          '0%': { opacity: 0 },

          '100%': { opacity: 1 },
        },
      },

      animation: {
        heightModalAnimation: 'heightModalAnimation 500ms ease-in-out',
        fadeInAnimation: ' fadeInAnimation 200ms ease-in-out',
      },
    },
  },
  plugins: [],
};
