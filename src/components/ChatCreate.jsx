import { useState } from "react";

export default function ChatCreate({ userId, connectionId, socket }) {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("createChat", { connectionId, userId, content });
  };

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <label htmlFor="content">
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </label>
      <button type="submit">Send</button>
    </form>
  );
}
