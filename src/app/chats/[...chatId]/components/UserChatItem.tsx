"use client";

import Avatar from "@/app/components/Avatar";
import useCurrentUser from "@/app/hooks/useCurrentUser";
import useOtherUsers from "@/app/hooks/useOtherUsers";
import { IMessage, IUser } from "@/schemas";
import clsx from "clsx";
import { format } from "date-fns";
import { useParams } from "next/navigation";

interface UserChatItemProps {
  title: string;
  users: IUser[];
  chatId: string;
  lastMessage: IMessage;
  image?: string;
  isGroup?: boolean;
}

export default function UserChatItem({
  title,
  users,
  chatId,
  image,
  lastMessage,
  isGroup,
}: UserChatItemProps) {
  const params = useParams();
  const user = useCurrentUser();
  const otherUser = useOtherUsers(user, users);

  const openChatId = params.chatId[0];
  const isOpen = openChatId === chatId;

  return (
    <div
      className={clsx(
        `
        relative
        inline-flex
        rounded-l-md
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
