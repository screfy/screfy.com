import clsx from 'clsx';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ReactChild } from 'react';

interface Props {
  href: string;
  children: ReactChild;
}

export default function NavbarItem({ href, children }: Props) {
  const { asPath } = useRouter();

  return (
    <Link href={href} passHref>
      <a
        className={clsx(
          'sm:px-2.5 sm:py-[3px] sm:hover:bg-gray-100 dark:sm:hover:bg-gray-600 hover:text-gray-800 dark:hover:text-gray-100 sm:rounded-lg transition-all',
          asPath === href && 'text-gray-800 dark:text-gray-100 font-semibold'
        )}
      >
        {children}
      </a>
    </Link>
  );
}
