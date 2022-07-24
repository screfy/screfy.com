import { allSites } from '../../.contentlayer/generated';
import { InferGetStaticPropsType } from 'next';
import { ItemList, ItemProps } from '../components/ItemList';

export default function Design({
	sites
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div className="space-y-8">
			<div className="space-y-5">
				<h1 className="text-2xl font-bold">Design</h1>
				<p>Below you can find a collection of sites I like.</p>
			</div>

			<ItemList items={sites} size="32" />
		</div>
	);
}

export function getStaticProps() {
	const sites: ItemProps[] = allSites.map(
		({ title, url, sanitizedUrl, imageUrl, date }) => ({
			title,
			url,
			imageUrl,
			subtitle: sanitizedUrl,
			right: new Date(date).toLocaleDateString('en-US', {
				month: 'long',
				year: 'numeric'
			})
		})
	);

	return {
		props: {
			sites
		}
	};
}
