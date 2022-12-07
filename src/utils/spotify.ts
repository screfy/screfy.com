const SPOTIFY_BASIC_TOKEN = Buffer.from(
	`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
).toString('base64');
const SPOTIFY_TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const SPOTIFY_TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;

interface SpotifyTrack {
	id: string;
	name: string;
	external_urls: { spotify: string };
	album: { name: string; images: { url: string }[] };
	artists: { name: string }[];
	explicit: boolean;
}

export interface TrackProps {
	id: string;
	name: string;
	album: string;
	artist: string;
	spotifyUrl: string;
	albumImageUrl: string;
	explicit: boolean;
}

async function getAccessToken(): Promise<string | undefined> {
	const res = await fetch(SPOTIFY_TOKEN_ENDPOINT, {
		method: 'POST',
		headers: {
			authorization: `Basic ${SPOTIFY_BASIC_TOKEN}`,
			'content-type': 'application/x-www-form-urlencoded',
		},
		body: new URLSearchParams({
			grant_type: 'refresh_token',
			refresh_token: process.env.SPOTIFY_REFRESH_TOKEN as string,
		}),
	});
	const { access_token } = await res.json();

	return access_token;
}

export async function getTopTracks(): Promise<TrackProps[]> {
	const token = await getAccessToken();

	if (!token) {
		return [];
	}

	const res = await fetch(SPOTIFY_TOP_TRACKS_ENDPOINT, {
		headers: {
			authorization: `Bearer ${token}`,
		},
	});
	const { items } = await res.json();

	if (!items) {
		return [];
	}

	const tracks = (items as SpotifyTrack[])
		.slice(0, 10)
		.map(({ id, name, external_urls, album, artists, explicit }) => ({
			id,
			name,
			album: album.name,
			artist: artists.map((artist) => artist.name).join(', '),
			spotifyUrl: external_urls.spotify,
			albumImageUrl: album.images[1].url,
			explicit,
		}));

	return tracks;
}
