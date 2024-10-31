import plugin from 'tailwindcss/plugin'

module.exports = plugin(({ theme, addComponents }) => {
  addComponents(
    {
      '.link': {
        'color': theme('colors.brand.primary'),
        'transition': 'all 0.2s ease',
        '&:hover': {
          color: theme('colors.brand.hover.primary'),
        },
      },
    }
  )
})
