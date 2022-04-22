import { useTheme } from 'next-themes';
import { Moon, Sun } from 'react-feather';
import { useMounted } from '../../hooks/use-mounted';

export default function ThemeChanger() {
	const mounted = useMounted();
	const { resolvedTheme, setTheme } = useTheme();

	if (!mounted) {
		return null;
	}

	// After mounting, we have access to the theme:
	return (
		<button
			aria-label="Change theme"
			className="ml-auto h-9 w-9 rounded-lg bg-gray-100 p-2 text-gray-800 ring-gray-200 transition-all hover:ring-2 dark:bg-gray-600 dark:text-gray-100 dark:ring-gray-300 sm:ml-0"
			onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
		>
			{resolvedTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
		</button>
	);
}
