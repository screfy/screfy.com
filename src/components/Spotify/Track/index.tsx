import Image from 'next/image';
import { TrackData } from '../../../types';
import Link from '../../Link';

export default function Track({ name, url, album, artist, duration, image }: TrackData) {
  return (
    <div className="flex items-center space-x-3 py-3 first:pt-0 last:pb-0">
      <Image className="rounded-lg" width="64" height="64" src={image} alt={`Album ${album}`}></Image>
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col">
          <Link href={url}>{name}</Link>
          <p>{artist}</p>
        </div>
        <p>{duration}</p>
      </div>
    </div>
  );
}
