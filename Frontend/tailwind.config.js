/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'green_dark':'#53B781',
        'green_light':'#53B7813320',
        'blue_dark':'#1E9AF1',
        'gray_light':'#F8F8F8',
        'cancel_bg_light': 'rgba(236, 240, 255, 1)',
        'cancel_text' : 'rgba(207, 111, 128, 1)',
        'admin_form': 'rgba(255, 255, 255, 1)',
        'doc_black' : 'rgba(37, 40, 43, 1)',
        'button_text' : 'rgba(45, 91, 255, 1)',
        'disable_bg' : 'rgba(239, 239, 239, 1)'
      },
      boxShadow:{
        'dark_shadow': '0px 1px 24.9px 0px rgba(0, 0, 0, 0.07)'
      },
    },
  },
  plugins: [],
}