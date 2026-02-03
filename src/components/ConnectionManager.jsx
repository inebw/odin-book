import ProfileHeader from "./ProfileHeader";
import FollowIcon from "../assets/FollowIcon";
import UnfollowfIcon from "../assets/FollowRemoveIcon";
import { useEffect, useState } from "react";
import SpinCircle from "../assets/SpinCircle";

export default function ConnectionManager({ connection, socket, user, url, userFollows, isSelf, liveUser }) {
  const [followLoader, setFollowLoader] = useState(false)
  const [unfollowLoader, setUnfollowLoader] = useState(false)

  useEffect(() => {
    setFollowLoader(false)
    setUnfollowLoader(false)
  }, [liveUser])


  const followUser = async (followId) => {
    setFollowLoader(true)
    const response = await fetch(`${url}/user/follow/${user.id}/${followId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    socket.emit('getUser', user.id)
  };

  const unfollowUser = async (followId) => {
    setUnfollowLoader(true)
    const response = await fetch(
      `${url}/user/unfollow/${user.id}/${followId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      },
    );
    socket.emit('getUser', user.id)
  };

  return (
    <div className="flex h-min justify-between p-2 bg-l4 dark:bg-d4 rounded-md " >
      <ProfileHeader user={connection} clickEnabled={true} />
      <div className="flex gap-5 flex-none origin-center scale-75 ">
        <button
          onClick={() => followUser(connection.id)}
          disabled={userFollows || (isSelf)}
          className="disabled:opacity-20 disabled:hover:decoration-0 flex gap-2 items-center w-min bg-yello font-bold px-5 py-2 rounded-full sm:rounded-md cursor-pointer active:translate-y-0.5">
          <p className="hidden sm:block">Follow</p>
          <FollowIcon className={`${followLoader ? "hidden" : ""} size-5 fill-d1 dark:fill-l1`} />
          <SpinCircle className={`${followLoader ? "" : "hidden"} size-5 fill-d1 dark:fill-l1`} />
        </button>
        <button
          onClick={() => unfollowUser(connection.id)}
          disabled={!userFollows || (isSelf)}
          className="disabled:opacity-20 disabled:hover:decoration-0 flex gap-3 items-center w-min bg-red font-bold px-5 py-2 rounded-full sm:rounded-md cursor-pointer active:translate-y-0.5">
          <p className="hidden sm:block">Unfollow</p>
          <UnfollowfIcon className={`${unfollowLoader ? "hidden" : ""} size-5 fill-d1 dark:fill-l1`} />
          <SpinCircle className={`${unfollowLoader ? "" : "hidden"} size-5 fill-d1 dark:fill-l1`} />
        </button>
      </div>
    </div>
  )
}
