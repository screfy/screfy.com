'use client';

import { usePathname } from 'next/navigation';
import {
	createContext,
	useContext,
	useEffect,
	useState,
	type ReactNode,
} from 'react';

const NavbarContext = createContext<{
	visible: boolean;
	setVisible: (visible: boolean) => void;
	title?: string;
	setTitle: (title?: string) => void;
}>({ visible: false, setVisible: () => {}, setTitle: () => {} });

export const useNavbar = () => useContext(NavbarContext);

export function NavbarProvider({ children }: { children: ReactNode }) {
	const pathname = usePathname();
	const [visible, setVisible] = useState(false);
	const [title, setTitle] = useState<string | undefined>(undefined);

	useEffect(() => setVisible(pathname !== '/'), [pathname]);

	return (
		<NavbarContext.Provider value={{ visible, setVisible, title, setTitle }}>
			{children}
		</NavbarContext.Provider>
	);
}
