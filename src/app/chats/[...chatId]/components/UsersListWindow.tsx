import Link from "next/link";
import UserChatItem from "./UserChatItem";

interface UsersListWindowProps {
  chats: any;
}

export default function UsersListWindow({ chats }: UsersListWindowProps) {
  return (
    <div className="bg-cyan-100 p-4 min-h-screen">
      {chats.map((chat: any) => (
        <Link href={`/chats/${chat.id}`} key={chat.id}>
          <UserChatItem
            chatId={chat.id}
            isGroup={chat.isGroup}
            users={chat.users}
            title={chat.title}
            lastMessage={chat.messages[chat.messages.length - 1]}
          />
        </Link>
      ))}
    </div>
  );
}
