import NextLink from 'next/link';
import { ReactNode } from 'react';

export function Link({
	href,
	children
}: {
	href: string;
	children: ReactNode;
}) {
	const isExternal = !(
		href.startsWith('/') || href.startsWith('https://screfy.com')
	);

	return (
		<NextLink
			className="underline decoration-gray-6 decoration-[1.5px] underline-offset-2 transition-colors selection:decoration-gray-8 hover:decoration-gray-8"
			href={href}
			target={isExternal ? '_blank' : undefined}
			rel={isExternal ? 'noreferrer' : undefined}
		>
			{children}
		</NextLink>
	);
}
