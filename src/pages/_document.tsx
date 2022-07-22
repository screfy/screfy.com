import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
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

			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
