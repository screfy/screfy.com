export default function TrackSkeleton() {
  return (
    <div className="animate-pulse flex items-center space-x-3 py-3 first:pt-0 last:pb-0">
      <div>
        <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
      </div>
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col space-y-1">
          <div className="h-4 w-20 bg-gray-100 rounded"></div>
          <div className="h-4 w-20 bg-gray-200 rounded"></div>
        </div>
        <div className="h-4 w-12 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}
