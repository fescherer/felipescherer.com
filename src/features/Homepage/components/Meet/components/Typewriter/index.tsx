'use client'

import TypewriterComponent from 'typewriter-effect'

export function Typewriter() {
  return (
    <TypewriterComponent
      options={{
        strings: ['Web Developer', 'Designer', 'Game Developer', 'Content Creator'],
        autoStart: true,
        loop: true,
        wrapperClassName: 'font-mono',
      }}
    />
  )
}
