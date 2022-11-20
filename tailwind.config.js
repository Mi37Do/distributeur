/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0A62E6",
          secondary: "#2B6ED1",
          accent: "#2B6ED1",
          neutral: "#3E75C7",
          'danger': '#DD260A',
          'base-content':'#9ca3af',
          "base-100": "#ffffff",
        },
      },
    ],
  },
}
