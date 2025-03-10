import plugin from 'tailwindcss/plugin'

module.exports = plugin(({ addComponents }) => {
  addComponents(
    {
      '.vertical-ellipsis': {
        'display': '-webkit-box',
        '-webkit-line-clamp': '4',
        '-webkit-box-orient': 'vertical',
        'overflow': 'hidden',
        'text-overflow': 'ellipsis',
      },
    }
  )
})
