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
      className="flex flex-col space-y-3 rounded-lg border border-gray-200 bg-white p-4 transition-transform hover:scale-[1.02] dark:border-gray-600 dark:bg-gray-800"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex items-center space-x-4">
        <Image src={image} height="64px" width="64px" className="rounded-lg" alt={`${name} Logo`} />

        <div className="flex flex-col">
          <h4 className="font-semibold text-black dark:text-white">{name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-100">{role}</p>
        </div>
      </div>

      <div className="flex flex-col">
        <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-100">About</h5>
        <p className="text-sm">{description}</p>
      </div>
    </a>
  );
}
