import '../styles/globals.css';

import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BASE_URL } from '../constants';

export default function App({ Component, pageProps }: AppProps) {
	const { pathname } = useRouter();

	return (
		<ThemeProvider defaultTheme="system" attribute="class">
			<NextSeo
				titleTemplate="%s – screfy"
				description="Hey, I’m screfy, a fullstack web developer and open-source enthusiast."
				canonical={BASE_URL + pathname}
				additionalMetaTags={[
					{
						name: 'viewport',
						content: 'width=device-width, initial-scale=1.0'
					},
					{ name: 'author', content: 'screfy (https://screfy.com)' },
					{ name: 'url', content: BASE_URL + pathname }
				]}
				additionalLinkTags={[
					{
						rel: 'shortcut icon',
						href: '/favicon.ico',
						type: 'image/x-icon'
					}
				]}
				openGraph={{
					type: 'website',
					images: [{ url: `${BASE_URL}/banner.png` }]
				}}
				twitter={{ handle: '@screfy_', cardType: 'summary_large_image' }}
			/>

			<div className="flex w-full flex-col px-6 py-8 sm:w-[40rem] sm:px-0">
				<Navbar />

				<Component {...pageProps} />

				<Footer />
			</div>
		</ThemeProvider>
	);
}
