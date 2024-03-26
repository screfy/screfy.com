import '~/styles/globals.css';

import { Karla } from 'next/font/google';
import type { ReactNode } from 'react';

const karla = Karla({ variable: '--font-karla', subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html className={karla.variable} lang="en">
			<body className="bg-mauve-1 text-lg text-mauve-12 antialiased">
				<main>{children}</main>
			</body>
		</html>
	);
}
