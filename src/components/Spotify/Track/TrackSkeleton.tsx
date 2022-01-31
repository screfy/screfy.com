export default function TrackSkeleton() {
  return (
    <div className="flex animate-pulse items-center space-x-3 py-3 first:pt-0 last:pb-0">
      <div>
        <div className="h-16 w-16 rounded-lg bg-gray-100 dark:bg-gray-600"></div>
      </div>
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col space-y-1">
          <div className="h-4 w-20 rounded bg-gray-100 dark:bg-gray-300"></div>
          <div className="h-4 w-20 rounded bg-gray-200 dark:bg-gray-600"></div>
        </div>
        <div className="hidden h-4 w-12 rounded bg-gray-200 dark:bg-gray-600 sm:block"></div>
      </div>
    </div>
  );
}
