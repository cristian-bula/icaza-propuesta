/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#343432",
        secundary: '#b92177',
        customBlue: '#3586ec',
        background: '#343432'
      },
      fontSize: {
        'xxs': ['0.6rem', {
          lineHeight: '1rem',
          letterSpacing: '-0.01em',
          fontWeight: '300',
        }],
      }
    }
    
  },
  plugins: [nextui()],

};
