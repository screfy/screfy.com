import Image from 'next/image';

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

export default function Project({ name, role, description, image, url }: ProjectProps) {
  return (
    <a
      className="flex flex-col space-y-3 p-4 hover:bg-gray-300 border border-gray-200 rounded-lg transition-all"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex items-center space-x-4">
        <Image src={image} height="64px" width="64px" className="rounded-lg" alt={`${name} Logo`} />

        <div className="flex flex-col">
          <h4 className="font-semibold text-white">{name}</h4>
          <p className="text-sm text-gray-50">{role}</p>
        </div>
      </div>

      <div className="flex flex-col">
        <h5 className="font-semibold text-sm text-gray-50">About</h5>
        <p className="text-sm">{description}</p>
      </div>
    </a>
  );
}
