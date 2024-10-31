import plugin from 'tailwindcss/plugin'

module.exports = plugin(({ addBase }) => {
  addBase(
    {
      // 'input:not([type=button]):not([type=reset]):not([type=submit]):not([type=image]):focus,textarea:focus, button:focus-visible, a:focus-visible': {
      //   'outline': '0',
      //   'border-color': 'transparent',
      //   '@apply ring-2 ring-brand-hover-primary': {},
      // },
      // 'input:focus, textarea:focus': {
      //   'border-color': 'transparent',
      // },
      // 'input[type=button]:active:not(:disabled), input[type=reset]:active:not(:disabled), input[type=submit]:active:not(:disabled), input[type=image]:active:not(:disabled), button:active:not(:disabled)': {
      //   'outline': 'none',
      //   'border-color': 'transparent',
      //   '@apply ring-2 ring-brand-hover-primary': {},
      // },
    },
  )
})
