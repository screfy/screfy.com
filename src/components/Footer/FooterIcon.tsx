import { ReactChild } from 'react';

interface Props {
  href: string;
  label: string;
  children: ReactChild;
}

export default function FooterIcon({ href, label, children }: Props) {
  return (
    <a className="hover:text-white transition-colors" href={href} aria-label={label} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
