import plugin from 'tailwindcss/plugin'

module.exports = plugin(({ addUtilities, matchUtilities, theme }) => {
  addUtilities({
    '.animation-paused': {
      'animation-play-state': 'paused',
    },
    '.animation-fill-forwards': {
      'animation-fill-mode': 'forwards',
    },
  }
  ),
  matchUtilities(
    {
      'animation-delay': (value) => {
        return {
          'animation-delay': value,
        }
      },
    },
    {
      values: theme('transitionDelay'),
    }
  )
})
