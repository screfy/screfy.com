'use client';

import clsx from 'clsx';
import NextImage, { type ImageProps } from 'next/image';
import { useState } from 'react';

export function Image(props: ImageProps & { caption?: string }) {
	const [loading, setLoading] = useState(true);

	return (
		<div className="my-6 text-center">
			<div className="mb-3 flex w-fit overflow-hidden rounded-xl bg-gray-2">
				<NextImage
					{...props}
					className={clsx(
						'rounded-lg duration-700 ease-in-out',
						loading ? 'blur-md grayscale' : 'blur-0 grayscale-0'
					)}
					onLoadingComplete={async () => setLoading(false)}
				/>
			</div>

			<p className="text-base text-gray-11">{props.caption}</p>
		</div>
	);
}
