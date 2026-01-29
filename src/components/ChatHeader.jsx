import useGetLiveUser from "../utils/useGetLiveUser";

export default function ChatHeader({ userId, socket }) {
  const { liveUser, loading, error } = useGetLiveUser(userId, socket);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;
  return (
    <div>
      <img src={liveUser.dp} alt="" />
      <p>
        {liveUser.first_name} {liveUser.last_name}
      </p>
      <p>{liveUser.online ? "online" : "offline"}</p>
    </div>
  );
}
