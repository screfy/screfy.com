import { pick } from 'contentlayer/client';
import { useInView } from 'framer-motion';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import { useEffect, useRef } from 'react';
import { allPosts, Post as PostType } from '../../../.contentlayer/generated';
import { components } from '../../components/MdxComponents';
import { PostMeta } from '../../components/PostMeta';
import { useMdxComponent } from '../../hooks/use-mdx-component';
import { useNavbar } from '../../hooks/use-navbar';
import { generateOpenGraphImage } from '../../utils/open-graph';

export default function Post({
	post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const MdxComponent = useMdxComponent(post.body.code);

	const { setTitle } = useNavbar();

	const ref = useRef<HTMLHeadingElement | null>(null);
	const inView = useInView(ref);

	useEffect(() => {
		setTitle(inView ? undefined : post.title);

		return () => {
			setTitle(undefined);
		};
	}, [inView]);

	return (
		<>
			<NextSeo
				title={post.title}
				description={post.summary}
				openGraph={{
					images: [
						{
							url: generateOpenGraphImage({
								title: post.title,
								date: post.publishedAtHuman,
							}),
						},
					],
				}}
			/>

			<h1 ref={ref} className="mb-2 text-4xl font-bold">
				{post.title}
			</h1>

			<PostMeta
				data={[
					post.publishedAtHuman,
					post.meta.text,
					`${post.meta.words} words`,
				]}
			/>

			<div className="mt-14">
				<MdxComponent components={components} />
			</div>
		</>
	);
}

export function getStaticPaths() {
	return {
		paths: allPosts.map(({ slug }) => ({ params: { slug } })),
		fallback: false,
	};
}

export function getStaticProps(ctx: GetStaticPropsContext) {
	const post = pick(
		allPosts.find(({ slug }) => slug === ctx.params?.slug) as PostType,
		['title', 'summary', 'body', 'publishedAtHuman', 'meta']
	);

	return {
		props: { post },
	};
}
