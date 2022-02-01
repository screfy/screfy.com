import { NextApiRequest, NextApiResponse } from 'next';
import { TrackData, TracksResponse } from '../../types';
import { cache, CACHE_MAX_AGE } from '../../utils/cache';
import { getTopTracks } from '../../utils/spotify';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TracksResponse | { error: string }>
): Promise<void> {
  let tracks = cache.get('tracks') as TrackData[] | undefined;

  if (!tracks) {
    tracks = await getTopTracks();

    if (!tracks) {
      res.status(500).send({ error: 'internal server error' });

      return;
    }

    cache.set('tracks', tracks);
  }

  res.setHeader(
    'Cache-Control',
    `public, s-maxage=${CACHE_MAX_AGE}, stale-while-revalidate=${
      CACHE_MAX_AGE / 2
    }`
  );

  res.send({ data: tracks });
}
