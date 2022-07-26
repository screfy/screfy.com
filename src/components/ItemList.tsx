import clsx from 'clsx';
import Image from 'next/image';

interface ItemListProps {
	items: ItemProps[];
	size?: string | number;
	rounded?: boolean;
}

export interface ItemProps extends Omit<ItemListProps, 'items'> {
	title: string;
	subtitle: string;
	right: string;
	url: string;
	imageUrl: string;
}

function Item({
	title,
	subtitle,
	right,
	url,
	imageUrl,
	size,
	rounded
}: ItemProps) {
	return (
		<a
			className="flex items-center space-x-4 transition-opacity hover:!opacity-100"
			href={url}
			target="_blank"
			rel="noreferrer"
		>
			<Image
				className={clsx(rounded && 'rounded-lg')}
				src={imageUrl}
				width={size}
				height={size}
				quality="95"
				alt={`${title} Image`}
			/>

			<div className="flex w-full items-center justify-between border-b border-gray-6 py-5">
				<div>
					<p className="text-base md:text-lg">{title}</p>
					<p className="text-sm leading-none text-gray-11 md:text-base">
						{subtitle}
					</p>
				</div>

				<p className="text-sm text-gray-11 md:text-base">{right}</p>
			</div>
		</a>
	);
}

export function ItemList({ items, size, rounded = false }: ItemListProps) {
	return (
		<div className="[&>a]:hover:opacity-50 [&>a:last-child>div]:border-none">
			{items.map((props, i) => (
				<Item key={i} {...props} size={size} rounded={rounded} />
			))}
		</div>
	);
}
