import { ChevronDown } from 'react-feather';

export default function RepositorySkeleton() {
  return (
    <div className="h-[42px] w-full animate-pulse rounded-lg bg-gray-100 dark:bg-gray-700">
      <div className="flex h-full items-center justify-between px-4 py-2">
        <div className="h-4 w-20 rounded bg-gray-200 dark:bg-gray-300"></div>
        <ChevronDown className="text-gray-200 dark:text-gray-300" size="18" />
      </div>
    </div>
  );
}
