"use client";

import getThread from "@/actions/getThread";
import { IMessage, IThread } from "@/schemas";
import { useEffect, useState } from "react";
import ChatInputForm from "./ChatInputForm";
import MessageBox from "./MessageBox";

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

  const onSubmit = (data: { message: string }) => {
    const messageBody: string = data.message;
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
    <div className="border-l h-full">
      <button className="float-right" onClick={onClose}>
        X
      </button>
      <div className="h-full flex flex-col">
        {/* Heading */}
        <div className="text-lg font-medium my-2 pt-4 px-4">
          {threadId ? "Thread" : "Create a thread"}
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4 pt-0">
          <MessageBox message={initialMessage} inThread />
          <hr className="my-4" />
          {thread?.messages?.map((message, index) => (
            <MessageBox
              chainMessages={
                index > 0 &&
                thread.messages[index - 1].sender.id === message.sender.id
              }
              key={message.id}
              message={message}
              inThread
            />
          ))}
        </div>

        <ChatInputForm
          className="py-6 pl-20 pr-12 w-full inline-flex"
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
}

export default ThreadWindow;
