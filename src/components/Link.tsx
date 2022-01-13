import { ReactChild } from 'react';

interface Props {
  href: string;
  children: ReactChild;
}

export default function Link({ href, children }: Props) {
  return (
    <a
      className="font-medium text-gray-50 hover:text-white transition-colors"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
