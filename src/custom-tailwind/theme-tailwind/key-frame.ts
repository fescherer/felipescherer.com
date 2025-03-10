export const keyFrames = {
  twinkleKeyFrame: {
    '25%': { opacity: '0' },
  },
  cometKeyframe: {
    '0%, 40%': {
      transform: 'translateX(0)',
      opacity: '0',
    },
    '50%': {
      opacity: '1',
    },
    '60%, 100%': {
      transform: 'translateX(-100vmax)',
      opacity: '0',
    },
  },
  contentShow: {
    from: {
      opacity: '0',
      transform: 'translate(-50%, -48%) scale(0.96)',
    },
    to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
  },
  slideUpAndFade: {
    from: { opacity: '0', transform: 'translateY(2px)' },
    to: { opacity: '1', transform: 'translateY(0)' },
  },
  slideRightAndFade: {
    from: { opacity: '0', transform: 'translateX(-2px)' },
    to: { opacity: '1', transform: 'translateX(0)' },
  },
  slideDownAndFade: {
    from: { opacity: '0', transform: 'translateY(-2px)' },
    to: { opacity: '1', transform: 'translateY(0)' },
  },
  slideLeftAndFade: {
    from: { opacity: '0', transform: 'translateX(2px)' },
    to: { opacity: '1', transform: 'translateX(0)' },
  },
  spinPlanetKey: {
    '0%': {
      transform: 'translate(-50%, -50%) rotate(0deg)',
    },
    '100%': {
      transform: 'translate(-50%, -50%) rotate(360deg)',
    },
  },
}
