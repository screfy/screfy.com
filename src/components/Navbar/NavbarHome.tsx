'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useNavbar } from '../../hooks/use-navbar';
import { Polygon } from '../../icons/Polygon';
import { NavbarLinks } from './NavbarLinks';

const variants = {
	initial: {
		opacity: 1,
	},
	animate: {
		opacity: 0,
	},
};

export function NavbarHome() {
	const { setVisible } = useNavbar();

	const ref = useRef<HTMLDivElement | null>(null);
	const inView = useInView(ref);

	useEffect(() => setVisible(!inView), [inView]);

	return (
		<motion.div
			ref={ref}
			className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center"
			variants={variants}
			initial="initial"
			animate={inView ? 'initial' : 'animate'}
			transition={{ duration: 0.6, ease: 'easeInOut' }}
		>
			<div className="flex items-center gap-4">
				<Polygon width="64" height="64" />

				<div>
					<h1 className="text-3xl font-bold">screfy</h1>
					<p className="text-gray-11">Software Engineer</p>
				</div>
			</div>

			<NavbarLinks />
		</motion.div>
	);
}
