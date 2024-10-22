'use client'

import TypewriterComponent from 'typewriter-effect'

type TypeWriterProps = {
  items: string[]
}

export function Typewriter({ items }: TypeWriterProps) {
  return (
    <TypewriterComponent
      options={{
        strings: items,
        autoStart: true,
        loop: true,
        wrapperClassName: 'font-mono',
      }}
    />
  )
}
