import { Outlet, useNavigate } from "react-router";
import useGetAuthUser from "./utils/useGetAuthUser";
import { socket } from "./socket";
import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
const url = "http://localhost:3000";

function App() {
  const [theme, setTheme] = useState("dark");
  const navigate = useNavigate();
  const [refreshUser, setRefreshUser] = useState(0);
  const { user, loading, error } = useGetAuthUser(url, refreshUser, socket);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "" : "dark"));
  };

  const logout = async () => {
    const response = await fetch(`${url}/user/unAuthenticate`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (user) socket.emit("imOffline", user.id);
    response.json().then((res) => console.log(res));
    setRefreshUser((prev) => prev + 1);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div
      className={`${theme} flex flex-col gap-3 bg-l1 dark:bg-d1 text-d1 dark:text-l1 min-h-dvh max-h-dvh lg:px-[calc(25%-10rem)] lg:py-5`}
    >
      <Header
        logoutHandler={logout}
        user={user}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <div className="flex flex-col-reverse  sm:flex-row flex-1 gap-5 overflow-hidden">
        <Nav user={user} />
        <Outlet context={{ url, user, refreshUser, setRefreshUser, socket }} />
      </div>
    </div>
  );
}

export default App;
