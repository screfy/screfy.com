import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';
import { Navbar, NavbarProvider } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<NavbarProvider>
			<div className="flex min-h-screen flex-col items-center">
				<Navbar />

				<main className="mt-36 w-full max-w-screen-sm flex-1 space-y-14">
					<Component {...pageProps} />
				</main>

				<Footer />
			</div>
		</NavbarProvider>
	);
}
