import clsx from 'clsx';

export interface HeadingProps {
  as: `h${1 | 2 | 3}`;
  text: string;
}

interface FontStyle {
  size: string;
  weight: string;
  color: string;
}

const FONT_STYLES: { [key: string]: FontStyle } = {
  h1: { size: 'text-4xl', weight: 'font-bold', color: 'text-white' },
  h2: { size: 'text-3xl', weight: 'font-semibold', color: 'text-gray-50' },
  h3: { size: 'text-2xl', weight: 'font-semibold', color: 'text-gray-50' },
};

export default function Heading({ as, text }: HeadingProps) {
  const Component = as;
  const { size, weight, color } = FONT_STYLES[as];

  return <Component className={clsx(size, weight, color)}>{text}</Component>;
}
