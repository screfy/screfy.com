import clsx from 'clsx';

export interface HeadingProps {
  as: `h${1 | 2 | 3 | 4}`;
  text: string;
}

enum FONT_SIZE {
  h1 = 'text-3xl',
  h2 = 'text-2xl',
  h3 = 'text-base',
  h4 = 'text-sm',
}

export default function Heading({ as, text }: HeadingProps): JSX.Element {
  const Component = as;

  return <Component className={clsx('text-white font-semibold', FONT_SIZE[as])}>{text}</Component>;
}
