import { InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import { Link } from '../components/Link';
import { Explicit } from '../icons/Explicit';
import { getTopTracks, TrackProps } from '../utils/spotify';

function Track({
	name,
	album,
	artist,
	spotifyUrl,
	albumImageUrl,
	explicit,
}: TrackProps) {
	return (
		<a
			className="group flex items-center space-x-3.5"
			href={spotifyUrl}
			target="_blank"
			rel="noreferrer"
		>
			<div className="shrink-0 overflow-hidden rounded-lg">
				<Image
					className="rounded-lg brightness-[0.8] transition-all duration-300 group-hover:scale-105 group-hover:brightness-100"
					src={albumImageUrl}
					width="80"
					height="80"
					quality="95"
					alt={`Album cover art for ${album}`}
				/>
			</div>

			<div className="overflow-hidden leading-none">
				<div className="flex items-center space-x-1.5">
					{explicit && <Explicit className="shrink-0" width="18" height="18" />}
					<h3 className="w-full truncate text-lg font-medium">{name}</h3>
				</div>

				<p className="w-full truncate text-base text-gray-11">{artist}</p>
			</div>
		</a>
	);
}

export default function About({
	tracks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<NextSeo title="About" />

			<div className="space-y-5">
				<h1 className="text-4xl font-bold">About</h1>

				<p>
					I'm a huge fan of new bleeding-edge technologies and languages. I've
					learned a lot about web technologies and core programming, and I
					strive to learn more about these things every day and utilize my
					knowledge to understand further how or why the technology around us
					works.
				</p>
			</div>

			<div className="space-y-8">
				<div className="space-y-5">
					<h2 className="text-2xl font-bold">Music</h2>

					<p>
						I'm enjoying listening to music, below you can find an up-to-date
						collection of my favorite and most-listened tracks on{' '}
						<Link href="https://open.spotify.com/user/hx89ssa0da40l5qt8zd5nxw3b">
							Spotify
						</Link>
						.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2">
					{tracks.map((props) => (
						<Track {...props} key={props.id} />
					))}
				</div>
			</div>
		</>
	);
}

export async function getStaticProps() {
	const tracks = await getTopTracks();

	return {
		props: {
			tracks,
		},
		// Regenerate this page after 24 hours:
		revalidate: 86400,
	};
}
