import { pick } from 'contentlayer/client';
import { allPosts, type Post } from '../../../../.contentlayer/generated';
import { Seo } from '../../../components/Seo';
import { generateOpenGraphImage } from '../../../utils/open-graph';

export default function Head({ params }: { params: { slug: string } }) {
	const post = pick(
		allPosts.find((post) => post.slug === params.slug) as Post,
		['title', 'summary', 'publishedAtHuman'],
	);

	return (
		<Seo
			title={post.title}
			description={post.summary}
			image={generateOpenGraphImage({
				title: post.title,
				date: post.publishedAtHuman,
			})}
		/>
	);
}
