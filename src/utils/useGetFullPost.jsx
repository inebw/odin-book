import { useEffect, useState } from "react";

export default function useGetFullPost(id, socket) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchpost = async () => {
      try {
        socket.emit("getPost", id);
        socket.on("receivePost", (data) => {
          setPost(data);
          setLoading(false);
        });
      } catch (err) {
        setError(err);
        setPost(null);
      }
    };
    fetchpost();
  }, [socket]);

  return { post, loading, error };
}
