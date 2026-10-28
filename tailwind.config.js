/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#120205',           // Deep Kolkata vermilion-dark
        cardBg: '#1F050A',           // Deep Lal-Mati / Terracotta dark card
        cardHover: '#2C080E',
        kolkataRed: '#DC2626',       // Vibrant Kolkata Sindoor / Durga Crimson
        terracotta: '#D94826',       // Bankura Terracotta
        taxiYellow: '#FFC800',       // Kolkata Ambassador Taxi Yellow
        pujaWhite: '#FFFDF9',        // Kashi / Shiuli flower warm white
        creamText: '#FBF5ED',        // Warm parchment white
        cyanNeon: '#19D3F3',
        yellowNeon: '#FFE600',
        pinkNeon: '#FF2E93',
        limeNeon: '#7CFF3A',
        purpleNeon: '#9B5CFF',
      },
      fontFamily: {
        // Exact font classes from convergence1.tech
        sans: ['"Poppins"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Bebas Neue"', '"Poppins"', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
        round: ['"Poppins"', 'sans-serif'],
        comic: ['"Comic Neue"', '"Comic Sans MS"', 'sans-serif'],
        bangers: ['"Bangers"', 'cursive', 'sans-serif'],
        graffiti: ['"Rubik Wet Paint"', 'cursive'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'comic': '4px 4px 0px #000000',
        'comic-lg': '6px 6px 0px #000000',
        'comic-yellow': '5px 5px 0px #FFE600',
        'comic-cyan': '5px 5px 0px #19D3F3',
        'comic-pink': '5px 5px 0px #FF2E93',
        'comic-lime': '5px 5px 0px #7CFF3A',
        'glow-cyan': '0 0 25px rgba(25, 211, 243, 0.4)',
        'glow-yellow': '0 0 25px rgba(255, 230, 0, 0.4)',
        'glow-pink': '0 0 25px rgba(255, 46, 147, 0.4)',
      }
    },
  },
  plugins: [],
}
