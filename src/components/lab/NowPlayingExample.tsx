import { Bars } from '../Footer/NowPlaying';

export function NowPlayingExample() {
	return (
		<div className="mt-4 flex justify-center text-base">
			<div className="flex items-center gap-2">
				<Bars />

				<div className="flex gap-1">
					<a
						href="https://open.spotify.com/track/6ZsZxNP4Iwdyp3kd5oFFQN"
						target="_blank"
						rel="noreferrer"
						aria-label="The Grudge"
					>
						The Grudge
					</a>

					<span className="text-gray-11">·</span>

					<p className="text-gray-11">TOOL</p>
				</div>
			</div>
		</div>
	);
}
