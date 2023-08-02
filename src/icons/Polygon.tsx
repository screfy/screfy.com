import { forwardRef } from 'react';
import type { IconProps } from './icon-props';

export const Polygon = forwardRef<SVGSVGElement, Omit<IconProps, 'color'>>(
	(props, ref) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="none"
			viewBox="0 0 24 24"
			{...props}
			ref={ref}
		>
			<path
				fill="url(#a)"
				d="M9.245 2.002a4.687 4.687 0 0 1 5.51 0l5.902 4.288a4.687 4.687 0 0 1 1.703 5.24l-2.254 6.94a4.687 4.687 0 0 1-4.458 3.238H8.352a4.687 4.687 0 0 1-4.458-3.239L1.64 11.531A4.687 4.687 0 0 1 3.342 6.29l5.903-4.288Z"
			/>
			<defs>
				<linearGradient
					id="a"
					x1="1.219"
					x2="20.578"
					y1="-3.75"
					y2="22.969"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#A0A0A0" />
					<stop offset="1" stopColor="#2B2B2B" />
				</linearGradient>
			</defs>
		</svg>
	),
);
