function ChatLiveSkeleton() {
  return (
    <div className="p-2 flex w-full flex-col-reverse gap-3 mt-auto overflow-scroll h-full no-scrollbar animate-pulse">
      {/* Incoming message */}
      <div className="rounded-2xl rounded-br-none w-72 p-5 mr-auto bg-l5 dark:bg-d6 space-y-3">
        <div className="h-3 w-full rounded bg-l4 dark:bg-d5" />
        <div className="h-3 w-5/6 rounded bg-l4 dark:bg-d5" />
        <div className="h-2 w-20 rounded bg-l4/70 dark:bg-d5/70" />
      </div>

      {/* Outgoing message */}
      <div className="rounded-2xl rounded-tl-none w-72 p-5 ml-auto bg-l4 dark:bg-d4 space-y-3">
        <div className="h-3 w-full rounded bg-l5 dark:bg-d5" />
        <div className="h-3 w-4/6 rounded bg-l5 dark:bg-d5" />
        <div className="h-2 w-16 rounded bg-l5/70 dark:bg-d5/70" />
      </div>

      {/* Incoming message */}
      <div className="rounded-2xl rounded-br-none w-64 p-5 mr-auto bg-l5 dark:bg-d6 space-y-3">
        <div className="h-3 w-5/6 rounded bg-l4 dark:bg-d5" />
        <div className="h-2 w-14 rounded bg-l4/70 dark:bg-d5/70" />
      </div>
    </div>
  );
}

export default ChatLiveSkeleton;
