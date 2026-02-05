import { useState } from "react";
import CommentIcon from "../assets/CommentIcon";
import DislikeIcon from "../assets/DislikeIcon";
import LikeIcon from "../assets/LikeIcon";
import Reply from "./Reply";

export default function CommentManager({
  comment,
  userId,
  postId,
  userLikes,
  socket,
  userDislikes,
}) {
  const [showReplies, setShowReplies] = useState(false);

  const likeComment = (commentId, userId) => {
    socket.emit("likeComment", { commentId, userId }, () => {
      socket.emit("getPost", postId);
      socket.emit("getComments", postId);
    });
  };

  const removeLikeComment = (commentId, userId) => {
    socket.emit("removeLikeComment", { commentId, userId }, () => {
      socket.emit("getPost", postId);
      socket.emit("getComments", postId);
    });
  };

  const dislikeComment = (commentId, userId) => {
    socket.emit("dislikeComment", { commentId, userId }, () => {
      socket.emit("getPost", postId);
      socket.emit("getComments", postId);
    });
  };

  const removeDislikeComment = (commentId, userId) => {
    socket.emit("removeDislikeComment", { commentId, userId }, () => {
      socket.emit("getPost", postId);
      socket.emit("getComments", postId);
    });
  };

  return (
    <>
      <div className="flex  gap-2">
        <button
          className="flex gap-2 items-center"
          onClick={() =>
            userLikes
              ? removeLikeComment(comment.id, userId)
              : likeComment(comment.id, userId)
          }
        >
          <LikeIcon
            className={`size-5 active:scale-115 hover:opacity-80 cursor-pointer  ${userLikes ? "fill-green" : "fill-d7 dark:fill-l1 "}`}
          />
          <p className="text-sm">{comment._count.likes}</p>
        </button>
        <button
          className="flex gap-2 items-center"
          onClick={() =>
            userDislikes
              ? removeDislikeComment(comment.id, userId)
              : dislikeComment(comment.id, userId)
          }
        >
          <DislikeIcon
            className={`size-5 active:scale-115 hover:opacity-80 cursor-pointer  ${userDislikes ? "fill-red" : "fill-d7 dark:fill-l1 "}`}
          />
          <p className="text-sm">{comment._count.dislikes}</p>
        </button>
        <button
          onClick={() => setShowReplies((prev) => !prev)}
          className="flex gap-2 items-center cursor-pointer"
        >
          <CommentIcon className={`size-5 fill-d7 dark:fill-l1`} />
          <p className="text-sm">{comment._count.replies}</p>
          <p className="text-sm">
            {showReplies ? "Hide Replies" : "Show Replies"}
          </p>
        </button>
      </div>

      <Reply
        className={showReplies ? "block" : "hidden"}
        key={comment.id}
        replies={comment.replies}
        commentId={comment.id}
        postId={postId}
        socket={socket}
        userId={userId}
      />
    </>
  );
}
