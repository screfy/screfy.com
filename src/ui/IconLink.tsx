'use client';

import type { Icon } from '@phosphor-icons/react';
import Link from 'next/link';

export function IconLink({
	href,
	icon: Icon,
	label,
}: {
	href: string;
	icon: Icon;
	label: string;
}) {
	return (
		<Link
			className="relative -m-2.5 inline-flex items-center justify-center p-2.5 transition-colors after:absolute after:bottom-1.5 after:h-0.5 after:w-4 after:bg-zinc-500 after:transition-colors hover:text-zinc-800 after:hover:bg-zinc-700"
			href={href}
			rel="noreferrer noopener"
			aria-label={label}
		>
			<Icon size={18} aria-hidden />
		</Link>
	);
}
