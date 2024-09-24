import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/(post)/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/(post)/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
        firacode: ['var(--font-firacode)'],
      },
      typography: {
        css: {
          h2: {
            'scroll-margin': '100px',
          },
          h3: {
            'scroll-margin': '100px',
          },
          'code::before': { content: 'none' },
          'code::after': { content: 'none' },
          'li p': { margin: '0 !important' },
        },
      },
      screens: {
        xs: '576px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      },
      colors: {
        lightgray: '#f5f5f7',
        coolgray: '#86868b',
        primary: 'rgb(29,29,31)',
        linkblue: 'rgb(0,102,204)',
      },
      borderRadius: {
        '4xl': '100px'
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            'transform': 'translateY(-5%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            'transform': 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          }
        }
      },
      animation: {
        'bounce': 'bounce 1s ease-in-out 0.5s infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
