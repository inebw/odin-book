import { useOutletContext } from "react-router";
import useGetConnections from "../utils/useGetConnections";
import useGetLiveUser from "../utils/useGetLiveUser";
import ConnectionManager from "./ConnectionManager";
import FollowingsSkeleton from "../skeleton/FollowingsSkeleton";

export default function Following() {
  const { user, url, profile, socket } = useOutletContext();
  const liveUser = useGetLiveUser(user.id, socket).liveUser;
  const { connections, loading, error } = useGetConnections(
    url,
    profile.id,
    "following",
  );

  if (loading || !liveUser) return <FollowingsSkeleton />;

  if (error) return <p>{error.message}</p>;

  return (
    <div className="border-l3 dark:border-d3 border rounded-md p-2 pb-18 sm:pb-28 lg:pb-40 ">
      <h2 className="font-bold px-2 sm:px-5 ">Following</h2>
      <div className="flex flex-col gap-3 p-1 sm:p-5 ">
        {connections.map((connection) => (
          <ConnectionManager
            key={connection.id}
            user={user}
            liveUser={liveUser}
            connection={connection}
            socket={socket}
            url={url}
            isSelf={connection.id === user.id}
            userFollows={liveUser.following
              .map((user) => user.id)
              .includes(connection.id)}
          />
        ))}
      </div>
    </div>
  );
}
