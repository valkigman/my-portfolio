// import { CgColorPicker } from 'react-icons/cg';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bkgrd: 'rgba(var(--color-bkgrd) / <alpha-value>)',
        content: 'rgba(var(--color-content) / <alpha-value>)',
        cyaniii: 'rgb(var(--color-cyaniii) / <alpha-value>)',
        cyanix: 'rgb(var(--color-cyanix) / <alpha-value>)',
        neutralix: 'rgb(var(--color-neutralix) / <alpha-value>)',
        neutralv: 'rgb(var(--color-neutralv) / <alpha-value>)',
        neutraliv: 'rgb(var(--color-neutraliv) / <alpha-value>)',
        cyani: 'rgb(var(--color-cyani) / <alpha-value>)',
        cyaniv: 'rgb(var(--color-cyaniv) / <alpha-value>)',
        neutralviii: 'rgb(var(--color-neutralviii) / <alpha-value>)',
        turqoise:'rgb(var(--color-turqoise) / <alpha-value>)',
      }
    },
  },
  plugins: [],
}