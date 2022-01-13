import dooze from '../../public/projects/dooze.webp';
import Project, { ProjectProps } from './Project';

const PROJECTS: ProjectProps[] = [
  {
    name: 'Dooze',
    role: 'Co-Founder & Developer',
    description: 'Something is coming...',
    image: dooze,
    url: 'https://dooze.app',
  },
];

export default function Projects() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 auto-cols-max">
      {PROJECTS.map((project) => (
        <Project key={project.name} {...project} />
      ))}
    </div>
  );
}
