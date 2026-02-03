import { useState } from "react";
import SendIcon from "../assets/SendIcon";

export default function CreateReply({
  socket,
  commentId,
  userId,
  postId,
  className,
}) {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("createReply", { commentId, userId, content }, () => {
      socket.emit("getComments", postId);
    });
    setContent("");
  };
  return (
    <form
      className={`${className} relative w-[calc(100%-20px)] sm:w-72 h-24`}
      method="POST"
      onSubmit={handleSubmit}
    >
      <label
        className="size-full bg-l3 dark:bg-d3 rounded-md"
        htmlFor="content"
      >
        <textarea
          className="resize-none w-full h-full px-3 py-2 bg-l3 dark:bg-d3 rounded-md "
          id="content"
          placeholder="enter reply..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </label>
      <button
        className="absolute flex items-center gap-2 bottom-0 right-0 -translate-2 sm:-translate-x-3.5 z-10 cursor-pointer px-2 py-1 rounded-md bg-green"
        type="submit"
      >
        <p className="text-sm font-bold">Reply</p>
        <SendIcon className={"size-4 fill-d1 dark:fill-l1"} />
      </button>
    </form>
  );
}
