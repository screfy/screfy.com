'use client';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { forwardRef, type ElementRef } from 'react';

export const TooltipProvider = TooltipPrimitive.Provider;
export const TooltipRoot = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;

export const TooltipContent = forwardRef<
	ElementRef<typeof TooltipPrimitive.Content>,
	TooltipPrimitive.TooltipContentProps
>((props, ref) => (
	<TooltipPrimitive.Portal>
		<TooltipPrimitive.Content
			{...props}
			className="hidden select-none rounded-lg bg-gray-3 px-1.5 py-1 text-sm text-gray-11 radix-side-bottom:radix-state-closed:animate-tooltip-close-bottom radix-side-bottom:radix-state-delayed-open:animate-tooltip-open-bottom radix-side-top:radix-state-closed:animate-tooltip-close-top radix-side-top:radix-state-delayed-open:animate-tooltip-open-top md:block"
			ref={ref}
		/>
	</TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
