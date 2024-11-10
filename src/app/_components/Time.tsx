'use client';

import { useEffect, useRef, useState } from 'react';

const BASE_X = 100;
const BASE_Y = 100;
const STROKE_WIDTH = 10;

const WATCH_TIMEZONE =
	process.env.NEXT_PUBLIC_WATCH_TIMEZONE || 'Europe/Bratislava';

const timeFormatter = new Intl.DateTimeFormat(undefined, {
	hour: '2-digit',
	minute: '2-digit',
	second: '2-digit',
	hour12: true,
	timeZone: WATCH_TIMEZONE,
});

function Hand({ y2, angle }: { y2: number; angle: number }) {
	return (
		<line
			x1={BASE_X}
			y1={BASE_Y}
			x2={BASE_X}
			y2={y2}
			stroke="currentColor"
			strokeWidth={STROKE_WIDTH}
			strokeLinecap="round"
			transform={`rotate(${angle}, ${BASE_X}, ${BASE_Y})`}
			suppressHydrationWarning
		/>
	);
}

export function Time() {
	const [date, setDate] = useState(new Date());

	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

	const seconds = date.getSeconds();
	const minutes = date.getMinutes();
	const hours = date.getHours() % 12;

	const secondAngle = seconds * 6;
	const minuteAngle = minutes * 6 + seconds * 0.1;
	const hourAngle = hours * 30 + minutes * 0.5;

	useEffect(() => {
		intervalRef.current = setInterval(() => setDate(new Date()), 1_000);

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, []);

	return (
		<div className="hidden shrink-0 select-none items-center gap-2 md:flex">
			<svg width={20} height={20} viewBox="0 0 200 200" aria-hidden>
				<circle
					cx={BASE_X}
					cy={BASE_Y}
					r={95}
					fill="none"
					stroke="currentColor"
					strokeWidth={STROKE_WIDTH}
				/>
				<circle cx={BASE_X} cy={BASE_Y} r={6} fill="currentColor" />
				<Hand y2={60} angle={hourAngle} />
				<Hand y2={40} angle={minuteAngle} />
				<Hand y2={30} angle={secondAngle} />
			</svg>

			<p className="tabular-nums" suppressHydrationWarning>
				{timeFormatter.format(date)}
			</p>
		</div>
	);
}
