import Image from 'next/image';
import { ArrowTopRight } from '../icons/ArrowTopRight';
import { DesignProps } from '../pages/design';

export function Site({
	title,
	url,
	sanitizedUrl,
	baseUrl,
	date
}: DesignProps['sites'][number]) {
	return (
		<div className="group flex items-center space-x-4">
			<Image
				src={`https://s2.googleusercontent.com/s2/favicons?domain=${baseUrl}&sz=32`}
				width="32"
				height="32"
				quality="95"
				alt={`${sanitizedUrl} icon`}
			/>

			<div className="flex w-full items-center justify-between border-b border-gray-6 py-5">
				<div>
					<a
						className="-mx-1 flex w-fit items-center space-x-1 rounded-md px-1 font-medium transition-colors hover:bg-gray-3"
						href={url}
						target="_blank"
						rel="noreferrer"
					>
						<span>{title}</span>

						<ArrowTopRight
							width="14"
							height="14"
							className="opacity-0 transition-opacity group-hover:opacity-100"
						/>
					</a>

					<p className="text-base leading-none text-gray-11">{sanitizedUrl}</p>
				</div>

				<p className="text-sm text-gray-11">
					{new Date(date).toLocaleDateString(undefined, {
						month: 'long',
						year: 'numeric'
					})}
				</p>
			</div>
		</div>
	);
}
