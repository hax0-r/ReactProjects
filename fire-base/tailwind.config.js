/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#5a5959",
        yellow: "#ffeaae",
        "drak-yellow": "#fcca3f",
        orange: "#f6820c",
        firebase:"#fcca3f"
      }
    },
  },
  plugins: [],
}

