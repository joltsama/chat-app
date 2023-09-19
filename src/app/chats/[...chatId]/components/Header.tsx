import { IChat, IUser } from "@/schemas";
import { IoIosCall } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
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
      <Avatar
        isGroup={isGroup}
        name={otherUser[0].name}
        image={otherUser[0].image}
      />
      <div className="text-xl font-semibold">
        {isGroup ? (
          <div className="">{title}</div>
        ) : (
          <div className="text-stone-900">{otherUser[0].name}</div>
        )}
      </div>
      <button className="hover:bg-stone-200 p-2 rounded-full ml-auto text-stone-900 transition">
        <IoIosCall size={20} />
      </button>
      <button className="hover:bg-stone-200 p-2 rounded-full ml-2 text-stone-900 transition">
        <BsThreeDotsVertical size={20} />
      </button>
    </div>
  );
}

export default Header;
