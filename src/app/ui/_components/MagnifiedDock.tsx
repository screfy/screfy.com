'use client';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import {
	animate,
	motion,
	useMotionValue,
	useSpring,
	useTransform,
	type MotionValue,
	type SpringOptions,
} from 'framer-motion';
import {
	createContext,
	useContext,
	useState,
	type Dispatch,
	type SetStateAction,
} from 'react';
import useMeasure from 'react-use-measure';

import { cx } from '~/utils/cx.ts';

import { PrototypePreview } from './PrototypePreview.tsx';

const DOCK_APPS = [
	'Safari',
	'Mail',
	'Messages',
	'FaceTime',
	'Music',
	'System Settings',
];

const MIN_APP_SIZE = 48;
const MAX_APP_SIZE = 74;
const APP_SIZE = [MIN_APP_SIZE, MAX_APP_SIZE, MIN_APP_SIZE];

const POINTER_DISTANCE = 160;
const DISTANCE = [-POINTER_DISTANCE, 0, POINTER_DISTANCE];

const SIZE_SPRING_OPTIONS: SpringOptions = {
	mass: 0.1,
	stiffness: 180,
	damping: 12,
};

const MagnifiedDockContext = createContext(
	{} as {
		startedApps: Set<string>;
		setStartedApps: Dispatch<SetStateAction<Set<string>>>;
	}
);

const MotionTrigger = motion.create(TooltipPrimitive.Trigger);

function Application({
	name,
	pointerX,
}: {
	name: string;
	pointerX: MotionValue<number>;
}) {
	const { startedApps, setStartedApps } = useContext(MagnifiedDockContext);

	const y = useMotionValue(0);

	const [ref, bounds] = useMeasure();

	const distance = useTransform(
		pointerX,
		(val) => val - bounds.x - bounds.width / 2
	);

	const widthTransform = useTransform(distance, DISTANCE, APP_SIZE);
	const heightTransform = useTransform(distance, DISTANCE, APP_SIZE);

	const width = useSpring(widthTransform, SIZE_SPRING_OPTIONS);
	const height = useSpring(heightTransform, SIZE_SPRING_OPTIONS);

	const isStarted = startedApps.has(name);

	return (
		<TooltipPrimitive.Root delayDuration={0}>
			<MotionTrigger
				className={cx(
					'relative aspect-square cursor-default rounded-xl bg-zinc-200 after:absolute after:-bottom-1.5 after:size-1 after:rounded-full after:bg-zinc-300 after:transition-opacity after:duration-100',
					isStarted ? 'after:opacity-100' : 'after:opacity-0'
				)}
				style={{ width, height, y }}
				ref={ref}
				onClick={() => {
					if (!isStarted) {
						animate(y, [0, -30, 0], {
							repeat: 2,
							ease: [
								[0, 0.1, 0.25, 1],
								[0.8, 0, 0.9, 1],
							],
							duration: 0.7,
							onComplete: () =>
								setStartedApps((prevStartedApps) => {
									const startedApps = new Set(prevStartedApps);
									startedApps.add(name);
									return startedApps;
								}),
						});
					}
				}}
			/>

			<TooltipPrimitive.Portal>
				<TooltipPrimitive.Content
					className="rounded-md bg-white px-2.5 py-0.5 text-sm text-zinc-700 shadow-[0_6px_14px_theme(colors.black/0.05)]"
					sideOffset={10}
				>
					<span>{name}</span>
					<TooltipPrimitive.Arrow className="fill-white" />
				</TooltipPrimitive.Content>
			</TooltipPrimitive.Portal>
		</TooltipPrimitive.Root>
	);
}

export function MagnifiedDock() {
	const [startedApps, setStartedApps] = useState(new Set<string>());

	const pointerX = useMotionValue(Infinity);

	return (
		<TooltipPrimitive.Provider>
			<MagnifiedDockContext.Provider value={{ startedApps, setStartedApps }}>
				<PrototypePreview onReset={() => setStartedApps(new Set())}>
					<motion.div
						className="relative flex h-16 w-fit items-end gap-2 rounded-2xl border border-gray-200 bg-zinc-50 p-2"
						onPointerMove={(e) => pointerX.set(e.pageX)}
						onPointerLeave={() => pointerX.set(Infinity)}
					>
						{DOCK_APPS.map((name, index) => (
							<Application name={name} pointerX={pointerX} key={index} />
						))}
					</motion.div>
				</PrototypePreview>
			</MagnifiedDockContext.Provider>
		</TooltipPrimitive.Provider>
	);
}
