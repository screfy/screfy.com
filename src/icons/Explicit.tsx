import { forwardRef } from 'react';
import type { IconProps } from './icon-props';

export const Explicit = forwardRef<SVGSVGElement, IconProps>(
	({ color = 'currentColor', ...props }, ref) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			fill={color}
			viewBox="0 0 24 24"
			{...props}
			ref={ref}
		>
			<path fill="none" d="M0 0h24v24H0z" />
			<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h4v2h-4v2h4v2H9V7h6v2z" />
		</svg>
	),
);
