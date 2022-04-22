import Image from 'next/image';
import { ProjectDocument } from '../../../.contentlayer/generated';
import Heading from '../Heading';

export default function Project({
	name,
	role,
	description,
	image,
	url
}: ProjectDocument) {
	return (
		<a
			className="flex flex-col space-y-4 rounded-lg border border-gray-200 bg-white p-4 transition-transform hover:scale-[1.02] dark:border-gray-600 dark:bg-gray-800"
			href={url}
			title={`Open ${name} project homepage`}
			aria-label={`Open ${name} project homepage`}
			target="_blank"
			rel="noreferrer"
		>
			<div className="flex items-center space-x-4">
				<Image
					className="rounded-lg"
					height="64px"
					width="64px"
					src={image}
					alt={`${name} Logo`}
				/>

				<div className="flex flex-col">
					<Heading as="h5">{name}</Heading>

					<p className="text-sm text-gray-600 dark:text-gray-100">{role}</p>
				</div>
			</div>

			<div className="flex flex-col">
				<Heading as="h5">About</Heading>

				<p className="text-sm">{description}</p>
			</div>
		</a>
	);
}
