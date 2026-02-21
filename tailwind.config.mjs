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
        display: ['Inter', 'Noto Sans SC', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '75ch',
            color: '#1e293b',
            h1: { fontWeight: '700', letterSpacing: '-0.02em' },
            h2: { fontWeight: '600', letterSpacing: '-0.01em' },
            h3: { fontWeight: '600' },
            a: { color: '#2563eb', textDecoration: 'underline', textUnderlineOffset: '3px' },
            'a:hover': { color: '#1d4ed8' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
