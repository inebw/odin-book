function SearchPeopleSkeleton() {
  return (
    <div className="flex flex-col gap-5 p-2 sm:px-8 sm:py-5 bg-l2 dark:bg-d2 overflow-y-auto flex-1 rounded-md custom-scrollbar animate-pulse">
      {/* ================= TOP BAR ================= */}
      <div className="flex gap-3 w-full items-center">
        {/* Back button */}
        <div className="size-8 rounded-md bg-l4 dark:bg-d4 shrink-0" />

        {/* Search input */}
        <div className="flex flex-1 justify-between bg-l3 dark:bg-d3 gap-3 items-center px-5 py-2 rounded-xl">
          <div className="h-4 w-2/3 bg-l5 dark:bg-d6 rounded" />
          <div className="size-5 bg-l5 dark:bg-d6 rounded" />
        </div>
      </div>

      {/* ================= RESULTS ================= */}
      <div className="p-2 space-y-3 h-full">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="flex justify-between items-center p-2 bg-l4 dark:bg-d4 rounded-md"
          >
            {/* ProfileHeader skeleton */}
            <div className="flex items-center gap-2 min-w-0">
              <div className="size-8 rounded-full bg-l5 dark:bg-d6 shrink-0" />
              <div className="space-y-1">
                <div className="h-3 w-28 bg-l5 dark:bg-d6 rounded" />
                <div className="h-2 w-20 bg-l5/70 dark:bg-d6/70 rounded" />
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 scale-75 sm:scale-100">
              <div className="h-9 w-20 bg-l5 dark:bg-d6 rounded-full sm:rounded-md" />
              <div className="h-9 w-20 bg-l5 dark:bg-d6 rounded-full sm:rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPeopleSkeleton;
