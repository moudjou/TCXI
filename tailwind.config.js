/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient( #6F6CDD 0%, #403CCC 50%, #242281 100%)',
      },
    },
    
  },
  plugins: [],
};
