import path from 'node:path';
import { compareDesc } from 'date-fns';
import type { ReactNode } from 'react';

import { getFileName, listMDXFiles, readMDXFile } from '~/utils/mdx.ts';

import { MagnifiedDock } from './_components/MagnifiedDock.tsx';

type PrototypeFrontmatter = {
	title: string;
	description: string;
	requiresPointer?: boolean;
	publishedAt: Date;
};

type PrototypePage = {
	slug: string;
	title: string;
};

type Prototype = PrototypeFrontmatter & {
	slug: string;
	content: ReactNode;
	previous?: PrototypePage;
	next?: PrototypePage;
};

const PROTOTYPES_DIR = path.join(
	process.cwd(),
	'src',
	'app',
	'ui',
	'_prototypes'
);

export async function getPrototypes(): Promise<Prototype[]> {
	const files = listMDXFiles(PROTOTYPES_DIR);

	const prototypes = await Promise.all(
		files.map(async (file) => {
			const { content, frontmatter } = await readMDXFile<PrototypeFrontmatter>(
				path.join(PROTOTYPES_DIR, file),
				{ MagnifiedDock }
			);
			return {
				slug: getFileName(file),
				title: frontmatter.title,
				description: frontmatter.description,
				publishedAt: new Date(frontmatter.publishedAt),
				requiresPointer: frontmatter.requiresPointer,
				content,
			};
		})
	);

	prototypes.sort((a, b) => compareDesc(a.publishedAt, b.publishedAt));

	return prototypes.map((prototype, index) => {
		const previous = prototypes[index - 1];
		const next = prototypes[index + 1];

		return {
			...prototype,
			previous: previous
				? { slug: previous.slug, title: previous.title }
				: undefined,
			next: next ? { slug: next.slug, title: next.title } : undefined,
		};
	});
}

export async function getPrototypeBySlug(slug: string) {
	const prototypes = await getPrototypes();
	return prototypes.find((prototype) => prototype.slug === slug);
}
