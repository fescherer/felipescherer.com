import React from 'react'
import * as motion from 'motion/react-client'

export function YMotion({ children, ...props }: any) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 100 }}
      transition={{
        duration: 0.2,
        delay: 0.5,
        type: 'spring',
        stiffness: 100,
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
