/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': 'hsl(0, 78%, 62%)',
        'primary-cyan': 'hsl(180, 62%, 55%)',
        'primary-orange': 'hsl(34, 97%, 64%)',
        'primary-blue': 'hsl(212, 86%, 64%)',
        'dark-blue': 'hsl(234, 12%, 34%)',
        'gray-blue': 'hsl(229, 6%, 66%)',
        'light-gray': 'hsl(0, 0%, 98%)'

      },
      boxShadow: {
        'xl': '0 5px 10px rgba(84, 158, 242, 0.25)'
      },

      screens: {
        'lg': "900px"
      }
    },
    

    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}

