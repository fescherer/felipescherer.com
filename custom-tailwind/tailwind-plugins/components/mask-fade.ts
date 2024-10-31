import plugin from 'tailwindcss/plugin'

module.exports = plugin(({ addComponents }) => {
  addComponents(
    {
      '.maskFade': {
        'content': '',
        'position': 'absolute',
        'inset': '0',
        'z-index': '-1',
        'mask': 'linear-gradient(to top, transparent, black 30%)',
        'backdrop-filter': 'saturate(100%) blur(1px)',
      },

    }
  )
})
