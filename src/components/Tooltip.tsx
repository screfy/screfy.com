import * as TooltipPrimitive from '@radix-ui/react-tooltip';

export const TooltipProvider = TooltipPrimitive.Provider;
export const TooltipRoot = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;

export function TooltipContent(props: TooltipPrimitive.TooltipContentProps) {
	return (
		<TooltipPrimitive.Portal>
			<TooltipPrimitive.Content
				className="hidden select-none rounded-lg bg-gray-3 px-1.5 py-1 text-sm text-gray-11 radix-side-bottom:radix-state-closed:animate-tooltip-close-bottom radix-side-bottom:radix-state-delayed-open:animate-tooltip-open-bottom radix-side-top:radix-state-closed:animate-tooltip-close-top radix-side-top:radix-state-delayed-open:animate-tooltip-open-top md:block"
				{...props}
			/>
		</TooltipPrimitive.Portal>
	);
}
