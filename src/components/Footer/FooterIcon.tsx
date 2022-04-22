import { ReactChild } from 'react';

interface Props {
	href: string;
	label: string;
	children: ReactChild;
}

export default function FooterIcon({ href, label, children }: Props) {
	return (
		<a
			className="transition-colors hover:text-gray-600 dark:hover:text-gray-200"
			href={href}
			aria-label={label}
			target="_blank"
			rel="noreferrer"
		>
			{children}
		</a>
	);
}
