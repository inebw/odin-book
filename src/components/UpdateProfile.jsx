import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router";
import thumbnail from "./../assets/thumbnail.png";
import Errors from "./Errors";
import Loader from "./Loader";
import SuccessUpdate from "./SuccessUpdate";

export default function UpdateProfile({}) {
  const { url, user, setRefreshUser } = useOutletContext();
  const initialValue = {
    first_name: user.first_name,
    last_name: user.last_name,
    username: user.username,
  };
  const [formData, setFormData] = useState(initialValue);
  const [dpImg, setDpImg] = useState(null);
  const [preview, setPreview] = useState(user.dp);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/register");
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

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const dp = await getFileLink();
    const response = await fetch(`${url}/user/update/${user.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, dp }),
      credentials: "include",
    });
    if (!response.ok) {
      const errors = await response.json();
      console.log(errors);
      setError(errors);
    } else {
      const sucessMsg = await response.json();
      setSuccess(sucessMsg);
      setRefreshUser((prev) => prev + 1);
    }
    setLoading(false);
  };

  if (loading) return <Loader className={"register-loader"} />;

  if (success) return <SuccessUpdate success={success} />;

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      className="flex flex-col items-center justify-center gap-5 bg-l2 dark:bg-d2 flex-1 rounded-md "
    >
      <div className="relative">
        <label
          htmlFor="dp"
          className="size-full absolute flex items-center justify-center text-l1 font-bold cursor-pointer"
        >
          {preview ? (
            <p className="rounded-md p-1 px-3 bg-d8">Change Image</p>
          ) : (
            <p className="rounded-md p-1 px-3 bg-d8">Add Image</p>
          )}
        </label>
        <input
          className="hidden"
          type="file"
          id="dp"
          name="dp"
          onChange={handleFileChange}
          accept="image/*"
        />
        <img
          src={preview ? preview : thumbnail}
          className="size-40 rounded-md object-cover"
          alt=""
        />
      </div>
      <label htmlFor="first_name">
        <p>First Name</p>
        <input
          className="bg-l3 dark:bg-d3 py-1 px-3 rounded-md focus:outline-1 focus:outline-d2 focus:dark:outline-l2"
          id="first_name"
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="last_name">
        <p>Last Name</p>
        <input
          className="bg-l3 dark:bg-d3 py-1 px-3 rounded-md focus:outline-1 focus:outline-d2 focus:dark:outline-l2"
          id="last_name"
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="username">
        <p>Username</p>
        <input
          className="bg-l3 dark:bg-d3 py-1 px-3 rounded-md focus:outline-1 focus:outline-d2 focus:dark:outline-l2"
          id="username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </label>

      {error && <Errors error={error} />}
      <button
        type="submit"
        className="w-min bg-green font-bold px-5 py-2 rounded-md cursor-pointer active:translate-y-0.5"
      >
        {" "}
        Update
      </button>
    </form>
  );
}
