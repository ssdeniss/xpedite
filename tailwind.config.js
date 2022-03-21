module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {

    },
    colors: {
      "black": "#1E1E1E",
      "black-lite": "#0F0F0F",
      "purple": " bg-clip-text bg-gradient-to-br from-pink-400 to-red-600",
      "grey": "#616164",
      "grey-ligh": "#716E6E",
      "white": "#ffffff",
      "to": "#0153FF",
      "from": "#7F38DB",
      "transparent": "transparent",
    },
    fontSize: {
      h1: ["4.5rem", "1.19"],     //? 72px
      h2: ["2.25rem", "1.5"],     //? 36px
      h3: ["2rem", "1.5"],        //? 32px
      h4: ["1.5rem", "1.5"],      //? 24px
      h5: ["1.25rem", "1.5"],     //? 20px
      pdk: ["1.125rem", "1.5"],   //? 18px
      bt: ["0.875rem", "1.5"],    //? 14px
      h1mb: ["1.75rem", "1.5"],   //? 28px
      h2mb: ["1.5rem", "1.5"],    //? 24px
      h3mb: ["1.5rem", "1.5"],    //? 24px
      h4mb: ["1.25rem", "1.5"],   //? 20px
      h5mb: ["1", "1.5"],         //? 16px
      pmb: ["1", "1.5"],          //? 16px

    },
    fontWeight: {
      bold: "700",
      normal: "400"
    },
  },
  plugins: [],
}
