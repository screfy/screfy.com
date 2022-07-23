import { pick } from 'contentlayer/client';
import { allSites } from '../../.contentlayer/generated';
import { InferGetStaticPropsType } from 'next';
import { Site } from '../components/Site';

export type DesignProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Design({ sites }: DesignProps) {
	return (
		<div className="space-y-8">
			<div className="space-y-5">
				<h1 className="text-2xl font-bold">Design</h1>
				<p>Below you can find a collection of sites I like.</p>
			</div>

			<div className="[&>div:last-child>div]:border-none">
				{sites.map((props, i) => (
					<Site key={i} {...props} />
				))}
			</div>
		</div>
	);
}

export function getStaticProps() {
	const sites = allSites.map((site) =>
		pick(site, ['title', 'url', 'sanitizedUrl', 'baseUrl', 'date'])
	);

	return {
		props: {
			sites
		}
	};
}
