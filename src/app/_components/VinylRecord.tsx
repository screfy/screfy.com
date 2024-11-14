'use client';

import { motion, useMotionValue, type Variants } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';

type BarVariantData = {
	height: number[];
	delay: number;
};

const BAR_DELAYS = [0, 0.05, 0.13, 0.22, 0.08];
const BIG_BAR_KEYFRAMES = [6, 12, 18, 24, 18, 12, 8];
const SMALL_BAR_KEYFRAMES = [4, 7, 10, 12, 10, 7, 4];

const barVariants: Variants = {
	playing: ({ height, delay }: BarVariantData) => ({
		height,
		transition: {
			duration: 0.8,
			repeat: Infinity,
			repeatType: 'mirror',
			ease: 'easeOut',
			delay,
		},
	}),
	stopped: {
		height: 2,
		transition: {
			duration: 0.35,
			ease: 'easeInOut',
		},
	},
};

const MotionImage = motion.create(Image);

export function VinylRecord() {
	const [isHovered, setIsHovered] = useState(false);

	const recordRotation = useMotionValue(0);

	return (
		<div
			className="relative flex size-56 shrink-0 select-none items-end justify-center overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100"
			onPointerEnter={() => setIsHovered(true)}
			onPointerLeave={() => setIsHovered(false)}
		>
			<motion.div className="absolute -top-1/2 flex size-56 items-center justify-center rounded-full border-2 border-zinc-800 bg-zinc-950 bg-[image:conic-gradient(from_135deg,theme(colors.zinc.50/0.15),transparent_6.25%_43.75%,theme(colors.zinc.50/0.15)_50%,transparent_56.25%_93.75%,theme(colors.zinc.50/0.15))]">
				<div className="absolute size-52 rounded-full border border-zinc-900" />
				<div className="absolute size-48 rounded-full border border-zinc-900" />
				<div className="absolute size-44 rounded-full border border-zinc-900" />
				<div className="absolute size-40 rounded-full border border-zinc-900" />
				<div className="absolute size-36 rounded-full border border-zinc-900" />
				<div className="absolute size-32 rounded-full border border-zinc-900" />
				<div className="absolute size-28 rounded-full border border-zinc-900" />

				<MotionImage
					className="absolute rounded-full border-4 border-zinc-900"
					src="/tool-lateralus.webp"
					alt="Lateralus Album Art"
					width={96}
					height={96}
					animate={
						isHovered
							? { rotate: [recordRotation.get(), recordRotation.get() + 360] }
							: { rotate: recordRotation.get() }
					}
					transition={{
						type: 'tween',
						ease: 'linear',
						duration: 3,
						repeat: Infinity,
					}}
					onUpdate={(latest) => recordRotation.set(Number(latest.rotate))}
					priority
				/>

				<div className="absolute size-4 rounded-full bg-zinc-100" />
			</motion.div>

			<div className="absolute -top-1/2 size-56 rounded-full shadow-[0_15px_30px_-8px_theme(colors.black/0.3)]" />

			<div className="py-4 text-center">
				<div className="mb-2 flex h-6 items-center justify-center gap-0.5">
					{BAR_DELAYS.map((delay, index) => (
						<motion.div
							className="h-0.5 w-1 origin-center rounded-full bg-zinc-300"
							variants={barVariants}
							animate={isHovered ? 'playing' : 'stopped'}
							custom={
								{
									height:
										index % 2 === 0 ? BIG_BAR_KEYFRAMES : SMALL_BAR_KEYFRAMES,
									delay,
								} satisfies BarVariantData
							}
							key={index}
						/>
					))}
				</div>
				<p className="text-sm text-zinc-500">TOOL</p>
				<p className="font-medium text-zinc-900">The Grudge</p>
			</div>
		</div>
	);
}
