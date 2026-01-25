import { useState } from "react";
import { useOutletContext } from "react-router";

export default function Register() {
  const initialValue = {
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    confirm_password: "",
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
    const response = await fetch(`${url}/register`, {
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
      <label htmlFor="first_name">
        <input
          id="first_name"
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          placeholder="First Name"
        />
      </label>
      <label htmlFor="last_name">
        <input
          id="last_name"
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          placeholder="Last Name"
        />
      </label>
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
      <label htmlFor="confirm_password">
        <input
          id="confirm_password"
          type="password"
          name="confirm_password"
          value={formData.confirm_password}
          onChange={handleChange}
          placeholder="confirm password"
        />
      </label>
      <button type="submit" className="w-min">
        {" "}
        Register
      </button>
    </form>
  );
}
