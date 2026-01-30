import { useNavigate } from "react-router";
import { format } from "date-fns";
import LikeIcon from "../assets/LikeIcon";
import DislikeIcon from "../assets/DislikeIcon";
import CommentIcon from "../assets/CommentIcon";
import ProfileHeader from "./ProfileHeader";

export default function Post({
  post,
  emitKeyword,
  socket,
  userId,
  id,
  userLikes,
  userDislikes,
}) {
  const navigate = useNavigate();
  const likePost = async (postId, id) => {
    await socket.emit("likePost", { userId, postId }, () => {
      socket.emit(emitKeyword, id);
    });
  };

  const removeLikePost = async (postId, id) => {
    await socket.emit("removeLikePost", { userId, postId }, () => {
      socket.emit(emitKeyword, id);
    });
  };

  const dislikePost = async (postId, id) => {
    await socket.emit("dislikePost", { userId, postId }, () => {
      socket.emit(emitKeyword, id);
    });
  };

  const removeDislikePost = async (postId, id) => {
    await socket.emit("removeDislikePost", { userId, postId }, () => {
      socket.emit(emitKeyword, id);
    });
  };

  return (
    <div className="shadow-lg dark:bg-d5 space-y-2 p-5 rounded-md">
      <ProfileHeader user={post.user} />
      <div
        className="cursor-pointer py-3"
        onClick={() => navigate(`/post/${post.id}`)}
      >
        <p className="font-scp">{post.content}</p>
        <img
          className={`${post.img_url ? "w-full sm:h-128" : ""} rounded-md object-contain`}
          src={post.img_url || null}
          alt=""
        />
      </div>

      <div className="flex items-end justify-between">
        <div className="flex  gap-2">
          <button
            className="flex gap-2 items-center"
            onClick={() =>
              userLikes ? removeLikePost(post.id, id) : likePost(post.id, id)
            }
          >
            <LikeIcon
              className={`size-5 active:scale-115 hover:opacity-80 cursor-pointer  ${userLikes ? "fill-green" : "fill-d7 dark:fill-l1 "}`}
            />
            <p>{post._count.likes}</p>
          </button>
          <button
            className="flex gap-2 items-center"
            onClick={() =>
              userDislikes
                ? removeDislikePost(post.id, id)
                : dislikePost(post.id, id)
            }
          >
            <DislikeIcon
              className={`size-5 active:scale-115 hover:opacity-80 cursor-pointer  ${userDislikes ? "fill-red" : "fill-d7 dark:fill-l1 "}`}
            />
            <p>{post._count.dislikes}</p>
          </button>
          <button className="flex gap-2 items-center">
            <CommentIcon className={`size-5 fill-d7 dark:fill-l1`} />
            <p>{post._count.comments}</p>
          </button>
        </div>
        <div>
          <p className="text-xs dark:text-l1">
            {format(post.timestamp, "PPp")}
          </p>
        </div>
      </div>
    </div>
  );
}
