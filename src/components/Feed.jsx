import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router";
import useGetPosts from "../utils/useGetPosts";
import Post from "./Post";

export default function Feed() {
  const { url, user, socket } = useOutletContext();
  const naviage = useNavigate();
  const [id, setId] = useState(null);
  const { posts, error, loading } = useGetPosts(url, id, socket);

  useEffect(() => {
    if (!user) naviage("/login");
  }, [user]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <div>
        <button onClick={() => setId(user.id)}>Subscription</button>
        <button onClick={() => setId(null)}>Trending</button>
      </div>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          socket={socket}
          id={id}
          userId={user.id}
        />
      ))}
    </div>
  );
}
