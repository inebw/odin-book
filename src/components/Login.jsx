import { useState } from "react";
import { useOutletContext } from "react-router";

export default function Login() {
  const initialValue = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialValue);
  const { url } = useOutletContext();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      credentials: "include",
    });
    console.log(response.ok);
  };
  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      className="flex flex-col gap-3 "
    >
      <label htmlFor="username">
        <input
          id="username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="username"
        />
      </label>
      <label htmlFor="password">
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="password"
        />
      </label>

      <button type="submit" className="w-min">
        {" "}
        Login
      </button>
    </form>
  );
}
