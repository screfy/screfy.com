import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html className="scroll-pt-24 scroll-smooth [color-scheme:dark]" lang="en">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin=""
				/>
				{/* TODO: Remove unused styles (currently used: regular, medium,
					semibold, bold) */}
				<link
					href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;600;700&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<body className="bg-gray-1 text-lg text-gray-12 antialiased selection:bg-gray-5">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
