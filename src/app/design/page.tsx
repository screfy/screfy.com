import { pick } from 'contentlayer/client';
import Image from 'next/image';
import { allSites, type Site } from '../../../.contentlayer/generated';

function Website({
	title,
	url,
	createdAtHuman,
	sanitizedUrl,
	imageUrl,
}: Pick<
	Site,
	'title' | 'url' | 'createdAtHuman' | 'sanitizedUrl' | 'imageUrl'
>) {
	return (
		<li>
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
		</li>
	);
}

export default function Page() {
	const sites = allSites.map((site) =>
		pick(site, ['title', 'url', 'createdAtHuman', 'sanitizedUrl', 'imageUrl'])
	);

	return (
		<>
			<h1 className="mb-4 text-4xl font-bold">Design</h1>

			<p>Below you can find a collection of sites I like.</p>

			<ul className="-mx-4 mt-8 space-y-1 px-1 sm:px-0">
				{sites.map((props, i) => (
					<Website key={i} {...props} />
				))}
			</ul>
		</>
	);
}
