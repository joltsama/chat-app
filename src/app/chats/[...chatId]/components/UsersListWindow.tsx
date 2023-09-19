import Link from "next/link";
import UserChatItem from "./UserChatItem";

interface UsersListWindowProps {
  chats: any;
}

export default function UsersListWindow({ chats }: UsersListWindowProps) {
  return (
    <div className="bg-cyan-100 p-4 pr-0 min-h-screen">
      <div className="text-lg text-stone-950 font-medium py-3 pb-6">
        Contacts
      </div>

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
