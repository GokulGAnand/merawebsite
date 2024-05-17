import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import flowbite from 'flowbite-react/tailwind';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-dm-sans)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          // Customize it on globals.css :root
          50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
          950: 'rgb(var(--tw-color-primary-950) / <alpha-value>)',
        },
        dark: '#222222',
        headerLinkColor: '#2D2D2D',
        bannerChipColor: '#E8F0F8',
        bannerChipText: '#2A71BD',
        whiteButtonText: '#3970B7',
        stripBlueColor: '#F4FCFF',
        subHeadingColor: '#64676C',
        serviceCardBorder: '#E5F4F2',
        serviceCardShadowColor: 'rgba(51, 102, 255, 0.05)',
        ctaBannerBlue: '#2B6FB7',
        dotColor: 'rgba(57, 112, 183, 0.23)',
        accordionBody: 'rgba(242, 242, 242, 0.73)',
        accordionBorder: 'rgba(51, 48, 48, 0.08)',
        footerColor: '#072646',
        linkColor: '#53BDE5',
        serviceText: '#191825',
        stepsText: '#0B2C4D',
        copyRightText: '#E0E0E0',
        mobileSidebarBorder: 'rgba(0, 0, 0, 0.08);',
        callButtonBg: 'rgba(13, 61, 229, 0.1)',
        partnerDividerColor: '#EDEDED',
        aboutDividerColor: '#D9D9D9',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui'),
    flowbite.plugin(),
  ],
} satisfies Config;
