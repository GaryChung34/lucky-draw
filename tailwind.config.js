module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        'slot_w': '800px',
        'sideBox_w': '350px',
      },
      height: {
        'sideBox_h': '360px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
