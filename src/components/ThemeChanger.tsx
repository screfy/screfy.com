import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'react-feather';

export default function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme:
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label="Change theme"
      className="w-9 h-9 p-2 ml-auto sm:ml-0 bg-gray-200 text-gray-50 rounded-lg hover:ring-2 ring-gray-100 transition-all"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? <Sun size="20" /> : <Moon size="20" />}
    </button>
  );
}
