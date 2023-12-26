import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  },
  daisyui: {
    themes: [{
      dashboard: {
        "primary": "#0B81EE",
        "secondary": "#FFE600",
        "accent": "#37cdbe",
        "neutral": "#3d4451",
        "base-100": "#ffffff",
      },
    }, "dark", "cupcake"],
  },
  plugins: [
    require("daisyui")
  ],
}
export default config
