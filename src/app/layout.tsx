import '~/styles/globals.css';

import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { getLastVisitorLocation } from '~/utils/visitor.ts';

import { Time } from './_components/Time.tsx';

export const metadata: Metadata = {
	title: 'screfy.com',
};

export default async function RootLayout({
	children,
}: Readonly<{ children: ReactNode }>) {
	const location = await getLastVisitorLocation();

	return (
		<html className={GeistSans.variable} lang="en">
			<body className="flex min-h-dvh flex-col items-center bg-zinc-50 font-sans text-zinc-600 antialiased optimize-legibility selection:bg-zinc-200/60">
				<main className="w-full max-w-2xl flex-1 px-4 py-16 md:px-0 md:py-24">
					{children}
				</main>

				<footer className="flex w-full max-w-2xl justify-between gap-4 px-4 pb-6 text-sm text-zinc-500 md:px-0">
					<Time />
					{location && (
						<div className="flex items-center gap-2">
							<div className="relative size-1.5 shrink-0 rounded-full bg-green-400" />
							<p>
								Last visitor from {location.city}, {location.country}
							</p>
						</div>
					)}
				</footer>
			</body>
		</html>
	);
}
