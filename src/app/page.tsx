import { GithubLogo, XLogo } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import type { ReactNode } from 'react';

import { Heading } from '~/ui/Heading.tsx';
import { IconLink } from '~/ui/IconLink.tsx';
import { formatMonth } from '~/utils/date.ts';

import { Project } from './_components/Project.tsx';
import { VinylRecord } from './_components/VinylRecord.tsx';
import { getPrototypes } from './ui/prototypes.ts';

function Section({ title, children }: { title: string; children: ReactNode }) {
	return (
		<>
			<Heading className="mb-4 mt-12" as="h2">
				{title}
			</Heading>

			{children}
		</>
	);
}

export default async function Home() {
	const prototypes = await getPrototypes();

	return (
		<>
			<Heading className="mb-1">screfy</Heading>
			<p>Software Engineer</p>

			<p className="mt-12">
				I’m a self-taught software engineer with a passion for web development,
				design engineering, and crafting delightful interfaces.
			</p>

			<p className="mt-4">
				You can find me on{' '}
				<IconLink
					href="https://x.com/screfy_"
					icon={XLogo}
					label="Link to my X profile"
				/>
				, or checkout my latest projects on{' '}
				<IconLink
					href="https://github.com/screfy"
					icon={GithubLogo}
					label="Link to my GitHub profile"
				/>
				.
			</p>

			<Section title="Projects">
				<ul className="-mx-4 space-y-2">
					<Project
						name="Heave"
						description="Stay close while you're apart"
						src="/previews/heave.webp"
						year={2023}
					/>
					<Project
						name="Maskbox"
						description="Protect your inbox from spam and data leaks"
						href="https://maskbox.app"
						src="/previews/maskbox.webp"
						year={2022}
					/>
				</ul>
			</Section>

			<div className="mt-12 flex flex-col items-center gap-8 md:flex-row md:gap-12">
				<div className="space-y-4">
					<Heading as="h2">Music</Heading>
					<p>
						Beyond coding, I'm enjoying listening to music. It’s a steady source
						of motivation and inspiration, bringing a creative rhythm to my day.
					</p>
					<p>
						Whether I’m deep in work or unwinding, music fuels my focus and
						keeps the inspiration flowing.
					</p>
				</div>

				<VinylRecord />
			</div>

			<Section title="Interfaces">
				<ul className="-mx-4 space-y-2">
					{prototypes.map(
						({ slug, title, description, publishedAt }, index) => (
							<li key={index}>
								<Link
									className="block select-none space-y-1 rounded-lg px-4 py-2 transition-colors hover:bg-zinc-100"
									href={`/ui/${slug}`}
								>
									<div className="flex items-center justify-between">
										<p className="font-medium text-zinc-900">{title}</p>
										<p className="text-sm">{formatMonth(publishedAt)}</p>
									</div>
									<p>{description}</p>
								</Link>
							</li>
						)
					)}
				</ul>
			</Section>
		</>
	);
}
