'use client';

import {
	AnimatePresence,
	motion,
	useMotionValue,
	useSpring,
	type MotionValue,
	type SpringOptions,
} from 'motion/react';
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
			className="pointer-events-none fixed origin-top overflow-hidden rounded-lg shadow-[--alpha(var(--color-black)/25%)_0_2px_20px]"
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
	href?: string;
	src: string;
	year: number;
}) {
	const [isOpen, setIsOpen] = useState(false);

	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const Component = href ? Link : 'div';

	return (
		<>
			<li
				onPointerEnter={() => setIsOpen(true)}
				onPointerLeave={() => setIsOpen(false)}
				onPointerDown={() => {
					if (href) {
						setIsOpen(false);
					}
				}}
				onPointerMove={(e) => {
					x.set(e.clientX + CURSOR_PREVIEW_OFFSET);
					y.set(e.clientY + CURSOR_PREVIEW_OFFSET);
				}}
			>
				<Component
					className="flex items-center gap-3 rounded-lg px-4 py-2 transition-colors select-none hover:bg-zinc-100"
					href={href!}
					target={href ? '_blank' : undefined}
					rel={href ? 'noreferrer noopener' : undefined}
				>
					<p className="font-medium text-zinc-900">{name}</p>
					<p className="hidden text-sm md:block">{description}</p>
					<span className="h-px flex-1 bg-zinc-200" aria-hidden />
					<p>{year}</p>
				</Component>
			</li>

			{typeof document !== 'undefined' &&
				createPortal(
					<AnimatePresence>
						{isOpen && <ProjectPreview x={x} y={y} src={src} />}
					</AnimatePresence>,
					document.body
				)}
		</>
	);
}
