import { pick } from 'contentlayer/client';
import { useInView } from 'framer-motion';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { useEffect } from 'react';
import { useRef } from 'react';
import { allPosts, Post as PostType } from '../../../.contentlayer/generated';
import { components } from '../../components/MdxComponents';
import { useNavbar } from '../../components/Navbar';
import { PostMeta } from '../../components/PostMeta';

export default function Post({
	post
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const MDXComponent = useMDXComponent(post.body.code);

	const { setTitle } = useNavbar();

	const ref = useRef<HTMLHeadingElement | null>(null);
	const inView = useInView(ref);

	useEffect(() => {
		setTitle(inView ? undefined : post.title);

		return () => setTitle(undefined);
	}, [inView]);

	return (
		<>
			<div className="space-y-2">
				<h1 ref={ref} className="text-4xl font-bold">
					{post.title}
				</h1>

				<div className="flex items-center space-x-2 text-base text-gray-11">
					<PostMeta
						data={[
							new Date(post.publishedAt).toLocaleDateString('en-US', {
								day: 'numeric',
								month: 'short',
								year: 'numeric'
							}),
							post.meta.text,
							`${post.meta.words} words`
						]}
					/>
				</div>
			</div>

			<div className="space-y-6">
				<MDXComponent components={components} />
			</div>
		</>
	);
}

export function getStaticPaths() {
	return {
		paths: allPosts.map(({ slug }) => ({ params: { slug } })),
		fallback: false
	};
}

export function getStaticProps(ctx: GetStaticPropsContext) {
	const post = pick(
		allPosts.find(({ slug }) => slug === ctx.params?.slug) as PostType,
		['title', 'body', 'publishedAt', 'meta']
	);

	return {
		props: { post }
	};
}
