"use client";

import { IChat, IMessage } from "@/schemas";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import ChatInputForm from "./ChatInputForm";
import Header from "./Header";
import MessageBox from "./MessageBox";
import ThreadWindow from "./ThreadWindow";

interface ChatWindowProps {
  initialChat: IChat & { messages: IMessage[] };
}

function ChatWindow({ initialChat }: ChatWindowProps) {
  const userId = "user1";

  const bottomRef = useRef<HTMLDivElement>(null);
  const [showThread, setShowThread] = useState(false);
  const [threadParentMessage, setThreadParentMessage] = useState<IMessage>();
  const [activeThreadId, setActiveThreadId] = useState("");
  const [activeChat, setActiveChat] = useState<
    IChat & { messages: IMessage[] }
  >(initialChat);

  useEffect(() => {
    bottomRef.current?.scrollIntoView();
  }, []);

  const handleThreadToggle = (
    value: boolean,
    message: IMessage | undefined,
    threadId: string = ""
  ) => {
    setThreadParentMessage(message);
    setActiveThreadId(threadId);
    setShowThread(value);
  };

  const onSubmit = (data: { message: string }) => {
    const messageBody: string = data.message;
    setActiveChat((prev) => {
      const previousMessages = [...prev?.messages!];
      previousMessages.push({
        id: `message1.1.${previousMessages.length + 1}`,
        seenBy: [],
        body: messageBody,
        createdAt: new Date(),
        chat: "chat1",
        thread: "",
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

    bottomRef?.current?.scrollIntoView();
  };

  return (
    <div className="flex flex-row h-full">
      <div
        className={clsx(
          "flex flex-col h-full",
          showThread ? "w-8/12" : "w-full"
        )}
      >
        {/* Header */}
        <div className="border-b">
          <Header chat={activeChat} />
        </div>

        {/* Message Box Container */}
        <div className="p-4 flex-1 overflow-y-auto">
          {activeChat.messages.map((message, index) => (
            <MessageBox
              chainMessages={
                index > 0 &&
                activeChat.messages[index - 1].sender.id === message.sender.id
              }
              message={message}
              key={message.id}
              onReply={handleThreadToggle}
            />
          ))}
          <div className="pt-8" ref={bottomRef} />
        </div>

        {/* Message Input and Send Button  */}
        <div>
          <ChatInputForm
            className="py-6 pl-20 pr-12 w-full inline-flex"
            onSubmit={onSubmit}
          />
        </div>
      </div>
      {showThread && (
        <div className="w-4/12">
          <ThreadWindow
            onClose={() => setShowThread(false)}
            threadId={activeThreadId}
            initialMessage={threadParentMessage!}
          />
        </div>
      )}
    </div>
  );
}

export default ChatWindow;
