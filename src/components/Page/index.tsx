import { motion } from 'framer-motion'
import { ReactChild } from 'react'

interface Props {
  children: ReactChild | ReactChild[]
}

export default function Page({ children }: Props): JSX.Element {
  return (
    <motion.div
      className="flex flex-col space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'tween', ease: 'anticipate', duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
