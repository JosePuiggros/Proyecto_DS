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
        background: "var(--background)",
        foreground: "var(--foreground)",
        mint: '#A8D5BA', // Verde menta
        cream: '#F6F6EB', // Blanco crema
        beige: '#E8C7A1', // Beige cálido
        earth: '#7D5A50', // Marrón tierra
        orange: '#F4A259', // Naranja
      },
    },
  },
  plugins: [],
};
