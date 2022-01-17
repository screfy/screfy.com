import { AnimatePresence, motion } from 'framer-motion';
import { Cross as Hamburger } from 'hamburger-react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import NavbarItem from './NavbarItem';

function NavbarItems() {
  return (
    <>
      <NavbarItem href="/">Home</NavbarItem>
      <NavbarItem href="/about">About</NavbarItem>
      <NavbarItem href="/technologies">Technologies</NavbarItem>
    </>
  );
}

export default function Navbar() {
  const { asPath } = useRouter();
  const [play] = useSound('/beep.mp3');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openMenu() {
    setIsMenuOpen(!isMenuOpen);

    document.body.style.overflow = isMenuOpen ? '' : 'hidden';
  }

  useEffect(() => {
    play();

    // Close menu, when path change:
    return () => {
      setIsMenuOpen(false);

      document.body.style.overflow = '';
    };
  }, [asPath]);

  return (
    <nav className="mb-16 sm:mb-24">
      <div className="flex sm:hidden flex-col space-y-6">
        <button className="w-fit -ml-3.5" onClick={openMenu}>
          <Hamburger size={20} toggled={isMenuOpen} />
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ ease: 'anticipate' }}
              className="h-screen flex flex-col space-y-4"
            >
              <NavbarItems />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="hidden sm:flex items-center space-x-4 ml-[-0.60rem]">
        <NavbarItems />
      </div>
    </nav>
  );
}
