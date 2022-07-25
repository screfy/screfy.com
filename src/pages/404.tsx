import Link from 'next/link';

export default function Error404() {
	return (
		<div className="flex flex-col items-center justify-center space-y-8">
			<div className="space-y-2 text-center">
				<h1 className="text-3xl font-bold">Lost your way?</h1>
				<p className="text-gray-11">
					This is not the web page you are looking for.
				</p>
			</div>

			<Link
				className="rounded-lg bg-gray-3 px-4 py-2 text-gray-10 transition-colors hover:bg-gray-4 hover:text-gray-11"
				href="/"
			>
				Go home
			</Link>
		</div>
	);
}
