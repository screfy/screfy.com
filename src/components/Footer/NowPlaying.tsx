import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useLanyard } from 'react-use-lanyard';
import { Spotify } from '../../icons/Spotify';

const DISCORD_USER_ID = '363406775925604352';

function Bar({
	height,
	scale,
	delay
}: {
	height: string;
	scale: number;
	delay?: number;
}) {
	return (
		<motion.span
			className={clsx(height, 'w-0.5 origin-bottom bg-spotify')}
			initial={{ scaleY: 1 }}
			animate={{ scaleY: [1, scale, 1] }}
			transition={{
				delay,
				duration: 0.5,
				ease: 'easeInOut',
				repeat: Infinity
			}}
		/>
	);
}

export function Bars() {
	return (
		<div className="flex items-end space-x-0.5">
			<Bar height="h-3" scale={0.2} />
			<Bar height="h-2" scale={0.3} delay={0.1} />
			<Bar height="h-2.5" scale={0.1} delay={0.2} />
			<Bar height="h-2" scale={0.25} delay={0.3} />
		</div>
	);
}

export function NowPlaying() {
	const { data } = useLanyard({
		userId: DISCORD_USER_ID
	});

	return (
		<div className="flex items-center space-x-2">
			{data?.data.spotify ? (
				<Bars />
			) : (
				<Spotify className="text-spotify" width="16" height="16" />
			)}

			<div className="flex space-x-1">
				{data?.data.spotify?.song ? (
					<a
						href={`https://open.spotify.com/track/${data.data.spotify.track_id}`}
						target="_blank"
						rel="noreferrer"
						aria-label={data.data.spotify.song}
					>
						{data?.data.spotify.song}
					</a>
				) : (
					<p>Not playing</p>
				)}
				<span className="text-gray-11">·</span>
				<p className="text-gray-11">
					{data?.data.spotify?.artist ? data?.data.spotify.artist : 'Spotify'}
				</p>
			</div>
		</div>
	);
}
