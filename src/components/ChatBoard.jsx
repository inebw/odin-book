import ChatCreate from "./ChatCreate";
import ChatHeader from "./ChatHeader";
import ChatLive from "./ChatLive";

export default function ChatBoard({ socket, userId, connectionId }) {
  return (
    <div>
      <ChatHeader socket={socket} userId={connectionId} />
      <ChatLive socket={socket} userId={userId} connectionId={connectionId} />
      <ChatCreate socket={socket} userId={userId} connectionId={connectionId} />
    </div>
  );
}
