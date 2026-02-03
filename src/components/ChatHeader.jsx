import BackIcon from "../assets/BackIcon";
import useGetLiveUser from "../utils/useGetLiveUser";
import ProfileHeader from "./ProfileHeader";

export default function ChatHeader({ userId, socket, changeConnection }) {
  const { liveUser, loading, error } = useGetLiveUser(userId, socket);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;
  return (
    <div className="bg-l4 dark:bg-d4 rounded-md flex px-3 justify-between">
      <ProfileHeader showOnline={true} user={liveUser} />
      <button
        onClick={() => changeConnection(null)}
        className="cursor-pointer active:-translate-x-1"
      >
        <BackIcon className={"size-8 fill-d1 dark:fill-l1"} />
      </button>
    </div>
  );
}
