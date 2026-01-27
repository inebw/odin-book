import useGetComments from "../utils/useGetComments";
import CreateReply from "./CreateReply";
import Reply from "./Reply";

export default function Comment({ postId, socket, userId }) {
  const { comments, error, loading } = useGetComments(postId, socket);

  const likeComment = (commentId, userId) => {
    socket.emit("likeComment", { commentId, userId }, () => {
      socket.emit("getComments", postId);
    });
  };

  const dislikeComment = (commentId, userId) => {
    socket.emit("dislikeComment", { commentId, userId }, () => {
      socket.emit("getComments", postId);
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <div className="space-y-1">
      {comments.map((comment) => (
        <div key={comment.id} className="border">
          <p>
            {comment.user.first_name} {comment.user.last_name}
          </p>
          <p>{comment.content}</p>
          <div>
            <div>
              <button onClick={() => likeComment(comment.id, userId)}>
                Like
              </button>
              <p>{comment._count.likes}</p>
            </div>
            <div>
              <button onClick={() => dislikeComment(comment.id, userId)}>
                Dislike
              </button>
              <p>{comment._count.dislikes}</p>
            </div>
          </div>
          <CreateReply
            postId={postId}
            commentId={comment.id}
            socket={socket}
            userId={userId}
          />
          <Reply
            key={comment.id}
            replies={comment.replies}
            postId={postId}
            socket={socket}
            userId={userId}
          />
        </div>
      ))}
    </div>
  );
}
