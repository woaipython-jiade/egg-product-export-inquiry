/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        status: {
          open: '#16a34a',
          'open-bg': '#f0fdf4',
          restricted: '#d97706',
          'restricted-bg': '#fffbeb',
          closed: '#dc2626',
          'closed-bg': '#fef2f2',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans SC', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Noto Sans SC', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '75ch',
            color: '#1e293b',
            h1: { fontFamily: '"Space Grotesk", "Noto Sans SC", system-ui, sans-serif', fontWeight: '700', letterSpacing: '-0.02em' },
            h2: { fontFamily: '"Space Grotesk", "Noto Sans SC", system-ui, sans-serif', fontWeight: '600', letterSpacing: '-0.01em' },
            h3: { fontFamily: '"Space Grotesk", "Noto Sans SC", system-ui, sans-serif', fontWeight: '600' },
            a: { color: '#2563eb', textDecoration: 'underline', textUnderlineOffset: '3px' },
            'a:hover': { color: '#1d4ed8' },
          },
        },
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 0.5s ease both',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
