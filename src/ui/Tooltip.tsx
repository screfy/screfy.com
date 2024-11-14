'use client';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { forwardRef, type ComponentRef } from 'react';

import { cx } from '~/utils/cx.ts';

function Root({ delayDuration = 0, ...props }: TooltipPrimitive.TooltipProps) {
	return <TooltipPrimitive.Root delayDuration={delayDuration} {...props} />;
}

const Content = forwardRef<
	ComponentRef<typeof TooltipPrimitive.Content>,
	TooltipPrimitive.TooltipContentProps
>(({ className, sideOffset = 6, ...props }, ref) => (
	<TooltipPrimitive.Content
		className={cx(
			'rounded-md border border-zinc-200 bg-white px-2 py-1 text-xs shadow-[0_4px_6px_theme(colors.black/0.05)]',
			className
		)}
		sideOffset={sideOffset}
		{...props}
	/>
));
Content.displayName = TooltipPrimitive.Content.displayName;

export const Tooltip = Object.assign(Root, {
	Trigger: TooltipPrimitive.Trigger,
	Content,
});
