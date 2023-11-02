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
      backgroundImage: {
        brackets: "url('/brackets_bg.svg')",
        array: "url('/array_bg.svg')",
        object: "url('/object_bg.svg')",
        prompt: "url('/prompt_bg.svg')",
      },
      keyframes: {
        flip: {
          '0%, 100%': {
            transform: 'rotateY(0deg)',
          },
          '50%': {
            transform: 'rotateY(90deg)',
          },
        },
        'custom-spin': {
          '0%, 100%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        flip: 'flip 500ms ease-in-out',
        'custom-spin': 'custom-spin 500ms ease-in-out',
      },
    },
  },
  plugins: [],
};
