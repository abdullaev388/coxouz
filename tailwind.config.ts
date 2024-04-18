import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        dentistRoom: "url(@/assets/img/dentist_room.png/)"
      }
    }
  },
  plugins: [],
} satisfies Config

