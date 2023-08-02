import { pick } from 'contentlayer/client';
import {
	allPosts,
	type Post as PostType,
} from '../../../../.contentlayer/generated';
import { components } from '../../../components/MdxComponents';
import { PostTitle } from '../../../components/PostTitle';
import { useMdxComponent } from '../../../hooks/use-mdx-component';

export default function Page({ params }: { params: { slug: string } }) {
	const post = pick(
		allPosts.find((post) => post.slug === params.slug) as PostType,
		['title', 'summary', 'body', 'publishedAtHuman', 'meta'],
	);

	const MdxComponent = useMdxComponent(post.body.code);

	return (
		<>
			<PostTitle title={post.title} />

			<div className="flex items-center gap-2 text-base text-gray-11">
				<span>{post.publishedAtHuman}</span>
				<span>·</span>
				<span>{post.meta.text}</span>
				<span>·</span>
				<span>{post.meta.words} words</span>
			</div>

			<div className="mt-14">
				<MdxComponent components={components} />
			</div>
		</>
	);
}

export function generateStaticParams() {
	return allPosts.map((post) => ({
		slug: post.slug,
	}));
}
