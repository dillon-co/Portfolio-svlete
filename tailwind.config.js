/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        pink: {
          100: '#FFF5F7',
          200: '#FED7E2',
          300: '#FBB6CE',
          500: '#ED64A6',
        },
        yellow: {
          300: '#FAF089',
          500: '#ECC94B',
        },
        purple: {
          800: '#553C9A',
          900: '#44337A',
        },
        indigo: {
          900: '#3C366B',
        },
      },
    },
  },
  plugins: [],
}