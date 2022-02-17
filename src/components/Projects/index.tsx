import { ProjectDocument } from '../../../.contentlayer/generated';
import Project from './Project';

export default function Projects({
  projects
}: {
  projects: ProjectDocument[];
}) {
  return (
    <div className="grid auto-cols-max grid-cols-1 gap-3 lg:grid-cols-2">
      {projects.map((project) => (
        <Project key={project.name} {...project} />
      ))}
    </div>
  );
}
