import { useEffect, useState } from "react";

export default function useGetUserPosts(profileId, socket) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchposts = async () => {
      try {
        socket.emit("getUserPosts", profileId);
        socket.on("receiveUserPosts", (data) => {
          setPosts(data);
          setLoading(false);
        });
      } catch (err) {
        setError(err);
        setPosts(null);
      }
    };
    fetchposts();
  }, [socket, profileId]);

  return { posts, loading, error };
}
