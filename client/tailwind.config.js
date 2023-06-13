/** @type {import('tailwindcss').Config} */
export default {
  content: ["./dist/*.html", "./src/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {
      transitionDuration: {
        DEFAULT: "300ms",
      },
    },
  },
  plugins: [],
};
