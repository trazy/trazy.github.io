module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            pre: {
              padding: 0,
              'background-color': 'transparent',
              '&>div:first-child': {
                'border-radius': '0.375rem',
              },
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
};
