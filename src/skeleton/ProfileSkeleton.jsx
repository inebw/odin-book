function ProfileSkeleton() {
  return (
    <div className="flex flex-col gap-5 p-2 sm:px-8 sm:py-5 bg-l2 dark:bg-d2 flex-1 rounded-md overflow-y-auto custom-scrollbar animate-pulse">
      <div className="dark:border-d3 border-l3 border rounded-md p-2 pb-22 sm:pb-32 lg:pb-44 overflow-x-clip">
        <div className="relative">
          {/* Cover */}
          <div className="w-full h-[20vh] bg-l4 dark:bg-d4 rounded-md" />

          {/* Avatar */}
          <div className="absolute bottom-0 left-5 sm:left-10 lg:left-10 xl:left-15 translate-y-[65%]">
            <div className="size-28 sm:size-42 lg:size-64 rounded-full bg-l5 dark:bg-d6 border-4 border-l2 dark:border-d2" />
          </div>

          {/* Name + stats */}
          <div className="absolute bottom-0 left-35 sm:left-55 lg:left-78 xl:left-83 translate-y-[120%] space-y-3">
            {/* Name */}
            <div className="h-7 sm:h-8 lg:h-10 w-56 sm:w-72 bg-l5 dark:bg-d6 rounded-md" />

            {/* Followers / Following */}
            <div className="flex gap-3 origin-top-left scale-60 sm:scale-60 md:scale-85 lg:scale-90 xl:scale-100">
              <div className="h-11 w-32 bg-l5 dark:bg-d6 rounded-md" />
              <div className="h-11 w-32 bg-l5 dark:bg-d6 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSkeleton;
