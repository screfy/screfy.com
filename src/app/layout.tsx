import '../styles/globals.css';

import { Karla } from '@next/font/google';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { TooltipProvider } from '../components/Tooltip';
import { NavbarProvider } from '../hooks/use-navbar';

const karla = Karla({
	variable: '--font-karla',
	subsets: ['latin'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html
			className={clsx(
				'scroll-pt-24 scroll-smooth [color-scheme:dark]',
				karla.variable,
			)}
			lang="en"
		>
			<head />

			<body className="bg-gray-1 text-lg text-gray-12 antialiased selection:bg-gray-5">
				<TooltipProvider delayDuration={0}>
					<NavbarProvider>
						<div className="flex min-h-screen flex-col items-center">
							<Navbar />

							<main className="mt-24 flex w-full max-w-screen-sm flex-1 flex-col px-5 md:px-0 lg:mt-36">
								{children}
							</main>

							<Footer />
						</div>
					</NavbarProvider>
				</TooltipProvider>
			</body>
		</html>
	);
}
