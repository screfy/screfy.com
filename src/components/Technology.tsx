import { ReactChild } from 'react';
import Heading from './Heading';

export interface TechnologyProps {
  name: string;
  description: string;
  icon: ReactChild;
  color: string;
}

export default function Technology({
  name,
  description,
  icon,
  color
}: TechnologyProps) {
  return (
    <div className="flex items-center space-x-4 rounded-lg border border-gray-200 bg-white p-4 transition-transform hover:scale-[1.02] dark:border-gray-600 dark:bg-gray-800">
      <div
        className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg text-white"
        style={{ backgroundColor: color }}
        title={`${name} Icon`}
      >
        {icon}
      </div>

      <div className="flex flex-col">
        <Heading as="h5">{name}</Heading>

        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
