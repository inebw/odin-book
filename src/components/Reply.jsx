export default function Reply({ postId, socket, userId, replies }) {
  const likeReply = (replyId, userId) => {
    socket.emit("likeReply", { replyId, userId }, () => {
      socket.emit("getComments", postId);
    });
  };

  const dislikeReply = (replyId, userId) => {
    socket.emit("dislikeReply", { replyId, userId }, () => {
      socket.emit("getComments", postId);
    });
  };

  return (
    <div>
      {replies.map((reply) => (
        <div key={reply.id}>
          <p>
            {reply.user.first_name} {reply.user.last_name}
          </p>
          <p>{reply.content}</p>
          <div>
            <div>
              <button onClick={() => likeReply(reply.id, userId)}>Like</button>
              <p>{reply._count.likes}</p>
            </div>
            <div>
              <button onClick={() => dislikeReply(reply.id, userId)}>
                Dislike
              </button>
              <p>{reply._count.dislikes}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
