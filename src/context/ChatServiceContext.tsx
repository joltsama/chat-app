"use client;";

import React, { createContext, useState } from "react";

export const ChatServiceContext = createContext({});

interface ChatServiceProviderProps {
  children: React.ReactNode;
}
const ChatServiceProvider = ({ children }: ChatServiceProviderProps) => {
  const [chats, setChats] = useState([]);

  return (
    <ChatServiceContext.Provider
      value={{
        chats,
        setChats,
      }}
    >
      {children}
    </ChatServiceContext.Provider>
  );
};

export default ChatServiceProvider;
