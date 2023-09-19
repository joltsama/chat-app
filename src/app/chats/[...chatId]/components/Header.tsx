import { IChat, IUser } from "@/schemas";
import React from "react";
import Avatar from "../../../components/Avatar";

interface HeaderProps {
  chat: IChat;
}

const getOtherUsers = (me: IUser, users: IUser[]): IUser[] => {
  const otherUsers = users.filter((user) => user.id !== me.id);
  return otherUsers;
};

function Header({ chat }: HeaderProps) {
  const user: IUser = {
    id: "user1",
    name: "",
  };
  const { id, title, users, description, isGroup } = chat;
  // @ts-ignore
  const otherUser = getOtherUsers(user, users);
  return (
    <div className="my-4 px-4 inline-flex items-center w-full">
      <Avatar name={otherUser[0].name} image={otherUser[0].image} />
      <div className="text-xl font-semibold">
        {isGroup ? (
          <div className="">{title}</div>
        ) : (
          <span className="text-stone-900">{otherUser[0].name} </span>
        )}
      </div>
    </div>
  );
}

export default Header;
