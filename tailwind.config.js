/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      filter: {
        'drop-shadow-lg': 'drop-shadow(0 30px 35px #6b55c)',
        'drop-shadow-xl': 'drop-shadow(0 20px 25px #6b95c)',
      },
    },
  },
  plugins: [
  ],
};

