module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
          default: '0px 10px 20px rgba(150, 150, 187, 0.1)',
      },
      fontSize: {
          '2rem': '2rem',
      },
    },
  },

  plugins: [],
}
