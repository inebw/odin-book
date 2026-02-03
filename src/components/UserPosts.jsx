import { useOutletContext } from "react-router";
import useGetPosts from "../utils/useGetPosts";
import Post from "./Post";
import FeedSkeleton from "../skeleton/FeedSkull";
import useGetUserPosts from "../utils/useGetUserPosts";

export default function UserPosts() {
  const { user, socket, profile } = useOutletContext();
  const { posts, error, loading } = useGetUserPosts(profile.id, socket);

  if (loading) return <FeedSkeleton />;

  if (error) return <p>{error.message}</p>;

  return (
    user && (
      <div className="border-d3 border rounded-md p-2 pb-18 sm:pb-28 lg:pb-40 space-y-3.5">
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            emitKeyword={"getPosts"}
            socket={socket}
            id={user.id}
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
