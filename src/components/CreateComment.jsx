import { useState } from "react";
import SendIcon from "../assets/SendIcon";

export default function CreateComment({ socket, postId, userId }) {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("createComment", { postId, userId, content }, () => {
      socket.emit("getPost", postId);
      socket.emit("getComments", postId);
    });
    setContent("");
  };

  return (
    <form className="w-full relative" method="POST" onSubmit={handleSubmit}>
      <label
        className="w-full h-full bg-l3 dark:bg-d3 rounded-md"
        htmlFor="content"
      >
        <textarea
          className="resize-none w-full h-full px-3 py-2 bg-l3 dark:bg-d3 rounded-md "
          id="content"
          placeholder="Comment here"
          value={content}
          onChange={(e) => setContent(e.target.value)}
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
