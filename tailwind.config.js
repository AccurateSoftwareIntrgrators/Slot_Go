/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        slotgo: {
          // primary yellow
          green: '#FBBF24',
          // deep blue background
          dark: '#020617',
          gray: '#020617',
          // accent blue
          accent: '#1D4ED8',
        },
      },
      boxShadow: {
        'glow-green': '0 0 30px rgba(251, 191, 36, 0.6)',
      },
    },
  },
  plugins: [],
}
