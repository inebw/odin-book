import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router";
import useGetConnections from "../utils/useGetConnections";
import AccountSearchIcon from "../assets/AccountSearch";
import ConnectionManager from "./ConnectionManager";
import useGetLiveUser from "../utils/useGetLiveUser";
import BackIcon from "../assets/BackIcon";
import emptySearch from "./../assets/searchPeople.png";
import SearchPeopleSkeleton from "../skeleton/SearchPeopleSkeleton";

export default function SearchPeople() {
  const { url, user, socket } = useOutletContext();
  const [search, setSearch] = useState("");
  const liveUser = user && useGetLiveUser(user.id, socket).liveUser;
  const navigate = useNavigate();
  const { connections, loading, error } = useGetConnections(
    url,
    null,
    "allUsers",
  );

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  if (loading || !liveUser) return <SearchPeopleSkeleton />;

  if (error) return <p>{error.message}</p>;

  return (
    <div className="flex flex-col gap-5 p-2 sm:px-8 sm:py-5 bg-l2 dark:bg-d2 overflow-y-auto flex-1 rounded-md custom-scrollbar">
      <div className="flex gap-3 w-full">
        <button
          onClick={() => navigate("/")}
          className="cursor-pointer active:-translate-x-1"
        >
          <BackIcon className={"size-8 fill-d7 dark:fill-l1"} />
        </button>
        <div className="flex flex-1 justify-between bg-l3 dark:bg-d3 h-max gap-3 items-center cursor-text px-5 py-2 rounded-xl ">
          <input
            className="outline-none w-full"
            type="search"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search People"
            autoFocus
          />
          <AccountSearchIcon className={"size-5 fill-d7 dark:fill-l1"} />
        </div>
      </div>

      <div className="p-2 space-y-3 h-full ">
        {search &&
          connections
            .filter((item) =>
              `${item.first_name} ${item.last_name}.`
                .toLowerCase()
                .includes(search.toLowerCase()),
            )
            .filter((item) => item.id !== user.id)
            .map((connection) => (
              <ConnectionManager
                key={connection.id}
                user={user}
                connection={connection}
                socket={socket}
                url={url}
                isSelf={connection.id === user.id}
                userFollows={liveUser.following
                  .map((user) => user.id)
                  .includes(connection.id)}
              />
            ))}
        {!search && (
          <div className="h-full flex  flex-col items-center justify-center">
            <img src={emptySearch} alt="" />
            <p>Find people to follow!</p>
          </div>
        )}
      </div>
    </div>
  );
}
