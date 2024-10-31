import plugin from 'tailwindcss/plugin'

module.exports = plugin(({ theme, addComponents }) => {
  addComponents(
    {
      '.design-link': {
        'color': theme('colors.brand.primary'),
        'transition-property': theme('transitionProperty.all'),
        'transition-timing-function': theme('transitionTimingFunction.in-out'),
        'transition-duration': theme('transitionDuration.150'),
        '&:hover': {
          'color': theme('colors.brand.hover.primary'),
          'text-decoration-line': 'underline',
        },
      },
    }
  )
})
