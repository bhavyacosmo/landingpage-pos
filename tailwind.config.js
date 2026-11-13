/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Produce POS Fresh Green Brand Palette
        "produce-green": "#10b981",
        "produce-green-dark": "#059669",
        "produce-green-hover": "#047857",
        "produce-green-light": "#ecfdf5",
        "produce-green-pill": "#d1fae5",
        "produce-green-pill-hover": "#a7f3d0",
        "produce-pine": "#064e3b",
        "produce-lime": "#9be05e",
        "produce-black": "#0f0f0f",
        "produce-video-black": "#0d0d0d",
        "produce-charcoal": "#0e0d14",
        "produce-offwhite": "#f4f3f1",
        "produce-gray-bold": "#a3a3a3",

        // Backward compatibility mappings
        "vori-purple": "#10b981",
        "vori-purple-hover": "#059669",
        "vori-purple-light": "#ecfdf5",
        "vori-purple-pill": "#d1fae5",
        "vori-purple-pill-hover": "#a7f3d0",
        "vori-lilac": "#ecfdf5",
        "vori-lime": "#9be05e",
        "vori-black": "#0f0f0f",
        "vori-video-black": "#0d0d0d",
        "vori-charcoal": "#0e0d14",
        "vori-offwhite": "#f4f3f1",
        "vori-gray-bold": "#a3a3a3",
      },
      fontFamily: {
        sans: ['"Rethink Sans"', "Arial", "system-ui", "-apple-system", "sans-serif"],
        serif: ['"STIX Two Text"', "Georgia", "serif"],
        mono: ['"Fragment Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        editorial: ['"STIX Two Text"', "Georgia", "serif"],
        "mono-telemetry": ['"Fragment Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      maxWidth: {
        vori: "80rem",
      },
      boxShadow: {
        "vori-card": "0 1px 2px rgba(13, 13, 13, 0.04), 0 8px 24px rgba(13, 13, 13, 0.06)",
        "vori-dropdown": "0 20px 50px -12px rgba(14, 13, 20, 0.16), 0 0 0 1px rgba(13, 13, 13, 0.06)",
        "vori-tab": "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
