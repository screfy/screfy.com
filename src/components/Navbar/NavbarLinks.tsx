import Link from 'next/link';
import { ReactNode } from 'react';
import { Annotation } from '../../icons/Annotation';
import { UserCircle } from '../../icons/UserCircle';

interface NavbarItemProps {
	href: string;
	icon: ReactNode;
	label: string;
}

const items: NavbarItemProps[] = [
	{
		href: '/about',
		icon: <UserCircle />,
		label: 'About'
	},
	{
		href: '/blog',
		icon: <Annotation />,
		label: 'Blog'
	}
];

function NavbarItem({ href, icon, label }: NavbarItemProps) {
	return (
		// TODO: Add tooltip?
		<Link href={href}>
			<a
				className="rounded-xl bg-gray-3 p-2 text-gray-8 transition-colors hover:bg-gray-4 hover:text-gray-9"
				aria-label={label}
			>
				{icon}
			</a>
		</Link>
	);
}

export function NavbarLinks() {
	return (
		<div className="flex items-center space-x-3">
			{items.map((props, i) => (
				<NavbarItem key={i} {...props} />
			))}
		</div>
	);
}
