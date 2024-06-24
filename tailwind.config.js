/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        hofdark: {
          primary: "#151A22",
          secondary: "#5F7285",
          accent: "#262D3B",
          neutral: "#7A7A7C",
          "base-100": "#FFFFFF",
        },
      },
      "cupcake",
    ],
  },
};
