import { AnimatePresence, motion } from 'framer-motion';
import { Cross as Hamburger } from 'hamburger-react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import NavbarItem from './NavbarItem';

function NavbarItems() {
	return (
		<>
			<NavbarItem href="/">Home</NavbarItem>
			<NavbarItem href="/about">About</NavbarItem>
			<NavbarItem href="/blog">Blog</NavbarItem>
			<NavbarItem href="/technologies">Technologies</NavbarItem>
		</>
	);
}

export default function Navbar() {
	const { asPath } = useRouter();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	function openMenu() {
		setIsMenuOpen(!isMenuOpen);

		document.body.style.overflow = isMenuOpen ? '' : 'hidden';
	}

	useEffect(() => {
		// Close menu, when path change:
		return () => {
			setIsMenuOpen(false);

			document.body.style.overflow = '';
		};
	}, [asPath]);

	return (
		<nav className="mb-16 sm:mb-24">
			<div className="flex flex-col space-y-6 sm:hidden">
				<button
					className="-ml-3.5 w-fit"
					aria-label="Open menu"
					onClick={openMenu}
				>
					<Hamburger size={20} toggled={isMenuOpen} />
				</button>

				<AnimatePresence>
					{isMenuOpen && (
						<motion.div
							initial={{ opacity: 0, y: -15 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0 }}
							transition={{ ease: 'anticipate' }}
							className="flex h-screen flex-col space-y-4"
						>
							<NavbarItems />
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			<div className="ml-[-0.60rem] hidden items-center space-x-4 sm:flex">
				<NavbarItems />
			</div>
		</nav>
	);
}
