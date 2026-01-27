import { useOutletContext, useParams } from "react-router";
import useGetFullPost from "../utils/useGetFullPost";
import Comment from "./Comment";
import CreateComment from "./CreateComment";

export default function FullPost() {
  const { user, socket } = useOutletContext();
  const { id } = useParams();
  const { post, error, loading } = useGetFullPost(id, socket);
  const likePost = async (postId, id) => {
    await socket.emit("likePost", { userId: user.id, postId }, () => {
      socket.emit("getPost", id);
    });
  };

  const dislikePost = async (postId, id) => {
    await socket.emit("dislikePost", { userId: user.id, postId }, () => {
      socket.emit("getPost", id);
    });
  };

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error.messages}</p>;

  return (
    <div>
      <p>
        {post.user.first_name} {post.user.last_name}
      </p>
      <p>{post.content}</p>
      <div>
        <div>
          <button onClick={() => likePost(post.id, id)}>Like</button>
          <p>{post._count.likes}</p>
        </div>
        <div>
          <button onClick={() => dislikePost(post.id, id)}>Dislike</button>
          <p>{post._count.dislikes}</p>
        </div>
      </div>
      <CreateComment socket={socket} postId={post.id} userId={user.id} />
      <Comment
        socket={socket}
        postId={post.id}
        key={post.id}
        userId={user.id}
      />
    </div>
  );
}
