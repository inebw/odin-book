import { useState } from "react";
import ProfileHeader from "./ProfileHeader";
import ReplyManager from "./ReplyManager";
import CreateReply from "./CreateReply";
import ReplyIcon from "../assets/ReplyIcon";

export default function Reply({
  postId,
  socket,
  userId,
  replies,
  className,
  commentId,
}) {
  const [replyOn, setReplyOn] = useState(false);
  return (
    <div className={`${className} space-y-2`}>
      <button
        onClick={() => setReplyOn((prev) => !prev)}
        className="flex gap-2 items-center justify-center shadow-lg dark:bg-d4 space-y-2 ml-5 p-2 rounded-md text-xs font-bold cursor-pointer px-3"
      >
        <p>Reply</p>
        <ReplyIcon className={"size-4 fill-d7 dark:fill-l1  -translate-y-1 "} />
      </button>
      <CreateReply
        className={replyOn ? "block ml-5" : "hidden"}
        postId={postId}
        commentId={commentId}
        socket={socket}
        userId={userId}
      />
      {replies.map((reply) => (
        <div
          key={reply.id}
          className="shadow-lg dark:bg-d4 space-y-2 ml-5 p-2 rounded-md"
        >
          <ProfileHeader user={reply.user} />
          <p>{reply.content}</p>
          <ReplyManager
            socket={socket}
            reply={reply}
            postId={postId}
            userId={userId}
            userLikes={reply.likes.map((like) => like.id).includes(userId)}
            userDislikes={reply.dislikes
              .map((dislike) => dislike.id)
              .includes(userId)}
          />
        </div>
      ))}
    </div>
  );
}
