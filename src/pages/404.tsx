import { NextSeo } from 'next-seo';
import Link from 'next/link';

export default function Error404() {
	return (
		<div className="m-auto text-center">
			<NextSeo title="Not found" noindex nofollow />

			<h1 className="mb-2 text-3xl font-bold">Lost your way?</h1>

			<p className="mb-8 text-gray-11">
				This is not the web page you are looking for.
			</p>

			<Link
				className="rounded-lg bg-gray-3 px-4 py-2 font-medium text-gray-10 transition-colors hover:bg-gray-4 hover:text-gray-11"
				href="/"
			>
				Go home
			</Link>
		</div>
	);
}
