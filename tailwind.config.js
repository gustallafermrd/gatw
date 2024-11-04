/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange-main': '#ee6a1a',
        'dark-orange': '#f87537',
        'grey-bg': '#f8fafd',
        'purple-box': '#d537f8',
        'blue-box': '#37baf8',
        'green-box': '#4deb28',
        'burgundy': '#8e3600',
        'title-gradient': 'linear-gradient(90deg, rgba(238,106,26,1) 30%, rgba(142,54,0,1) 100%)'
      },
    },
  },
  plugins: [],
};
