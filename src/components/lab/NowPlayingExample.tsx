'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

function Bar({
	height,
	scale,
	delay,
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
				repeat: Infinity,
			}}
		/>
	);
}

export function Bars() {
	return (
		<div className="flex items-end gap-0.5">
			<Bar height="h-3" scale={0.2} />
			<Bar height="h-2" scale={0.3} delay={0.1} />
			<Bar height="h-2.5" scale={0.1} delay={0.2} />
			<Bar height="h-2" scale={0.25} delay={0.3} />
		</div>
	);
}

// NOTE: Legacy component for blog post.
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
