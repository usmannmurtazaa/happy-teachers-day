import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { 950: '#05070c', 900: '#070910', 800: '#0b0f19', 700: '#111726', 600: '#1a2233' },
        gold: { 200: '#fbeacb', 300: '#f7d99a', 400: '#f2c879', 500: '#e5b05a', 600: '#c98f3d' },
        mist: { 100: '#eef1f8', 200: '#d5dbe8', 300: '#aab3c8', 400: '#8791a8', 500: '#646e85' },
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { tightest: '-0.04em' },
      boxShadow: {
        glow: '0 0 60px -15px rgba(242,200,121,0.45)',
        card: '0 24px 60px -30px rgba(0,0,0,0.9)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-18px,0)' },
        },
        drift: {
          '0%,100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(24px,-30px,0) scale(1.08)' },
        },
        pulseSoft: { '0%,100%': { opacity: '0.35' }, '50%': { opacity: '0.7' } },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        drift: 'drift 18s ease-in-out infinite',
        pulseSoft: 'pulseSoft 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config