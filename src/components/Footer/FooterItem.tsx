import { ReactChild } from 'react';

interface Props {
  href: string;
  children: ReactChild;
}

export default function FooterItem({ href, children }: Props): JSX.Element {
  return (
    <a className="hover:text-white transition-colors" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
