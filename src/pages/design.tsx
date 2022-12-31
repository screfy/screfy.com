import { pick } from 'contentlayer/client';
import { InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import { allSites } from '../../.contentlayer/generated';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

function Website({
	title,
	url,
	createdAtHuman,
	sanitizedUrl,
	imageUrl,
}: Props['sites'][number]) {
	return (
		<a
			className="flex items-center space-x-4 transition-opacity hover:!opacity-100"
			href={url}
			target="_blank"
			rel="noreferrer"
		>
			<Image
				src={imageUrl}
				width={32}
				height={32}
				quality={95}
				alt={`${title} Image`}
			/>

			<div className="flex w-full items-center justify-between border-b border-gray-6 py-5">
				<div>
					<p className="text-base md:text-lg">{title}</p>
					<p className="text-sm leading-none text-gray-11 md:text-base">
						{sanitizedUrl}
					</p>
				</div>

				<p className="text-sm text-gray-11 md:text-base">{createdAtHuman}</p>
			</div>
		</a>
	);
}

export default function Design({ sites }: Props) {
	return (
		<div className="space-y-8">
			<NextSeo title="Design" />

			<div className="space-y-5">
				<h1 className="text-4xl font-bold">Design</h1>
				<p>Below you can find a collection of sites I like.</p>
			</div>

			<div className="[&>a]:hover:opacity-50 [&>a:last-child>div]:border-none">
				{sites.map((props, i) => (
					<Website key={i} {...props} />
				))}
			</div>
		</div>
	);
}

export function getStaticProps() {
	const sites = allSites.map((site) =>
		pick(site, ['title', 'url', 'createdAtHuman', 'sanitizedUrl', 'imageUrl'])
	);

	return {
		props: {
			sites,
		},
	};
}
