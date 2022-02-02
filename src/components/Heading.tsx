import clsx from 'clsx';

interface FontStyle {
  size: string;
  weight: string;
  color: string;
}

const FONT_STYLES: { [key: string]: FontStyle } = {
  h1: {
    size: 'text-4xl',
    weight: 'font-bold',
    color: 'text-black dark:text-white',
  },
  h2: {
    size: 'text-3xl',
    weight: 'font-semibold',
    color: 'text-gray-700 dark:text-gray-100',
  },
  h3: {
    size: 'text-2xl',
    weight: 'font-semibold',
    color: 'text-gray-700 dark:text-gray-100',
  },
  h4: {
    size: 'text-xl',
    weight: 'font-medium',
    color: 'text-gray-700 dark:text-gray-100',
  },
  h5: {
    size: 'text-base',
    weight: 'font-medium',
    color: 'text-gray-700 dark:text-gray-100',
  },
};

export default function Heading({
  as,
  className,
  children,
  ...props
}: JSX.IntrinsicElements['h1'] & { as: `h${1 | 2 | 3 | 4 | 5}` }) {
  const Component = as;
  const { size, weight, color } = FONT_STYLES[as];

  return (
    <Component className={clsx(size, weight, color, className)} {...props}>
      {children}
    </Component>
  );
}
