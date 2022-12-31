import { pick } from 'contentlayer/client';
import { compareDesc } from 'date-fns';
import { InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { allPosts } from '../../../.contentlayer/generated';
import { PostMeta } from '../../components/PostMeta';

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
			className="block w-full rounded-xl bg-gray-2 px-4 py-3.5 transition-colors hover:bg-gray-3"
			href={`/blog/${slug}`}
		>
			<h2 className="text-2xl font-medium">{title}</h2>

			<PostMeta data={[publishedAtHuman, meta.text]} />

			<p className="mt-4 text-gray-11">{summary}</p>
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

			<div className="-mx-4 mt-8 space-y-5 px-2 sm:px-0">
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
