import { InferGetStaticPropsType } from 'next';
import { ItemList } from '../components/ItemList';
import { Link } from '../components/Link';
import { getTopTracks } from '../utils/spotify';

export default function About({
	tracks
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
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

				<ItemList items={tracks} size="40" rounded />
			</div>
		</>
	);
}

export async function getStaticProps() {
	const tracks = await getTopTracks();

	return {
		props: {
			tracks
		},
		// Regenerate this page after 24 hours:
		revalidate: 86400
	};
}
