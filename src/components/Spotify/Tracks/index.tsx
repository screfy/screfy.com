import useSWR from 'swr';
import { TracksResponse } from '../../../types';
import { fetcher } from '../../../utils/fetcher';
import Track from './Track';
import TrackSkeleton from './TrackSkeleton';

export default function Tracks() {
  const { data } = useSWR<TracksResponse>('/api/tracks', fetcher);

  return (
    <div className="grid auto-cols-max grid-cols-1 gap-3 lg:grid-cols-2">
      {data?.data ? (
        data.data.map((track) => <Track key={track.name} {...track} />)
      ) : (
        <>
          <TrackSkeleton />
          <TrackSkeleton />
          <TrackSkeleton />
          <TrackSkeleton />
        </>
      )}
    </div>
  );
}
