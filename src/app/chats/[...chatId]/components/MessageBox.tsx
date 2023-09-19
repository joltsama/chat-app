"use client";

import clsx from "clsx";
import { IMessage } from "@/schemas";
import { format } from "date-fns";
import { MouseEvent } from "react";
import { GoReply } from "react-icons/go";
import Avatar from "@/app/components/Avatar";
import MessageHoverMenu from "./MessageHoverMenu";
import useCurrentUser from "@/app/hooks/useCurrentUser";

interface MessageBoxProps {
  message: IMessage;
  sameSender?: boolean;
  inThread?: boolean;
  onReply?: (value: boolean, message: IMessage, threadId: string) => void;
}

function MessageBox({
  message,
  sameSender = false,
  inThread = false,
  onReply,
}: MessageBoxProps) {
  // hard coded, can be fetched from server
  const threadSize = 10;
  const { id: userId } = useCurrentUser();
  const isOwn = message.sender.id === userId;

  const onMouseOver = (e: MouseEvent) => {
    e.currentTarget.lastElementChild?.classList.remove("hidden");
  };

  const onMouseOut = (e: MouseEvent) => {
    e.currentTarget.lastElementChild?.classList.add("hidden");
  };

  return (
    <div className={clsx(sameSender ? "pt-1" : "mt-4")}>
      <div className="inline-flex">
        {!sameSender && (
          <Avatar name={message.sender.name} image={message.sender.image} />
        )}

        <div>
          {!sameSender && (
            <div>
              <span className="font-semibold text-stone-950">
                {message.sender.name}
              </span>
              <span className="ml-3 text-xs text-stone-700">
                {format(new Date(message.createdAt), "p")}
              </span>
            </div>
          )}

          <div
            className={clsx("relative", sameSender ? "ml-16 mt-0" : "mt-1")}
            {...(!inThread && {
              onMouseOver: onMouseOver,
              onMouseOut: onMouseOut,
            })}
          >
            <div
              className={clsx(
                `
                  w-fit
                  rounded-md
                  inline-flex
                  py-1 
                  px-2
                  mr-8
                  `,
                isOwn ? "bg-orange-100" : "bg-cyan-200"
              )}
            >
              {message.body}
            </div>

            {!inThread && onReply && (
              <MessageHoverMenu
                own={isOwn}
                onClick={() =>
                  onReply(true, message, message.thread.toString() || "")
                }
              />
            )}
          </div>

          {!inThread && message.thread && (
            <button
              className={clsx(
                `
                mt-2 
                text-sm 
                font-medium 
                text-red-500 
                px-2 
                thread-replies 
                hover:underline 
                inline-flex 
                items-center
                `,
                sameSender && "ml-16"
              )}
              onClick={() =>
                onReply &&
                onReply(true, message, message.thread.toString() || "")
              }
            >
              <GoReply className="mr-2" size={16} />
              {threadSize} replies
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MessageBox;
