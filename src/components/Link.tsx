import NextLink from 'next/link';
import { ReactNode } from 'react';

export function Link({
	href,
	children,
}: {
	href: string;
	children: ReactNode;
}) {
	const isLocal = href.startsWith('/');

	return (
		<NextLink
			className="underline decoration-gray-4 decoration-[1.5px] underline-offset-2 transition-colors selection:decoration-gray-8 hover:decoration-gray-7"
			href={href}
			target={isLocal ? undefined : '_blank'}
			rel={isLocal ? undefined : 'noreferrer'}
		>
			{children}
		</NextLink>
	);
}
