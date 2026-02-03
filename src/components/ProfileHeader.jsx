export default function ProfileHeader({
  user,
  showOnline = false,
  className = null,
}) {
  return (
    <div
      className={
        className
          ? className
          : "flex items-center w-max py-1 px-2 gap-2 rounded-md bg-l4 dark:bg-d4"
      }
    >
      <img
        className="size-8 rounded-full border-d1 dark:border-l1 border"
        src={user.dp}
        alt="user-image"
      />
      <div>
        <p className="font-bold text-sm">
          {user.first_name} {user.last_name}
        </p>
        <p className="text-xs">{!showOnline && user.username}</p>
        {showOnline && (
          <div className="flex gap-2 items-center">
            <p className="text-xs opacity-80">
              {user.online ? "Online" : "Offline"}
            </p>
            <div
              className={`${user.online ? "bg-dgreen" : "bg-gray-400"} min-h-2 min-w-2 rounded-[50%]`}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
}
