/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maco: {
          blue: '#0C477F',
          red: '#ED1C24',
          gray: '#c9c9c9',
          dark: '#333333'
        }
      }
    },
  },
  plugins: [],
}
