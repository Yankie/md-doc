/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg",],
  theme: {
    extend: {},
  },
  darkMode: 'selector',
  daisyui: {
    themes: ["light"],
  },
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  darkMode: 'selector',
}

