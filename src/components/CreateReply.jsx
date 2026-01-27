import { useState } from "react";

export default function CreateReply({ socket, commentId, userId, postId }) {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("createReply", { commentId, userId, content }, () => {
      socket.emit("getComments", postId);
    });
  };

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <label htmlFor="content">
        <textarea
          id="content"
          placeholder="Enter Post"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </label>
      <button type="submit">Reply</button>
    </form>
  );
}
