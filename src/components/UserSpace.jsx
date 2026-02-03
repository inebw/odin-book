import { useState } from "react";
import { useNavigate } from "react-router";
import ProfileIcon from "../assets/ProfileIcon";
import LogoutIcon from "../assets/LogoutIcon";

export default function UserSpace({ user, logoutHandler }) {
  const [isHidden, setIsHidden] = useState(true);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsHidden((prev) => !prev);
  };
  if (user)
    return (
      <div className="relative">
        <button
          className="flex cursor-pointer gap-2 items-center justify-center sm:py-2 sm:px-3 max-w-[180px] box-border sm:bg-l4 sm:dark:bg-d4 rounded-md"
          onClick={toggleDropdown}
        >
          <img className="size-8 bg-d3 dark:bg-l3 rounded-full" src={user.dp} />
          <p className="truncate hidden sm:block">
            {user.first_name} {user.last_name}
          </p>
        </button>
        <div
          className={`${isHidden ? "hidden" : ""} flex flex-col items-baseline min-w-full gap-3 absolute bottom-0 right-0 translate-y-[105%] bg-l4 dark:bg-d4 rounded-md py-2 px-3`}
        >
          <button
            onClick={() => navigate(`/profile/${user.username}`)}
            className="opacity-60 hover:opacity-100 transition-opacity delay-150 cursor-pointer flex gap-2 items-center"
          >
            <ProfileIcon className={"size-5 fill-d1 dark:fill-l1"} />
            <p className="truncate ">View Profile</p>
          </button>
          <button
            onClick={logoutHandler}
            className="opacity-60 hover:opacity-100 transition-opacity delay-150 duration-100 cursor-pointer flex gap-2 items-center"
          >
            <LogoutIcon className={"size-5 fill-d1 dark:fill-l1"} />
            <p className="truncate ">Logout</p>
          </button>
        </div>
      </div>
    );
}
