/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 22px 44px rgba(8, 44, 52, 0.20)',
      },
      keyframes: {
        heroZoom: {
          from: { transform: 'scale(1.01)' },
          to: { transform: 'scale(1.09)' },
        },
        heroRise: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        orb: {
          '0%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(28px,-24px,0)' },
          '100%': { transform: 'translate3d(0,0,0)' },
        },
      },
      animation: {
        heroZoom: 'heroZoom 18s ease-in-out infinite alternate',
        heroRise: 'heroRise 760ms ease both',
        orb: 'orb 22s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
