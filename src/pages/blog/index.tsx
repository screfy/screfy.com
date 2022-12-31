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
			className="block w-full space-y-4 rounded-xl bg-gray-2 px-4 py-3.5 transition-colors hover:bg-gray-3"
			href={`/blog/${slug}`}
		>
			<div>
				<h2 className="text-2xl font-medium">{title}</h2>

				<div className="flex items-center space-x-2 text-base text-gray-10">
					<PostMeta data={[publishedAtHuman, meta.text]} />
				</div>
			</div>

			<p className="text-gray-11">{summary}</p>
		</Link>
	);
}

export default function Blog({ posts }: Props) {
	return (
		<div className="space-y-8">
			<NextSeo title="Blog" />

			<div className="space-y-5">
				<h1 className="text-4xl font-bold">Blog</h1>

				<p>
					A space for exploring my mind. Here, I share everything what I know
					about TypeScript, React, serverless technologies, and DevOps
					practices.
				</p>
			</div>

			<div className="-mx-4 space-y-5 px-2 sm:px-0">
				{posts.map((props, i) => (
					<PostItem key={i} {...props} />
				))}
			</div>
		</div>
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
