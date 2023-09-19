"use client";

import Avatar from "@/app/components/Avatar";
import { IMessage, IUser } from "@/schemas";
import clsx from "clsx";
import { format } from "date-fns";
import { useParams } from "next/navigation";

interface UserChatItemProps {
  title: string;
  users: string;
  chatId: string;
  lastMessage: IMessage;
  image?: string;
  isGroup?: boolean;
}

const getOtherUsers = (me: IUser, users: IUser[]): IUser[] => {
  const otherUsers = users.filter((user) => user.id !== me.id);
  return otherUsers;
};

export default function UserChatItem({
  title,
  users,
  chatId,
  image,
  lastMessage,
  isGroup,
}: UserChatItemProps) {
  console.log("title", title);
  const user: IUser = {
    id: "user1",
    name: "",
  };
  // @ts-ignore
  const otherUser = getOtherUsers(user, users);

  const params = useParams();
  const openChatId = params.chatId[0];
  console.log("[UserChatItem] chatId", openChatId);

  const isOpen = openChatId === chatId;

  return (
    <div
      className={clsx(
        `
        relative
        inline-flex
        rounded-md
        px-4
        py-2 
        w-full 
        items-center
        hover:bg-white
        cursor-pointer
        mb-2
        transition
      `,
        isOpen && "bg-white"
      )}
    >
      <Avatar isGroup={isGroup} name={otherUser[0].name} image={image} />
      <div className="overflow-hidden">
        <div className="font-medium">{isGroup ? title : otherUser[0].name}</div>
        <div className="overflow-hidden text-ellipsis whitespace-nowrap text-sm text-stone-600">
          {lastMessage.body}
        </div>
      </div>
      <div className="absolute text-xs text-stone-600 right-3 top-3">
        {format(new Date(lastMessage.createdAt), "p")}
      </div>
    </div>
  );
}
