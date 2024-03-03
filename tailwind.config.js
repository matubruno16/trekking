/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
          "animation": {
            shimmer: "shimmer 2s linear infinite"
          },
          "keyframes": {
            shimmer: {
              from: {
                "backgroundPosition": "0 0"
              },
              to: {
                "backgroundPosition": "-200% 0"
              }
            }
          },
          backgroundImage: {
            fitzRoy: "url('/laguna-de-los-tres.webp')",
            peritomoreno: "url('/peritomoreno.webp')",
            humahuaca: "url('/quebrada-de-humahuca.webp')",
            lagunaNegra: "url('/lagunaNegra.webp')",
            tierraDelFuego: "url('/sendero-tiera-del-fuego.webp')",
          }
        },
      
  },
  plugins: [],
}