import CommentSkeleton from "../skeleton/CommentSkeleton";
import useGetComments from "../utils/useGetComments";
import CommentManager from "./CommentManager";
import ProfileHeader from "./ProfileHeader";

export default function Comment({ postId, socket, userId }) {
  const { comments, error, loading } = useGetComments(postId, socket);

  if (loading) return <CommentSkeleton />;

  if (error) return <p>{error.message}</p>;

  return (
    <div className="space-y-1">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="shadow-lg dark:bg-d5 space-y-2 p-5 rounded-md"
        >
          <ProfileHeader user={comment.user} clickEnabled={true} />
          <p>{comment.content}</p>
          <CommentManager
            socket={socket}
            userId={userId}
            postId={postId}
            comment={comment}
            userLikes={comment.likes.map((like) => like.id).includes(userId)}
            userDislikes={comment.dislikes
              .map((dislike) => dislike.id)
              .includes(userId)}
          />
        </div>
      ))}
    </div>
  );
}
