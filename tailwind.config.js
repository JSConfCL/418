const plugin = require("tailwindcss/plugin");
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-text': 'gradient-text 5s ease infinite',
        'gradient-svg': 'gradient-svg 5s ease infinite'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-roboto)", ...fontFamily.sans],
        heading: ["var(--font-inter)", ...fontFamily.sans],
      },
      keyframes: {
        'gradient-text': {
          '0%, 100%': {
              'background-size':'200% 200%',
              'background-position': 'left center'
          },
          '50%': {
              'background-size':'200% 200%',
              'background-position': 'right center'
          }
        },
        'gradient-svg': {
          '0%, 100%': {
            'color': 'var(--tw-gradient-from)'
          },
          '50%': {
            'color': 'var(--tw-gradient-to)'
          }
        }
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 3px 6px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
