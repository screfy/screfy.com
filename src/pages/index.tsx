import { NavbarLinks } from '../components/Navbar/NavbarLinks';

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col items-center">
			<main className="mt-36 w-full max-w-screen-sm flex-1">
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-4">
						<div className="h-16 w-16 rounded-full bg-blue-9" />

						<div>
							<h1 className="text-3xl font-bold">screfy</h1>
							<p className="text-gray-11">Software Engineer</p>
						</div>
					</div>

					<NavbarLinks />
				</div>
			</main>
		</div>
	);
}
