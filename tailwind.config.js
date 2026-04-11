/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-hero': '#2347b8',
        'blue-dark': '#1e3a8a',
        'blue-accent': '#3358d4',
        'blue-light': '#eef1ff',
        'page-bg': '#f0f2f8',
        'card-bg': '#ffffff',
        border: '#e8ecf4',
        'text-primary': '#1e293b',
        'text-secondary': '#64748b',
        'text-muted': '#94a3b8',
        'green-positive': '#16a34a',
        'green-chart': '#4ade80',
      },
      fontFamily: {
        sans: ['ui-rounded', 'SF Pro Rounded', 'Nunito', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
