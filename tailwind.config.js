/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        light: {
          primary: "#ffffff",
          secondary: "#ffffff",
          accent: "#2563eb",
          text: "#0f172a",
          textSecondary: "#334155",
          card: "#f1f5f9",
          border: "#e2e8f0",
        },
        // Dark mode colors
        dark: {
          primary: "#0f172a",
          secondary: "#1e293b",
          accent: "#60a5fa",
          text: "#f8fafc",
          textSecondary: "#cbd5e1",
          card: "#1e293b",
          border: "#334155",
        },
        highlight: "#06b6d4",
        success: "#10b981",
        warning: "#f59e0b",
        error: "#ef4444",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        display: ['Clash Display', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'wave': 'wave 2.5s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(to right bottom, rgba(59, 130, 246, 0.1), rgba(34, 211, 238, 0.1))',
      },
      boxShadow: {
        'glow': '0 0 30px -5px rgba(34, 211, 238, 0.25)',
        'glow-lg': '0 0 50px -12px rgba(34, 211, 238, 0.35)',
      },
    },
  },
  plugins: [],
}