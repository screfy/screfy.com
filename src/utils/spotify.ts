import { format } from 'date-fns';
import { ItemProps } from '../components/ItemList';

const SPOTIFY_BASIC_TOKEN = Buffer.from(
	`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
).toString('base64');
const SPOTIFY_TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const SPOTIFY_TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;

interface SpotifyTrack {
	name: string;
	external_urls: { spotify: string };
	album: { name: string; images: { url: string }[] };
	duration_ms: number;
}

async function getAccessToken(): Promise<string | undefined> {
	const res = await fetch(SPOTIFY_TOKEN_ENDPOINT, {
		method: 'POST',
		headers: {
			authorization: `Basic ${SPOTIFY_BASIC_TOKEN}`,
			'content-type': 'application/x-www-form-urlencoded'
		},
		body: new URLSearchParams({
			grant_type: 'refresh_token',
			refresh_token: process.env.SPOTIFY_REFRESH_TOKEN as string
		})
	});
	const { access_token } = await res.json();

	return access_token;
}

export async function getTopTracks(): Promise<ItemProps[]> {
	const token = await getAccessToken();

	if (!token) {
		return [];
	}

	const res = await fetch(SPOTIFY_TOP_TRACKS_ENDPOINT, {
		headers: {
			authorization: `Bearer ${token}`
		}
	});
	const { items } = await res.json();

	if (!items) {
		return [];
	}

	const tracks = (items as SpotifyTrack[])
		.slice(0, 10)
		.map(({ name, external_urls, album, duration_ms }) => ({
			title: name,
			subtitle: album.name,
			right: format(new Date(duration_ms), 'mm:ss'),
			url: external_urls.spotify,
			imageUrl: album.images[2].url
		}));

	return tracks;
}
