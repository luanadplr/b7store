export function Skeleton() {
  return (
    <div className="mt-8">
      <div className="mx-auto mb-3 h-8 w-52 animate-pulse rounded-sm bg-gray-200 md:mx-0"></div>
      <div className="mx-auto h-5 w-64 animate-pulse rounded-sm bg-gray-200 md:mx-0"></div>
      <div className="mt-9 grid animate-pulse grid-cols-1 gap-8 md:grid-cols-4">
        <div className="h-80 animate-pulse rounded-sm bg-gray-200"></div>
        <div className="h-80 animate-pulse rounded-sm bg-gray-200"></div>
        <div className="h-80 animate-pulse rounded-sm bg-gray-200"></div>
        <div className="h-80 animate-pulse rounded-sm bg-gray-200"></div>
      </div>
    </div>
  );
}
