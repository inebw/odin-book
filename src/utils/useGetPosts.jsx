import { useEffect, useState } from "react";

export default function useGetPosts(url, id = null, socket) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchposts = async () => {
      try {
        console.log("hin");
        socket.emit("getPosts", id);
        socket.on("receivePosts", (data) => {
          setPosts(data);
          setLoading(false);
        });
      } catch (err) {
        setError(err);
        setPosts(null);
      }
    };
    fetchposts();
  }, [id, socket]);

  return { posts, loading, error };
}
