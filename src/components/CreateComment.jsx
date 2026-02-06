import { useState } from "react";
import SendIcon from "../assets/SendIcon";

export default function CreateComment({ socket, postId, userId }) {
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const [placeholderText, setPlaceholderText] = useState("Comment here");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) {
      setPlaceholderText("");
      setError("Comment cannot be empty");
      return;
    }
    socket.emit("createComment", { postId, userId, content }, () => {
      socket.emit("getPost", postId);
      socket.emit("getComments", postId);
    });
    setContent("");
  };
  const handleChange = (e) => {
    setContent(e.target.value);
    setError(null);
  };

  return (
    <form className="w-full relative" method="POST" onSubmit={handleSubmit}>
      <label
        className="w-full h-full bg-l3 dark:bg-d3 rounded-md"
        htmlFor="content"
      >
        {error && <p className="absolute opacity-25 px-3 py-2">{error}</p>}
        <textarea
          className="resize-none w-full h-full px-3 py-2 bg-l3 dark:bg-d3 rounded-md "
          id="content"
          placeholder={placeholderText}
          value={content}
          onChange={handleChange}
          required
        ></textarea>
      </label>
      <button
        className="absolute flex items-center gap-2 bottom-0 right-0 -translate-2 sm:-translate-x-3.5 z-10 cursor-pointer py-2 px-3 rounded-md bg-yello"
        type="submit"
      >
        <p className="text-sm font-bold">Comment</p>
        <SendIcon className={"size-4 fill-d7 dark:fill-l1"} />
      </button>
    </form>
  );
}
