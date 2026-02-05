function ChatHeaderSkeleon() {
  return (
    <div className="bg-l4 dark:bg-d4 rounded-md flex px-3 justify-between items-center animate-pulse">
      {/* ProfileHeader-like skeleton */}
      <div className="flex items-center py-1 px-2 gap-2">
        {/* Avatar */}
        <div className="size-8 rounded-full bg-l5 dark:bg-d5 shrink-0" />

        {/* User info */}
        <div className="flex flex-col gap-1 min-w-0">
          <div className="h-3 w-28 rounded bg-l5 dark:bg-d5" />
          <div className="flex gap-2 items-center">
            <div className="h-2 w-14 rounded bg-l5 dark:bg-d5" />
            <div className="min-h-2 min-w-2 rounded-full bg-d7 dark:bg-d7" />
          </div>
        </div>
      </div>

      {/* Back button */}
      <div className="size-8 rounded bg-l5 dark:bg-d5" />
    </div>
  );
}

export default ChatHeaderSkeleon;
