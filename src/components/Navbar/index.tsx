'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useNavbar } from '../../hooks/use-navbar';
import { Polygon } from '../../icons/Polygon';
import { NavbarLinks } from './NavbarLinks';

const variants = {
	initial: {
		opacity: 0,
		scale: 0.95,
	},
	animate: {
		opacity: 1,
		scale: 1,
	},
};

export function Navbar() {
	const { visible, title } = useNavbar();

	return (
		<AnimatePresence>
			{visible && (
				<motion.nav
					className="fixed top-3 z-50 w-full max-w-screen-sm px-2 md:px-0 lg:top-5"
					variants={variants}
					initial="initial"
					animate="animate"
					exit="initial"
					transition={{ duration: 0.2, ease: 'easeInOut' }}
				>
					<div className="flex flex-1 items-center justify-between rounded-xl bg-gray-3 px-3 py-2 backdrop-blur-xl supports-[backdrop-filter]:bg-gray-3/60 md:-mx-4 md:px-4">
						<div className="flex items-center gap-4 overflow-hidden">
							<Link href="/" aria-label="Home">
								<Polygon
									className="transition-transform will-change-transform hover:scale-105"
									width="36"
									height="36"
								/>
							</Link>

							<AnimatePresence>
								{title && (
									<motion.a
										className="hidden truncate font-bold md:block md:max-w-sm lg:max-w-md"
										href="#top"
										aria-label="Scroll to top"
										initial={{ opacity: 0, y: 30 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: 30 }}
										transition={{
											duration: 0.3,
											delay: 0.1,
											ease: 'easeInOut',
										}}
										onClick={(e) => {
											e.preventDefault();
											window.scrollTo({ top: 0, behavior: 'smooth' });
										}}
									>
										{title}
									</motion.a>
								)}
							</AnimatePresence>
						</div>

						<NavbarLinks />
					</div>
				</motion.nav>
			)}
		</AnimatePresence>
	);
}
