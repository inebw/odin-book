import { format } from "date-fns";
import useGetLiveChat from "../utils/useGetLiveChat";
import emptyChat from "./../assets/emptyChats.png";
import ChatLiveSkeleton from "../skeleton/ChatLiveSkeleton";

export default function ChatLive({ userId, connectionId, socket }) {
  const { chats, loading, error } = useGetLiveChat(
    userId,
    connectionId,
    socket,
  );
  const chatLenght = chats && chats.length;

  if (loading) return <ChatLiveSkeleton />;

  if (error) return <p>{error.message}</p>;

  return (
    <div className="p-2 flex w-full flex-col-reverse gap-3 mt-auto overflow-scroll h-full no-scrollbar ">
      {chats.map((chat) => (
        <div key={chat.id}>
          {chat.sender_id == userId && (
            <div
              className="rounded-2xl rounded-tl-none w-72 p-5 ml-auto bg-l4 dark:bg-d4 space-y-2"
              key={chat.id}
            >
              <p>{chat.content}</p>
              <p className="text-xs opacity-60">
                {format(chat.timestamp, "PPp")}
              </p>
            </div>
          )}
          {chat.receiver_id == userId && (
            <div
              className="rounded-2xl rounded-br-none w-72 p-5 mr-auto bg-l5 dark:bg-d6 space-y-2"
              key={chat.id}
            >
              <p>{chat.content}</p>
              <p className="text-xs opacity-60">
                {format(chat.timestamp, "PPp")}
              </p>
            </div>
          )}
        </div>
      ))}
      {chatLenght == 0 && (
        <div className="h-full flex  flex-col items-center justify-center">
          <img src={emptyChat} alt="" />
          <p>No messages to show</p>
        </div>
      )}
    </div>
  );
}
