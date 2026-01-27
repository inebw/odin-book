import { useState } from "react";

export default function CreateComment({ socket, postId, userId }) {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("createComment", { postId, userId, content }, () => {
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
      <button type="submit">Comment</button>
    </form>
  );
}
