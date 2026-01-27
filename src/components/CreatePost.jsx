import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router";

export default function CreatePost() {
  const [content, setContent] = useState("");
  const { url, user } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${url}/post/${user.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
      credentials: "include",
    });
    console.log(response.ok);
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
      <button type="submit">Post</button>
    </form>
  );
}
