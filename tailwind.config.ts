import type { Config } from 'tailwindcss'
const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/icons/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'layer': {
        '0': 'var(--layer-0)',
        '0-5': 'var(--layer-0-5)',
        '1': 'var(--layer-1)',
        '2': 'var(--layer-2)',
      },
      'on-layer-0': {
        l1: 'var(--on-layer-0-l1)',
        l2: 'var(--on-layer-0-l2)',
        l3: 'var(--on-layer-0-l3)',
      },
      'on-layer-1': {
        l1: 'var(--on-layer-1-l1)',
        l2: 'var(--on-layer-1-l2)',
      },
      'on-layer-2': {
        l1: 'var(--on-layer-2-l1)',
        l2: 'var(--on-layer-2-l2)',
      },
      'brand': {
        primary: 'var(--brand-primary)',
        secondary: 'var(--brand-secondary)',
        on: {
          primary: 'var(--brand-on-primary)',
          secondary: 'var(--brand-on-secondary)',
        },
        hover: {
          primary: 'var(--brand-hover-primary)',
          secondary: 'var(--brand-hover-secondary)',
        },
      },
      'default': {
        yellow: '#bbb80e',
        red: '#aa0000',
      },
      'transparent': 'transparent',
    },
    extend: {
      fontFamily: {
        title: 'var(--font-title)',
        text: 'var(--font-text)',
      },
      // TODO Rework fonts- now in most places i am using sm as base
      fontSize: {
        '3xs': ['0.5rem', '1'],
        '2xs': ['0.625rem', '1'],
        'xs': ['0.75rem', '1'],
        'sm': ['0.875rem', '1.25'],
        'base': ['1rem', '1.5'],
        'lg': ['1.125rem', '1.5'],
        'xl': ['1.25rem', '1.5'],
        '2xl': ['1.5rem', '1.5'],
        '3xl': ['1.875rem', '1.5'],
        '4xl': ['2.25rem', '1.5'],
        '5xl': ['3rem', '1.5'],
        '6xl': ['3.75rem', '1.5'],
        '7xl': ['4.5rem', '1.5'],
      },
      backgroundImage: {
        profile: 'url(/felipe-scherer/aboutme/me.webp)',
      },
      keyframes: {
        twinkleKeyFrame: {
          '25%': { opacity: '0' },
        },
        cometKeyframe: {
          '0%, 40%': {
            transform: 'translateX(0)',
            opacity: '0',
          },
          '50%': {
            opacity: '1',
          },
          '60%, 100%': {
            transform: 'translateX(-100vmax)',
            opacity: '0',
          },
        },
        slideUpAndFade: {
          from: { opacity: '0', transform: 'translateY(2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: '0', transform: 'translateX(-2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: '0', transform: 'translateX(2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        spinPlanetKey: {
          '0%': {
            transform: 'translate(-50%, -50%) rotate(0deg)',
          },
          '100%': {
            transform: 'translate(-50%, -50%) rotate(360deg)',
          },
        },
      },
      animation: {
        comet: 'cometKeyframe 10s linear infinite',
        star: 'twinkleKeyFrame 4s ease-in-out infinite',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        spinPlanet: 'spinPlanetKey linear infinite',
      },
      gradientColorStopPositions: {
        '99%': '99%',
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme, addUtilities }: any) => {
      matchUtilities(
        {
          'animation-delay': (value: any) => {
            return {
              'animation-delay': value,
            }
          },
        },
        {
          values: theme('transitionDelay'),
        }
      ),
      addUtilities({
        '.animation-paused': {
          'animation-play-state': 'paused',
        },
        '.animation-fill-forwards': {
          'animation-fill-mode': 'forwards',
        },
      })
    }),
  ],
}
export default config
