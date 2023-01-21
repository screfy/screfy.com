'use client';

import { usePathname } from 'next/navigation';

// NOTE: We can't access the path on the server, so this needs to be a client
// component.
export function UrlTags({ baseUrl }: { baseUrl: string }) {
	const pathname = usePathname();
	const url = `${baseUrl}${pathname}`;

	return (
		<>
			<meta name="url" content={url} />
			<meta property="og:url" content={url} />
			<link rel="canonical" href={url} />
		</>
	);
}
