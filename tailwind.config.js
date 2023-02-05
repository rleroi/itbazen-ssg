/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./renderer/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: '#2C2C2C',
        dark: '#1E1E1E',
        border: '#444444',
        laravel: '#FD4F31',
      },
    },
  },
  plugins: [],
}
