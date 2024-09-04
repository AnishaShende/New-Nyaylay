module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          '0%': { maxHeight: '0', opacity: '0' },
          '100%': { maxHeight: '1200px', opacity: '1' }, // Adjust maxHeight as needed
        },
        slideUp: {
          '0%': { maxHeight: '1200px', opacity: '1' }, // Adjust maxHeight as needed
          '100%': { maxHeight: '0', opacity: '0' },
        },
      },
      animation: {
        slideDown: 'slideDown 0.3s ease-out forwards',
        slideUp: 'slideUp 0.3s ease-in forwards',
      },
    },
  },
  plugins: [],
}
