import { useEffect, useState } from "react";

export default function useGetComments(id, socket) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        socket.emit("getComments", id);
        socket.on("receiveComments", (data) => {
          setComments(data);
          setLoading(false);
        });
      } catch (err) {
        setError(err);
        setComments(null);
      }
    };
    fetchComments();
  }, [socket]);

  return { comments, loading, error };
}
