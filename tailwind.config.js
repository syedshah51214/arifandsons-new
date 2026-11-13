/** @type {import('tailwindcss').Config} */
// Brand palette taken from the Arif and Sons logo: site navy, brick orange, hard-hat yellow.
// `gray`/`slate` and `amber` are remapped so every page shares the same colours.
const navy = {
  50: '#f3f6fa', 100: '#e4eaf2', 200: '#c5d0df', 300: '#9fb0c7', 400: '#7186a3',
  500: '#4d6382', 600: '#344a69', 700: '#223654', 800: '#12284a', 900: '#0a1b33', 950: '#06111f',
};
const brick = {
  50: '#fff4ec', 100: '#ffe4d1', 200: '#ffc5a1', 300: '#ffa06b', 400: '#f97f3d',
  500: '#ec6424', 600: '#d2420a', 700: '#a93308', 800: '#86290b', 900: '#6d240d',
};
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { gray: navy, slate: navy, navy, amber: brick, brick, hardhat: '#f7a823', paper: '#f2ede3' },
      fontFamily: {
        sans: ['"Hanken Grotesk Variable"', '"Hanken Grotesk"', 'system-ui', 'sans-serif'],
        display: ['"Big Shoulders Display"', '"Arial Narrow"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
