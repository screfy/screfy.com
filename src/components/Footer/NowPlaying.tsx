import { useLanyard } from 'react-use-lanyard';
import Spotify from '../icons/Spotify';
import Bars from '../Spotify/Bars';

export default function NowPlaying() {
	const { status } = useLanyard({ userId: '363406775925604352', socket: true });

	return (
		<div className="flex flex-row-reverse items-center justify-between sm:flex-row sm:justify-start sm:space-x-2">
			{status?.spotify ? <Bars /> : <Spotify size={16} />}

			<div className="inline-flex max-w-[15rem] flex-col sm:max-w-md sm:flex-row sm:space-x-2">
				{status?.spotify ? (
					<a
						className="truncate font-medium text-gray-600 dark:text-white"
						href={`https://open.spotify.com/track/${status.spotify.track_id}`}
						target="_blank"
						rel="noreferrer"
					>
						{status.spotify.song}
					</a>
				) : (
					<p className="font-medium text-gray-600 dark:text-white">
						Not Playing
					</p>
				)}
				<span className="hidden sm:block">–</span>
				<p className="truncate">
					{status?.spotify ? status.spotify.artist : 'Spotify'}
				</p>
			</div>
		</div>
	);
}
