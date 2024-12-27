import type { ComponentProps } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

export type HeadingProps = ComponentProps<'h1'> &
	VariantProps<typeof headingStyles> & {
		as?: `h${1 | 2 | 3 | 4 | 5 | 6}`;
	};

const headingStyles = tv({
	variants: {
		level: {
			h1: 'text-xl font-medium text-zinc-900',
		},
	},
	defaultVariants: {
		level: 'h1',
	},
});

export function Heading({
	className,
	level = 'h1',
	as,
	...props
}: HeadingProps) {
	const Component = as ? as : level;

	return (
		<Component className={headingStyles({ className, level })} {...props} />
	);
}
