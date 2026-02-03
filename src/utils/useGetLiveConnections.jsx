import { useEffect, useState } from "react";

export default function useGetLiveConnections(socket, userId) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [connections, setConnections] = useState(null);

  useEffect(() => {
    const fetchConnections = async () => {
      try {
        socket.emit("getConnections", userId);
        socket.on("updateUsers", (data) => {
          socket.emit("getConnections", userId);
        });
        socket.on("receiveConnections", (data) => {
          setConnections(data);
          setLoading(false);
        });
      } catch (err) {
        setError(err);
      }
    };
    fetchConnections();
  }, [socket]);

  return { loading, error, connections };
}
