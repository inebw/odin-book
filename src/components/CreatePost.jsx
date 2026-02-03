import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router";
import SendIcon from "../assets/SendIcon";
import CreateIcon from "../assets/CreateIcon";

export default function CreatePost() {
  const [content, setContent] = useState("");
  const [preview, setPreview] = useState(null);
  const [dpImg, setDpImg] = useState(null);
  const { url, user } = useOutletContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

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
    setLoading(true)
    try {

      let img_url = ""
      if (preview) img_url = await getFileLink();
      const response = await fetch(`${url}/post/${user.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content, img_url }),
        credentials: "include",
      });
      if (!response.ok) throw new Error("Server Error")

      const data = await response.json()
      navigate(`/post/${data.id}`)

    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  };

  if (loading) return <p>Loading...</p>

  if (error) return <p>{error.message}</p>

  return (
    <div className="flex flex-col gap-5 p-2 sm:px-8 sm:py-5 bg-l2 dark:bg-d2 overflow-y-auto flex-1 rounded-md custom-scrollbar">
      <form
        className="bg-l3 min-h-64 rounded-md dark:bg-d3 relative "
        method="POST"
        onSubmit={handleSubmit}
      >
        <button
          type="button"
          className="flex gap-2 items-center absolute bottom-0 left-0 -translate-y-2 sm:translate-x-3.5 hover:bg-l4 dark:hover:bg-d4 rounded-md py-1 px-2"
        >
          <label
            className="absolute bottom-0 left-0 size-full z-10 cursor-pointer"
            htmlFor="dp"
          ></label>
          <input
            className="hidden"
            type="file"
            id="dp"
            name="dp"
            onChange={handleFileChange}
            onAbort={() => setPreview("")}
            accept="image/*"
          />
          <CreateIcon className={"size-8 fill-green"} />
          <p className="text-sm font-bold">
            {preview ? "Change Image" : "Add Image"}
          </p>
        </button>

        <img
          className={`${preview ? "w-full sm:h-72 pt-3" : ""} object-contain `}
          src={preview}
          alt=""
        />
        <label htmlFor="content" className="size-full">
          <textarea
            className="size-full pl-4 p-5 sm:pb-10 outline-none resize-none"
            id="content"
            placeholder={
              preview ? "Caption this" : "What's on your mind today?"
            }
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </label>
        <button
          className="absolute flex items-center gap-2 bottom-0 right-0 -translate-3 sm:-translate-x-4.5 z-10 cursor-pointer py-2 px-3 rounded-md bg-red"
          type="submit"
        >
          <p className="text-sm font-bold">Post</p>
          <SendIcon className={"size-4 fill-d1 dark:fill-l1"} />
        </button>
      </form>
    </div>
  );
}
