import type {Config} from "tailwindcss";
import colors from 'tailwindcss/colors';
import { createVariableColors, variableColorsPlugin } from 'tailwindcss-variable-colors'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: createVariableColors(colors),
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        in: 'show 0.5s ease-in-out',
        out: 'hide 0.5s ease-in-out forwards',
      },
      keyframes: {
        "dialog-show": {
          '0%': { transform: "scale(1)", opacity: '0' },
          '1%': { transform: "scale(0)" },
          '100%': { transform: "scale(1)", opacity: '1' }
        },
        "dialog-hide": {
          '0%': { transform: "scale(1)", opacity: '1' },
          '1%': { transform: "scale(0)", opacity: '0' },
        },
        'show': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'hide': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        }
      }
    },
  },
  plugins: [variableColorsPlugin(colors)],
};
export default config;
