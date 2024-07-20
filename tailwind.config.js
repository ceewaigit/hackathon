/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
        },
        smu: {
          DEFAULT: "hsl(var(--smu))",
        },
        boxShadow: {
          sm: 'var(--tw-shadow-sm)',
          DEFAULT: 'var(--tw-shadow)',
          md: 'var(--tw-shadow-md)',
          lg: 'var(--tw-shadow-lg)',
          xl: 'var(--tw-shadow-xl)',
          '2xl': 'var(--tw-shadow-2xl)',
          inner: 'var(--tw-shadow-inner)',
          none: 'var(--tw-shadow-none)',
          'glow': '0 0 15px 0 rgba(255, 255, 255, 0.1)',
          'glow-hover': '0 0 20px 0 rgba(255, 255, 255, 0.2)',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'infinite-scroll': 'infinite-scroll var(--animation-duration, 40s) linear infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-glow': {
          textShadow: '0 0 5px rgba(255, 255, 255, 0.1)',
        },
        '.bg-glass': {
          backgroundColor: 'rgba(42, 42, 42, 0.7)',
          backdropFilter: 'blur(10px)',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
