import '../styles/globals.css';

import { Karla } from '@next/font/google';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { NavbarProvider } from '../hooks/use-navbar';

const BASE_URL = 'https://screfy.com';

const karla = Karla();

export default function App({ Component, pageProps }: AppProps) {
	const { asPath } = useRouter();
	const url = `${BASE_URL}${asPath}`;

	return (
		<NavbarProvider>
			<DefaultSeo
				titleTemplate="%s – screfy.com"
				description="A self-taught software engineer interested in web and serverless technologies and DevOps practices."
				canonical={url}
				additionalMetaTags={[
					{
						name: 'viewport',
						content: 'width=device-width, initial-scale=1.0',
					},
					{
						name: 'theme-color',
						content: '#161616',
					},
					{
						name: 'url',
						content: url,
					},
				]}
				additionalLinkTags={[
					{
						rel: 'shortcut icon',
						href: '/favicon.ico',
						type: 'image/x-icon',
					},
				]}
				openGraph={{
					type: 'website',
					site_name: 'screfy.com',
					images: [{ url: `${BASE_URL}/og.png` }],
				}}
				twitter={{
					handle: '@screfy_',
					site: '@screfy_',
					cardType: 'summary_large_image',
				}}
			/>

			<style jsx global>{`
				:root {
					--font-karla: ${karla.style.fontFamily};
				}
			`}</style>

			<div className="flex min-h-screen flex-col items-center">
				<Navbar />

				<main className="mt-24 flex w-full max-w-screen-sm flex-1 flex-col px-5 md:px-0 lg:mt-36">
					<Component {...pageProps} />
				</main>

				<Footer />
			</div>
		</NavbarProvider>
	);
}
