function FullPostSkeleton() {
  return (
    <div className="flex flex-col gap-5 p-2 sm:px-8 sm:py-5 bg-l2 dark:bg-d2 overflow-y-auto flex-1 rounded-md custom-scrollbar animate-pulse">
      {/* ================= POST ================= */}
      <div className="shadow-lg dark:bg-d5 space-y-4 p-5 rounded-md">
        {/* ProfileHeader skeleton */}
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-full bg-l5 dark:bg-d6 shrink-0" />
          <div className="space-y-1 min-w-0">
            <div className="h-3 w-32 bg-l5 dark:bg-d6 rounded" />
            <div className="h-2 w-20 bg-l5/70 dark:bg-d6/70 rounded" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <div className="h-3 w-full bg-l5 dark:bg-d6 rounded" />
          <div className="h-3 w-[90%] bg-l5 dark:bg-d6 rounded" />
          <div className="h-3 w-[70%] bg-l5 dark:bg-d6 rounded" />
        </div>

        {/* Image placeholder */}
        <div className="w-full h-40 sm:h-64 bg-l4 dark:bg-d4 rounded-md" />

        {/* Actions */}
        <div className="flex items-end justify-between pt-2">
          <div className="flex gap-4">
            <div className="h-5 w-12 bg-l5 dark:bg-d6 rounded" />
            <div className="h-5 w-12 bg-l5 dark:bg-d6 rounded" />
            <div className="h-5 w-12 bg-l5 dark:bg-d6 rounded" />
          </div>
          <div className="h-3 w-24 bg-l5 dark:bg-d6 rounded" />
        </div>
      </div>

      {/* ================= CREATE COMMENT ================= */}
      <div className="shadow-md dark:bg-d5 p-4 rounded-md">
        <div className="flex gap-2 items-center">
          <div className="size-8 rounded-full bg-l5 dark:bg-d6" />
          <div className="flex-1 h-10 bg-l4 dark:bg-d4 rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default FullPostSkeleton;
