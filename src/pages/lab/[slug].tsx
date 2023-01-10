import { NextSeo } from 'next-seo';
import { Spotify } from '../../icons/Spotify';
import { motion, useMotionValue } from 'framer-motion';
import { createContext, useContext, useEffect, useState } from 'react';

const LaboratoryContext = createContext<{
	slowMode: boolean;
	toggleSlowMode: (slowMode: boolean) => void;
}>({
	slowMode: false,
	toggleSlowMode: () => {},
});

const useLaboratoryContext = () => useContext(LaboratoryContext);

function Test() {
	const speed = useMotionValue(1);
	const { slowMode } = useLaboratoryContext();

	useEffect(() => {
		speed.set(slowMode ? 5 : 1);

		console.log(speed.get());
	}, [slowMode]);

	return (
		<div className="bg-spotify-gradient flex select-none items-center gap-2 rounded-xl px-3 py-1.5 text-base text-gray-11">
			<motion.span
				animate={{ rotate: '1turn' }}
				transition={{
					duration: 3,
					ease: 'linear',
					repeat: Infinity,
				}}
			>
				<Spotify
					className="flex-shrink-0 text-spotify"
					width="18"
					height="18"
				/>
			</motion.span>

			<div className="flex gap-1.5">
				<span className="font-medium text-gray-12">The Grudge</span>

				<span>·</span>

				<span>TOOL</span>
			</div>
		</div>
	);
}

export default function Lab() {
	const [slowMode, toggleSlowMode] = useState(false);

	return (
		<LaboratoryContext.Provider value={{ slowMode, toggleSlowMode }}>
			<NextSeo title="Button" />

			<h2 className="text-2xl font-bold">Spotify Status</h2>
			<p className="mb-8 text-base text-gray-11">Jan 9, 2023</p>

			{/* <div className="-mx-4 mb-6 px-1 sm:px-0">
				<div className="flex h-14 w-full items-center justify-center rounded-xl bg-gray-2 px-4 py-3"></div>
			</div> */}

			<button onClick={() => toggleSlowMode((val) => !val)}>SlOW</button>

			<div className="-mx-4 px-1 sm:px-0">
				<div className="flex w-full items-center justify-center rounded-xl bg-gray-2 px-4 py-12">
					<Test />
				</div>
			</div>
		</LaboratoryContext.Provider>
	);
}
