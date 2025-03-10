/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        xs: "4px"
      }
    }
  },
  plugins: []
};
