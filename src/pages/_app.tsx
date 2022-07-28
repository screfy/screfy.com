import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { Navbar, NavbarProvider } from '../components/Navbar';
import { Footer } from '../components/Footer';

const BASE_URL = 'https://screfy.com';

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
						content: 'width=device-width, initial-scale=1.0'
					},
					{
						name: 'theme-color',
						content: '#161616'
					},
					{
						name: 'url',
						content: url
					}
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
					site_name: 'screfy.com',
					images: [{ url: `${BASE_URL}/og.png` }]
				}}
				twitter={{
					handle: '@screfy_',
					site: '@screfy_',
					cardType: 'summary_large_image'
				}}
			/>

			<div className="flex min-h-screen flex-col items-center">
				<Navbar />

				<main className="mt-24 grid flex-1 grid-cols-1 gap-y-14 gap-x-8 px-5 md:grid-cols-[1fr,minmax(auto,17.5rem),min(40rem,100%),minmax(auto,17.5rem),1fr] md:px-0 lg:mt-36 md:[&>*]:col-start-3">
					<Component {...pageProps} />
				</main>

				<Footer />
			</div>
		</NavbarProvider>
	);
}
