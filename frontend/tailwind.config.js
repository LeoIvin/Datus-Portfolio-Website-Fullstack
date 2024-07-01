/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
        'ibm-plex-sans': ['IBM Plex Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'image-portfolio': "url('/image-portfolio.jpg')",
        'whatsapp': "url('/WhatsApp Image 2024-05-21 at 22.02.33_b1cface6.jpg')",
        'art1': "url('/6278a444665242bf69132eff_sebastian-svenson-LpbyDENbQQg-unsplash.webp')",
        'art2': "url('/6278a4453595ee0571accd5b_milad-fakurian-PpgY7sjpf_0-unsplash.webp')"
      }, 
      colors: {
        'work-tg': '#161616',
      },
    },
  },
  plugins: [],
};
