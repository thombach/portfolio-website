/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/js/*.js', './src/data.json'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter']
      }
    },
  },
  plugins: [],
}
