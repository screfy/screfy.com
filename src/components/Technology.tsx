import { ReactChild } from 'react';

export interface TechnologyProps {
  name: string;
  description: string;
  icon: ReactChild;
  color: string;
}

export default function Technology({ name, description, icon, color }: TechnologyProps) {
  return (
    <div className="h-32 md:h-22 lg:h-24 w-full flex items-center p-4 space-x-4 bg-white dark:bg-gray-800 hover:scale-[1.02] border border-gray-200 dark:border-gray-600 rounded-lg transition-transform">
      <div
        className="h-[64px] w-[64px] flex flex-shrink-0 items-center justify-center text-white rounded-lg"
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
