/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./data/**/*.{js,jsx,ts,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        base: "#0A0A0A",
        surface: "#121212",
        accent: "#1DB954",
        glow: "#2EF57A",
        textPrimary: "#F5F5F5",
        textSecondary: "#A3A3A3"
      },
      boxShadow: {
        glow: "0 0 30px rgba(46, 245, 122, 0.3)",
        soft: "0 15px 40px rgba(0, 0, 0, 0.45)"
      },
      backgroundImage: {
        "radial-green":
          "radial-gradient(circle at 20% 20%, rgba(46,245,122,0.17), transparent 55%), radial-gradient(circle at 80% 10%, rgba(29,185,84,0.14), transparent 40%), radial-gradient(circle at 50% 100%, rgba(46,245,122,0.08), transparent 60%)"
      },
      animation: {
        pulseSoft: "pulseSoft 4s ease-in-out infinite",
        drift: "drift 14s ease-in-out infinite alternate",
        ring: "ring 8s linear infinite",
        shimmer: "shimmer 3s linear infinite"
      },
      keyframes: {
        pulseSoft: {
          "0%, 100%": { transform: "scale(1)", opacity: 0.95 },
          "50%": { transform: "scale(1.08)", opacity: 1 }
        },
        drift: {
          "0%": { transform: "translate3d(-4%, -2%, 0)" },
          "100%": { transform: "translate3d(4%, 2%, 0)" }
        },
        ring: {
          "0%": { transform: "scale(0.9)", opacity: 0.7 },
          "100%": { transform: "scale(1.2)", opacity: 0.15 }
        },
        shimmer: {
          "0%": { backgroundPosition: "-250px 0" },
          "100%": { backgroundPosition: "250px 0" }
        }
      }
    }
  },
  plugins: []
};
