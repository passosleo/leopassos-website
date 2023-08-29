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
      transformOrigin: {
        'top-center': 'top center',
        'bottom-center': 'bottom center',
      },
      transitionProperty: {
        height: 'height',
      },
      width: {
        fit: 'fit-content',
        modal: '600px',
      },
      height: {
        fit: 'fit-content',
        modal: '600px',
      },
      minWidth: {
        320: '320px',
        520: '520px',
        640: '640px',
        768: '768px',
        960: '960px',
        1024: '1024px',
      },
      minHeight: {
        modal: '600px',
        '300px': '300px',
      },
      borderWidth: {
        6: '6px',
      },
      maxHeight: {
        modal: '600px',
        '300px': '300px',
      },
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
