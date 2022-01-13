import { ReactChild } from 'react';

interface Props {
  href: string;
  children: ReactChild;
}

export default function FooterIcon({ href, children }: Props) {
  return (
    <a className="hover:text-white transition-colors" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
