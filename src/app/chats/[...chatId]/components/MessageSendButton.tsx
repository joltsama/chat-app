import React from "react";
import { LuSendHorizonal } from "react-icons/lu";

function MessageSendButton() {
  return (
    <button
      type="submit"
      className="
      rounded-r-md
      text-center
      px-3 
      dark:bg-stone-700
      dark:text-white w-10
      border-stone-600
      hover:bg-stone-900
      transition
      "
    >
      <LuSendHorizonal size={16} />
    </button>
  );
}

export default MessageSendButton;
