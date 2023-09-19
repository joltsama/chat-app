"use client";

import clsx from "clsx";
import React, { MouseEvent } from "react";
import ThreadReplyMenu from "./ThreadReplyMenu";
import Avatar from "@/app/components/Avatar";
import { IMessage } from "@/schemas";
import { format } from "date-fns";

interface MessageBoxProps {
  message: IMessage;
  chainMessages?: boolean;
  inThread?: boolean;
  onReply?: (value: boolean, message: IMessage, threadId: string) => void;
}

function MessageBox({
  message,
  chainMessages = false,
  inThread = false,
  onReply,
}: MessageBoxProps) {
  console.log("[MessageBox] message:", message);

  const userId = "user1";
  const isOwn = message.sender.id === userId;
  // can be fetched from server
  const threadLength = 10;

  const onMouseOver = (e: MouseEvent) => {
    e.currentTarget.lastElementChild?.classList.remove("hidden");
  };

  const onMouseOut = (e: MouseEvent) => {
    e.currentTarget.lastElementChild?.classList.add("hidden");
  };

  return (
    <div className={clsx(chainMessages ? "mt-2" : "mt-4")}>
      <div className={"inline-flex"}>
        {!chainMessages && (
          <Avatar name={message.sender.name} image={message.sender.image} />
        )}
        <div>
          {!chainMessages && (
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
            className="relative"
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
                isOwn ? "bg-orange-100" : "bg-cyan-200",
                chainMessages && "ml-16"
              )}
            >
              {message.body}
            </div>
            {!inThread && (
              <ThreadReplyMenu
                own={isOwn}
                onClick={() =>
                  onReply &&
                  onReply(true, message, message.thread.toString() || "")
                }
              />
            )}
          </div>
          {!inThread && message.thread && (
            <button
              className="ml-2 mt-1 text-sm font-medium text-stone-600 thread-replies hover:underline"
              onClick={() =>
                onReply &&
                onReply(true, message, message.thread.toString() || "")
              }
            >
              {threadLength} replies
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MessageBox;
