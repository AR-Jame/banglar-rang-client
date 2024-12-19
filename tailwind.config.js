/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lota: 'Lato',
        bodoni: 'Bodoni Moda',
        handy: 'Great Vibes',
      }
    },
  },
  plugins: [],
}

