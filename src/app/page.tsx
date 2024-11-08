import { Heading } from '~/ui/Heading.tsx';

import { Project } from './_components/Project.tsx';
import { Socials } from './_components/Socials.tsx';
import { VinylRecord } from './_components/VinylRecord.tsx';

export default async function Home() {
	return (
		<>
			<Heading>screfy</Heading>
			<p>Software Engineer</p>

			<p className="mt-12">
				I’m a self-taught software engineer with a passion for web development,
				design engineering, and crafting delightful interfaces.
			</p>

			<Socials />

			<Heading className="mb-4 mt-12" as="h2">
				Projects
			</Heading>

			<ul className="-mx-4 space-y-2">
				<Project
					name="Heave"
					description="Stay close while you're apart"
					href="https://heave.gg"
					src="/previews/heave.webp"
					year={2023}
				/>
				<Project
					name="Maskbox"
					description="Protect your inbox from spam and data leaks"
					href="https://maskbox.app"
					src="/previews/maskbox.webp"
					year={2022}
				/>
			</ul>

			<div className="mt-12 flex flex-col items-center gap-8 md:flex-row md:gap-12">
				<div className="space-y-4">
					<Heading as="h2">Music</Heading>
					<p>
						Beyond coding, I'm enjoying listening to music. It’s a steady source
						of motivation and inspiration, bringing a creative rhythm to my day.
					</p>
					<p>
						Whether I’m deep in work or unwinding, music fuels my focus and
						keeps the inspiration flowing.
					</p>
				</div>

				<VinylRecord />
			</div>
		</>
	);
}
