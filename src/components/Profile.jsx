import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router";

export default function Profile() {
  const { url, user } = useOutletContext();
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);

  const initialValue = {
    first_name: user && user.first_name,
    last_name: user && user.last_name,
    username: user && user.username,
  };
  const [formData, setFormData] = useState(initialValue);

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${url}/user/update/${user.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      credentials: "include",
    });
    if (response.ok) setIsDisabled(true);
    const data = await response.json();
    console.log(data);
  };
  return (
    user && (
      <div>
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
              disabled={isDisabled}
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
              disabled={isDisabled}
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
              disabled={isDisabled}
            />
          </label>

          <button
            className={`${isDisabled ? "" : "hidden"} w-min`}
            type="button"
            onClick={() => setIsDisabled(false)}
          >
            Edit
          </button>
          <button
            type="submit"
            className={`${isDisabled ? "hidden" : ""} w-min`}
          >
            {" "}
            Update
          </button>
        </form>
        <button onClick={() => navigate("/followers")}>Followers</button>
        <button onClick={() => navigate("/following")}>Following</button>
      </div>
    )
  );
}
