/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pine-deep": "#032517",
        "pine-dark": "#073220",
        "pine-surface": "#0f3d28",
        "emerald-accent": "#059669",
        "emerald-bright": "#10b981",
        "emerald-glow": "#00f59b",
        "emerald-soft": "#ecfdf5",
        "emerald-tint": "#f0fdf4",
        "amber-accent": "#d97706",
        "amber-soft": "#fef3c7",
        "surface-warm": "#fbfbf8",
        "surface-card": "#ffffff",
        "border-hairline": "#e2e8f0",
        "border-warm": "#e5e2d9",
        "text-main": "#0b1210",
        "text-muted": "#475569",
        "text-subtle": "#64748b"
      },
      fontFamily: {
        "editorial": ["Playfair Display", "Georgia", "serif"],
        "sans": ["Plus Jakarta Sans", "system-ui", "-apple-system", "sans-serif"],
        "mono-telemetry": ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"]
      },
      boxShadow: {
        "subtle": "0 2px 10px rgba(3, 37, 23, 0.04)",
        "elevated": "0 20px 45px -15px rgba(3, 37, 23, 0.08), 0 0 0 1px rgba(226, 232, 240, 0.8)",
        "glow": "0 0 35px -5px rgba(16, 185, 129, 0.25)",
        "device": "0 30px 70px -15px rgba(2, 44, 34, 0.2), 0 10px 25px -5px rgba(15, 23, 42, 0.08)"
      }
    },
  },
  plugins: [],
};
