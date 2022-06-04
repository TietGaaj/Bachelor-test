const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}",'./node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  colors: {
    'faunditprime': '#f80652',
    'faunditsand': '#feedc3',
    'gray-dark': '#273444',
    'gray': '#f2f4f7',
    'gray-light': '#d3dce6',
  },
  fontFamily: {
    sans: ['Gotham Rounded', 'sans-serif'],
    serif: ['Gotham Rounded', 'serif'],
  },
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
});
