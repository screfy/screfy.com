'use client';

import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { useNavbar } from '../hooks/use-navbar';

export function PostTitle({ title }: { title: string }) {
	const { setTitle } = useNavbar();

	const ref = useRef<HTMLHeadingElement | null>(null);
	const inView = useInView(ref);

	useEffect(() => {
		setTitle(inView ? undefined : title);

		return () => {
			setTitle(undefined);
		};
	}, [inView]);

	return (
		<h1 ref={ref} className="mb-2 text-4xl font-bold">
			{title}
		</h1>
	);
}
