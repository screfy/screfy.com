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
          'px-2.5 py-[3px] hover:bg-gray-200 hover:text-gray-50 rounded-lg transition',
          asPath === href && 'text-gray-50 font-semibold'
        )}
      >
        {children}
      </a>
    </Link>
  );
}
