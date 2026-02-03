import { useState } from "react";
import useGetLiveConnections from "../utils/useGetLiveConnections";
import ProfileHeader from "./ProfileHeader";

export default function Connections({
  userId,
  socket,
  changeConnection,
  connectionId,
  className,
}) {
  const { connections, loading, error } = useGetLiveConnections(socket, userId);
  const [search, setSearch] = useState("");

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <div
      className={`${className} sm:block p-2 w-full sm:max-w-60 rounded-md bg-l3 dark:bg-d3 space-y-3`}
    >
      <input
        onChange={(e) => setSearch(e.target.value)}
        className="bg-l2 dark:bg-d2 px-3 py-1 rounded-md w-full"
        type="search"
        name="search"
        value={search}
        placeholder="search"
      />
      {search &&
        connections
          .filter((c) =>
            `${c.first_name} ${c.last_name}.toLowerCase()`.includes(
              search.toLowerCase(),
            ),
          )
          .map((connection) => (
            <div
              onClick={() => changeConnection(connection.id)}
              key={connection.id}
              className="w-full"
            >
              <ProfileHeader user={connection} showOnline={true} />
            </div>
          ))}
      {!search &&
        connections.map((connection) => (
          <div
            onClick={() => changeConnection(connection.id)}
            key={connection.id}
            className="w-full cursor-pointer"
          >
            <ProfileHeader
              user={connection}
              className={`${connectionId === connection.id ? "bg-orange" : "bg-l4 dark:bg-d4"} flex items-center w-full py-1 px-2 gap-2 rounded-md `}
              showOnline={true}
            />
          </div>
        ))}
    </div>
  );
}
