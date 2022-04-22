// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function groupBy<T, K extends keyof any>(
	arr: T[],
	getKey: (item: T) => K
) {
	return arr.reduce((previous, current) => {
		const group = getKey(current);

		if (!previous[group]) {
			previous[group] = [];
		}

		previous[group].push(current);

		return previous;
	}, {} as Record<K, T[]>);
}
