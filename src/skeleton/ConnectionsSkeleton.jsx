function ConnectionsSkeleton({ className = "" }) {
  return (
    <div
      className={`${className} sm:block p-2 w-full sm:max-w-60 rounded-md bg-l3 dark:bg-d3 space-y-3 animate-pulse`}
    >
      {/* Search input skeleton */}
      <div className="h-8 w-full rounded-md bg-l2 dark:bg-d2" />

      {/* Connection rows */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="flex items-center w-full py-1 px-2 gap-2 rounded-md bg-l4 dark:bg-d4"
        >
          {/* Avatar */}
          <div className="size-8 rounded-full bg-l5 dark:bg-d5 shrink-0" />

          {/* Text */}
          <div className="flex flex-col gap-1 min-w-0">
            <div className="h-3 w-28 rounded bg-l5 dark:bg-d5" />

            <div className="flex gap-2 items-center">
              <div className="h-2 w-16 rounded bg-l5 dark:bg-d5" />
              <div className="min-h-2 min-w-2 rounded-full bg-d7 dark:bg-d7" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ConnectionsSkeleton;
