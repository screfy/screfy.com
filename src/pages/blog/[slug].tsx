import clsx from 'clsx';
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

interface TocItemProps {
	size: number;
	content: string;
	slug: string;
}

function TocItem({ size, content, slug }: TocItemProps) {
	return (
		<a
			className={clsx(
				'text-gray-11 transition-colors hover:text-gray-12',
				size === 2 && 'ml-2',
				size === 3 && 'ml-4'
			)}
			href={`#${slug}`}
		>
			{content}
		</a>
	);
}

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

			<div className="space-y-14">
				<div className="space-y-2">
					<h1 ref={ref} className="text-4xl font-bold">
						{post.title}
					</h1>

					<div className="flex items-center space-x-2 text-base text-gray-11">
						<PostMeta
							data={[
								post.publishedAtHuman,
								post.meta.text,
								`${post.meta.words} words`,
							]}
						/>
					</div>
				</div>

				<div className="space-y-6">
					<MdxComponent components={components} />
				</div>
			</div>

			<div className="sticky top-5 !col-start-3 ml-3 hidden max-w-[14rem] space-y-2 self-start text-base xl:block">
				<p className="text-sm uppercase text-gray-9">On this page</p>

				<div className="flex flex-col space-y-1">
					{post.headings.map((props: TocItemProps) => (
						<TocItem key={props.slug} {...props} />
					))}
				</div>
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
		['title', 'summary', 'body', 'publishedAtHuman', 'headings', 'meta']
	);

	return {
		props: { post },
	};
}
