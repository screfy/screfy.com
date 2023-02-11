import NextLink from 'next/link';
import { Link } from '../components/Link';
import { pick } from 'contentlayer/client';
import { allProjects, type Project } from '../../.contentlayer/generated';
import { NavbarHome } from '../components/Navbar/NavbarHome';

function Project({
	title,
	description,
	url,
	year,
}: Pick<Project, 'title' | 'description' | 'url' | 'year'>) {
	return (
		<li>
			<NextLink
				className="-my-2 flex select-none items-center gap-2.5 rounded-xl px-4 py-2 transition-colors hover:bg-gray-2"
				href={url}
				target="_blank"
			>
				<p className="font-semibold">{title}</p>

				<p className="hidden text-gray-11 md:block">{description}</p>

				<span className="h-px flex-1 bg-gray-4" />

				<p className="text-gray-11">{year}</p>
			</NextLink>
		</li>
	);
}

export default function Page() {
	const projects = allProjects.map((project) =>
		pick(project, ['title', 'description', 'url', 'year'])
	);

	return (
		<>
			<NavbarHome />

			<p>
				Welcome to my small corner of the internet. I'm screfy, and I'm a
				self-taught software engineer interested in web and serverless
				technologies and DevOps practices.
			</p>

			<h2 className="mt-16 mb-4 text-2xl font-bold">Projects</h2>

			<p>
				Below are some of projects I've worked on. You can find most of my work
				on my <Link href="https://github.com/screfy">GitHub</Link>.
			</p>

			<ul className="-mx-4 mt-8 flex flex-col gap-6 px-1 sm:px-0">
				{projects.map((props, i) => (
					<Project {...props} key={i} />
				))}
			</ul>
		</>
	);
}
