import React from "react";
import UsersListWindow from "./components/UsersListWindow";
import getAllChats from "@/actions/getAllChats";

async function ChatLayout({ children }: { children: React.ReactNode }) {
  const userChats = await getAllChats();

  return (
    <div className="h-full">
      <div className="fixed left-0 w-80">
        <UsersListWindow chats={userChats} />
      </div>
      <div className="pl-80 h-full">{children}</div>
    </div>
  );
}

export default ChatLayout;
