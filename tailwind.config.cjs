/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      ss: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        // darkBg: "hsl(232 89% 7%)",
        darkBg: "hsl(211.2, 100%, 15.1%)",
        accent: "hsl(207 44% 49%)",
        whiteTxt: "hsl(226 70% 88%)",
        tint: "hsl(207 44% 49% / 0.1)",
        zinc: {
          50: "#ffffff",
          100: "#efefef",
          200: "#dcdcdc",
          300: "#bdbdbd",
          400: "#989898",
          500: "#7c7c7c",
          600: "#656565",
          700: "#525252",
          800: "#464646",
          900: "#111111",
        },
      },
    },
  },
  plugins: [],
};
