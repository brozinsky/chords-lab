/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      // padding: {
      //   DEFAULT: "1rem",
      //   sm: "2rem",
      //   lg: "4rem",
      //   xl: "5rem",
      //   "2xl": "6rem",
      // },
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1464px",
      },
    },
    extend: {
      colors: {
        primary: {
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
          800: "var(--color-primary-800)",
          900: "var(--color-primary-900)",
        },
        emerald: {
          100: "var(--color-emerald-100)",
          200: "var(--color-emerald-200)",
          300: "var(--color-emerald-300)",
          400: "var(--color-emerald-400)",
          500: "var(--color-emerald-500)",
          600: "var(--color-emerald-600)",
          700: "var(--color-emerald-700)",
          800: "var(--color-emerald-800)",
          900: "var(--color-emerald-900)",
        },
        neutral: {
          50: "var(--color-neutral-50)",
          100: "var(--color-neutral-100)",
          200: "var(--color-neutral-200)",
          300: "var(--color-neutral-300)",
          400: "var(--color-neutral-400)",
          500: "var(--color-neutral-500)",
          600: "var(--color-neutral-600)",
          700: "var(--color-neutral-700)",
          800: "var(--color-neutral-800)",
          900: "var(--color-neutral-900)",
        },
        text: {
          100: "var(--color-text-100)",
          300: "var(--color-text-300)",
          500: "var(--color-text-500)",
          900: "var(--color-text-900)",
        },
        "dark-blue": "var(--color-dark-blue)",
        green: {
          500: "var(--color-green-500)",
          dark: "var(--color-green-dark)",
        },
      },
    },
  },
  plugins: [],
};
