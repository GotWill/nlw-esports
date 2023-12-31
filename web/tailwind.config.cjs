/** @type{import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        galaxy: 'url("./Fundo.png")',
        'nlw-gradient': 'linear-gradient(90deg, #9572FC 27.00%, #43E7AD 50.52%, #E2D45C 100%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
      }

    },
  },
  plugins: [],
}