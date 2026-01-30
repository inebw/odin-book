import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router";
import thumbnail from "./../assets/thumbnail.png";
import Errors from "./Errors";
import SuccessRegister from "./SucessRegister";
import Loader from "./Loader";

export default function Register({}) {
  const initialValue = {
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    confirm_password: "",
  };
  const [formData, setFormData] = useState(initialValue);
  const [dpImg, setDpImg] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const { url, user } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/feed");
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
    const response = await fetch(`${url}/register`, {
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
    }
    setLoading(false);
  };

  if (loading) return <Loader className={"register-loader"} />;

  if (success) return <SuccessRegister success={success} />;

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
          className="size-40 rounded-md"
          alt=""
        />
      </div>
      <label htmlFor="first_name">
        <input
          className="bg-l3 dark:bg-d3 py-1 px-3 rounded-md focus:outline-1 focus:outline-d2 focus:dark:outline-l2"
          id="first_name"
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
      </label>
      <label htmlFor="last_name">
        <input
          className="bg-l3 dark:bg-d3 py-1 px-3 rounded-md focus:outline-1 focus:outline-d2 focus:dark:outline-l2"
          id="last_name"
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
      </label>
      <label htmlFor="username">
        <input
          className="bg-l3 dark:bg-d3 py-1 px-3 rounded-md focus:outline-1 focus:outline-d2 focus:dark:outline-l2"
          id="username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />
      </label>
      <label htmlFor="password">
        <input
          className="bg-l3 dark:bg-d3 py-1 px-3 rounded-md focus:outline-1 focus:outline-d2 focus:dark:outline-l2"
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
      </label>
      <label htmlFor="confirm_password">
        <input
          className="bg-l3 dark:bg-d3 py-1 px-3 rounded-md focus:outline-1 focus:outline-d2 focus:dark:outline-l2"
          id="confirm_password"
          type="password"
          name="confirm_password"
          value={formData.confirm_password}
          onChange={handleChange}
          placeholder="Confirm Password"
          required
        />
      </label>
      {error && <Errors error={error} />}
      <button
        type="submit"
        className="w-min bg-green font-bold px-5 py-2 rounded-md cursor-pointer active:translate-y-0.5"
      >
        {" "}
        Register
      </button>
    </form>
  );
}
