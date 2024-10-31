import plugin from 'tailwindcss/plugin'

module.exports = plugin(({ theme, addComponents }) => {
  addComponents(
    {
      '.p': {
        marginTop: theme('spacing.2'),
        marginBottom: theme('spacing.2'),
        lineHeight: '1.375',
        textIndent: theme('spacing.4'),
      },
    }
  )
})
