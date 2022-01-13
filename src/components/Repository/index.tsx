import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ExternalLink, Star } from 'react-feather';
import { RepositoryData } from '../../types';

export default function Repository({ name, description, stars, url }: RepositoryData) {
  const [isOpen, setOpen] = useState(false);
  const siStars = Math.abs(stars) > 999 ? `${(Math.abs(stars) / 1000).toFixed(1)}k` : Math.abs(stars);

  return (
    <motion.div
      animate={{ height: isOpen ? 'auto' : '42px' }}
      className="relative overflow-hidden flex flex-col border border-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
    >
      <button className="flex items-center justify-between px-3.5 py-2 text-gray-50" onClick={() => setOpen(!isOpen)}>
        <h4 className="font-semibold">{name}</h4>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown className="text-primary" size="18" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div className="h-full flex" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="w-full flex flex-col space-y-3 px-4 py-2">
              <p className="text-sm flex-1">{description ?? 'Description not provided.'}</p>
              <div className="flex justify-between">
                <div className="flex items-center space-x-1">
                  <Star className="text-orange" size="14" />
                  <span className="font-medium text-xs text-gray-50">{siStars}</span>
                </div>

                <a
                  className="px-2 py-1 flex items-center space-x-1.5 bg-gray-200 text-gray-50 rounded-lg hover:ring-2 ring-gray-100 transition-all"
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink size="12" />
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
