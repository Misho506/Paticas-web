/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Archia', 'system-ui', 'sans-serif'],
      },
      colors: {
        shared: {
          success: "#48bb78",
          error: "#f56565",
          warning: "#ed8936",
          info: "#4299e1",
        },
        green: "#65a603",
        darkGreen: "#2b462a",
        yellow: "#f0b500",
        orange: "#ee9900",
        black: "#161616",
        ligthGray: "#E7E7E3",
        gray: "#D7D7D7",
      },
    },
  },
  plugins: [],
}

