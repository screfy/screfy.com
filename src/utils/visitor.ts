import { Redis } from '@upstash/redis';
import { headers } from 'next/headers';

type LastVisitorLocation = {
	city: string;
	country: string;
};

const LOCATION_KEY = 'lastVisitorLocation';

const CITY_HEADER_NAME = 'x-vercel-ip-city';
const COUNTRY_HEADER_NAME = 'x-vercel-ip-country';

const redis = Redis.fromEnv();

const decodeHeaderValue = (value: string | null) =>
	value ? decodeURIComponent(value) : null;

export async function getLastVisitorLocation() {
	const location = await redis.get<LastVisitorLocation>(LOCATION_KEY);

	const headersList = await headers();

	const city = decodeHeaderValue(headersList.get(CITY_HEADER_NAME));
	const country = headersList.get(COUNTRY_HEADER_NAME);

	if (
		city &&
		country &&
		(!location || city !== location.city || country !== location.country)
	) {
		await redis.set<LastVisitorLocation>(LOCATION_KEY, { city, country });
	}

	return location;
}
