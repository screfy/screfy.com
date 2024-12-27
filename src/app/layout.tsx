import '~/styles/globals.css';

import type { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';
import type { ReactNode } from 'react';

import { getLastVisitorLocation } from '~/utils/visitor.ts';

import { Time } from './_components/Time.tsx';

const DEFAULT_TITLE = 'screfy – Software Engineer';
const DEFAULT_DESCRIPTION =
	'A self-taught software engineer with a passion for web development, design engineering, and crafting delightful interfaces.';
const METADATA_BASE_URL =
	process.env.NEXT_PUBLIC_BASE_URL || 'https://screfy.com';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });

export const metadata: Metadata = {
	title: {
		absolute: DEFAULT_TITLE,
	},
	description: DEFAULT_DESCRIPTION,
	metadataBase: new URL(METADATA_BASE_URL),
	openGraph: {
		type: 'website',
		title: {
			absolute: DEFAULT_TITLE,
		},
		description: DEFAULT_DESCRIPTION,
		siteName: 'screfy.com',
	},
	twitter: {
		card: 'summary_large_image',
		site: '@screfy_',
		creator: '@screfy_',
	},
};

export const viewport: Viewport = {
	themeColor: '#FAFAFA',
};

export default async function RootLayout({
	children,
}: Readonly<{ children: ReactNode }>) {
	const location = await getLastVisitorLocation();

	return (
		<html className={geistSans.variable} lang="en">
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
