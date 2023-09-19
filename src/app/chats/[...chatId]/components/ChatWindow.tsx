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
  const bottomRef = useRef<HTMLDivElement>(null);

  const [showThread, setShowThread] = useState(false);
  const [threadParentMessage, setThreadParentMessage] = useState<IMessage>();
  const [activeThreadId, setActiveThreadId] = useState("");
  const [activeChat, setActiveChat] = useState<
    IChat & { messages: IMessage[] }
  >(initialChat);

  useEffect(() => {
    // scroll to bottom on view initiation
    bottomRef.current?.scrollIntoView();
  }, []);

  const handleThreadToggle = (
    value: boolean,
    message: IMessage,
    threadId: string = ""
  ) => {
    setThreadParentMessage(message);
    setActiveThreadId(threadId);
    setShowThread(value);
  };

  const onSubmit = (data: { message: string }) => {
    // store messages locally
    const messageBody: string = data.message;
    setActiveChat((prev) => {
      const previousMessages = [
        ...prev?.messages!.slice(0, prev?.messages!.length),
      ];
      previousMessages.push({
        // assign a custom local id
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

    // scroll to bottom
    bottomRef?.current?.scrollIntoView();
  };

  // Temporary solution to mark messages which have threads
  const setThreadOnMessage = (message: IMessage) => {
    setActiveChat((prev) => {
      const previousMessages = [
        ...prev?.messages!.slice(0, prev?.messages!.length),
      ];
      const msgToUpdateIndex = previousMessages.findIndex(
        (msg) => msg.id === message.id
      );

      previousMessages[msgToUpdateIndex].thread = activeChat.id + message.id;
      return {
        ...prev!,
        messages: previousMessages,
      };
    });
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
              key={message.id}
              message={message}
              onReply={handleThreadToggle}
              sameSender={
                index > 0 &&
                message.sender.id === activeChat.messages[index - 1].sender.id
              }
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
            setThreadOnMessage={setThreadOnMessage}
          />
        </div>
      )}
    </div>
  );
}

export default ChatWindow;
