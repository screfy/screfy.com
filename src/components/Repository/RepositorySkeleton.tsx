import { ChevronDown } from 'react-feather';

export default function RepositorySkeleton(): JSX.Element {
  return (
    <div className="animate-pulse bg-gray-300 h-[42px] w-full rounded-lg">
      <div className="h-full flex items-center justify-between px-4 py-2">
        <div className="w-20 h-4 bg-gray-100 rounded"></div>
        <ChevronDown className="text-gray-100" size="18" />
      </div>
    </div>
  );
}
