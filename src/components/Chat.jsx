import { useNavigate, useOutletContext } from "react-router";
import Connections from "./Connections";
import { useEffect, useState } from "react";
import ChatBoard from "./ChatBoard";
import notSelected from "./../assets/notSelected.png";

export default function Chat() {
  const { user, socket } = useOutletContext();
  const [connectionId, setConnectionId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  const changeConnection = (id) => {
    setConnectionId(id);
  };

  return (
    user && (
      <div className="flex gap-5 p-2 sm:px-8 sm:py-5 bg-l2 dark:bg-d2 flex-1 min-h-[0] rounded-md ">
        <Connections
          socket={socket}
          userId={user.id}
          connectionId={connectionId}
          changeConnection={changeConnection}
          className={!connectionId ? "" : "hidden"}
        />
        {connectionId && (
          <ChatBoard
            socket={socket}
            userId={user.id}
            connectionId={connectionId}
            changeConnection={changeConnection}
          />
        )}
        {!connectionId && (
          <div className="hidden sm:flex h-full w-full  flex-col items-center justify-center">
            <img src={notSelected} alt="" />
            <p>Select someone to start chatting!</p>
          </div>
        )}
      </div>
    )
  );
}
