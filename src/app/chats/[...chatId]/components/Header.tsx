import useCurrentUser from "@/app/hooks/useCurrentUser";
import useOtherUsers from "@/app/hooks/useOtherUsers";
import { IChat } from "@/schemas";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import Avatar from "../../../components/Avatar";

interface HeaderProps {
  chat: IChat;
}

function Header({ chat }: HeaderProps) {
  const { title, users, isGroup } = chat;

  const user = useCurrentUser();
  const otherUser = useOtherUsers(user, users);

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
