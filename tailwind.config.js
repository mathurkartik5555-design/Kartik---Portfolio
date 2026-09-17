/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        finance: {
          base: '#171A3A',       // Ink Indigo
          petrol: '#123B46',     // Deep Petrol
          navy: '#20365F',       // Secondary Navy
          teal: '#397C78',       // Mineral Teal
          jade: '#65B89B',       // Jade Accent (positive / active signals)
          brass: '#C5A46D',      // Champagne Brass (restrained luxury accent)
          copper: '#C47C68',     // Copper Risk Accent (risk labels)
          mist: '#DCE6EA',       // Warm Mist Text
          lavender: '#B7B9D6',   // Muted Lavender Text
          surface: '#1A2346',    // Raised surface
          surface2: '#162F44',   // Tinted petrol surface
          card: 'rgba(23, 26, 58, 0.75)',
          border: 'rgba(57, 124, 120, 0.25)',
          borderGlow: 'rgba(101, 184, 155, 0.4)',
        }
      },
      fontFamily: {
        display: ['Manrope', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Source Serif 4', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'glow-teal': '0 0 25px -5px rgba(57, 124, 120, 0.3)',
        'glow-jade': '0 0 30px -5px rgba(101, 184, 155, 0.35)',
        'glow-brass': '0 0 25px -5px rgba(197, 164, 109, 0.3)',
        'institutional': '0 20px 40px -15px rgba(10, 14, 35, 0.6), 0 0 0 1px rgba(57, 124, 120, 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'institutional-mesh': 'radial-gradient(at 20% 20%, rgba(18, 59, 70, 0.55) 0px, transparent 50%), radial-gradient(at 80% 80%, rgba(32, 54, 95, 0.45) 0px, transparent 50%), radial-gradient(at 50% 50%, rgba(23, 26, 58, 0.9) 0px, #171A3A 100%)',
      }
    },
  },
  plugins: [],
}
