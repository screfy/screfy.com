import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSound from 'use-sound';
import NavbarItem from './NavbarItem';

export default function Navbar(): JSX.Element {
  const { asPath } = useRouter();
  const [play] = useSound('/beep.mp3');

  useEffect(() => play(), [asPath]);

  return (
    <nav className="flex items-center space-x-6 mb-10">
      <Link href="/" passHref>
        <a className="font-semibold">
          screfy<span className="text-info">.</span>com
        </a>
      </Link>

      <NavbarItem href="/projects">Projects</NavbarItem>
      <NavbarItem href="/technologies">Technologies</NavbarItem>
    </nav>
  );
}
