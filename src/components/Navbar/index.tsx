import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSound from 'use-sound';
import NavbarItem from './NavbarItem';

export default function Navbar() {
  const { asPath } = useRouter();
  const [play] = useSound('/beep.mp3');

  useEffect(() => play(), [asPath]);

  return (
    <nav className="flex items-center space-x-4 mb-24 ml-[-0.60rem]">
      <NavbarItem href="/">Home</NavbarItem>
      <NavbarItem href="/about">About</NavbarItem>
      <NavbarItem href="/technologies">Technologies</NavbarItem>
    </nav>
  );
}
