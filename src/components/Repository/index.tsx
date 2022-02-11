import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ExternalLink, Star } from 'react-feather';
import { RepositoryData } from '../../types';

export default function Repository({
  name,
  description,
  stars,
  url
}: RepositoryData) {
  const [isOpen, setOpen] = useState(false);
  const siStars =
    Math.abs(stars) > 999
      ? `${(Math.abs(stars) / 1000).toFixed(1)}k`
      : Math.abs(stars);

  return (
    <motion.div
      animate={{ height: isOpen ? 'auto' : '42px' }}
      className="relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-800"
    >
      <button
        className="flex items-center justify-between px-3.5 py-2 text-gray-600 dark:text-gray-100"
        onClick={() => setOpen(!isOpen)}
      >
        <h4 className="font-semibold">{name}</h4>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex w-full flex-col space-y-3 px-4 py-2">
              <p className="flex-1 text-sm">
                {description ?? 'Description not provided.'}
              </p>
              <div className="flex justify-between">
                <div className="flex items-center space-x-1">
                  <Star className="text-orange" size={14} />
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-100">
                    {siStars}
                  </span>
                </div>

                <a
                  className="flex items-center space-x-1.5 rounded-lg bg-gray-100 px-2 py-1 text-gray-800 ring-gray-200 transition-all hover:ring-2 dark:bg-gray-600 dark:text-gray-100 dark:ring-gray-300"
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink size={12} />
                  <span className="text-xs">View</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
