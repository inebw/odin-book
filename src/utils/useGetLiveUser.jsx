import { useEffect, useState } from "react";

export default function useGetLiveUser(userId, socket) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [liveUser, setLiveUser] = useState(null);

  useEffect(() => {
    console.log("useGetLiveUser");
    const fetchUser = async () => {
      try {
        socket.emit("getUser", userId);
        socket.on("updateUsers", (data) => {
          socket.emit("getUser", userId);
        });
        socket.on("receiveUser", (data) => {
          setLiveUser(data);
          setLoading(false);
        });
      } catch (err) {
        setError(err);
      }
    };
    fetchUser();
  }, [socket, userId]);

  return { loading, error, liveUser };
}
