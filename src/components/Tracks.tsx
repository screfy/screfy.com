import useSWR from 'swr';
import { TracksResponse } from '../types';
import { fetcher } from '../utils/fetcher';
import Track from './Spotify/Track';
import TrackSkeleton from './Spotify/Track/TrackSkeleton';

export default function Tracks() {
  const { data } = useSWR<TracksResponse>('/api/tracks', fetcher);

  return (
    <div className="flex flex-col divide-y divide-gray-200">
      {data?.data ? (
        data.data.map((track) => <Track key={track.name} {...track} />)
      ) : (
        <>
          <TrackSkeleton />
          <TrackSkeleton />
          <TrackSkeleton />
        </>
      )}
    </div>
  );
}
