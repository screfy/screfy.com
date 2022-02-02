import Image from 'next/image';
import { TrackData } from '../../../types';
import Heading from '../../Heading';

export default function Track({ name, url, album, artist, image }: TrackData) {
  return (
    <a
      className="flex items-center space-x-4 rounded-lg border border-gray-200 bg-white p-4 transition-transform hover:scale-[1.02] dark:border-gray-600 dark:bg-gray-800"
      href={url}
      title={`Link to Spotify song ${name}`}
      aria-label={`Link to Spotify song ${name}`}
      target="_blank"
      rel="noreferrer"
    >
      <Image
        className="rounded-lg"
        width={64}
        height={64}
        src={image}
        alt={`Image of album ${album}`}
        title={`Image of album ${album}`}
      />

      <div className="flex flex-1 flex-col truncate">
        <Heading className="truncate" as="h5">
          {name}
        </Heading>

        <p className="truncate text-sm">
          {artist} · {album}
        </p>
      </div>
    </a>
  );
}
