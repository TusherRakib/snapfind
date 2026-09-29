/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        darkbg: "#1c2127",    
        surface: "#2c333a",   
        brandGreen: "#4ADE80",
        textMuted: "#9ca3af"  
      }
    },
  },
  plugins: [],
}