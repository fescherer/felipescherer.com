import plugin from 'tailwindcss/plugin'

module.exports = plugin(({ theme, addComponents }) => {
  addComponents(
    {
      '.btn': {
        'cursor': 'pointer',
        'user-select': 'none',
        'text-align': 'center',
        'padding': '0.5rem 1rem',
        'border-radius': '4px',
        'transition': 'all 0.2s ease',
        '&:hover': {
          filter: 'brightness(0.9)',
        },
      },
      '.btn-primary': {
        'background-color': theme('colors.brand.primary'),
        'color': theme('colors.brand.on.primary'),
      },
      '.btn-secondary': {
        'background-color': theme('colors.brand.secondary'),
        'color': theme('colors.brand.on.secondary'),
      },
    }
  )
})
