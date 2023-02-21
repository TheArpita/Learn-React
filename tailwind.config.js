/** @type {import('tailwindcss').Config} */
module.exports = {
  //to tell compiler which file could be included tailwind: "./src/**/*.{html,js,ts,jsx,tsx}"; we're not using ts/jsx/tsx for now
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
