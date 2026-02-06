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
  const [error, setError] = useState(null);
  const [placeholderText, setPlaceholderText] = useState("enter reply...");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) {
      setError("Reply cannot be empty");
      setPlaceholderText("");
      return;
    }
    socket.emit("createReply", { commentId, userId, content }, () => {
      socket.emit("getComments", postId);
    });
    setContent("");
  };

  const handleChange = (e) => {
    setContent(e.target.value);
    setError(null);
  };

  return (
    <form
      className={`${className} relative w-[calc(100%-20px)] sm:w-72 h-24`}
      method="POST"
      onSubmit={handleSubmit}
    >
      <label
        className="size-full bg-l3 dark:bg-d3 rounded-md"
        htmlFor={`${commentId}-reply`}
      >
        {error && <p className="absolute opacity-25 px-3 py-2">{error}</p>}
        <textarea
          className="resize-none w-full h-full px-3 py-2 bg-l3 dark:bg-d3 rounded-md "
          id={`${commentId}-reply`}
          placeholder={placeholderText}
          value={content}
          onChange={handleChange}
          required
        ></textarea>
      </label>
      <button
        className="absolute flex items-center gap-2 bottom-0 right-0 -translate-2 sm:-translate-x-3.5 z-10 cursor-pointer px-2 py-1 rounded-md bg-green"
        type="submit"
      >
        <p className="text-sm font-bold">Reply</p>
        <SendIcon className={"size-4 fill-d7 dark:fill-l1"} />
      </button>
    </form>
  );
}
