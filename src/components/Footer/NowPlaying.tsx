import { useLanyard } from 'react-use-lanyard';
import Spotify from '../icons/Spotify';
import Bars from '../Spotify/Bars';

export default function NowPlaying() {
  const { status } = useLanyard({ userId: '363406775925604352', socket: true });

  return (
    <div className="flex items-center space-x-2">
      {status?.spotify ? <Bars /> : <Spotify size="16" />}

      <div className="inline-flex space-x-2 max-w-sm">
        {status?.spotify ? (
          <a
            className="font-medium text-white truncate"
            href={`https://open.spotify.com/track/${status.spotify.track_id}`}
            target="_blank"
            rel="noreferrer"
          >
            {status.spotify.song}
          </a>
        ) : (
          <p className="font-medium text-white">Not Playing</p>
        )}
        <span>–</span>
        <p className="truncate">{status?.spotify ? status.spotify.artist : 'Spotify'}</p>
      </div>
    </div>
  );
}
