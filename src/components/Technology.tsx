import { ReactChild } from 'react';

export interface TechnologyProps {
  name: string;
  description: string;
  icon: ReactChild;
  color: string;
}

export default function Technology({ name, description, icon, color }: TechnologyProps) {
  return (
    <div className="md:h-22 flex h-32 w-full items-center space-x-4 rounded-lg border border-gray-200 bg-white p-4 transition-transform hover:scale-[1.02] dark:border-gray-600 dark:bg-gray-800 lg:h-24">
      <div
        className="flex h-[64px] w-[64px] flex-shrink-0 items-center justify-center rounded-lg text-white"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>

      <div className="flex flex-col">
        <h4 className="font-semibold text-gray-600 dark:text-gray-100">{name}</h4>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
