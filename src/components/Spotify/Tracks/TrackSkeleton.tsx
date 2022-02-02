export default function TrackSkeleton() {
  return (
    <div className="flex animate-pulse items-center space-x-4 rounded-lg border border-gray-200 bg-white p-3 dark:border-gray-600 dark:bg-gray-800">
      <div className="h-16 w-16 rounded-lg bg-gray-100 dark:bg-gray-600" />

      <div className="flex flex-col space-y-1">
        <div className="h-4 w-28 rounded bg-gray-100 dark:bg-gray-300" />
        <div className="h-4 w-20 rounded bg-gray-200 dark:bg-gray-600" />
      </div>
    </div>
  );
}
