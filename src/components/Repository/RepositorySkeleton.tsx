import { ChevronDown } from 'react-feather';

export default function RepositorySkeleton(): JSX.Element {
  return (
    <div className="animate-pulse bg-gray-300 h-[42px] w-full rounded-lg">
      <div className="h-full flex items-center justify-between px-4 py-2">
        <div className="h-[14px] w-20 bg-gray-100 rounded"></div>
        <ChevronDown className="text-gray-100" size="18" />
      </div>
    </div>
  );
}
