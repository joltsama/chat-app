"use client";

import getThread from "@/actions/getThread";
import { IMessage, IThread } from "@/schemas";
import React, { useEffect, useState } from "react";
import { LuSendHorizonal } from "react-icons/lu";
import MessageBox from "./MessageBox";
import MessageInput from "./MessageInput";

interface ThreadWindowProps {
  initialMessage: IMessage;
  threadId?: string;
  onClose: () => void;
}

type FullThread = IThread & {
  messages: IMessage[];
};

function ThreadWindow({
  initialMessage,
  threadId,
  onClose,
}: ThreadWindowProps) {
  const [thread, setThread] = useState<FullThread>({
    id: "",
    messages: [],
    beginningMessageId: initialMessage.id,
    createdAt: new Date(),
  });

  useEffect(() => {
    console.log("threadId", threadId);
    const fetchMessages = async () => {
      const threadDetails: FullThread = await getThread(threadId!);
      console.log("threadDetails", threadDetails);
      setThread(threadDetails);
    };

    if (threadId) {
      fetchMessages();
    }
  }, [threadId]);

  const onSubmit = (e: any) => {
    const data = new FormData(e.target);
    e.target.reset();
    e.preventDefault();
    const messageBody: string = data.get("message")?.toString() || "";
    setThread((prev) => {
      const previousMessages = [...prev?.messages!];
      previousMessages.push({
        id: `message1.1.${previousMessages.length + 1}`,
        seenBy: [],
        body: messageBody,
        createdAt: new Date(),
        chat: "chat1",
        thread: "thread1",
        sender: {
          id: "user1",
          name: "John",
        },
      });
      return {
        ...prev!,
        messages: previousMessages,
      };
    });
  };

  return (
    <div className="border-l h-full p-4 ">
      <button className="float-right" onClick={onClose}>
        X
      </button>
      <div className="h-full flex flex-col">
        <div className="text-lg font-medium my-2">
          {threadId ? "Thread" : "Create a thread"}
        </div>
        <div className="flex-1 overflow-y-auto">
          <MessageBox message={initialMessage} inThread />
          <hr className="my-4" />
          {thread?.messages?.map((message) => (
            <MessageBox key={message.id} message={message} inThread />
          ))}
        </div>
        <form onSubmit={onSubmit}>
          <div className="inline-flex w-full">
            <MessageInput id="threadMessageInput" />
            <button
              type="submit"
              className={"dark:bg-cyan-950 dark:text-white p-2 rounded-sm"}
            >
              <LuSendHorizonal />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ThreadWindow;
