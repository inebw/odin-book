function CommentSkeleton() {
  return (
    <div className="space-y-2 animate-pulse">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="shadow-lg bg-l3 dark:bg-d5 space-y-4 p-5 rounded-md"
        >
          {/* ProfileHeader skeleton */}
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-full bg-l4 dark:bg-d6" />
            <div className="space-y-1">
              <div className="h-3 w-28 rounded bg-l4 dark:bg-d6" />
              <div className="h-2 w-20 rounded bg-l4/70 dark:bg-d6/70" />
            </div>
          </div>

          {/* Comment content skeleton */}
          <div className="space-y-2">
            <div className="h-3 w-full rounded bg-l4 dark:bg-d6" />
            <div className="h-3 w-5/6 rounded bg-l4 dark:bg-d6" />
            <div className="h-3 w-3/6 rounded bg-l4 dark:bg-d6" />
          </div>

          {/* CommentManager skeleton */}
          <div className="flex gap-4 pt-1">
            <div className="flex items-center gap-2">
              <div className="size-5 rounded bg-l4 dark:bg-d6" />
              <div className="h-3 w-4 rounded bg-l4 dark:bg-d6" />
            </div>

            <div className="flex items-center gap-2">
              <div className="size-5 rounded bg-l4 dark:bg-d6" />
              <div className="h-3 w-4 rounded bg-l4 dark:bg-d6" />
            </div>

            <div className="flex items-center gap-2">
              <div className="size-5 rounded bg-l4 dark:bg-d6" />
              <div className="h-3 w-16 rounded bg-l4 dark:bg-d6" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentSkeleton;
