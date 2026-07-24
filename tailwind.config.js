/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FCFBF7',
          100: '#F7F4EC',
          200: '#F0EBDF',
          300: '#E5DECC',
        },
        forest: {
          50: '#EEF3EF',
          100: '#D8E3DA',
          200: '#AFC6B4',
          300: '#7FA189',
          400: '#527C60',
          500: '#365B44',
          600: '#274832',
          700: '#1F3D2B',
          800: '#182F21',
          900: '#112218',
        },
        charcoal: {
          400: '#6B6B70',
          500: '#4A4A4F',
          600: '#38383C',
          700: '#2B2B2F',
          800: '#222225',
          900: '#1A1A1D',
        },
        bronze: {
          100: '#F1E8D4',
          200: '#E3D3AE',
          300: '#D2BB84',
          400: '#C2A566',
          500: '#B3924F',
          600: '#9A7B3F',
          700: '#7C6233',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Jost', 'Avenir', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        luxe: '0.18em',
      },
      boxShadow: {
        card: '0 1px 2px rgba(26, 26, 29, 0.04), 0 8px 24px rgba(26, 26, 29, 0.07)',
        'card-hover': '0 2px 4px rgba(26, 26, 29, 0.05), 0 16px 40px rgba(26, 26, 29, 0.12)',
      },
      maxWidth: {
        content: '76rem',
      },
    },
  },
  plugins: [],
};
