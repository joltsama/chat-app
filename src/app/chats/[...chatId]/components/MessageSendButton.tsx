import React from "react";
import { LuSendHorizonal } from "react-icons/lu";

function MessageSendButton() {
  return (
    <button
      type="submit"
      className="
        rounded-r-md
        text-center
        px-2 
        w-10
        border
        border-l-0
        text-black
        bg-orange-50
        border-stone-300
        hover:bg-orange-100
        transition
      "
    >
      <LuSendHorizonal size={20} />
    </button>
  );
}

export default MessageSendButton;
