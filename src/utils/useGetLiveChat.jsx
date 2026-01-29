import { useEffect, useState } from "react";

export default function useGetLiveChat(userId, connectionId, socket) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [chats, setChats] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        socket.emit("joinRoom", `${connectionId}-${userId}`);
        socket.emit("getChats", { userId, connectionId });
        socket.on("receiveChats", (data) => {
          setChats(data);
          setLoading(false);
        });
      } catch (err) {
        setError(err);
      }
    };
    fetchUser();
    return () => {
      socket.emit("leaveRoom", `${connectionId}-${userId}`);
    };
  }, [socket, connectionId]);

  return { loading, error, chats };
}
