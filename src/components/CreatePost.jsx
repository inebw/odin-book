import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router";

export default function CreatePost() {
  const [content, setContent] = useState("");
  const [preview, setPreview] = useState(null);
  const [dpImg, setDpImg] = useState(null);
  const { url, user } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  const getFileLink = async () => {
    const formData = new FormData();
    formData.append("file", dpImg);
    const response = await fetch(`${url}/register/uploadPicture/`, {
      method: "POST",
      credentials: "include",
      body: formData,
    });
    if (response.ok) {
      const fileLink = await response.json();
      return fileLink.fileLink;
    } else {
      const errMsg = await response.json();
      console.log(errMsg);
      return "";
    }
  };

  const handleFileChange = (e) => {
    setPreview(null);
    setDpImg(e.target.files[0]);
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const fileReader = new FileReader();
      fileReader.onload = function (e) {
        setPreview(e.target.result);
      };
      fileReader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const img_url = await getFileLink();
    const response = await fetch(`${url}/post/${user.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content, img_url }),
      credentials: "include",
    });
    console.log(response.ok);
  };

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <label htmlFor="dp">
        <input
          type="file"
          id="dp"
          name="dp"
          onChange={handleFileChange}
          onAbort={() => setPreview("")}
          accept="image/*"
        />
      </label>
      <img src={preview} alt="" />
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
