import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Image, { ImageProps } from 'next/image';
import { ReactChild, useRef, useState } from 'react';
import { Check, Copy } from 'react-feather';
import { useMounted } from '../../hooks/useMounted';
import Bars from '../Spotify/Bars';

interface MdxImageProps extends ImageProps {
  rounded?: boolean;
}

function MdxImage({ rounded = true, alt, ...props }: MdxImageProps) {
  return (
    <Image
      className={rounded ? 'rounded-lg' : undefined}
      alt={alt}
      title={alt}
      {...props}
    />
  );
}

function MdxImageWithTheme({
  light,
  dark,
  ...props
}: MdxImageProps & { light: string; dark: string }) {
  const mounted = useMounted();
  const { resolvedTheme } = useTheme();

  if (!mounted) {
    return null;
  }

  // After mounting, we have access to the theme:
  return <MdxImage {...props} src={resolvedTheme === 'dark' ? dark : light} />;
}

function MdxCenter({ children }: { children: ReactChild }) {
  return <div className="flex justify-center">{children}</div>;
}

function MdxCode(props: JSX.IntrinsicElements['pre']) {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const copy = () => {
    navigator.clipboard.writeText(ref.current?.textContent || '');

    setCopied(true);

    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <AnimatePresence>
        {visible && (
          <motion.button
            className={clsx(
              'absolute top-3 right-4 hidden rounded-lg bg-gray-100 p-2 transition-all hover:ring-2 dark:bg-gray-600 sm:block',
              copied
                ? 'text-green-500 ring-green-500 dark:text-green-600 dark:ring-green-600'
                : 'text-gray-500 ring-gray-200 dark:text-gray-300 dark:ring-gray-300'
            )}
            title="Copy code to clipboard"
            aria-label="Copy code to clipboard"
            onClick={copy}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.05 }}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </motion.button>
        )}
      </AnimatePresence>

      <pre {...props} />
    </div>
  );
}

function SpotifyAnimationExample() {
  return (
    <div className="-my-6 flex items-center space-x-2">
      <Bars />
      <p className="font-medium text-gray-600 dark:text-white">Vicarious</p>
      <span>–</span>
      <p>TOOL</p>
    </div>
  );
}

const components = {
  SpotifyAnimationExample,
  MdxImage,
  MdxImageWithTheme,
  MdxCenter,
  pre: MdxCode,
};

export default components;
