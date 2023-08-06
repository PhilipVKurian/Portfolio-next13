/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '270px',   // Small screens
        'md': '768px',   // Medium screens
        'lg': '1224px',  // Large screens
        'xl': '1280px',  // Extra large screens
      },
      keyframes: {
        animate:{
          '0%, 10%, 30%, 100%':{
            width: '0%'
          },
          '70%,80%,90%' : {
            width: '120%'
          },
          
        }
      },
      animation: {
        animate: 'animate 6s ease',
      },
      borderWidth: {      
        '16': '16px', 
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
