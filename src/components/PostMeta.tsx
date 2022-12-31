import { Fragment } from 'react';

export function PostMeta({ data }: { data: (string | number)[] }) {
	return (
		<div className="flex items-center gap-2 text-base text-gray-11">
			{data.map((value, i) => {
				const divider = i < data.length - 1 && <span>·</span>;

				return (
					<Fragment key={i}>
						<p>{value}</p>
						{divider}
					</Fragment>
				);
			})}
		</div>
	);
}
