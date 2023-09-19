import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

export default function Home() {
  return (
    <div className="pt-60 text-center w-full">
      <div className="text-7xl text-cyan-500">Chat App</div>
      <Link
        className="
          px-4 
          py-2 
          border-2
          border-orange-200 
          rounded-md 
          text-stone-900 
          mt-8 
          inline-flex 
          items-center
          hover:bg-orange-200
          transition
        "
        href="/chats/chat1"
      >
        Start Chatting <BsArrowRightShort size={24} />
      </Link>
    </div>
  );
}
