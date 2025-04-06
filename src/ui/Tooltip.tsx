'use client';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { cx } from '~/utils/cx.ts';

function Root({ delayDuration = 0, ...props }: TooltipPrimitive.TooltipProps) {
	return <TooltipPrimitive.Root delayDuration={delayDuration} {...props} />;
}

function Content({
	className,
	sideOffset = 6,
	...props
}: TooltipPrimitive.TooltipContentProps) {
	return (
		<TooltipPrimitive.Content
			className={cx(
				'rounded-md border border-zinc-200 bg-white px-2 py-1 text-xs shadow-[0_4px_6px_--alpha(var(--color-black)/5%)]',
				className
			)}
			sideOffset={sideOffset}
			{...props}
		/>
	);
}

export const Tooltip = Object.assign(Root, {
	Trigger: TooltipPrimitive.Trigger,
	Content,
});
