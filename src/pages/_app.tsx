import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';
import { Navbar, NavbarProvider } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<NavbarProvider>
			<div className="flex min-h-screen flex-col items-center">
				<Navbar />

				<main className="mt-36 grid flex-1 grid-cols-[1fr,minmax(auto,17.5rem),min(40rem,100%),minmax(auto,17.5rem),1fr] gap-y-14 gap-x-8 [&>*]:col-start-3">
					<Component {...pageProps} />
				</main>

				<Footer />
			</div>
		</NavbarProvider>
	);
}
