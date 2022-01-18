import { ChevronDown } from 'react-feather';

export default function RepositorySkeleton() {
  return (
    <div className="animate-pulse bg-gray-100 dark:bg-gray-700 h-[42px] w-full rounded-lg">
      <div className="h-full flex items-center justify-between px-4 py-2">
        <div className="w-20 h-4 bg-gray-200 dark:bg-gray-300 rounded"></div>
        <ChevronDown className="text-gray-200 dark:text-gray-300" size="18" />
      </div>
    </div>
  );
}
