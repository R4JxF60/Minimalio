module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sen: ["Sen", "sans-serif"],
      lato: ["Lato", "sans-serif"],
      merriweather: ['"Merriweather Sans"', "sans-serif"],
      calling: ["TheCalling", "serif"]
    },
    screens: {
      "sm": "640px",
      "md": "864px",
      "lg": "1024px",
      "xl": "1164px",
    },
    extends: {}
    
  },
  plugins: [],
}
