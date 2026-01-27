import { useEffect, useState } from "react";

export default function useGetReplies(id, socket) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [replies, setReplies] = useState(null);

  useEffect(() => {
    const fetchReplies = async () => {
      try {
        socket.emit("getReplies", id);
        socket.on("receiveReplies", (data) => {
          setReplies(data);
          setLoading(false);
        });
      } catch (err) {
        setError(err);
        setReplies(null);
      }
    };
    fetchReplies();
  }, [socket]);

  return { replies, loading, error };
}
