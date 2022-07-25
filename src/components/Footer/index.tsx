import Link from 'next/link';
import { NowPlaying } from './NowPlaying';

interface FooterLinkProps {
	href: string;
	label: string;
}

const links: FooterLinkProps[] = [
	{
		href: '/design',
		label: 'Design'
	},
	{
		href: 'https://twitter.com/screfy_',
		label: 'Twitter'
	},
	{
		href: 'https://github.com/screfy',
		label: 'GitHub'
	}
];

function FooterLink({ href, label }: FooterLinkProps) {
	const isLocal = href.startsWith('/');

	return (
		<Link
			className="text-gray-11 transition-colors hover:text-gray-12"
			href={href}
			aria-label={label}
			target={isLocal ? undefined : '_blank'}
			rel={isLocal ? undefined : 'noreferrer'}
		>
			{label}
		</Link>
	);
}

export function Footer() {
	return (
		<footer className="mb-8 mt-24 w-full max-w-screen-sm space-y-6 text-base">
			<div className="flex items-center justify-between">
				<NowPlaying />

				<div className="flex items-center space-x-6">
					{links.map((props, i) => (
						<FooterLink key={i} {...props} />
					))}
				</div>
			</div>
		</footer>
	);
}
