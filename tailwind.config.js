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
          primary: "#1A202C",
          secondary: "#2D3748",
          accent: "#E53E3E",
          neutral: "#F7FAFC",
          "base-100": "#2D3748",
        },
      },
      "cupcake",
    ],
  },
};
