import plugin from 'tailwindcss/plugin'

module.exports = plugin(({ addComponents }) => {
  addComponents(
    {
      '.mockup-window': {
        'position': 'relative',
        'overflow': 'hidden',
        'overflow-x': 'hidden',
        'display': 'flex',
        'flex-direction': 'column',
        'padding-top': '1.25rem',
        '&:before': {
          'content': '""',
          'margin-bottom': '1rem',
          'display': 'block',
          'aspect-ratio': '1/1',
          'height': '.75rem',
          'flex-shrink': '0',
          'align-self': 'flex-start',
          'border-radius': '9999px',
          'opacity': '0.3',
          'box-shadow': '1.4em 0,2.8em 0,4.2em 0',
        },
      },
    }
  )
})
