import plugin from 'tailwindcss/plugin'

module.exports = plugin(({ theme, addComponents }) => {
  addComponents(
    {
      '.prose': {
        h2: {
          'color': theme('colors.on-layer-2.l1'),
          'font-size': theme('fontSize.2xl'),
          'font-family': theme('fontFamily.title'),
          'margin-bottom': theme('margin.2'),
        },
        p: {
          'margin-bottom': theme('margin.4'),
          'text-align': 'justify',
        },
        a: {
          'color': theme('colors.brand.primary'),
          'transition-property': theme('transitionProperty.all'),
          'transition-timing-function': theme('transitionTimingFunction.in-out'),
          'transition-duration': theme('transitionDuration.150'),
          '&:hover': {
            'color': theme('colors.brand.hover.primary'),
            'text-decoration-line': 'underline',
          },
        },
        ul: {
          'list-style-type': 'disc',
          'margin-left': theme('margin.4'),
          'li::marker': {
            color: theme('colors.brand.primary'),
          },
        },
        ol: {
          'list-style-type': 'decimal',
          'margin-left': theme('margin.4'),
          '&::marker': {
            color: theme('colors.brand.primary'),
          },
        },
        cite: {
          'font-style': 'italic',
        },
        i: {
          'font-style': 'italic',
        },
        em: {
          'font-style': 'italic',
        },
        strong: {
          'font-weight': theme('fontWeight.bold'),
        },
        img: {
          'margin': 'auto',
          'max-height': '600px',
          'padding': theme('padding.4'),
        },
      },
    }
  )
})
