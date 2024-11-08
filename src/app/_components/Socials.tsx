'use client';

import { GithubLogo, XLogo } from '@phosphor-icons/react';

import { IconLink } from '~/ui/IconLink.tsx';

export function Socials() {
	return (
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
	);
}
