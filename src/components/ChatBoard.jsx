import ChatCreate from "./ChatCreate";
import ChatHeader from "./ChatHeader";
import ChatLive from "./ChatLive";

export default function ChatBoard({
  socket,
  userId,
  connectionId,
  changeConnection,
}) {
  return (
    <div className="flex flex-col gap-3 w-full p-2 rounded-md bg-l3 dark:bg-d3 space-y-3">
      <ChatHeader
        socket={socket}
        userId={connectionId}
        changeConnection={changeConnection}
      />
      <ChatLive socket={socket} userId={userId} connectionId={connectionId} />
      <ChatCreate socket={socket} userId={userId} connectionId={connectionId} />
    </div>
  );
}
