import { ReactChild } from 'react';

interface Props {
  href: string;
  children: ReactChild;
}

export default function Link({ href, children }: Props) {
  return (
    <a
      className="font-medium text-gray-500 transition-colors hover:text-gray-800 dark:text-gray-100 dark:hover:text-white"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
