import { useNavigate } from "react-router";

export default function Post({ post, socket, userId, id }) {
  const navigate = useNavigate();
  const likePost = async (postId, id) => {
    await socket.emit("likePost", { userId, postId }, () => {
      socket.emit("getPosts", id);
    });
  };

  const dislikePost = async (postId, id) => {
    await socket.emit("dislikePost", { userId, postId }, () => {
      socket.emit("getPosts", id);
    });
  };

  return (
    <div className="">
      <p>
        {post.user.first_name} {post.user.last_name}
      </p>
      <p>{post.content}</p>
      <img src={post.img_url} alt="" />
      <div onClick={() => navigate(`/post/${post.id}`)}>
        <div>
          <button onClick={() => likePost(post.id, id)}>Like</button>
          <p>{post._count.likes}</p>
        </div>
        <div>
          <button onClick={() => dislikePost(post.id, id)}>Dislike</button>
          <p>{post._count.dislikes}</p>
        </div>
      </div>
    </div>
  );
}
