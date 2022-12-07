import { useRouter } from 'next/router';
import {
	createContext,
	useContext,
	ReactNode,
	useState,
	useEffect,
} from 'react';

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
