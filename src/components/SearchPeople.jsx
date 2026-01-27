import { useState } from "react";
import { useOutletContext } from "react-router";
import useGetConnections from "../utils/useGetConnections";

export default function SearchPeople() {
  const { url, user } = useOutletContext();
  const [search, setSearch] = useState("");
  const { connections, loading, error } = useGetConnections(
    url,
    null,
    "allUsers",
  );

  const followUser = async (followId) => {
    const response = await fetch(`${url}/user/follow/${user.id}/${followId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
  };

  const unfollowUser = async (followId) => {
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
  };

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <input
        type="search"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {search &&
          connections
            .filter((item) =>
              `${item.first_name} ${item.last_name}.`
                .toLowerCase()
                .includes(search.toLowerCase()),
            )
            .filter((item) => item.id !== user.id)
            .map((connection) => (
              <div>
                <p>
                  {connection.first_name} {connection.last_name}
                </p>
                <button onClick={() => followUser(connection.id)}>
                  Follow
                </button>
                <button onClick={() => unfollowUser(connection.id)}>
                  Unfollow
                </button>
              </div>
            ))}
      </div>
    </div>
  );
}
