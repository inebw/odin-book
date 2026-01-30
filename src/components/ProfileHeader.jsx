export default function ProfileHeader({ user }) {
  return (
    <div className="flex items-center w-max py-1 px-2 gap-2 rounded-md bg-l4 dark:bg-d4">
      <img
        className="size-8 rounded-full border-d1 dark:border-l1 border"
        src={user.dp}
        alt="user-image"
      />
      <div>
        <p className="font-bold text-sm">
          {user.first_name} {user.last_name}
        </p>
        <p className="text-xs">{user.username}</p>
      </div>
    </div>
  );
}
