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
	title?: string;
	setTitle: (title?: string) => void;
}>({ visible: false, setVisible: () => {}, setTitle: () => {} });

export const useNavbar = () => useContext(NavbarContext);

export function NavbarProvider({ children }: { children: ReactNode }) {
	const { asPath } = useRouter();
	const [visible, setVisible] = useState(false);
	const [title, setTitle] = useState<string | undefined>(undefined);

	useEffect(() => setVisible(asPath !== '/'), [asPath]);

	return (
		<NavbarContext.Provider value={{ visible, setVisible, title, setTitle }}>
			{children}
		</NavbarContext.Provider>
	);
}

export function Navbar() {
	const { visible, title } = useNavbar();

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
					<div className="-mx-4 flex flex-1 items-center justify-between rounded-xl bg-gray-3/60 px-4 py-2 shadow-md backdrop-blur">
						<div className="flex items-center space-x-4 overflow-hidden">
							<Link
								className="h-10 w-10 rounded-full bg-blue-9"
								href="/"
								aria-label="Home"
							/>

							<AnimatePresence>
								{title && (
									<motion.a
										className="max-w-md truncate font-bold"
										href="#top"
										aria-label="Scroll to top"
										initial={{ opacity: 0, y: 30 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: 30 }}
										transition={{
											duration: 0.3,
											delay: 0.1,
											ease: 'easeInOut'
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
