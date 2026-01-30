function FeedSkeleton() {
  return (
    <div className="flex flex-col gap-5 p-2 sm:px-8 sm:py-5 bg-l2 dark:bg-d2 overflow-y-auto flex-1 rounded-md custom-scrollbar animate-pulse">
      {/* Feed / Trending toggle row */}
      <div className="flex gap-3">
        <div className="flex flex-1 sm:flex-none gap-3 items-center px-5 py-2 rounded-xl bg-green/40 shadow-lg">
          <div className="size-8 rounded bg-l4 dark:bg-d4" />
          <div className="h-4 w-24 rounded bg-l4 dark:bg-d4" />
        </div>

        <div className="flex flex-1 sm:flex-none gap-3 items-center px-5 py-2 rounded-xl bg-l3 dark:bg-d3 shadow-lg">
          <div className="size-8 rounded bg-l4 dark:bg-d4" />
          <div className="h-4 w-24 rounded bg-l4 dark:bg-d4" />
        </div>
      </div>

      {/* Inline post skeletons */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="shadow-lg bg-l3 dark:bg-d5 space-y-4 p-5 rounded-md"
        >
          {/* Profile header */}
          <div className="flex gap-3 items-center">
            <div className="size-10 rounded-full bg-l4 dark:bg-d4 shrink-0" />
            <div className="flex flex-col gap-2 min-w-0">
              <div className="h-4 w-32 max-w-full rounded bg-l4 dark:bg-d4" />
              <div className="h-3 w-20 rounded bg-l4 dark:bg-d4" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-3">
            <div className="h-4 w-full rounded bg-l4 dark:bg-d4" />
            <div className="h-4 w-5/6 rounded bg-l4 dark:bg-d4" />
            <div className="h-4 w-2/3 rounded bg-l4 dark:bg-d4" />

            {/* Image placeholder (reduced height) */}
            <div className="w-full h-28 sm:h-56 rounded-md bg-l4 dark:bg-d4" />
          </div>

          {/* Actions row */}
          <div className="flex items-end justify-between">
            <div className="flex gap-4">
              {[1, 2, 3].map((k) => (
                <div key={k} className="flex gap-2 items-center">
                  <div className="size-5 rounded bg-l4 dark:bg-d4" />
                  <div className="h-3 w-6 rounded bg-l4 dark:bg-d4" />
                </div>
              ))}
            </div>

            <div className="h-3 w-24 rounded bg-l4 dark:bg-d4" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeedSkeleton;
