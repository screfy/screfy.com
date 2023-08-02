import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { useNavbar } from '../../hooks/use-navbar';
import { Annotation } from '../../icons/Annotation';
import { UserCircle } from '../../icons/UserCircle';
import { TooltipContent, TooltipRoot, TooltipTrigger } from '../Tooltip';

interface NavbarItemProps {
	href: string;
	icon: ReactNode;
	label: string;
}

const items: NavbarItemProps[] = [
	{
		href: '/about',
		icon: <UserCircle />,
		label: 'About',
	},
	{
		href: '/blog',
		icon: <Annotation />,
		label: 'Blog',
	},
];

function NavbarItem({ href, icon, label }: NavbarItemProps) {
	const pathname = usePathname();
	const { visible } = useNavbar();

	return (
		<TooltipRoot>
			<TooltipTrigger asChild>
				<Link
					className="flex items-center gap-1.5"
					href={href}
					aria-label={label}
				>
					<div
						className={clsx(
							'rounded-xl bg-gray-3 p-2 text-gray-8 transition-colors hover:bg-gray-4 hover:text-gray-9',
							pathname === href && 'bg-gray-4 text-gray-9',
						)}
					>
						{icon}
					</div>

					{!visible && (
						<p className="block text-base text-gray-11 md:hidden">{label}</p>
					)}
				</Link>
			</TooltipTrigger>

			<TooltipContent side="bottom" sideOffset={visible ? 16 : 6}>
				{label}
			</TooltipContent>
		</TooltipRoot>
	);
}

export function NavbarLinks() {
	return (
		<div className="flex items-center gap-3">
			{items.map((props, i) => (
				<NavbarItem key={i} {...props} />
			))}
		</div>
	);
}
