module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        typing: 'typing 4s steps(44, end), blink-caret .75s step-end infinite',
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'blink-caret': {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'white' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}