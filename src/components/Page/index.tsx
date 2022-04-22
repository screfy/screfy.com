import { motion } from 'framer-motion';
import { NextSeo, NextSeoProps } from 'next-seo';
import { ReactChild } from 'react';
import Heading from '../Heading';

interface Props {
	title: string;
	seo?: NextSeoProps;
	children: ReactChild | ReactChild[];
}

export default function Page({ title, seo, children }: Props) {
	return (
		<motion.main
			className="flex flex-1 flex-col space-y-4"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ type: 'tween', ease: 'anticipate', duration: 0.5 }}
		>
			<NextSeo title={title} {...seo} />

			<Heading as="h1">{title}</Heading>

			<div className="flex flex-col space-y-9">{children}</div>
		</motion.main>
	);
}
