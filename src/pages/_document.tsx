import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html className="scroll-pt-24 scroll-smooth [color-scheme:dark]" lang="en">
			<Head />

			<body className="bg-gray-1 text-lg text-gray-12 antialiased selection:bg-gray-5">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
