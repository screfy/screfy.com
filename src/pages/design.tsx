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
			className="relative flex select-none items-center gap-4 rounded-xl px-4 transition-colors hover:bg-gray-2"
			href={url}
			target="_blank"
			rel="noreferrer"
		>
			<Image
				src={imageUrl}
				width={26}
				height={26}
				quality={95}
				alt={`${title} Image`}
			/>

			<div className="flex w-full items-center justify-between py-3">
				<div>
					<p className="text-base md:text-lg">{title}</p>
					<p className="hidden text-base leading-none text-gray-11 md:block">
						{sanitizedUrl}
					</p>
				</div>

				<p className="text-xs text-gray-11 md:text-sm">{createdAtHuman}</p>
			</div>
		</a>
	);
}

export default function Design({ sites }: Props) {
	return (
		<>
			<NextSeo title="Design" />

			<h1 className="mb-4 text-4xl font-bold">Design</h1>

			<p>Below you can find a collection of sites I like.</p>

			<div className="-mx-4 mt-8 space-y-1 px-1 sm:px-0">
				{sites.map((props, i) => (
					<Website key={i} {...props} />
				))}
			</div>
		</>
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
