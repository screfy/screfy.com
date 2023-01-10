import { TooltipTrigger } from '@radix-ui/react-tooltip';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanyard } from 'react-use-lanyard';
import { Spotify } from '../../icons/Spotify';
import { TooltipContent, TooltipProvider, TooltipRoot } from '../Tooltip';

const DISCORD_USER_ID = '363406775925604352';

export function NowPlaying() {
	const { status } = useLanyard({
		userId: DISCORD_USER_ID,
		socket: true,
	});

	return (
		<AnimatePresence>
			{status?.spotify ? (
				<motion.a
					className="flex origin-bottom select-none items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gray-2 px-3 py-1.5 text-gray-11 md:origin-bottom-right"
					href={`https://open.spotify.com/track/${status.spotify.track_id}`}
					target="_blank"
					rel="noreferrer"
					aria-label={status.spotify.song}
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.8 }}
					transition={{ duration: 0.3, ease: 'easeInOut' }}
				>
					<Spotify
						className="flex-shrink-0 animate-[spin_3s_linear_infinite] text-spotify"
						width="18"
						height="18"
					/>

					<div className="flex gap-1 overflow-hidden">
						<TooltipProvider delayDuration={500}>
							<TooltipRoot>
								<TooltipTrigger asChild>
									<span className="truncate font-medium text-gray-12">
										{status.spotify.song}
									</span>
								</TooltipTrigger>

								<TooltipContent sideOffset={12}>
									{status.spotify.song}
								</TooltipContent>
							</TooltipRoot>
						</TooltipProvider>

						<span>·</span>

						<TooltipProvider delayDuration={500}>
							<TooltipRoot>
								<TooltipTrigger asChild>
									<span className="truncate">{status.spotify.artist}</span>
								</TooltipTrigger>

								<TooltipContent sideOffset={12}>
									{status.spotify.artist}
								</TooltipContent>
							</TooltipRoot>
						</TooltipProvider>
					</div>
				</motion.a>
			) : null}
		</AnimatePresence>
	);
}
