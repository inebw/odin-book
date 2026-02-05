function FollowingsSkeleton() {
  return (
    <div className="border border-l3 dark:border-d3 rounded-md p-2 pb-18 sm:pb-28 lg:pb-40 animate-pulse">
      {/* Title */}
      <div className="h-5 w-28 bg-l5 dark:bg-d6 rounded mx-2 sm:mx-5 mb-4" />

      {/* List */}
      <div className="flex flex-col gap-3 p-1 sm:p-5">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-2 bg-l4 dark:bg-d4 rounded-md w-full overflow-hidden"
          >
            {/* LEFT — Profile */}
            <div className="flex items-center gap-2 min-w-0 flex-1">
              {/* Avatar */}
              <div className="size-8 rounded-full bg-l5 dark:bg-d6 shrink-0" />

              {/* Name + status */}
              <div className="space-y-1 min-w-0">
                <div className="h-3 w-32 max-w-full bg-l5 dark:bg-d6 rounded" />
                <div className="h-2 w-20 max-w-full bg-l5/70 dark:bg-d6/70 rounded" />
              </div>
            </div>

            {/* RIGHT — Buttons */}
            <div className="flex gap-2 sm:gap-5 shrink-0 scale-75 sm:scale-100">
              <div className="h-9 w-16 sm:w-24 rounded-full sm:rounded-md bg-yello/40" />
              <div className="h-9 w-20 sm:w-28 rounded-full sm:rounded-md bg-red/40" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FollowingsSkeleton;
