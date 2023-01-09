import { motion, useInView } from 'framer-motion';
import NextLink from 'next/link';
import { NextSeo } from 'next-seo';
import { useEffect, useRef } from 'react';
import { Link } from '../components/Link';
import { NavbarLinks } from '../components/Navbar/NavbarLinks';
import { useNavbar } from '../hooks/use-navbar';
import { Polygon } from '../icons/Polygon';
import { allProjects } from '../../.contentlayer/generated';
import { pick } from 'contentlayer/client';
import { InferGetStaticPropsType } from 'next';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const variants = {
	initial: {
		opacity: 1,
	},
	animate: {
		opacity: 0,
	},
};

function Project({ title, description, url, year }: Props['projects'][number]) {
	return (
		<NextLink
			className="-my-2 flex select-none items-center gap-2.5 rounded-xl px-4 py-2 transition-colors hover:bg-gray-2"
			href={url}
			target="_blank"
		>
			<p className="font-semibold">{title}</p>

			<p className="hidden text-gray-11 md:block">{description}</p>

			<span className="h-px flex-1 bg-gray-4" />

			<p className="text-gray-11">{year}</p>
		</NextLink>
	);
}

export default function Home({ projects }: Props) {
	const { setVisible } = useNavbar();

	const ref = useRef<HTMLDivElement | null>(null);
	const inView = useInView(ref);

	useEffect(() => setVisible(!inView), [inView]);

	return (
		<>
			<NextSeo title={undefined} defaultTitle="screfy – Software Engineer" />

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

			<p>
				Welcome to my small corner of the internet. I'm screfy, and I'm a
				self-taught software engineer interested in web and serverless
				technologies and DevOps practices.
			</p>

			<h2 className="mt-16 mb-4 text-2xl font-bold">Projects</h2>

			<p>
				Below are some of projects I've worked on. You can find most of my work
				on my <Link href="https://github.com/screfy">GitHub</Link>.
			</p>

			<div className="-mx-4 mt-8 flex flex-col gap-6 px-1 sm:px-0">
				{projects.map((props, i) => (
					<Project {...props} key={i} />
				))}
			</div>
		</>
	);
}

export function getStaticProps() {
	const projects = allProjects.map((project) =>
		pick(project, ['title', 'description', 'url', 'year'])
	);

	return {
		props: {
			projects,
		},
	};
}
