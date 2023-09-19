"use client";

import Avatar from "@/app/components/Avatar";
import { IMessage } from "@/schemas";
import clsx from "clsx";
import { format } from "date-fns";
import { useParams } from "next/navigation";

interface UserChatItemProps {
  name: string;
  chatId: string;
  lastMessage: IMessage;
  image?: string;
  isGroup?: boolean;
}

export default function UserChatItem({
  name,
  chatId,
  image,
  lastMessage,
  isGroup,
}: UserChatItemProps) {
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
      <Avatar isGroup={isGroup} name={name} image={image} />
      <div className="overflow-hidden">
        <div className="font-medium">{name}</div>
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
