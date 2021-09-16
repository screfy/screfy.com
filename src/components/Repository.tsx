import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, ExternalLink, Star } from 'react-feather'
import Heading from './Heading'

interface Props {
  name: string
  description: string
  stars: number
  url: string
}

export default function Repository({ name, description, stars, url }: Props): JSX.Element {
  const [isOpen, toggle] = useState(false)
  const siStars = Math.abs(stars) > 999 ? `${(Math.abs(stars) / 1000).toFixed(1)}k` : Math.abs(stars)

  return (
    <motion.div
      animate={{ height: isOpen ? 'auto' : '42px' }}
      className="relative overflow-hidden flex flex-col border border-secondary hover:bg-secondary rounded-lg transition-colors"
    >
      <button className="flex items-center justify-between px-4 py-2" onClick={() => toggle(!isOpen)}>
        <Heading as="h3" text={name} />
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown className="text-primary" size="18" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div className="h-full flex" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="w-full flex flex-col space-y-3 px-4 py-2">
              <p className="text-sm flex-1">{description}</p>
              <div className="flex justify-between">
                <div className="flex items-center space-x-1">
                  <Star className="text-danger" size="14" />
                  <span className="text-xs">{siStars}</span>
                </div>

                <a
                  className="px-2 py-1 flex items-center space-x-1 bg-[#161616] rounded-lg"
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink size="12" />
                  <span className="text-xs">Open</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
