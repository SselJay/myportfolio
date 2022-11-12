/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
    fadeIn: "fadeIn 1s ease-in forwards",
    shake: "shake 0.82s cubic-bezier(.36,.07,.19,.97) infinite"
  },
  animationDelay: {
      100: "100ms",
      200: "200ms",
      300: "300ms",
      400: "400ms",
      2000: "2000ms",
    },
    variants: {
    animationDelay: ["responsive", "hover"],
  },
  keyframes: {
    fadeIn: {
      "0%": { opacity: 0 },
      "100%": { opacity: 1 },
    },
    shake: {
      '10%, 90%': {
        transform: 'translate3d(-1px, 0, 0)'
      },
      '20%, 80%': {
        transform: 'translate3d(2px, 0, 0)'
      },
      '30%, 50%, 70%': {
        transform: 'translate3d(-4px, 0, 0)'
      },
      '40%, 60%': {
        transform: 'translate3d(4px, 0, 0)'
      }
    }
  }
    },
  },
  plugins: [],
};