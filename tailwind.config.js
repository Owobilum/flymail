/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6853',
        secondary: '#432B3D',
        secondary_light: '#52354A',
        off_white: '#FFFFFFBF',
        light_gray: '#D9D9D9',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { left: 0 },
          '100%': { left: '-100%' },
        },
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
    },
  },
  plugins: [],
}
