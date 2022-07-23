import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState
} from 'react';
import { NavbarLinks } from './NavbarLinks';

const variants = {
	initial: {
		opacity: 0,
		scale: 0.95
	},
	animate: {
		opacity: 1,
		scale: 1
	}
};

const NavbarContext = createContext<{
	visible: boolean;
	setVisible: (visible: boolean) => void;
}>({ visible: false, setVisible: () => {} });

export const useNavbar = () => useContext(NavbarContext);

export function NavbarProvider({ children }: { children: ReactNode }) {
	const { asPath } = useRouter();
	const [visible, setVisible] = useState(false);

	useEffect(() => setVisible(asPath !== '/'), [asPath]);

	return (
		<NavbarContext.Provider value={{ visible, setVisible }}>
			{children}
		</NavbarContext.Provider>
	);
}

export function Navbar() {
	const { visible } = useNavbar();

	return (
		<AnimatePresence>
			{visible && (
				<motion.nav
					className="fixed top-5 z-50 w-full max-w-screen-sm"
					variants={variants}
					initial="initial"
					animate="animate"
					exit="initial"
					transition={{ duration: 0.2, ease: 'easeInOut' }}
				>
					<div className="-mx-4 flex flex-1 items-center justify-between rounded-xl bg-gray-2 px-4 py-2 shadow-md">
						<Link href="/">
							<a
								className="h-10 w-10 rounded-full bg-blue-9"
								aria-label="Home"
							/>
						</Link>

						<NavbarLinks />
					</div>
				</motion.nav>
			)}
		</AnimatePresence>
	);
}
