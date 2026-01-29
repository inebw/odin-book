import { useNavigate, useOutletContext } from "react-router";
import Connections from "./Connections";
import { useEffect, useState } from "react";
import ChatBoard from "./ChatBoard";

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
      <div className="flex gap-4">
        <Connections
          socket={socket}
          userId={user.id}
          changeConnection={changeConnection}
        />
        {connectionId && (
          <ChatBoard
            socket={socket}
            userId={user.id}
            connectionId={connectionId}
          />
        )}
      </div>
    )
  );
}
