import { Outlet, useNavigate } from "react-router";
import useGetAuthUser from "./utils/useGetAuthUser";
import { socket } from "./socket";
import { useState } from "react";
const url = "http://localhost:3000";

function App() {
  const navigate = useNavigate();
  const [refreshUser, setRefreshUser] = useState(0);
  const { user, loading, error } = useGetAuthUser(url, refreshUser);

  const logout = async () => {
    const response = await fetch(`${url}/user/unAuthenticate`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    response.json().then((res) => console.log(res));
    setRefreshUser((prev) => prev + 1);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Odin Book</h1>
      <div className="flex gap-3">
        <button onClick={() => navigate("login")}>Login</button>
        <button onClick={logout}>Logout</button>
        <button onClick={() => navigate("register")}>Register</button>
        <button onClick={() => navigate("feed")}>Feed</button>
        <button onClick={() => navigate("create")}>Create</button>
        <button onClick={() => navigate("profile")}>Profile</button>
        <button onClick={() => navigate("find")}>Find People</button>
      </div>
      <Outlet context={{ url, user, refreshUser, setRefreshUser, socket }} />
    </div>
  );
}

export default App;
