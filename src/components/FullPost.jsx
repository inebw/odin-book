import { useOutletContext, useParams } from "react-router";
import useGetFullPost from "../utils/useGetFullPost";
import Comment from "./Comment";
import CreateComment from "./CreateComment";
import Post from "./Post";

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
    <div className="flex flex-col gap-5 p-2 sm:px-8 sm:py-5 bg-l2 dark:bg-d2 overflow-y-auto flex-1 rounded-md custom-scrollbar">
      {/* <p> */}
      {/*   {post.user.first_name} {post.user.last_name} */}
      {/* </p> */}
      {/* <p>{post.content}</p> */}
      {/* <div> */}
      {/*   <div> */}
      {/*     <button onClick={() => likePost(post.id, id)}>Like</button> */}
      {/*     <p>{post._count.likes}</p> */}
      {/*   </div> */}
      {/*   <div> */}
      {/*     <button onClick={() => dislikePost(post.id, id)}>Dislike</button> */}
      {/*     <p>{post._count.dislikes}</p> */}
      {/*   </div> */}
      {/* </div> */}
      <Post
        key={"post" + post.id}
        post={post}
        emitKeyword={"getPost"}
        socket={socket}
        id={id}
        userLikes={post.likes.map((like) => like.id).includes(user.id)}
        userDislikes={post.dislikes.map((like) => like.id).includes(user.id)}
        userId={user.id}
      />
      <CreateComment socket={socket} postId={post.id} userId={user.id} />
      <p className="px-2">Comments</p>
      <Comment
        socket={socket}
        postId={post.id}
        key={"comment" + post.id}
        userId={user.id}
      />
    </div>
  );
}
