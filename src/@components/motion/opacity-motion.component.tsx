import React from 'react'
import * as motion from 'motion/react-client'

export function OpacityMotion({ children, ...props }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.4,
        scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
