import clsx from 'clsx';
import { motion } from 'framer-motion';

function Bar({ height, scale, delay }: { height: string; scale: number; delay?: number }): JSX.Element {
  return (
    <motion.span
      className={clsx(height, 'w-0.5 bg-green')}
      animate={{ scaleY: [1.0, scale, 1.0], transformOrigin: 'bottom' }}
      transition={{ duration: 0.5, delay, ease: 'easeInOut', repeat: Infinity }}
    />
  );
}

export default function Bars(): JSX.Element {
  return (
    <div className="flex items-end space-x-0.5">
      <Bar height="h-3" scale={0.2} />
      <Bar height="h-2" scale={0.3} delay={0.1} />
      <Bar height="h-2.5" scale={0.1} delay={0.2} />
      <Bar height="h-2" scale={0.25} delay={0.3} />
    </div>
  );
}
