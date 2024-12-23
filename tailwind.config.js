/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './public/**/*.html',
    "./src/**/*.{vue,html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "aqua", "pastel"],
  },
}

