import useGetLiveChat from "../utils/useGetLiveChat";

export default function ChatLive({ userId, connectionId, socket }) {
  const { chats, loading, error } = useGetLiveChat(
    userId,
    connectionId,
    socket,
  );

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat.id}>
          <p>{chat.content}</p>
          <p>{chat.timestamp}</p>
        </div>
      ))}
    </div>
  );
}
