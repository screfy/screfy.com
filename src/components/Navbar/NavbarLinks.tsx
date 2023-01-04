import * as Tooltip from '@radix-ui/react-tooltip';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { useNavbar } from '../../hooks/use-navbar';
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
		label: 'About',
	},
	{
		href: '/blog',
		icon: <Annotation />,
		label: 'Blog',
	},
];

function NavbarItem({ href, icon, label }: NavbarItemProps) {
	const { asPath } = useRouter();
	const { visible } = useNavbar();

	return (
		<Tooltip.Provider delayDuration={0}>
			<Tooltip.Root>
				<Tooltip.Trigger asChild>
					<Link
						className="flex items-center gap-1.5"
						href={href}
						aria-label={label}
					>
						<div
							className={clsx(
								'rounded-xl bg-gray-3 p-2 text-gray-8 transition-colors hover:bg-gray-4 hover:text-gray-9',
								asPath === href && 'bg-gray-4 text-gray-9'
							)}
						>
							{icon}
						</div>

						{!visible && (
							<p className="block text-base text-gray-11 md:hidden">{label}</p>
						)}
					</Link>
				</Tooltip.Trigger>

				<Tooltip.Portal>
					<Tooltip.Content
						className="hidden rounded-lg bg-gray-3 px-1.5 py-1 text-sm text-gray-11 radix-state-closed:animate-tooltip-close radix-state-delayed-open:animate-tooltip-open md:block"
						side="bottom"
						sideOffset={visible ? 16 : 6}
					>
						{label}
					</Tooltip.Content>
				</Tooltip.Portal>
			</Tooltip.Root>
		</Tooltip.Provider>
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
