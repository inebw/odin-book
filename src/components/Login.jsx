import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router";
import Loader from "./Loader";
import Errors from "./Errors";

export default function Login() {
  const initialValue = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialValue);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { url, setRefreshUser, user } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/feed");
  }, [user]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(`${url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      credentials: "include",
    });
    if (!response.ok) {
      const errors = await response.json();
      setError(errors);
      setLoading(false);
    }
    setRefreshUser((prev) => prev + 1);
  };

  if (loading) return <Loader className={"login-loader"} />;

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      className="flex flex-col items-center justify-center gap-5 bg-l2 dark:bg-d2 flex-1 rounded-md "
    >
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
      {error && <Errors error={error} />}

      <button
        type="submit"
        className="w-min bg-green font-bold px-5 py-2 rounded-md cursor-pointer active:translate-y-0.5"
      >
        {" "}
        Login
      </button>
    </form>
  );
}
