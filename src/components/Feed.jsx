import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router";
import useGetPosts from "../utils/useGetPosts";
import Post from "./Post";
import SubsciptionIcon from "../assets/SubsciptionIcon";
import TrendingIcon from "../assets/TrendingIcon";
import FeedSkeleton from "../skeleton/FeedSkull";

export default function Feed() {
  const { url, user, socket } = useOutletContext();
  const naviage = useNavigate();
  const [id, setId] = useState(null);
  const { posts, error, loading } = useGetPosts(url, id, socket);

  useEffect(() => {
    if (!user) naviage("/login");
  }, [user]);

  if (loading) return <FeedSkeleton />;

  if (error) return <p>{error.message}</p>;

  return (
    user && (
      <div className="flex flex-col gap-5 p-2 sm:px-8 sm:py-5 bg-l2 dark:bg-d2 overflow-y-auto flex-1 rounded-md custom-scrollbar">
        <div className="flex gap-3">
          <button
            className={`${id ? "bg-green text-d5" : "bg-l2 dark:bg-d3 "} flex flex-1 shadow-lg sm:flex-none gap-3 items-center cursor-pointer active:translate-y-0.5 hover:scale-105 transition-transform duration-200 px-5 py-2 rounded-xl font-bold`}
            onClick={() => setId(user.id)}
          >
            <SubsciptionIcon className={"size-8 fill-red"} />
            <p>Your Feed</p>
          </button>
          <button
            onClick={() => setId(null)}
            className={`${!id ? "bg-green text-d5" : "bg-l2 dark:bg-d3 "} flex flex-1 shadow-lg sm:flex-none gap-3 items-center cursor-pointer active:translate-y-0.5 hover:scale-105 transition-transform duration-200 px-5 py-2 rounded-xl font-bold`}
          >
            <TrendingIcon className={"size-8 fill-yello"} />
            <p>Trending</p>
          </button>
        </div>
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            emitKeyword={"getPosts"}
            socket={socket}
            id={id}
            userLikes={post.likes.map((like) => like.id).includes(user.id)}
            userDislikes={post.dislikes
              .map((like) => like.id)
              .includes(user.id)}
            userId={user.id}
          />
        ))}
      </div>
    )
  );
}
