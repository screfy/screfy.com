'use client';

import {
	AnimatePresence,
	motion,
	useMotionValue,
	useSpring,
	type MotionValue,
	type SpringOptions,
} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { createPortal } from 'react-dom';

const IMAGE_WIDTH = 208;
const IMAGE_HEIGHT = 130;

const CURSOR_PREVIEW_OFFSET = 10;

const LOCATION_SPRING_OPTIONS: SpringOptions = { stiffness: 130, damping: 16 };

function ProjectPreview({
	src,
	x,
	y,
}: {
	src: string;
	x: MotionValue<number>;
	y: MotionValue<number>;
}) {
	const translateX = useSpring(x, LOCATION_SPRING_OPTIONS);
	const translateY = useSpring(y, LOCATION_SPRING_OPTIONS);

	return (
		<motion.div
			className="pointer-events-none fixed origin-top overflow-hidden rounded-lg shadow-[theme(colors.black/0.25)_0_2px_20px]"
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{
				opacity: 1,
				scale: 1,
				transition: {
					type: 'spring',
					stiffness: 260,
					damping: 20,
				},
			}}
			exit={{
				opacity: 0,
				scale: 0.9,
				transition: {
					duration: 0.2,
					ease: 'easeOut',
				},
			}}
			style={{ left: translateX, top: translateY }}
			aria-hidden
		>
			<Image
				src={src}
				width={IMAGE_WIDTH}
				height={IMAGE_HEIGHT}
				alt="Preview image"
			/>
		</motion.div>
	);
}

export function Project({
	name,
	description,
	href,
	src,
	year,
}: {
	name: string;
	description: string;
	href: string;
	src: string;
	year: number;
}) {
	const [isOpen, setIsOpen] = useState(false);

	const motionX = useMotionValue(0);
	const motionY = useMotionValue(0);

	const handleOpen = () => setIsOpen(true);
	const handleClose = () => setIsOpen(false);

	return (
		<>
			<li
				onPointerEnter={handleOpen}
				onPointerLeave={handleClose}
				onPointerDown={handleClose}
				onPointerMove={(e) => {
					motionX.set(e.clientX + CURSOR_PREVIEW_OFFSET);
					motionY.set(e.clientY + CURSOR_PREVIEW_OFFSET);
				}}
			>
				<Link
					className="flex select-none items-center gap-3 rounded-lg px-4 py-2 hover:bg-zinc-100"
					href={href}
					rel="noreferrer noopener"
				>
					<p className="font-medium text-zinc-900">{name}</p>
					<p className="hidden text-sm md:block">{description}</p>
					<span className="h-px flex-1 bg-zinc-200" aria-hidden />
					<p>{year}</p>
				</Link>
			</li>

			{typeof document !== 'undefined' &&
				createPortal(
					<AnimatePresence>
						{isOpen && <ProjectPreview x={motionX} y={motionY} src={src} />}
					</AnimatePresence>,
					document.body
				)}
		</>
	);
}
