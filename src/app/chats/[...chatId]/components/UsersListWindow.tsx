import Link from "next/link";
import UserChatItem from "./UserChatItem";

interface UsersListWindowProps {
  chats: any;
}

export default function UsersListWindow({ chats }: UsersListWindowProps) {
  return (
    <div className="bg-cyan-100 p-4 min-h-screen">
      {chats.map((chat: any, index: number) => (
        <Link href={`/chats/${chat.id}`} key={chat.id}>
          <UserChatItem
            chatId={chat.id}
            isGroup={chat.isGroup}
            name={chat.users[index].name}
            lastMessage={chat.messages[chat.messages.length - 1]}
          />
        </Link>
      ))}
    </div>
  );
}
