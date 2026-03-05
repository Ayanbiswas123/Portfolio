/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#6366F1', // indigo-500
          soft: '#4F46E5',
        },
        accent: '#A855F7',
        'bg-dark': '#050816',
        'card-dark': 'rgba(15, 23, 42, 0.9)',
      },
      boxShadow: {
        'glow-primary': '0 0 40px rgba(99, 102, 241, 0.45)',
        'glow-soft': '0 0 30px rgba(129, 140, 248, 0.35)',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at top left, rgba(56, 189, 248, 0.25), transparent 60%), radial-gradient(circle at top right, rgba(129, 140, 248, 0.25), transparent 60%), radial-gradient(circle at bottom left, rgba(236, 72, 153, 0.18), transparent 60%)',
        'section-gradient':
          'linear-gradient(135deg, rgba(15,23,42,0.95), rgba(15,23,42,0.98))',
      },
      backdropBlur: {
        xl: '22px',
      },
      borderRadius: {
        xl: '1.25rem',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'float-medium': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.75' },
        },
      },
      animation: {
        'gradient-x': 'gradient-x 16s ease infinite',
        'float-slow': 'float-slow 10s ease-in-out infinite',
        'float-medium': 'float-medium 7s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
