import { getLastVisitorLocation } from '~/utils/visitor.ts';

export async function LastVisitor() {
	const location = await getLastVisitorLocation();

	if (!location) {
		return null;
	}

	return (
		<div className="ml-auto flex items-center gap-2">
			<div className="relative size-1.5 shrink-0 rounded-full bg-green-400" />
			<p>
				Last visitor from {location.city}, {location.country}
			</p>
		</div>
	);
}
