"use client";

import getThread from "@/actions/getThread";
import { IMessage, IThread } from "@/schemas";
import { useEffect, useRef, useState } from "react";
import ChatInputForm from "./ChatInputForm";
import MessageBox from "./MessageBox";
import { RxCross2 } from "react-icons/rx";

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
  const [windowState, setWindowState] = useState<"CREATING" | "VIEWING">(
    "VIEWING"
  );

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("threadId", threadId);
    const fetchMessages = async () => {
      const threadDetails: FullThread = await getThread(threadId!);
      console.log("threadDetails", threadDetails);
      setThread(threadDetails);
    };

    if (threadId) {
      fetchMessages();
    } else {
      setThread({
        id: "",
        messages: [],
        beginningMessageId: initialMessage.id,
        createdAt: new Date(),
      });
    }

    bottomRef.current?.scrollIntoView();
  }, [threadId, initialMessage.id]);

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

    bottomRef.current?.scrollIntoView();
  };

  return (
    <div className="border-l h-full">
      <div className="h-full flex flex-col">
        {/* Heading */}
        <div className="inline-flex items-center my-4 px-4 py-2">
          <span className="text-lg font-medium ">
            {threadId ? "Thread" : "Create a thread"}
          </span>
          <button
            className="ml-auto text-2xl rounded-full p-2 hover:bg-stone-200"
            onClick={onClose}
          >
            <RxCross2 size={18} />
          </button>
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
          <div className="pt-8" ref={bottomRef} />
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
