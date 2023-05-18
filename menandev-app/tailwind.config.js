/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        bg: '#F2F2F2',
        orange: '#EA2A00',
        yellow: '#FF8800',
        green: '#208B3A',
        red: '#FF0000',
        black: {
          700:'#495057',
          600:'#60666C',
          500:'#777C81',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
