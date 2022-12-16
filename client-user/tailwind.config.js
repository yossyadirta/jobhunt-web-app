/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('./images/banner.png')",
        hire: "url('./images/hire.png')",
        detailBanner: "url('./images/detail-banner.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
