/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      boxShadow: {
        'neon': '0 0 5px #FF0080, 0 0 10px #FF0080, 0 0 15px #FF0080, 0 0 20px #FF0080',
        'neon-lg': '0 0 10px #FF0080, 0 0 20px #FF0080, 0 0 30px #FF0080, 0 0 40px #FF0080',
        'neon-xl': '0 0 15px #FF0080, 0 0 30px #FF0080, 0 0 45px #FF0080, 0 0 60px #FF0080',
        'neon-inner': 'inset 0 0 10px #FF0080, inset 0 0 20px #FF0080',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};