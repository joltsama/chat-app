"use client";

import clsx from "clsx";
import { useState } from "react";
import { IChat, IMessage } from "@/schemas";
import MessageBox from "./MessageBox";
import ThreadWindow from "./ThreadWindow";
import MessageInput from "./MessageInput";
import { LuSendHorizonal } from "react-icons/lu";
import Header from "./Header";

interface ChatWindowProps {
  initialChat: IChat & { messages: IMessage[] };
}

function ChatWindow({ initialChat }: ChatWindowProps) {
  const userId = "user1";
  console.log("initialChat", initialChat);

  const [showThread, setShowThread] = useState(false);
  const [threadParentMessage, setThreadParentMessage] = useState<IMessage>();
  const [activeThreadId, setActiveThreadId] = useState("");
  const [activeChat, setActiveChat] = useState<
    IChat & { messages: IMessage[] }
  >(initialChat);

  const handleThreadToggle = (
    value: boolean,
    message: IMessage | undefined,
    threadId: string = ""
  ) => {
    setThreadParentMessage(message);
    setActiveThreadId(threadId);
    setShowThread(value);
  };

  const onSubmit = (e: any) => {
    const data = new FormData(e.target);
    e.target.reset();
    e.preventDefault();
    const messageBody: string = data.get("message")?.toString() || "";
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
        </div>

        {/* Message Input and Send Button  */}
        <div>
          <form className="p-4 pl-20 w-full inline-flex" onSubmit={onSubmit}>
            <MessageInput id="mainMessageInput" />
            <button
              type="submit"
              className="dark:bg-stone-700 dark:text-white w-10 rounded-md text-center px-3"
            >
              <LuSendHorizonal size="1rem" />
            </button>
          </form>
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
