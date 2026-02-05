import { useLocation, useNavigate } from "react-router";
import HomeIcon from "../assets/HomeIcon";
import CreateIcon from "../assets/CreateIcon";
import ChatIcon from "../assets/ChatIcon";
import { useState } from "react";
import ToggleSidebar from "./TogglSidebar";
import LoginIcon from "../assets/LoginIcon";
import RegisterIcon from "../assets/RegisterIcon";

export default function Nav({ user }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOn, setSidebarOn] = useState(true);

  const sidebarToggle = () => {
    setSidebarOn((prev) => !prev);
  };

  if (!user)
    return (
      <div className="flex sm:flex-col gap-2 sm:gap-5 bg-l2 dark:bg-d2 sm:rounded-md sm:p-2 sm:items-baseline relative">
        <button
          className={`${location.pathname === "/login" ? "bg-yello" : "bg-l3 dark:bg-d3"} flex gap-3 items-center justify-center sm:justify-start cursor-pointer p-2 ${sidebarOn ? "px-5" : ""} sm:rounded-md font-bold w-full`}
          onClick={() => navigate("login")}
        >
          <LoginIcon className={"size-6 fill-d1 dark:fill-l1"} />
          <p className={`${sidebarOn ? "sm:block" : ""} hidden`}>Login</p>
        </button>
        <button
          className={`${location.pathname === "/register" ? "bg-yello" : "bg-l3 dark:bg-d3"} flex gap-3 items-center justify-center sm:justify-start cursor-pointer p-2 ${sidebarOn ? "px-5" : ""} sm:rounded-md font-bold w-full`}
          onClick={() => navigate("register")}
        >
          <RegisterIcon className={"size-6 fill-d1 dark:fill-l1"} />
          <p className={`${sidebarOn ? "sm:block" : ""} hidden`}> Register</p>
        </button>
        <ToggleSidebar sidebarOn={sidebarOn} sidebarToggle={sidebarToggle} />
      </div>
    );

  return (
    <div
      className={
        "flex sm:flex-col gap-2 sm:gap-5 bg-l2 dark:bg-d2 sm:rounded-md sm:p-2 relative"
      }
    >
      <button
        className={`${location.pathname === "/" ? "bg-yello" : "bg-l3 dark:bg-d3"} flex gap-3 items-center justify-center sm:justify-start cursor-pointer p-2 ${sidebarOn ? "px-5" : ""} sm:rounded-md font-bold w-full`}
        onClick={() => navigate("/")}
      >
        <HomeIcon className={"size-6 fill-d7 dark:fill-l1"} />
        <p className={`${sidebarOn ? "sm:block" : ""} hidden`}>Home</p>
      </button>
      <button
        className={`${location.pathname === "/create" ? "bg-yello" : "bg-l3 dark:bg-d3"} flex gap-3 items-center justify-center sm:justify-start cursor-pointer p-2 ${sidebarOn ? "px-5" : ""} sm:rounded-md font-bold w-full`}
        onClick={() => navigate("create")}
      >
        <CreateIcon className={"size-6 fill-d7 dark:fill-l1"} />
        <p className={`${sidebarOn ? "sm:block" : ""} hidden`}>New Post</p>
      </button>
      <button
        className={`${location.pathname === "/chat" ? "bg-yello" : "bg-l3 dark:bg-d3"} flex gap-3 items-center justify-center sm:justify-start cursor-pointer p-2 ${sidebarOn ? "px-5" : ""} sm:rounded-md font-bold w-full`}
        onClick={() => navigate("chat")}
      >
        <ChatIcon className={"size-6 fill-d7 dark:fill-l1"} />
        <p className={`${sidebarOn ? "sm:block" : ""} hidden`}>Chat</p>
      </button>
      <ToggleSidebar sidebarOn={sidebarOn} sidebarToggle={sidebarToggle} />
    </div>
  );
}
