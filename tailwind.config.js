/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg",],
  theme: {
    fontFamily: {
      'sans': ['"PT Astra Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      'serif': ['"PT Astra Serif"', 'ui-serif'],
      'mono': ['"PT Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
  
      // 'display': ['"PT Astra Sans"', 'ui-sans-serif', 'sans-serif'],
      'display': ['"PT Astra Serif"', 'ui-serif'],
      'body': ['"PT Astra Sans"', 'ui-sans-serif', 'sans-serif'],
      'ui': ['"PT Root UI"', 'system-ui', 'ui-sans-serif', 'sans-serif'],
    },
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark"],
  },
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
}
