import Image from 'next/image';
import Heading from './Heading';

export interface ProjectProps {
  name: string;
  role: string;
  description: string;
  image: {
    src: string;
    height: number;
    width: number;
  };
  url: string;
}

export default function Project({ name, role, description, image, url }: ProjectProps): JSX.Element {
  return (
    <a
      className="flex flex-col space-y-3 p-4 border border-secondary hover:bg-secondary rounded-lg transition-colors"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex items-center space-x-4">
        <Image src={image} height="64px" width="64px" className="rounded-xl" alt={`${name} Logo`} />

        <div className="flex flex-col">
          <Heading as="h3" text={name} />
          <p className="text-sm">{role}</p>
        </div>
      </div>

      <div className="flex flex-col">
        <Heading as="h4" text="About" />
        <p className="text-sm">{description}</p>
      </div>
    </a>
  );
}
