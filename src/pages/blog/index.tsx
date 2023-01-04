import { pick } from 'contentlayer/client';
import { compareDesc } from 'date-fns';
import { InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { allPosts } from '../../../.contentlayer/generated';
import { ArrowRight } from '../../icons/ArrowRight';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

function PostItem({
	title,
	summary,
	slug,
	publishedAtHuman,
	meta,
}: Props['posts'][number]) {
	return (
		<Link
			className="group block w-full select-none rounded-xl px-4 py-3.5 transition-colors hover:bg-gray-2"
			href={`/blog/${slug}`}
		>
			<div className="flex items-center gap-1.5 text-sm leading-tight text-gray-10">
				<span>{publishedAtHuman}</span>
				<span>·</span>
				<span>{meta.text}</span>
			</div>

			<h2 className="text-2xl font-medium">{title}</h2>

			<p className="mt-1 text-gray-11">{summary}</p>

			<div className="mt-2 flex items-center gap-1 text-base font-medium">
				<span>Read article</span>
				<ArrowRight
					className="transition-transform will-change-transform group-hover:translate-x-1"
					width="16"
					height="16"
				/>
			</div>
		</Link>
	);
}

export default function Blog({ posts }: Props) {
	return (
		<>
			<NextSeo title="Blog" />

			<h1 className="mb-4 text-4xl font-bold">Blog</h1>

			<p>
				A space for exploring my mind. Here, I share everything what I know
				about TypeScript, React, serverless technologies, and DevOps practices.
			</p>

			<div className="-mx-4 mt-8 space-y-6 px-1 sm:px-0">
				{posts.map((props, i) => (
					<PostItem key={i} {...props} />
				))}
			</div>
		</>
	);
}

export function getStaticProps() {
	const posts = allPosts
		.map((post) =>
			pick(post, [
				'title',
				'summary',
				'slug',
				'publishedAt',
				'publishedAtHuman',
				'meta',
			])
		)
		.sort((a, b) =>
			compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
		);

	return {
		props: {
			posts,
		},
	};
}
