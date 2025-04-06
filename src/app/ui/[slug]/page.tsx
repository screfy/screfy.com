import { ArrowUUpLeft, WarningCircle } from '@phosphor-icons/react/dist/ssr';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';

import type { InferStaticParams } from '~/types.ts';
import { Heading } from '~/ui/Heading.tsx';
import { cx } from '~/utils/cx.ts';

import { getPrototypeBySlug, getPrototypes } from '../prototypes.ts';

type Props = {
	params: InferStaticParams<typeof generateStaticParams>;
};

export async function generateStaticParams() {
	const prototypes = await getPrototypes();
	return prototypes.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
	params,
}: Props): Promise<Metadata | undefined> {
	const { slug } = await params;

	const prototype = await getPrototypeBySlug(slug);

	if (!prototype) {
		return;
	}

	return {
		title: prototype.title,
		description: prototype.description,
		openGraph: {
			title: prototype.title,
			description: prototype.description,
		},
	};
}

function PaginationLink({
	className,
	label,
	href,
	children,
}: {
	className?: string;
	label: string;
	href: string;
	children: ReactNode;
}) {
	return (
		<Link
			className={cx('group flex flex-col select-none', className)}
			href={href}
		>
			<span className="mb-0.5 text-sm transition-colors group-hover:text-zinc-700">
				{label}
			</span>
			<span className="text-zinc-900">{children}</span>
		</Link>
	);
}

export default async function Prototype({ params }: Props) {
	const { slug } = await params;

	const prototype = await getPrototypeBySlug(slug);

	if (!prototype) {
		return notFound();
	}

	return (
		<>
			<div className="mb-8 xl:absolute xl:top-[6.125rem] xl:left-36 xl:mb-0 2xl:left-80">
				<Link
					className="flex items-center gap-2 text-sm transition-colors hover:text-zinc-800"
					href="/"
				>
					<ArrowUUpLeft size={14} aria-hidden />
					<span>Home</span>
				</Link>
			</div>

			<Heading>{prototype.title}</Heading>
			<p className="mt-3 mb-12">{prototype.description}</p>

			{prototype.requiresPointer && (
				<div className="mb-6 flex w-full items-center gap-2 rounded-xl border border-orange-200 bg-orange-50 px-3 py-1.5 text-sm text-orange-600 md:hidden">
					<WarningCircle className="shrink-0" weight="fill" size={20} />
					<p>This prototype requires a pointer device.</p>
				</div>
			)}

			{prototype.content}

			{(prototype.previous || prototype.next) && (
				<div className="mt-12 flex justify-between">
					{prototype.previous && (
						<PaginationLink
							label="Previous"
							href={`/ui/${prototype.previous.slug}`}
						>
							{prototype.previous.title}
						</PaginationLink>
					)}
					{prototype.next && (
						<PaginationLink
							className={cx('items-end', !prototype.previous && 'ml-auto')}
							label="Next"
							href={`/ui/${prototype.next.slug}`}
						>
							{prototype.next.title}
						</PaginationLink>
					)}
				</div>
			)}
		</>
	);
}
