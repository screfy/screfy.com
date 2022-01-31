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
          'transition-all hover:text-gray-800 dark:hover:text-gray-100 sm:rounded-lg sm:px-2.5 sm:py-[3px] sm:hover:bg-gray-100 dark:sm:hover:bg-gray-600',
          asPath === href && 'font-semibold text-gray-800 dark:text-gray-100'
        )}
      >
        {children}
      </a>
    </Link>
  );
}
