import { motion, useInView } from 'framer-motion';
import { NextSeo } from 'next-seo';
import { useEffect, useRef } from 'react';
import { useNavbar } from '../components/Navbar';
import { NavbarLinks } from '../components/Navbar/NavbarLinks';
import { Polygon } from '../icons/Polygon';

const variants = {
	initial: {
		opacity: 1
	},
	animate: {
		opacity: 0
	}
};

export default function Home() {
	const { setVisible } = useNavbar();

	const ref = useRef<HTMLDivElement | null>(null);
	const inView = useInView(ref);

	useEffect(() => setVisible(!inView), [inView]);

	return (
		<div className="space-y-8">
			<NextSeo title={undefined} defaultTitle="screfy – Software Engineer" />

			<motion.div
				ref={ref}
				className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0"
				variants={variants}
				initial="initial"
				animate={inView ? 'initial' : 'animate'}
				transition={{ duration: 0.6, ease: 'easeInOut' }}
			>
				<div className="flex items-center space-x-4">
					<Polygon width="64" height="64" />

					<div>
						<h1 className="text-3xl font-bold">screfy</h1>
						<p className="text-gray-11">Software Engineer</p>
					</div>
				</div>

				<NavbarLinks />
			</motion.div>

			<p>
				Welcome to my small corner of the internet. I'm screfy, and I'm a
				self-taught software engineer interested in web and serverless
				technologies and DevOps practices.
			</p>
		</div>
	);
}
