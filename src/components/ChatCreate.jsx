import { useState } from "react";
import SendIcon from "../assets/SendIcon";

export default function ChatCreate({ userId, connectionId, socket }) {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("createChat", { connectionId, userId, content });
    setContent("");
  };

  return (
    <form className="w-full relative" method="POST" onSubmit={handleSubmit}>
      <label
        className="w-full h-full bg-l2 dark:bg-d2 rounded-md"
        htmlFor="content"
      >
        <textarea
          className="resize-none w-full h-full px-3 py-2 bg-l2 dark:bg-d2 rounded-md "
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </label>
      <button
        className="absolute flex items-center gap-2 bottom-0 right-0 -translate-3.5 sm:-translate-x-3.5 z-10 cursor-pointer py-2 px-3 rounded-md bg-yello"
        type="submit"
      >
        <p className="text-sm font-bold">Send</p>
        <SendIcon className={"size-4 fill-d1 dark:fill-l1"} />
      </button>
    </form>
  );
}
