/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
      },
      colors: {
        gb: {
          bg: '#d1d5db',
          screen: '#9bbc0f',
          pixel: '#0f380f',
          bezel: '#50545e',
          red: '#8b0000',
          dark: '#2d2d2d',
        },
      },
    },
  },
  plugins: [],
};

