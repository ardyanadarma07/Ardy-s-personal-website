/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#FFFFFF',
        cream: '#FCDE9C',
        birumuda: '#8EDCE6',
        birutua: '#266DD3',
        gelap: '#00120B',
        birugelap: '#164180',
      },
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

