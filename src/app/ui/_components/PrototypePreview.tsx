import { ArrowClockwise, type Icon } from '@phosphor-icons/react';
import type { ReactNode } from 'react';

import { Tooltip } from '~/ui/Tooltip.tsx';
import { cx } from '~/utils/cx.ts';

function PreviewButton({
	icon: Icon,
	label,
	onClick,
}: {
	icon: Icon;
	label: string;
	onClick?: () => void;
}) {
	return (
		<Tooltip>
			<Tooltip.Trigger
				className="flex size-7 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-zinc-200/60 hover:text-gray-600"
				aria-label={label}
				onClick={onClick}
			>
				<Icon size={18} />
			</Tooltip.Trigger>

			<Tooltip.Content>{label}</Tooltip.Content>
		</Tooltip>
	);
}

export function PrototypePreview({
	className,
	children,
	onReset,
}: {
	className?: string;
	children: ReactNode;
	onReset?: () => void;
}) {
	return (
		<div
			className={cx(
				'relative -mx-4 border-y border-zinc-200/70 bg-zinc-100/70 select-none md:mx-0 md:rounded-xl md:border',
				className
			)}
		>
			<div className="absolute inset-x-0 flex items-center justify-end gap-1 p-3">
				{typeof onReset === 'function' && (
					<PreviewButton
						icon={ArrowClockwise}
						label="Reset"
						onClick={onReset}
					/>
				)}
			</div>

			<div className="overflow-x-auto px-6 py-24">
				<div className="mx-auto w-fit">{children}</div>
			</div>
		</div>
	);
}
