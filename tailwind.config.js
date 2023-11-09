/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      'cloud-burst': {
        '50': '#E8EBEF', 
        '100': '#dde9f0', 
        '200': '#aec7d6', 
        '300': '#86a7bf', 
        '400': '#43688f', 
        '500': '#17345f', 
        '600': '#132c54', 
        '700': '#0d2147', 
        '800': '#081738', 
        '900': '#05102b', 
        '950': '#02081c'
    },
    },
    extend: {},
  },
  plugins: [],
};
