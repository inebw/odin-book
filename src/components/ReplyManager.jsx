import DislikeIcon from "../assets/DislikeIcon";
import LikeIcon from "../assets/LikeIcon";

export default function ReplyManager({
  reply,
  userId,
  socket,
  postId,
  userLikes,
  userDislikes,
}) {
  const likeReply = (replyId, userId) => {
    socket.emit("likeReply", { replyId, userId }, () => {
      socket.emit("getComments", postId);
      socket.emit("getPost", postId);
    });
  };
  const removeLikeReply = (replyId, userId) => {
    socket.emit("removeLikeReply", { replyId, userId }, () => {
      socket.emit("getComments", postId);
      socket.emit("getemost", postId);
    });
  };

  const dislikeReply = (replyId, userId) => {
    socket.emit("dislikeReply", { replyId, userId }, () => {
      socket.emit("getComments", postId);
      socket.emit("getPost", postId);
    });
  };

  const removeDislikeReply = (replyId, userId) => {
    socket.emit("removeDislikeReply", { replyId, userId }, () => {
      socket.emit("getComments", postId);
      socket.emit("getPost", postId);
    });
  };

  return (
    <div className="flex  gap-2">
      <button
        className="flex gap-2 items-center"
        onClick={() =>
          userLikes
            ? removeLikeReply(reply.id, userId)
            : likeReply(reply.id, userId)
        }
      >
        <LikeIcon
          className={`size-4 active:scale-115 hover:opacity-80 cursor-pointer  ${userLikes ? "fill-green" : "fill-d7 dark:fill-l1 "}`}
        />
        <p className="text-xs">{reply._count.likes}</p>
      </button>
      <button
        className="flex gap-2 items-center"
        onClick={() =>
          userDislikes
            ? removeDislikeReply(reply.id, userId)
            : dislikeReply(reply.id, userId)
        }
      >
        <DislikeIcon
          className={`size-4 active:scale-115 hover:opacity-80 cursor-pointer  ${userDislikes ? "fill-red" : "fill-d7 dark:fill-l1 "}`}
        />
        <p className="text-xs">{reply._count.dislikes}</p>
      </button>
    </div>
  );
}
