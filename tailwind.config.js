/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/js/*.js'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter']
      }
    },
  },
  plugins: [],
}
