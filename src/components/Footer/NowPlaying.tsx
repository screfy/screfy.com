import Link from 'next/link';
import { useLanyard } from 'react-use-lanyard';
import { Spotify } from '../../icons/Spotify';

const DISCORD_USER_ID = '363406775925604352';

export function NowPlaying() {
	const { status } = useLanyard({
		userId: DISCORD_USER_ID,
		socket: true,
	});

	if (!status?.spotify) {
		return null;
	}

	return (
		<Link
			className="bg-spotify-gradient flex select-none items-center justify-center gap-2.5 overflow-hidden rounded-xl px-3 py-1.5 text-gray-12/80"
			href={`https://open.spotify.com/track/${status.spotify.track_id}`}
			target="_blank"
			rel="noreferrer"
			aria-label={status.spotify.song}
		>
			<Spotify
				className="flex-shrink-0 animate-[spin_3s_linear_infinite] text-spotify"
				width="18"
				height="18"
			/>

			<div className="flex gap-1 overflow-hidden">
				<p className="truncate font-medium text-gray-12">
					{status.spotify.song}
				</p>

				<span>·</span>

				<p>{status.spotify.artist}</p>
			</div>
		</Link>
	);
}
