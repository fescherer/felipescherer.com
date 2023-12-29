import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'layer': {
        0: 'var(--layer-0)',
        1: 'var(--layer-1)',
        2: 'var(--layer-2)',
      },
      'on-layer-0': {
        l1: 'var(--on-layer-0-l1)',
        l2: 'var(--on-layer-0-l2)',
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
      'transparent': 'transparent',
    },
    fontFamily: {
      title: 'var(--font-title)',
      text: 'var(--font-text)',
    },
    extend: {
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
        'hero-pattern': 'url(\'https://github.com/fescherer.png\')',
      },
    },
  },
  plugins: [],
}
export default config
