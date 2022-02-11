import {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_REFRESH_TOKEN,
} from '../constants';
import { TrackData } from '../types';

const SPOTIFY_BASIC_TOKEN = Buffer.from(
  `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
).toString('base64');
const SPOTIFY_TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const SPOTIFY_TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;

interface SpotifyTrack {
  name: string;
  external_urls: { spotify: string };
  album: { name: string; images: { url: string }[] };
  artists: { name: string }[];
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
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    }),
  });
  const { access_token } = await res.json();

  return access_token;
}

export async function getTopTracks(): Promise<TrackData[] | undefined> {
  const token = await getAccessToken();

  if (!token) {
    return;
  }

  const res = await fetch(SPOTIFY_TOP_TRACKS_ENDPOINT, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const { items } = await res.json();

  if (!items) {
    return;
  }

  const tracks = (items as SpotifyTrack[])
    .slice(0, 10)
    .map(({ name, external_urls, album, artists }) => ({
      name: name,
      url: external_urls.spotify,
      album: album.name,
      artist: artists.map((artist) => artist.name).join(', '),
      image: album.images[2].url,
    }));

  return tracks;
}
