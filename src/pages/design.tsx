import { InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import { allSites } from '../../.contentlayer/generated';
import { ItemList, ItemProps } from '../components/ItemList';

export default function Design({
	sites,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div className="space-y-8">
			<NextSeo title="Design" />

			<div className="space-y-5">
				<h1 className="text-4xl font-bold">Design</h1>
				<p>Below you can find a collection of sites I like.</p>
			</div>

			<ItemList items={sites} size={32} />
		</div>
	);
}

export function getStaticProps() {
	const sites: ItemProps[] = allSites.map(
		({ title, url, sanitizedUrl, imageUrl, createdAtHuman }) => ({
			title,
			url,
			imageUrl,
			subtitle: sanitizedUrl,
			right: createdAtHuman,
		})
	);

	return {
		props: {
			sites,
		},
	};
}
