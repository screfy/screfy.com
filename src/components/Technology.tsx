import { ReactChild } from 'react';

export interface TechnologyProps {
  name: string;
  description: string;
  icon: ReactChild;
  color: string;
}

export default function Technology({ name, description, icon, color }: TechnologyProps): JSX.Element {
  return (
    <div className="h-[120px] lg:h-[100px] w-full flex items-center p-4 space-x-4 hover:bg-[#0F1214] hover:scale-[1.02] border border-gray-200 rounded-lg transition-all">
      <div
        className="h-[64px] w-[64px] flex flex-shrink-0 items-center justify-center text-white rounded-lg"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>

      <div className="flex flex-col">
        <h4 className="font-semibold text-gray-50">{name}</h4>
        <p className="text-sm text-gray-100">{description}</p>
      </div>
    </div>
  );
}
