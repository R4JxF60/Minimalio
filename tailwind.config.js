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
    extend: {
      colors: {
        "light-blue": "#C6D4E1",
        "mid-blue": "#B2C5DA",
        "light-dark": "#262D35",
        "mid-black": "#1e1f26",
        "light-gray": "#f8f8fa",
        "mid-gray": "#f4f4f8",
      }
    }
    
  },
  plugins: [],
}
