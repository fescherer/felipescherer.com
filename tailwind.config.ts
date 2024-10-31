import type { Config } from 'tailwindcss'
import { animation, backgroundImage, colors, fontFamily, fontSize, gradientColorStopPostiions, keyFrames } from './custom-tailwind/theme-tailwind'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/icons/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: colors,
    extend: {
      fontFamily: fontFamily,
      fontSize: fontSize as any,
      backgroundImage: backgroundImage,
      keyframes: keyFrames,
      animation: animation,
      gradientColorStopPositions: gradientColorStopPostiions,
    },
  },
  plugins: [...require('./custom-tailwind/tailwind-plugins/index')],
}
export default config
